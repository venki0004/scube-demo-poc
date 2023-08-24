function getOtherTypeIcon(type: number) {
    let icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/info.svg`;

    switch (type) {
        case 1:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/education.svg`
            break;
        case 2:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/experience.svg`
            break;
        case 3:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/hobbies.svg`
            break;
        case 4:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/info.svg`
            break;
        default:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/info.svg`;
            break;
    }
    return icon;
}

function getOtherTypeClass(type: number) {
    let icon = `tile-info`;

    switch (type) {
        case 1:
            icon = `tile-education `
            break;
        case 2:
            icon = `tile-experience`
            break;
        case 3:
            icon = `tile-hobbies`
            break;
        case 4:
            icon = `tile-info`
            break;
        default:
            icon = `tile-info`;
            break;
    }
    return icon;
}

function getMessengerTypeIcon(type: number) {
    let icon = ``;

    switch (type) {
        case 20:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/whatsapp.svg`
            break;
        case 21:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/messanger.svg`
            break;
        default:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/custom-link.svg`
            break;
    }
    return icon;
}
function getMessengerTypeClass(type: number) {
    let className = ``;

    switch (type) {
        case 20:
            className = `tile-whatsapp`
            break;
        case 21:
            className = `tile-messenger`
            break;
        default:
            className = `tile-custom`
            break;
    }
    return className;
}

function getWebsiteTypeIcon(type: number) {
    let icon = ``;

    switch (type) {
        case 21:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/drive.svg`
            break;
        case 22:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/document.svg`
            break;
        default:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/cloud.svg`
            break;
    }
    return icon;
}
function getWebsiteTypeClass(type: number) {
    let className = `tile-custom`;

    switch (type) {
        case 21:
            className = `tile-drive `
            break;
        case 22:
            className = `tile-document`
            break;
        default:
            className = `tile-cloud`
            break;
    }
    return className;
}


function getPaymentTypeIcon(type: number) {
    let icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/gpay.svg`;

    switch (type) {
        case 1:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/gpay.svg`
            break;
        case 2:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/paypal.svg`
            break;
        case 3:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/paytm.svg`
            break;
        default:
            break;
    }
    return icon;
}
function getPaymentClass(type: number) {
    let className = `tile-gpay`;

    switch (type) {
        case 1:
            className = `tile-gpay`
            break;
        case 2:
            className = `tile-paypal`
            break;
        case 3:
            className = `tile-paytm`
            break;
        default:
            break;
    }
    return className;
}


function getSocialTypeIcon(type: number) {
    let icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/skype.svg`;

    switch (type) {
        case 1:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/skype.svg`
            break;
        case 2:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/hangouts.svg`
            break;
        case 3:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/twitter.svg`
            break;
        case 4:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/linkedin.svg`
            break;
        case 5:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/facebook.svg`
            break;
        case 6:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/instagram.svg`
            break;
        default:
            icon = `https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/custom-link.svg`
            break;
    }
    return icon;
}
function getSocialTypeClass(type: number) {
    let className = ``;

    switch (type) {
        case 1:
            className = `tile-skype`
            break;
        case 2:
            className = `tile-hangout`
            break;
        case 3:
            className = `tile-twitter`
            break;
        case 4:
            className = `tile-linkedin`
            break;
        case 5:
            className = `tile-facebook`
            break;
        case 6:
            className = `tile-instagram`
            break;
        default:
            className = `tile-custom`
            break;
    }
    return className;
}

function getSocialLink(type: number, value: string) {
    const segments = value.split("/");
    const username = segments[segments.length - 1];
    let link = ``
    switch (type) {
        case 1:
        case 2:
            link = !value.startsWith("https") && !value.startsWith("http") ? `https://${value}` : value;
            break;
        case 3:
            link = `https://twitter.com/${username}`
            break;
        case 4:
            link = `${value.includes('company') ? value : "https://linkedin.com/in/" + username}`
            break;
        case 5:
            link = `https://facebook.com/${username}`
            break;
        case 6:
            link = `https://instagram.com/${username}`
            break;
        default:
            link = !value.startsWith("https") && !value.startsWith("http") ? `https://${value}` : value;
            break;
    }
    return link
}

function getMessengerLink(type: number, value: string) {
    const segments = value.split("/");
    const username = segments[segments.length - 1];
    let link = ``
    switch (type) {
        case 21:
            link = `https://m.me/${username}`
            break;
        case 20:
            link = `https://wa.me/${username}?text=Hi`
            break;
        default:
            link = !value.startsWith("https") && !value.startsWith("http") ? `https://${value}` : value;
            break;
    }
    return link
}
function getAddressClass(type: number) {
    let className = ``
    switch (type) {
        case 1:
            className = `tile-add-home`
            break;
        case 2:
            className = `tile-add-office`
            break;
        case 3:
            className = `tile-add-office`
            break;
        default:
            className = `tile-add-home`
            break;
    }
    return className
}

