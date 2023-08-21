import { renderHTML, renderProfileMissingHTML } from "App/helpers/vCardGeneration";
import vCardJS from '../../vcard';
import Employee from "App/models/Employee";

export default class VcardController {

    public async download({ request, response }) {
        try {
            let card = await Employee.query().where({ qr_id: request.param('id') }).first()
                .then((serialize) => serialize?.toJSON());
            if (!card) {
                let html = renderProfileMissingHTML()
                html = html.replace('Profile seems missing. Please update your Scube card with your profile.', 'Something Went Worng!')
                return response.send(html)
            }



            if (!card.is_active) {
                const html = renderProfileMissingHTML()
                return response.send(html)
            }



            const vCard: any = vCardJS();
            const data = card


            const params = [
                { 'name': 'name', 'assign': 'firstName' },
                { 'name': 'designation', 'assign': 'title' },
                { 'name': 'company', 'assign': 'organization' },
                { 'name': 'prefix', 'assign': 'namePrefix' }
            ];
            params.forEach(item => {
                if (data[item.name] != undefined) {
                    if (Boolean(data[item.name])) {
                        vCard[item.assign] = (data[item.name]).trim();
                    }
                }
            });

            if ((vCard['organization'] && vCard['organization'].length < 1) ||
                !vCard['organization']
            ) {
                vCard['organization'] = data.company || "";
            }

            if (Array.isArray(data.addresses) && data.addresses.length) {
                data.addresses.forEach((address: any) => {
                    let addressType = "";
                    if (address.type == 1) {
                        addressType = "homeAddress";
                    } else if (address.type == 2) {
                        addressType = "workAddress";
                    } else if (address.type == 100) {
                        addressType = "otherAddress";
                    }

                    let addressObj = {
                        label: address.label,
                        street: address.street,
                        city: address.city,
                        stateProvince: address.region,
                        postalCode: address.postcode,
                        countryRegion: address.country
                    }
                    if (addressType.length && vCard[addressType] && !Array.isArray(vCard[addressType])) {
                        vCard[addressType] = [addressObj];
                    } else {
                        vCard[addressType].push(addressObj);
                    }

                });
            }

            if (Array.isArray(data.emails) && data.emails.length) {
                data.emails.forEach((email: any) => {
                    let emailType = "";
                    switch (email.type) {
                        case 1:
                            emailType = "email";
                            break;
                        case 2:
                            emailType = "workEmail";
                            break;
                        default:
                            emailType = "otherEmail";
                            break;

                    }

                    if (emailType != 'otherEmail') {
                        if (!Array.isArray(vCard[emailType])) {
                            vCard[emailType] = [email.value];
                        } else {
                            vCard[emailType].push(email.value);
                        }
                    } else {
                        if (!Array.isArray(vCard.otherEmail)) {
                            vCard.otherEmail = [];
                        }
                        vCard['otherEmail'].push({ value: email.value, label: email.label });
                    }
                });
            }

            if (Array.isArray(data.phones) && data.phones.length) {
                data.phones.forEach((phone: any) => {
                    let phoneType = "";
                    switch (phone.type) {
                        case 1:
                            phoneType = "homePhone";
                            break;
                        case 2:
                            phoneType = "workPhone";
                            break;
                        case 3:
                            phoneType = "cellPhone";
                            break;
                    }

                    let phoneNumber = `${String(phone.value)}`

                    if (phoneType.length) {
                        if (!Array.isArray(vCard[phoneType])) {
                            vCard[phoneType] = [phoneNumber];
                        } else {
                            vCard[phoneType].push(phoneNumber);
                        }
                    } else {
                        if (!Array.isArray(vCard.otherPhone)) {
                            vCard.otherPhone = [];
                        }
                        phone.value = phoneNumber
                        vCard['otherPhone'].push(phone);
                    }
                });
            }

            if (Array.isArray(data.social) && data.social.length) {
                data.social.forEach((social: any) => {
                    const segments = social.value.split("/");
                    const username = segments[segments.length - 1];
                    if (!vCard['url']) {
                        vCard['url'] = [];
                    }
                    switch (social.type) {
                        case 1:
                            vCard.socialUrls['skype'] = social.value;
                            break;
                        case 2:
                            vCard.socialUrls['hangout'] = social.value;
                            break;
                        case 3:
                            vCard['url'].push({ value: "https://twitter.com/" + username, label: "Twitter" });
                            break;
                        case 4:
                            vCard['url'].push({ value: social.value.includes('company') ? social.value : "https://linkedin.com/in/" + username, label: "LinkedIn" });
                            break;
                        case 5:
                            vCard['url'].push({ value: "https://facebook.com/" + username, label: "Facebook" });
                            break;
                        case 6:
                            vCard['url'].push({ value: "https://instagram.com/" + username, label: "Instagram" });
                            break;

                        default:
                            vCard['url'].push({ value: social.value, label: (social.label.trim()).toLowerCase() });
                            break;
                    }
                });
            }

            if (Array.isArray(data.websites) && data.websites.length) {
                data.websites.forEach((website: any) => {
                    if (!vCard['url']) {
                        vCard['url'] = [];
                    }
                    vCard['url'].push({ value: website.value, label: (website.label.trim()).toLowerCase() });
                });
            }

            if (data.bio?.length) {
                vCard.note = "Bio : \n" + data.bio.trim().replace(/(\r\n|\n|\r)/gm, "");
            }

            if (data.services && data.services.length) {
                vCard.note = vCard.note + "\nServices : \n" + data.services.trim().replace(/(\r\n|\n|\r)/gm, "");
            }

            if (data.education && data.education.length) {
                vCard.note = vCard.note + "\Education : \n" + data.education.trim().replace(/(\r\n|\n|\r)/gm, "");
            }
            if (data.experience && data.experience.length) {
                vCard.note = vCard.note + "\Experience : \n" + data.experience.trim().replace(/(\r\n|\n|\r)/gm, "");
            }
            if (data.hobbies && data.hobbies.length) {
                vCard.note = vCard.note + "\Hobbies : \n" + data.hobbies.trim().replace(/(\r\n|\n|\r)/gm, "");
            }
            if (data.info && data.info.length) {
                vCard.note = vCard.note + "\Info : \n" + data.info.trim().replace(/(\r\n|\n|\r)/gm, "");
            }

            let html = renderHTML(data, data, vCard.getFormattedString())
            return response.send(html)

        } catch (exception) {
            console.log(exception)
            let html = renderProfileMissingHTML()
            html = html.replace('Profile seems missing. Please update your Scube card with your profile.', 'Something Went Worng!')
            return response.send(html)
        }
    }

}
