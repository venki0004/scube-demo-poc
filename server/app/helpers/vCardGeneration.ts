
export function renderHTML(profile: any, meta: any, vCardFormattedText: string) {
    let html = `<!DOCTYPE html>
   <html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap" rel="stylesheet">
      <title>Scube App</title>
      <style type="text/css">
      body {
          font-family: 'Lexend', sans-serif;
          background: #1c1e22;
      }
  
      .block-view,
        .success-page {
            background-color: #1c1e22;
            color: #EDEDED;
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid #373535;
        }

        .success-page-contact {
            background-color: #1c1e22;
            color: #EDEDED;
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid #373535;
        }

        .success-page {
            display: none;
        }

        .success-page-contact{
            display: none;
        }

      h4 {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #EDEDED !important;
      }
  
      /*card section*/
      @media(min-width: 300px) and (max-width: 700px) {
          .card_view {
              height: 252px !important;
          }
          .download-btn,.share-btn{
            width: 140px !important;
            height: 42px !important;
          }

      }
  
      @media(min-width: 500px) and (max-width: 1900px) {
          .card_view {
              height: 305px !important;
          }
      }
  
      .card_view {
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/card.svg);
          background-repeat: no-repeat;
          background-size: 100%;
  
          height: 220px;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 9;
      }
  
      .card_after_view:before {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_3.svg);
          height: 45px;
          width: 50px;
          z-index: 0;
          position: absolute;
          top: 38px;
          right: 0px;
          background-repeat: no-repeat;
          background-size: 100%;
      }
  
      .card_after_view:after {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_4.svg);
          height: 71px;
          width: 50px;
          z-index: 0;
          position: absolute;
          /* bottom: -3px; */
          left: 0px;
          background-repeat: no-repeat;
          background-size: 100%;
          top: 87%;
  
      }
  
      .card_view ul {
          list-style: none;
          padding: 0;
      }
  
      .card_view ul li {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          text-align: center;
          color: #EDEDED;
      }
  
      .card_view ul li:nth-child(1) {
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          background: linear-gradient(180deg, #F3D75C 29.17%, #B98929 91.67%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
  
      /*card section*/
      /*Bio content section*/
      .bio-section {
          padding: 16px 0;
      }
  
      .bio-anchor-tag {
          margin-bottom: 25px;
          text-align: center;
      }
  
      .bio-anchor-tag a {
          background: #242426;
          border-radius: 12px;
          cursor: pointer;
          padding: 10px;
          color: #EDEDED !important;
          font-size: 12px;
          margin: 0 17px;
      }
  
      .bio-content p {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          text-align: justify;
  
          color: #B3B9BB;
      }
  
      .bio-content h4 {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          background: linear-gradient(180deg, #63FFEC 0%, #006889 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
  
      /*Bio content section*/
      /*email section*/
      .email-view {
          position: relative;
      }
  
      .email-view:before {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_2.svg);
          height: 106px;
          width: 80px;
          z-index: 0;
          position: absolute;
          top: -117px;
          right: -12px;
          background-repeat: no-repeat;
          background-size: 100%;
          display:none;
      }
  
      .email-view:after {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_3.svg);
          height: 50px;
          width: 50px;
          z-index: 0;
          position: absolute;
          bottom: -25px;
          left: -19px;
          background-repeat: no-repeat;
          background-size: 100%;
      }
  
      .list-view {
          list-style: none;
          padding: 0;
          margin: 28px 10px 0 10px;
          display: flex;
          justify-content: center;
          text-align: center;
          gap:1.6rem;
      }
  
      .list-view li {
        //   padding: 0 10px 0px 20px;
      }
      .social-list li {
          padding: 0 !important;
      }
  
      .list-view p {
          margin: 10px 0 0 0;
          font-size: 12px;
          text-align: center;
          color: #B3B9BB !important;
      }
  
      .list-view li a {
          background: linear-gradient(326.67deg, #474747 -12.07%, #0F0F12 99.84%);
          box-shadow: -8px -6px 24px rgba(255, 255, 255, 0.04), 5px 8px 20px rgba(6, 8, 9, 0.46);
          border-radius: 12px;
          padding: 12px;
      }
  
      /*email section*/
      /*address location*/
      .address-view {
          position: relative;
      }
  
      .address-view:before {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_1.svg);
          height: 170px;
          width: 80px;
          z-index: 0;
          position: absolute;
          top: -79px;
          right: -12px;
          background-repeat: no-repeat;
          background-size: 100%;
          display:none;
      }
  
      /*address location*/
      /*payment view*/
      .payment-view {
          position: relative;
      }
  
      .payment-view:before {
          content: '';
          background-image: url(https://scube-assets.s3.ap-south-1.amazonaws.com/share/element_3.svg);
          height: 50px;
          width: 50px;
          z-index: 0;
          position: absolute;
          top: -11px;
          right: -12px;
          background-repeat: no-repeat;
          background-size: 100%;
      }
  
      /*payment view*/
      .download-view {
          background-color: #0E0E0F;
          border-radius: 24px 24px 0 0;
          border-width: 1px 1px 0 1px;
          border-style: solid;
          border-color: #656565;
          padding: 30px 0;
          color: #fff;
      }
  
      .download-view p {
          font-size: 13px;
          text-align: center;
      }
  
      .actions {
        display: flex;
        justify-content: center;
        margin: auto;
        padding-top: 8px;
        gap: 14px;
        align-items: center;
    }

    .download-btn {
        width: 157px;
        height: 48px;
        font-size: 12px;
        padding: 0.8em 1em;
        border-radius: 10px;
        background: linear-gradient(180deg, #fff578 0%, #b78527 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border:none;
        color: #000;
    }

    .share-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        position: relative;
        gap: 8px;
        padding: 0.8em 1em;
        border-radius: 10px;
        width: 157px;
        height: 42px;
        font-size: 12px;
        background: transparent;
        border:none;
        box-shadow: -1px 0 0 1px rgb(255 220 120/ 75%), -1px -1px 0 1px rgb(255 245 120 /25%),
            -1px 1px 0 1px rgb(255 245 120 /25%), 0 -1px 0 1px rgb(255 245 120 /50%),
            0 1px 0 1px rgb(183 100 39 /50%), 1px -1px 0 1px rgb(183 121 39 /25%),
            1px 1px 0 1px rgb(183 121 39 /25%), 1px 0 0 1px rgb(183 133 39 /75%);
    }
  
    .btn-txt {
        background: linear-gradient(to right, #fff578 0%, #b78527 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

      .bottom-view {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9;
          transform: translateY(83%);
          transition: all 1s ease;
          max-width: 500px;
          margin: 0 auto;
      }
  
      .bottom-view:hover {
          transform: translateY(0%);
      }
      /* SUCCESS */
        .logo {
            text-align: center;
            padding: 70px 0;
        }

        .app-view {
            padding: 0;
            display: flex;
            text-align: center;
            align-items: center;
            margin: 0 1rem;
        }

        .app-view img {
            background: linear-gradient(326.67deg, #474747 -12.07%, #0F0F12 99.84%);
            box-shadow: -8px -6px 24px rgb(255 255 255 / 4%), 5px 8px 20px rgb(6 8 9 / 46%);
            border-radius: 12px;
            padding: 12px;
        }

        .app-content{
            text-decoration: none !important;
            padding-left: 1rem;

        }
        .app-content p:nth-child(1) {
            font-weight: 300;
            font-size: 9px;
            line-height: 11px;
            color: #FFFFFF;
            margin: 0;
            margin-bottom: 0;
        }

        .app-content p:nth-child(2) {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
            margin-bottom: 0;
        }

        .download-view-content p {
            font-weight: 300;
            font-size: 11px;
            line-height: 14px;
            /* identical to box height */
            color: #BF9E68;
            text-align: center;
        }

        .bottom-view.active {
            transform: translateY(0%);
        }

        
    .pop-view {
        background: #0E0E0F;
        opacity: 0.8;
        border-radius: 24px;
        padding: 30px;
        max-width: 500px;
         margin: auto;
    }

    .pop-view p {
        margin: 0;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #EDEDED;
    }

    .pop-view p:nth-child(1) {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;

        color: #EDEDED;
    }

    .custom-group {
        height: 50px;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        margin-bottom: 20px;
    }

    .custom-group input {
        background: transparent;
        border: none;
        color: #EDEDED !important;
    }

    .custom-group input:focus {
        background: transparent;
        outline: none;
        border: none;
        box-shadow: none;
    }


      /* MODEL CSS */
        .modal {
        display: none;
        position: fixed;
        z-index: 99;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgb(25 25 25);
        }

        .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        }

        .close-icon{
            position: absolute;
            top: 22px;
            right: 40px;
        }

        #errorMessage{
            color: red;
            font-size: 14px;
            padding-bottom: 4px;
        }
        .bio-anchor-tag a{
            text-decoration:none !important;
            max-width: 97px;
        }
        .others-sec{
            display: flex;
            margin: auto;
            width: 50%;
        }
      </style>
  </head>
  <body>
    <div class="block-view">
        <!-- card section -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 position-relative">
                        <div class="card_view">
                            <img style="border-radius: 30px;" src=${profile.image ? profile.image : 'https://scube-assets.s3.ap-south-1.amazonaws.com/share/profile.png'} width="60px">
                            <ul>
                                <li>${profile.name}</li>
                                <li>${profile.designation || ''}</li>
                                <li>${meta.company || ''}</li>
                            </ul>
                        </div>
                        <div class="card_after_view"></div>
                    </div>
                </div>
            </div>
        </section>
  `;
    if (meta.bio ||  (meta.others && meta.others.length)) {
        const [edu, exep, skills, hobbies] = meta.others ? meta.others : []
        html += `
    <section class="bio-section">
        <div class="container">
            <div class="row mt-3" >
                <div class="col-lg-12">
                    ${meta.bio ? 
                    `<div class="bio-content">
                    <h4>Bio</h4>
                    <p>${meta.bio}</p>
                    </div>` : ''}
                    ${ meta.others && meta.others.length ?
                `<div class="bio-anchor-tag ${(edu || exep) ? 'others-sec':'d-none'}" >
                         <a class="${(edu) ? 'd-flex':'d-none'}">${edu ? edu.label : ''}</a>
                         <a class="${(exep) ? 'd-flex':'d-none'}">${exep  ?  exep.type === 2 ? 'Experience' : exep.label : ''}</a>
                     </div>
                    <div class="bio-anchor-tag pt-2 ${(skills || hobbies) ? 'others-sec':'d-none'}">
                    <a class="${(skills) ? 'd-flex':'d-none'}">${skills ? skills.label : ''}</a>
                    <a class="${(hobbies) ? 'd-flex':'d-none'}">${hobbies ? hobbies.label : ''}</a>
                    </div>` : ''
            }
                </div>
            </div>
        </div>
    </section>`
    }

    if (meta.phones.filter(x=>x.value).length || meta.emails.filter(x=>x.value).length) {
        html += `<section class="bio-section">
       <div class="container">
           <div class="row">
               <div class="col-lg-12">
                   <div class="email-view">
                       <h4 class="text-center">Phone, Messengers & Emails</h4>
                   </div>
               </div>
           </div>
           <div class="row">
               <div class="col-lg-12">
                   <div>
                       <ul class="list-view">`

        if (meta.phones.filter(x=>x.value).length) {
            html += `<li>
                                <a>
                                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/contact.svg">
                                </a>
                                <p>Contact</p>
                            </li>`
        }
        if (meta.emails.filter(x=>x.value).length) {
            html += `<li>
                                <a>
                                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/Mail_id.svg">
                                </a>
                                <p>Mail ID</p>
                            </li>`
        }

       
        html += ` </ul>
        </div>
    </div>
</div>
</div>
</section>`
    }

    if (meta.social && meta.social.filter(x=>x.value).length) {

        html += ` <section class="bio-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-12">
            <div>
                <h4 class="text-center">Social Media</h4>
                <ul class="list-view social-list" style="gap: 1.6rem;flex-wrap:wrap;">`
        for (let social of meta.social) {
            switch (social.type) {
                case 5:
                    social.label = 'Facebook'
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/facebook.svg`
                    break;
                case 4:
                    social.label = 'Linkedin'
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/linkedin.svg`
                    break;
                case 2:
                    social.label = 'Hangouts'
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/Behance.svg`
                    break;
                case 6:
                    social.label = 'Instagram'
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/instagaram.svg`
                    break;
                case 100:
                    social.label = social.label
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/customlink.svg`
                    break;
                default:
                    social.label = 'Twitter'
                    social['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/ic_add_social_twitter_active.svg`
                    break;
            }
            html += `<li>
                        <a>
                        <img src=${social.img}>
                            </a>
                        <p>${social.label}</p>
                    </li>`
        }
        html += `</ul>
            </div>
        </div>
    </div>
    </div>
</section>`
    }

    if (meta.addresses && meta.addresses.filter(x=>x.city).length) {
        html += `<section class="bio-section">
       <div class="container">
           <div class="row">
               <div class="col-lg-12">
                   <div class="address-view">
                       <h4 class="text-center">Address & Location</h4>
                   </div>
               </div>
           </div>
           <div class="row">
           <div class="col-lg-12">
           <div>
           <ul class="list-view youtube-link">`

        meta.addresses.forEach((element: any) => {
            let name = element.type == 1 ? 'Home' : (element.type == 2 ? 'Work' : element.label)
            html += `<li>
                     <a>
                     <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/address.svg">
                    </a>
                   <p>${name}</p>
                   </li>`
        });

        html += ` </ul>
                </div>
                </div>
                </div>
                </div>
                </section>`

    }

    if (meta.websites && (meta.websites.filter(x=>x.value).length)) {
        html += ` <section class="bio-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div>
                        <h4 class="text-center">Website & Links</h4>
                        <ul class="list-view">`

        for (let _web of meta.websites) {
            html += `<li>
                     <a>
                     <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/website.svg">
                     </a>
                     <p>Website</p>
                     </li>`
        }
        for (let web of meta.websites) {
            switch (web.type) {
                case 21:
                    web['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/google_drive.svg`
                    break;
                case 22:
                    web['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/Documents.svg`
                    break;
                default:
                    web['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/Web_cloud.svg`
                    break;
            }
            html += `<li>
                    <a>
                    <img src=${web.img}>
                    </a>
                    <p>${web.label}</p>
                    </li>`
        }

        html += `</ul>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    }

   
    if  (meta.others && meta.others.length) {
        html += `  <section class="bio-section pt-5">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <div>
                    <h4 class="text-center">Other Information</h4>
                    <ul class="list-view">`
        for (let other of meta.others) {
            switch (other.type) {
                case 1:
                    other.label = `Education`
                    other['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/education.svg`
                    break;
                case 2:
                    other.label = `Experience`
                    other['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/experience.svg`
                    break;
                case 2:
                    other.label = `Hobbies`
                    other['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/hobbies.svg`
                    break;
                default:
                    other.label = `Info`
                    other['img'] = `https://scube-assets.s3.ap-south-1.amazonaws.com/share/information.svg`
                    break;
            }
            html += ` <li>
                            <a>
                           <img src=${other.img}>
                           </a>
                             <p>${other.label}</p>
                        </li>`
        }
        html += `</ul>
                </div>
            </div>
        </div>
        </div>
    </section>`
    }

    html += ` <section class="bottom-view" id="download">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="download-view">
                    <p>Download Contact, To get full Profile information</p>
                    <div class="actions">
                    <button class="download-btn" onclick="download()">
                        Download Contact
                    </button>
                   
                </div>
                </div>
            </div>
    </div>
</section>
</div>

<div class="success-page">
<section>
    <div style="padding: 24px 23px;cursor: pointer;" onclick="back('success-page')">
       < Go Back
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="logo">
                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/scube_logo.svg">
                </div>
                <div class="text-center">
                    <h4>Contact have been Downloaded Sucessfully!</h4>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-6">
                <div class="app-view">
                    <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank">
                        <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/apple_store.svg">
                    </a>
                    <a class="app-content" href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank">
                        <p>Available on the</p>
                        <p>App Store</p>
                    </a>
                </div>

            </div>
            <div class="col-6">
                <div class="app-view">
                    <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank">
                        <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/apple_store.svg">
                    </a>
                    <a class="app-content" href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank">
                        <p>Get it on</p>
                        <p>Google Play</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="download-view-content mt-4">
            <p>Download the SCUBE app</p>
        </div>
    </div>
</section>

</div>

<div class="success-page-contact">
<section>
    <div style="padding: 24px 23px;cursor: pointer;" onclick="back('success-page-contact')">
                < Go Back
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="logo">
                    <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/scube_logo.svg">
                </div>
                <div class="text-center">
                    <h4>Contact Shared Successfully!</h4>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-6">
                <div class="app-view">
                    <a href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank">
                        <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/apple_store.svg">
                    </a>
                    <a class="app-content" href="https://apps.apple.com/in/app/scube-card/id1490239709" target="_blank">
                        <p>Available on the</p>
                        <p>App Store</p>
                    </a>
                </div>

            </div>
            <div class="col-6">
                <div class="app-view">
                    <a href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank">
                        <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/apple_store.svg">
                    </a>
                    <a class="app-content" href="https://play.google.com/store/apps/details?id=com.scube&hl=en_IN" target="_blank">
                        <p>Get it on</p>
                        <p>Google Play</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="download-view-content mt-4">
            <p>Download the SCUBE app</p>
        </div>
    </div>
</section>
</div>


<div id="myModal" class="modal">
<div class="container">
    <div class="row">
        <div class="col-12 ">
            <div class="pop-view position-relative">
                <div>
                    <p>Hi</p>
                    <p>share your contact safe and </p>
                    <p>secure with Scube App</p>
                    <p>Share your Details to ${meta.displayName}</p>
                </div>
                <div class="mt-4">
                <form onsubmit="return false"  name="contactForm">
                <div class="input-group custom-group">
                    <span class="input-group-addon"><img
                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/name.svg"></span>
                    <input id="name" type="text" class="form-control" name="name"
                        placeholder="Enter your name" required maxlength="50">
                </div>
                <div class="input-group custom-group">
                    <span class="input-group-addon"><img
                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/Designation.svg"></span>
                    <input id="designation" type="text" class="form-control" name="designation"
                        placeholder="Enter your Designation" maxlength="50">
                </div>
                <div class="input-group custom-group">
                    <span class="input-group-addon"><img
                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/contact.svg"></span>
                    <input id="phone" type="text" class="form-control" name="phone"
                        placeholder="Enter your Contact Number" required maxlength="20">
                </div>
                <div class="input-group custom-group">
                    <span class="input-group-addon"><img
                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/Mail_id.svg"></span>
                    <input id="email" type="email" class="form-control" name="email"
                        placeholder="Enter your Email id" required maxlength="225">
                </div>
                <div class="input-group custom-group">
                    <span class="input-group-addon"><img
                            src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/Company_Business.svg"></span>
                    <input id="company" type="text" class="form-control" name="company"
                        placeholder="Company / Business / Organisation" maxlength="50">
                </div>
                <p id="errorMessage"></p>

                <div class="d-flex justify-content-center">
                    <button class="share-btn" type="submit" onclick="submitForm()">
                        <span class="btn-txt">
                            Share 
                        </span>
                    </button>
                </div>
            </form>
                </div>
                <div class="close-icon" id="close" style="cursor:pointer">
                    <img src="https://i.ibb.co/Lr7G6jz/Group-16702.png" />
                </div>
            </div>
        </div>
    </div>
</div>

</div>


<script>
function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
</script>

<script>
    function download(){
        let content = "${encodeURIComponent(vCardFormattedText)}";
        window.open("data:text/x-vcard;urlencoded,"+content)
        var [element_1] = document.getElementsByClassName('block-view');
        element_1.style.display = 'none'

        var [element_3] = document.getElementsByClassName('bottom-view');
        element_3.style.display = 'none'

        var [element_2] = document.getElementsByClassName('success-page');
        element_2.style.height = "100vh";
        element_2.style.display = 'block'
    }
    function back(type){
        var [element_1] = document.getElementsByClassName('block-view');
        element_1.style.display = 'block'

        var [element_3] = document.getElementsByClassName('bottom-view');
        element_3.style.display = 'block'

        var [element_2] = document.getElementsByClassName(type);
        element_2.style.display = 'none'
        
        setTimeout(() => {
        var [element_4] = document.getElementsByClassName('bottom-view');
        element_4.classList.add("active");
        }, 500)
    }
</script>

<script>
document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
        var [element_1] = document.getElementsByClassName('bottom-view');
        element_1.classList.add("active");

    }, 1000)

    window.addEventListener('click', function (e) {
        if (!document.getElementById('download').contains(e.target)) {
            var [element_1] = document.getElementsByClassName('bottom-view')
            if (element_1.classList.toString().includes('active')) {
                element_1.classList.remove("active");
            } else {
                element_1.classList.add("active");
            }
        }
    });

    window.addEventListener('scroll', function () {
        var [element_1] = document.getElementsByClassName('bottom-view')
        if (!element_1.classList.toString().includes('active')) {
            element_1.classList.add("active");
        }
    });
});


function submitForm(){
    const userId = '${profile.user_id}'
    let x = document.forms["contactForm"];
    let ele = document.getElementById('errorMessage');
    ele.innerText =''

    if(!x.name.value || !x.email.value || !x.phone.value){
        ele.innerText ='Please Select required fields' 
        return
    }

    let obj = {
         name:x.name.value,
         email:x.email.value,
         designation:x.designation.value,
         company: x.company.value,
         phone: x.phone.value,
         user_id:userId
     }

    const http = new XMLHttpRequest()
        http.open('POST', '/share')
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(obj)) // Make sure to stringify
        http.onload = function() {
            var modal = document.getElementById("myModal");
            modal.style.display="none"
            var [element_1] = document.getElementsByClassName('block-view');
            element_1.style.display = 'none'

            var [element_3] = document.getElementsByClassName('bottom-view');
            element_3.style.display = 'none'
            
            var [element_2] = document.getElementsByClassName('success-page-contact');
            element_2.style.height = "100vh";
            element_2.style.display = 'block'
        }

}
</script>

    <script>
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var [element_1] = document.getElementsByClassName('bottom-view');
        if(btn){
            btn.onclick = function () {
            modal.style.display = "block";
            document.body.style.overflow = 'hidden'
            if(element_1)element_1.style.display ='none';
        }
        }
        var close = document.getElementById("close");
        
        if(close){
            close.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'
            if(element_1)element_1.style.display ='block';
        }   
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto'
            if(element_1)element_1.style.display ='block';
            }
        }
    </script>


</body>

</html>`

    return html
}

export function renderProfileMissingHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap" rel="stylesheet">
        <title>Scube</title>
        <style>
            body {
                padding:0em 1em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: center;
                font-family: 'Lexend', sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #000;
                text-align: center;
                height:80vh;
                background: #1c1e22;
            }
            h1 {
                margin-bottom: 0;
                color: #EDEDED;
            }
            p{
                color: #EDEDED;
                opacity: 0.7;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="logo">
                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/scube_logo.svg">
            </div>
    
            <h1>Uh Ooh! Sorry!</h1>
            <p>
                Profile seems missing. Please update your Scube card with your profile.
            </p>
        </div>
    </body>
    </html>`
}

export function renderProfileInstructionsHTML(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap" rel="stylesheet">
        <title>Scube</title>
        <style>
            body {
                padding:0em 1em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: center;
                font-family: 'Lexend', sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #000;
                text-align: center;
                height:90vh;
                background: #1c1e22;
            }
    
            a{
                color: #FFFFFF;
                font-size: 14px;
            }
            .light-txt{
                font-size: 24px;
                color: #767676;
                margin: 0;
            }
            h1{
                font-size: 20px;
                padding-bottom: 10px;
                color: #EDEDED;
                margin-bottom: 0;
            }
            .instructions{
                color: #EDEDED;
                font-size: 18px;
                line-height: 25px;
                opacity: 0.8;
                margin: 0;
            }
    
        </style>
    </head>
    <body>
        <div>
            <div class="logo">
                <img src="https://scube-assets.s3.ap-south-1.amazonaws.com/share/scube_logo.svg">
            </div>
    
             <p class="light-txt">Welcome to Scube !</p>
            <h1>Your Card Is not linked</h1>
    
            <p class="instructions">
                Click on the link below to know how to link your QR code with your SCUBE profile
            </p>
        </div>
    </body>
    </html>`
}
export async function base64ToNode(buffer: any) {
    return buffer.toString('base64')
}
