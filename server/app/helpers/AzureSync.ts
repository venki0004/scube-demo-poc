var ActiveDirectory = require('activedirectory');

var ad = new ActiveDirectory({
    url: 'ldap://deloitte.com',
    baseDN: 'dc=deloitte,dc=com',
    username: process.env.AD_USER,
    password: process.env.AD_PASSWORD,
    attributes: {
        user: ['givenName', 'mail', 'mobile'],
    }
});