export function renderHTML(profile: any, response: any, vCardFormattedText: string) {

    let meta = JSON.parse(JSON.stringify(response))
    let data: any = {
        image_url: meta.image_url || '',
        name: meta.displayName,
        job: `${meta.job}`,
        company: meta.company,
        bio: meta.bio.length ? `<p class=" whitespace-break-spaces px-2 pb-4 text-sm text-text_color text-info-title block opacity-100 short-txt">${meta.bio.replace(/\\n/g, '<br>')}</p>` : '',
        address: meta.addresses && meta.addresses.length ?
            meta.addresses.map((x: any) => {
                x['link_type'] = 'INFO';
                x['card_type'] = 'ADDRESS'
                x['icon'] = 'https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/location.svg'
                x['class'] = getAddressClass(x.type);
                x['value'] = `${x.street} 
                              ${x.city} 
                              ${x.region} 
                              ${x.country} 
                              ${x.postcode}`.replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '_');
                return x;
            }) : [],
        others: meta.others && meta.others.length ?
            meta.others.map((x: any) => {
                x['link_type'] = 'INFO';
                x['card_type'] = 'OTHERS';
                x['icon'] = getOtherTypeIcon(x.type)
                x['class'] = getOtherTypeClass(x.type)
                
                x.value = x.value.replace(/(\r\n|\n|\r)/gm, '').replace(/'/g, '__').replace(/"/g, '___').replace(/\s/g, '_');
                return x;
            }) : [],

        payments: meta.payments && meta.payments.length ?
            meta.payments.map((x: any) => {
                x['link_type'] = 'INFO';
                x['card_type'] = 'PAYMENT';
                x['icon'] = getPaymentTypeIcon(x.type)
                x['class'] = getPaymentClass(x.type);
                x.value = x.value.replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '_');
                return x;
            }) : [],
        social: meta.social && meta.social.length ?
            meta.social.map((x: any) => {
                x['link_type'] = x.type == 1 ? 'INFO' : 'LINK';
                x['card_type'] = 'SOCIAL';
                x['url'] = getSocialLink(x.type, x.value)
                x['icon'] = getSocialTypeIcon(x.type)
                x['class'] = getSocialTypeClass(x.type);
                x['label'] = x.type == 1 ? 'Skype' : x.label
                return x;
            }) : [],
        messengers: [
            ...meta.messengers && meta.messengers.phoneNumbers.length ?
                meta.messengers.phoneNumbers.map((x: any, index: number) => {
                    let dialCode = x.phone_dial_code || ''
                    let phoneNumber = `${dialCode ? '+' + dialCode : dialCode} ${dialCode ? String(x.value).replace('+', '') : x.value}`
                    x['link_type'] = 'PHONE';
                    x['card_type'] = 'CONTACT';
                    x['value'] = phoneNumber.replace(/\s/g, ''),
                        x['class'] = 'tile-contact',
                        x['icon'] = 'https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/contact.svg';
                    x['name'] = x.label
                    return x;
                }) : [],
            ...meta.messengers && meta.messengers.emails.length ?
                meta.messengers.emails.map((x: any) => {
                    x['link_type'] = 'EMAIL';
                    x['card_type'] = 'CONTACT';
                    x['value'] = x.value,
                    x['class'] = 'tile-email',
                    x['icon'] = 'https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/email.svg';
                    x['name'] = x.label
                    return x;
                }) : [],
            ...meta.messengers && meta.messengers.others.length ?
                meta.messengers.others.map((x: any, index: number) => {
                    x['link_type'] = 'LINK';
                    x['card_type'] = 'CONTACT';
                    x['value'] = !x.value.startsWith("https") && !x.value.startsWith("http") ? `https://${x.value}` : x.value;
                    x['icon'] = getMessengerTypeIcon(x.type);
                    x['class'] = getMessengerTypeClass(x.type);
                    x['name'] = x.label
                    x['url'] = getMessengerLink(x.type, x.value);
                    return x;
                }) : [],
        ],
        websites: [
            ...meta.websites && meta.websites.website.length ?
                meta.websites.website.map((x: any, index: number) => {
                    x['link_type'] = 'LINK';
                    x['card_type'] = 'WEBSITE';
                    x['value'] = !x.value.startsWith("https") && !x.value.startsWith("http") ? `https://${x.value}` : x.value;
                    x['class'] = 'tile-website',
                    x['icon'] = 'https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/website.svg';
                    x['name'] = meta.websites.website.length > 1 ? 'Website' + (index + 1) : 'Website';
                    return x;
                }) : [],
            ...meta.websites && meta.websites.others.length ?
                meta.websites.others.map((x: any, index: number) => {
                    x['link_type'] = 'LINK';
                    x['card_type'] = 'WEBSITE';
                    x['value'] = !x.value.startsWith("https") && !x.value.startsWith("http") ? `https://${x.value}` : x.value;
                    x['icon'] = getWebsiteTypeIcon(x.type);
                    x['class'] = getWebsiteTypeClass(x.type);
                    x['name'] = x.label
                    x['link'] = !x.value.startsWith("https") && !x.value.startsWith("http") ? `https://${x.value}` : x.value;
                    return x;
                }) : [],
        ]
    }

    if (meta.services) {
        data.others.push({
            link_type: 'INFO',
            card_type: 'OTHERS',
            label: 'Services',
            icon: getOtherTypeIcon(-1),
            class: getOtherTypeClass(-1),
            value: meta.services.replace(/(\r\n|\n|\r)/gm, '').replace(/'/g, '__').replace(/"/g, '___').replace(/\s/g, '_')
        })
    }
    let sections = [
        {
            title: 'Contact Details',
            sub_title: 'Click to download contact, email id, etc.',
            key: 'messengers',
            class: 'custom-card-contact',
        },
        {
            title: 'Social Media',
            sub_title: 'Click the icons to go to social media profiles.',
            key: 'social',
            class: 'custom-card-social',
        },
        {
            title: 'Address & location',
            sub_title: 'Click on the icons and access the location',
            key: 'address',
            class: 'custom-card-address',
        },
        {
            title: 'Website & Links',
            sub_title: 'Click to view documents or webpages and much more',
            key: 'websites',
            class: 'custom-card-website',
        },
        {
            title: 'Payment',
            sub_title: 'Get the payment UPI/number',
            key: 'payments',
            class: 'custom-card-payment',
        },
        {
            title: 'Other Information ',
            sub_title: 'Click on the icons to get more informtaion',
            key: 'others',
            class: 'custom-card-tile',
        }
    ]
    let html = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://api.fontshare.com/css?f[]=author@400,700&display=swap" rel="stylesheet">
        <title>SCUBE PROFILE</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/ScrollTrigger.min.js"></script>
        <style type="text/css">
            html,
            body {
                margin: 0;
                padding: 0;
            }
    
            .sec-mt {
                margin-top: 48px;
            }
    
            .sticky,.cus-sticky {
                height: fit-content;
                position: sticky;
                position: -webkit-sticky;
                z-index:50;
            }
    
            #one,#success_page {
                top: 0;
                height: fit-content;
                -webkit-transition: height 1s ease;
                transition: height 1s ease;
            }
    
            .container {
                @apply max-w-7xl mx-auto px-6 md: px-12 xl:px-6;
            }
    
            body {
                font-family: 'Author', sans-serif;
            }
    
            .card-tile {
                border-radius: 12.492px;
                background: #F8F8F8;
                box-shadow: 0px 2.4009687900543213px 6.0024213790893555px 0px rgba(0, 0, 0, 0.15);
            }

            .box {
                width: 75px;
                height: 75px;
                margin: auto;
                box-shadow: 0px 2.114285707473755px 5.285714149475098px 1px rgba(0, 0, 0, 0.15);
                -webkit-box-shadow: 0px 2.114285707473755px 5.285714149475098px 1px rgba(0, 0, 0, 0.15);
            }
    
            .box span {
                font-size: 12px;
            }
    
    
            .share-form input {
                width: 100%;
                background: #F4F6F7;
                border: 1px solid #F3F3F3;
                border-radius: 15px;
            }
    
            .sub-title {
                color: rgba(0, 0, 0, 0.45);
            }

            .play-store{
                background: #EBF2CA;
                box-shadow: 0px 2px 4px rgba(183, 187, 162, 0.4);
            }
            .apk-icon {
                padding: 1px 6px;
                gap: 6px;
                border-radius: 11px;
            }
            .share-form-sec {
                width: 90% !important;
                margin: auto;
            }
            .custom-card {
            background: #FFFFFF;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(12.5px);
            border-radius: 12px;
        }
       
        .custom-card-1 {
            background: linear-gradient(308.44deg, #1C1E22 19.85%, #454950 83.97%);
            border: 3px solid #4A4A4A;
            border-radius: 12px;
        }
        .download-btn {
            border-radius: 6px;
            background: linear-gradient(145deg, #ED5728 0%, #F8772F 100%);
        }
        .share-btn{
            color: #F7742F;
            text-decoration-line: underline;
        }
        .share-btn-submit {
            border-radius: 24px;
            background: linear-gradient(145deg, #ED5728 0%, #F8772F 100%);
        }
        .custom-card-download {
            background: linear-gradient(326.93deg, #2A303B 9.44%, #4B5662 105.59%);
            border: 3px solid rgba(28, 31, 35, 0.3);
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(12.5px);
            border-radius: 12px;
        }
        .card-sub-title{
            position: relative;
            color:#606367;
            z-index:9;
        }
        .card-sub-title:before {
            position: absolute;
            content: "";
            height: 3px;
            width: 18%;
            bottom:-8px;
            left:0px;
            border-bottom:4px solid;
            border-radius:2px;
            margin:auto;
            right:0;
            }
         .tile-contact{
            border-radius: 16px;
            background: linear-gradient(181deg, #22B93A 0%, #CDF0D0 100%);
         }
         .tile-email{
            border-radius: 16px;
            background: linear-gradient(208deg, #288ED9 0%, #D4F1FB 100%), #FFF;
         }
         .tile-whatsapp{
            border-radius: 16px;
            background: linear-gradient(211deg, #00C85C 0%, #C9F9D3 100%), #FFF;
         }
         .tile-messenger{
            border-radius: 16px;
            background: linear-gradient(195deg, #5F1BB7 0%, #DAE2F8 100%), #FFF;
         }
         .tile-gpay{
            border-radius: 16px;
            background: linear-gradient(183deg, #2DA94F 0%, #CDF0D0 100%), #FFF;
         }
         .tile-paypal{
            border-radius: 16px;
            background: linear-gradient(210deg, #03A9F4 0%, #C5F6FF 100%), #FFF;
         }
         .tile-paytm{
            border-radius: 16px;
            background: linear-gradient(210deg, #02B9EF 0%, #C6F1FF 100%), #FFF;
         }
         .tile-website{
            border-radius: 16px;
            background: linear-gradient(182deg, #24B1D1 0%, #B9F4FF 100%), #FFF;
         }
         .tile-drive{
            border-radius: 16px;
            background: linear-gradient(182deg, #3C7FD8 0%, #DBF2FF 100%), #FFF;
         }
         .tile-document{
            border-radius: 16px;
            background: linear-gradient(208deg, #28BEF6 0%, #C6F1FF 100%), #FFF;
         }
         .tile-cloud{
            border-radius: 16px;
            background: linear-gradient(181deg, #1086C9 0%, #C6F1FF 100%), #FFF;
         }
         .tile-custom{
            border-radius: 16px;
            background: linear-gradient(199deg, #F1F1F1 0%, #FFF 100%), #FFF;
         }
         .tile-education{
            border-radius: 16px;
            background: linear-gradient(184deg, #55B943 0%, #CDF0D0 100%);
         }
         .tile-experience{
            border-radius: 16px;
            background: linear-gradient(211deg, #CDE84E 0%, #CDF0D0 100%);
         }
         .tile-hobbies{
            border-radius: 16px;
            background: linear-gradient(183deg, #16CABF 0%, #B9EBE8 100%), #FFF;
         }
         .tile-info{
            border-radius: 16px;
            background: linear-gradient(183deg, #1D3A89 0%, #DAE2F8 100%), #FFF;
         }
         .tile-add-home{
            border-radius: 16px;
            background: linear-gradient(189deg, #D91817 1.66%, #FAD6CE 100%), #FFF;
         }
         .tile-add-office{
            border-radius: 16px;
            background: linear-gradient(181deg, #D94617 1.66%, #FAD6CE 100%);
         }
         .tile-facebook{
            border-radius: 16px;
            background: linear-gradient(186deg, #1E89F7 0%, #D0F5FC 100%), #FFF;
         }
         .tile-linkedin{
            border-radius: 16px;
            background: linear-gradient(215deg, #0A66C2 0%, #DDFFFD 100%), #FFF;
         }
         .tile-skype{
            border-radius: 16px;
            background: linear-gradient(215deg, #39A4DD 0%, #CFF8FF 100%), #FFF;
         }
         .tile-instagram{
            border-radius: 16px;
            background: linear-gradient(179deg, #EA3577 0%, #FFDBE5 100%), #FFF;
         }
         .tile-hangout{
            border-radius: 16px;
            background: linear-gradient(211deg, #22B93A 0%, #CDF0D0 100%);
         }
         .tile-twitter{
            border-radius: 16px;
            background: linear-gradient(180deg, #38A4DD 0%, #D0F5FC 100%), #FFF;
         }
         .profile-img{
            border-radius: 118px;
            background: #FFF;
            box-shadow: 0px 3.2068965435028076px 20.04310417175293px 0px rgba(0, 0, 0, 0.25);
         }
         .profile-img img{
            margin: auto;
            position: absolute;
            top: -17px;
            left: 0;
            right:0;
         }
         .line {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #F8F8F8;
            padding: 0;
          }
          .tile-sec{
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
          }
          .tile-box{
            flex: 0 0 33.333333%;
          }

          .card-website{
            background: #C7E8EE;
            box-shadow: 0px 2.11429px 5.28571px rgba(0, 0, 0, 0.15);
        }

        </style>
        <script>
            tailwind.config = {
                content: ['./src/**/*.{js,jsx,ts,tsx}'],
                theme: {
                    extend: {
                        opacity: {
                            45: '0.45',
                        },
                        borderOpacity: {
                            65: '0.65',
                        },
                        fontFamily: {
                            UrbanistRegular: ['Urbanist, sans-serif'],
                        },
                        colors: ({ colors }) => ({
                            inherit: colors.inherit,
                            current: colors.current,
                            transparent: colors.transparent,
                            primary: "#CAEFD7",
                            secondary: "#ABC9E9",
                            info: "#F0E8C9",
                            black: colors.black,
                            white: colors.white,
                            slate: colors.slate,
                            btn_left: '#92C0ED',
                            btn_right: '#77E1E1',
                            text_color: "#939FA7",
                            text_black: "#153750",
                            gray: {
                                50: "#FAFAFC",
                                100: "#E9E9EC",
                                200: "#C6C8CD",
                                300: "#ACAEB6",
                                400: "#92959F",
                                500: "#777C87",
                                600: "#5D6370",
                                700: "#434959",
                                800: "#293041",
                                900: "#0f172a",
                            },
                            zinc: colors.zinc,
                            neutral: colors.neutral,
                            stone: colors.stone,
                            red: colors.red,
                            orange: colors.orange,
                            amber: colors.amber,
                            yellow: colors.yellow,
                            lime: colors.lime,
                            green: colors.green,
                            emerald: colors.emerald,
                            teal: colors.teal,
                            cyan: colors.cyan,
                            sky: colors.sky,
                            blue: colors.blue,
                            indigo: colors.indigo,
                            violet: colors.violet,
                            purple: colors.purple,
                            fuchsia: colors.fuchsia,
                            pink: colors.pink,
                            rose: colors.rose,
                        }),
                    },
                },
                plugins: [],
            }
        </script>
       
        <script type="text/javascript">
            function toggleModal(modalID) {
                document.getElementById(modalID).classList.toggle("hidden");
                document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
                document.getElementById(modalID).classList.toggle("flex");
                document.getElementById(modalID + "-backdrop").classList.toggle("flex");
                let clsName = document.getElementById('download-sec').className;
                console.log(clsName);
                if(clsName.includes('bg-white')) {
                    document.getElementById('download-sec').classList.add("bg-transparent");
                    document.getElementById('download-sec').classList.remove("bg-white");
                    document.getElementById('verticalLine').classList.remove("line");
                    
                } else {
                    document.getElementById('download-sec').classList.add("bg-white");
                    document.getElementById('download-sec').classList.remove("bg-transparent");
                    document.getElementById('verticalLine').classList.add("line");
                }
            }
            function download() {
                let content = "${encodeURIComponent(vCardFormattedText)}";
                window.open("data:text/x-vcard;urlencoded," + content)
                setTimeout(() => {
                let ele = document.getElementById('main_sec');
                if(ele) ele.style.display = 'none';

                let ele1 = document.getElementById ('success_sec')
                if(ele1) ele1.style.display = 'block';

                let e = document.getElementById ('modal-title')
                e.innerText = 'Contact have Been Downloaded Successfully !'
                },100)
            }
            function _base64ToArrayBuffer(base64) {
                var binary_string = window.atob(base64);
                var len = binary_string.length;
                var bytes = new Uint8Array(len);
                for (var i = 0; i < len; i++) {
                    bytes[i] = binary_string.charCodeAt(i);
                }
                return bytes.buffer;
            }
    
            function submitForm() {
                const userId = '${profile.user_id}'
                let x = document.forms["contactForm"];
                let ele = document.getElementById('errorMessage');
                ele.innerText = ''
    
                if (!x.name.value || !x.email.value || !x.phone.value) {
                    ele.innerText = 'Please Select required fields'
                    return
                }
    
                let obj = {
                    name: x.name.value,
                    email: x.email.value,
                    designation: x.designation.value,
                    company: x.company.value,
                    phone: x.phone.value,
                    user_id: userId
                }
    
                const http = new XMLHttpRequest()
                http.open('POST', '/share')
                http.setRequestHeader('Content-type', 'application/json')
                http.send(JSON.stringify(obj)) // Make sure to stringify
                http.onload = function () {
                    // success callback
                    setTimeout(() => {
                        let ele = document.getElementById('main_sec');
                        if(ele) ele.style.display = 'none';
        
                        let ele1 = document.getElementById ('success_sec')
                        if(ele1) ele1.style.display = 'block';
        
                        let e = document.getElementById ('modal-title')
                        e.innerText = 'Your Details Has been Shared Successfully !'
                        },100)
                }
    
            }
            function handleClick(type,value,label) {
                if(type ==='LINK'){
                    window.open(value,'_blank');
                } else if(type ==='PHONE') {
                    document.location.href = 'tel:'+value;
                } else if(type ==='EMAIL') {
                    window.location.href = "mailto:"+value+"?subject=Subject&body=Hi";
                } else if(type ==='INFO') {
                    let ele = document.getElementById('info-title')
                    if(ele){
                        ele.innerText = label.replace(/_/g, ' ').replace(/__/g, "\\'").replace(/___/g, '');
                      let ele2  =  document.getElementById('info-message')
                      if(ele2) ele2.innerText = value.replace(/_/g, ' ');
                    }
                    toggleModal('info-form')
                }
            }

            function copyMessage( ){
                let ele = document.getElementById('info-message')
                var text = ele.innerText;
                navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
                }, function(err) {
                console.error('Async: Could not copy text: ', err);
                });
            }

        </script>
    </head>
    
    <body>
        <main class="main p-4 main_animation" id="main_sec">
            <div class="relative" id="home">
                <div id="one" class="cus-sticky mt-4">
                    <div
                        class="max-w-md m-auto p-6   custom-card-1">
                         <div class='profile-img'>
                         <img class="rounded-full w-24 h-24" src=${data.image_url ? data.image_url
                            : 'https://scube-assets.s3.ap-south-1.amazonaws.com/share/profile.png'}
                           alt="profile picture">
                         </div>
                        <div class="flex items-center justify-center mt-14  space-x-6">
                            <div class="font-medium  text-center">
                                <h1 class="text-white font-bold text-base md:text-2xl">${data.name}</h1>
                                <p class="text-white text-sm ">${data.job}</p>
                                <p class="text-white text-sm">${data.company}</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-md m-auto flex items-center  justify-between px-6 py-6 bg-white" id="download-sec">
                    <button class="download-btn cursor-pointer" onclick="download()">
                        <span class="block text-white text-base px-4 md:px-8 py-3 rounded-full">Download Contact
                        </span>
                    </button>
                    <a class="share-btn cursor-pointer"
                        onclick="toggleModal('modal-id')">
                        <span class="block text-base ">Share your
                            Contact</span>
                    </a>
                </div>
                <hr class=" max-w-md m-auto line pt-2" id="verticalLine" />
                </div>
                `

    if(data.bio) {
        html += `<div class="max-w-md m-auto  p-4  custom-card-bio">
            <div>
                <h6 class="font-bold">Bio : </h6>
                ${data.bio}
            </div>
    </div>`
    }                 
   

    for (let section of sections) {
        if (data[section.key] && data[section.key].length) {
            html += `<div
                                class="max-w-md m-auto p-6 ">
                                <div>
                                    <h1 class="text-2xl card-sub-title text-center ">${section.title}</h1>
                                    <div class="${data[section.key].length == 1 ? 'tile-sec' :'grid grid-cols-3 gap-4'}  pt-8">`

            for (let item of data[section.key]) {
                html += `<div class="flex flex-col items-center  ${data[section.key].length == 1 ? 'tile-box' :''} ">
                <div class="box p-4 cursor-pointer items-center flex justify-center text-center flex-col ${item.class}" onclick=handleClick('${item.link_type}','${item.url ? item.url : item.value}','${item.label?.replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '_').replace('Drive Link', 'Drive')
                        .replace('Cloud Link', 'Cloud')}')>
                                        <img src=${item.icon}>
                                        </div>
                                        <span class="text-[#3B3E41]">${(item.name || item.label)?.replace('Drive Link', 'Drive')
                                        .replace('Cloud Link', 'Cloud')} </span>
                                        </div>
                                        `
            }

            html += `
                                    </div>
                                </div>
                            </div>`
        }
    }

    html += ` <div id="one" class="sticky mt-4">
    <div id="one" class="sticky mt-4">
    <div class="max-w-md m-auto p-4">
        <div class="flex flex-col justify-center items-center">
            <div class="logo pt-4">
                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/logo.svg">
            </div>

            <p class="text-xl text-black">Download the SCUBE app Now !</p>


            <div class="flex justify-between w-full  pt-4">
            <div class="flex card-tile apk-icon px-2 py-1">
            <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank" class="flex gap-2">
                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/app-store.svg">
                <div>
                    <p class="opacity-80 text-sm pt-1">Available on the </p>
                    <h2 class="font-semibold text-sm md:text-base">App Store</h2>
                </div>
              </a>
            </div>
            <div class="flex card-tile apk-icon px-2 py-1">
            <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank" class="flex gap-2">
                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile-v3/play-store.svg">
                <div>
                    <p class="opacity-80 text-sm pt-1">Get it on </p>
                    <h2 class="font-semibold text-sm md:text-base">Google Play</h2>
                </div>
            </a>
            </div>
        </div>
            <p class="pt-8 text-black">Get your scube card today  <strong> <a class="underline" href="https://scube.me" target="_blank">Click here </a> </strong> </p>
        </div>
    </div>
</div>
            </div>
            <div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
                id="modal-id">
                <div class="relative w-auto my-6 mx-auto max-w-3xl">
                    <!--content-->
                    <div
                        class="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none share-form-sec">
                        <!--header-->
                        <div
                            class="flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <div class="flex flex-col">
                               <div class="flex">
                                    <h3 class="text-2xl font-semibold pt-2">
                                    Hi
                                    </h3>

                                    <button class="p-1 ml-auto  float-right" onclick="toggleModal('modal-id')">
                                    <span class=" block outline-none">
                                        <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/close.svg" />
                                    </span>
                                </button>

                               </div>
                                <p class="pt-2 text-sm md:text-base">share your contact safe and secure with <strong>SCUBE App.</strong></p>
                                <p class="text-sm md:text-base">Share your Details to <strong>${profile.displayName}</strong></p>
    
                            </div>
                        </div>
                        <!--body-->
                        <div class="relative p-6 flex-auto">
                            <form onsubmit="return false" name="contactForm" class="share-form">
                                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span
                                        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-12 pl-1 py-1">
                                        <img
                                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/input-name.svg" />
                                    </span>
                                    <input id="name" type="text" name="name" placeholder="Enter your name" required
                                        class="pl-12 pr-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
    
                                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span
                                        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-12 pl-1 py-1">
                                        <img
                                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/input-designation.svg" />
                                    </span>
                                    <input id="designation" type="text" name="designation" placeholder="Enter your Designation"
                                        required
                                        class="pl-12 pr-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
    
                                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span
                                        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-12 pl-1 py-1">
                                        <img
                                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/input-phone.svg" />
                                    </span>
                                    <input id="phone" type="text" name="phone" placeholder="Enter your Contact Number"
                                        required
                                        class="pl-12 pr-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
    
                                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span
                                        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-12 pl-1 py-1">
                                        <img
                                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/input-email.svg" />
                                    </span>
                                    <input id="email" type="email" name="email" placeholder="Enter your Email id" required
                                        class="pl-12 pr-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
    
                                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                    <span
                                        class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-12 pl-1 py-1">
                                        <img
                                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/input-company.svg" />
                                    </span>
                                    <input id="company" type="text" name="company"
                                        placeholder="Company / Business / Organization" required
                                        class="pl-12 pr-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
    
                                <p id="errorMessage" class="text-red"></p>
    
                                <div class="flex items-center justify-center p-3">
                                    <button class="share-btn-submit" onclick="submitForm()">
                                        <span class="block text-white text-base px-8 py-2 rounded-full">Share
                                        </span>
                                    </button>
                                </div>
    
                            </form>
                        </div>
                        <!--footer-->
    
                    </div>
                </div>
            </div>
            <div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
            id="info-form">
            <div class="relative w-auto my-6 mx-auto max-w-3xl">
                <!--content-->
                <div
                    class="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div
                        class="flex items-center justify-between px-5 py-2 rounded-t">
                        <h1 class="text-center w-full pl-8 text-xl font-semibold " id="info-title"></h1>
                        <button class="p-1 ml-auto  float-right" onclick="toggleModal('info-form')">
                            <span class=" block outline-none">
                                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/close.svg" />
                            </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative px-6 py-1 flex-auto  text-center">
                        <p class="w-[200px]" id="info-message"></p>
                    </div>
    
                    <p class="underline text-center w-full flex justify-center py-4 cursor-pointer" onclick="copyMessage()" >Copy</p>
                    <!--footer-->
    
                </div>
            </div>
             </div>

            <div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>
           <div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="info-form-backdrop"></div>
        </main>

        <div class="main p-4 hidden" id="success_sec">
            <div class="relative" id="home">
                <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 ">
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-primary via-info to-secondary ">
                    </div>
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-secondary via-primary to-info">
                    </div>
                </div>
                <div id="success_page" class="sticky mt-4">
                    <div
                        class="max-w-md m-auto p-6 bg-white border border-gray-200 rounded-lg custom-card">
                        <div class="flex flex-col justify-center items-center">
                            <div class="logo">
                                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/logo.svg">
                            </div>
                    
                            <h1 class="font-semibold text-xl py-2 text-center" id='modal-title'></h1>
                    
                            <div class="flex justify-between w-full px-2 pt-4">
                                <div class="flex card-website apk-icon">
                                    <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/app-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Available on the </p>
                                        <h2 class="font-semibold text-sm md:text-base">App Store</h2>
                                    </div>
                                  </a>
                                </div>
                                <div class="flex play-store apk-icon">
                                    <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/play-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Get it on </p>
                                        <h2 class="font-semibold text-sm md:text-base">Google Play</h2>
                                    </div>
                                </a>
                                </div>
                            </div>
                            <p class="pt-8">Download the SCUBE app Now !</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </body>
    
    </html>`

    return html
}

export function renderProfileMissingHTML() {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://api.fontshare.com/css?f[]=author@400,700&display=swap" rel="stylesheet">
        <title></title>
        <style type="text/css">
            html,
            body {
                margin: 0;
                padding: 0;
            }
    
            .sticky {
                height: fit-content;
                position: sticky;
                position: -webkit-sticky;
            }
    
            #one {
                top: 0;
                height: fit-content;
                -webkit-transition: height 1s ease;
                transition: height 1s ease;
            }
    
            .container {
                @apply max-w-7xl mx-auto px-6 md: px-12 xl:px-6;
            }
    
            body {
                font-family: 'Author', sans-serif;
            }
    
            .card-website{
                background: #C7E8EE;
                box-shadow: 0px 2.11429px 5.28571px rgba(0, 0, 0, 0.15);
            }
        
            .card-download-play{
background: #C7E8EE;
            }
    
            .sub-title {
                color: rgba(0, 0, 0, 0.45);
            }
            .play-store{
                background: #EBF2CA;
                box-shadow: 0px 2px 4px rgba(183, 187, 162, 0.4);
            }
            .apk-icon {
                padding: 1px 6px;
                gap: 6px;
                border-radius: 11px;
            }
            .custom-card{
                background: #FFFFFF;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(12.5px);
                /* Note: backdrop-filter has minimal browser support */

                border-radius: 12px;
            }
        </style>

        <script>
            tailwind.config = {
                content: ['./src/**/*.{js,jsx,ts,tsx}'],
                theme: {
                    extend: {
                        opacity: {
                            45: '0.45',
                        },
                        borderOpacity: {
                            65: '0.65',
                        },
                        fontFamily: {
                            UrbanistRegular: ['Urbanist, sans-serif'],
                        },
                        colors: ({ colors }) => ({
                            inherit: colors.inherit,
                            current: colors.current,
                            transparent: colors.transparent,
                            primary: "#CAEFD7",
                            secondary: "#ABC9E9",
                            info: "#F0E8C9",
                            black: colors.black,
                            white: colors.white,
                            slate: colors.slate,
                            btn_left: '#92C0ED',
                            btn_right: '#77E1E1',
                            text_color: "#939FA7",
                            text_black: "#153750",
                            gray: {
                                50: "#FAFAFC",
                                100: "#E9E9EC",
                                200: "#C6C8CD",
                                300: "#ACAEB6",
                                400: "#92959F",
                                500: "#777C87",
                                600: "#5D6370",
                                700: "#434959",
                                800: "#293041",
                                900: "#0f172a",
                            },
                            zinc: colors.zinc,
                            neutral: colors.neutral,
                            stone: colors.stone,
                            red: colors.red,
                            orange: colors.orange,
                            amber: colors.amber,
                            yellow: colors.yellow,
                            lime: colors.lime,
                            green: colors.green,
                            emerald: colors.emerald,
                            teal: colors.teal,
                            cyan: colors.cyan,
                            sky: colors.sky,
                            blue: colors.blue,
                            indigo: colors.indigo,
                            violet: colors.violet,
                            purple: colors.purple,
                            fuchsia: colors.fuchsia,
                            pink: colors.pink,
                            rose: colors.rose,
                        }),
                    },
                },
                plugins: [],
            }
        </script>
    </head>
    
    <body>
        <main class="main p-4">
            <div class="relative" id="home">
                <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 ">
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-primary via-info to-secondary ">
                    </div>
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-secondary via-primary to-info">
                    </div>
                </div>
                <div id="one" class="sticky mt-4">
                    <div
                        class="max-w-md m-auto p-6 bg-white border border-gray-200 rounded-lg custom-card">
                        <div class="flex flex-col justify-center items-center">
                            <div class="logo">
                                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/logo.svg">
                            </div>
                    
                            <h1 class="font-semibold text-2xl py-2">Uh Ooh! sorry!</h1>
                    
                            <p class="sub-title text-center py-4">
                                Profile seems missing. Please update your scube card with your profile 
                            </p>
                            <!--
                            <a href=" https://youtu.be/FbH4cnOdkG8" class="underline"> https://youtu.be/FbH4cnOdkG8</a>
                            -->
    
                            <div class="flex justify-between w-full px-2 pt-4">
                                <div class="flex card-download-play apk-icon">
                                    <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/app-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Available on the </p>
                                        <h2 class="font-semibold text-sm md:text-base">App Store</h2>
                                    </div>
                                  </a>
                                </div>
                                <div class="flex play-store apk-icon">
                                    <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/play-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Get it on </p>
                                        <h2 class="font-semibold text-sm md:text-base">Google Play</h2>
                                    </div>
                                </a>
                                </div>
                            </div>
                            <p class="pt-8">Download the SCUBE app Now !</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
    </body>
    </html>`
}

export function renderProfileInstructionsHTML() {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://api.fontshare.com/css?f[]=author@400,700&display=swap" rel="stylesheet">
        <title></title>
        <style type="text/css">
            html,
            body {
                margin: 0;
                padding: 0;
            }
    
            .sticky {
                height: fit-content;
                position: sticky;
                position: -webkit-sticky;
            }
    
            #one {
                top: 0;
                height: fit-content;
                -webkit-transition: height 1s ease;
                transition: height 1s ease;
            }
    
            .container {
                @apply max-w-7xl mx-auto px-6 md: px-12 xl:px-6;
            }
    
            body {
                font-family: 'Author', sans-serif;
            }
    
            .card-website{
                background: #C7E8EE;
                box-shadow: 0px 2.11429px 5.28571px rgba(0, 0, 0, 0.15);
            }
        
    
            .sub-title {
                color: rgba(0, 0, 0, 0.45);
            }
            .play-store{
                background: #EBF2CA;
                box-shadow: 0px 2px 4px rgba(183, 187, 162, 0.4);
            }
            .apk-icon {
                padding: 1px 6px;
                gap: 6px;
                border-radius: 11px;
            }
            .custom-card{
                background: #FFFFFF;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(12.5px);
                border-radius: 12px;
            }
        </style>

        <script>
            tailwind.config = {
                content: ['./src/**/*.{js,jsx,ts,tsx}'],
                theme: {
                    extend: {
                        opacity: {
                            45: '0.45',
                        },
                        borderOpacity: {
                            65: '0.65',
                        },
                        fontFamily: {
                            UrbanistRegular: ['Urbanist, sans-serif'],
                        },
                        colors: ({ colors }) => ({
                            inherit: colors.inherit,
                            current: colors.current,
                            transparent: colors.transparent,
                            primary: "#CAEFD7",
                            secondary: "#ABC9E9",
                            info: "#F0E8C9",
                            black: colors.black,
                            white: colors.white,
                            slate: colors.slate,
                            btn_left: '#92C0ED',
                            btn_right: '#77E1E1',
                            text_color: "#939FA7",
                            text_black: "#153750",
                            gray: {
                                50: "#FAFAFC",
                                100: "#E9E9EC",
                                200: "#C6C8CD",
                                300: "#ACAEB6",
                                400: "#92959F",
                                500: "#777C87",
                                600: "#5D6370",
                                700: "#434959",
                                800: "#293041",
                                900: "#0f172a",
                            },
                            zinc: colors.zinc,
                            neutral: colors.neutral,
                            stone: colors.stone,
                            red: colors.red,
                            orange: colors.orange,
                            amber: colors.amber,
                            yellow: colors.yellow,
                            lime: colors.lime,
                            green: colors.green,
                            emerald: colors.emerald,
                            teal: colors.teal,
                            cyan: colors.cyan,
                            sky: colors.sky,
                            blue: colors.blue,
                            indigo: colors.indigo,
                            violet: colors.violet,
                            purple: colors.purple,
                            fuchsia: colors.fuchsia,
                            pink: colors.pink,
                            rose: colors.rose,
                        }),
                    },
                },
                plugins: [],
            }
        </script>
    </head>
    
    <body>
        <main class="main p-4">
            <div class="relative" id="home">
                <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 ">
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-primary via-info to-secondary">
                    </div>
                    <div class="blur-[50px] h-screen bg-gradient-to-r from-secondary via-primary to-info ">
                    </div>
                </div>
                <div id="one" class="sticky mt-4">
                    <div
                        class="max-w-md m-auto p-6 bg-white border border-gray-200 rounded-lg custom-card">
                        <div class="flex flex-col justify-center items-center">
                            <div class="logo">
                                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/logo.svg">
                            </div>
                    
                             <p class="text-xl">Welcome to SCUBE!</p>
                            <h1 class="font-semibold text-2xl py-2">Your Order Id [ORDERID]</h1>
                    
                            <p class="sub-title text-center py-4">
                                Click on the link below to know how to 
                                link your QR code with your SCUBE profile 
                            </p>
                            <a href=" https://youtu.be/FbH4cnOdkG8" class="underline"> https://youtu.be/FbH4cnOdkG8</a>
    
                            <div class="flex justify-between w-full px-2 pt-4">
                                <div class="flex card-website apk-icon">
                                    <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/app-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Available on the </p>
                                        <h2 class="font-semibold text-sm md:text-base">App Store</h2>
                                    </div>
                                  </a>
                                </div>
                                <div class="flex play-store apk-icon">
                                    <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank" class="flex gap-2">
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/app-profile/play-store.svg">
                                    <div>
                                        <p class="opacity-80 text-sm pt-1">Get it on </p>
                                        <h2 class="font-semibold text-sm md:text-base">Google Play</h2>
                                    </div>
                                </a>
                                </div>
                            </div>
                            <p class="pt-8">Download the SCUBE app Now !</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
    </body>
    </html>`
}
export async function base64ToNode(buffer: any) {
    return buffer.toString('base64')
}
