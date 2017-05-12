let globalStrings = require("./global-strings");

module.exports = function (requestedPage, lang) {

    let pages = {
        "landingPage": {
            "siteLogo": globalStrings[lang]["site-logo-text"],
            "headLine": globalStrings[lang]["main-page-headline"],
            "subheadLine": globalStrings[lang]["main-page-subheadline"],
            "signinButtonText": globalStrings[lang]["sign-in-button-text"],
            "createProfileButtonText": globalStrings[lang]["create-profile-button-text"],
            "siteFooterCopyright": globalStrings[lang]["site-footer-copy-right"],
            "sectionOneText": globalStrings[lang]["section-one-text"],
            "rememberMe": globalStrings[lang]["remember-me"],
            "resetPassword": globalStrings[lang]["reset-password"],
            "emailFieldText": globalStrings[lang]["email-field-text"],
            "passwordFieldText": globalStrings[lang]["password-field-text"]
        },
        "homePage": {
            "helpText": globalStrings[lang]["help-text"],
            "settingsText": globalStrings[lang]["settings-text"],
            "logOutText": globalStrings[lang]["log-out-text"],
            "viewProfile": globalStrings[lang]["view-profile"],
            "inputMessageBox": globalStrings[lang]["input-message-box"],
            "socializerGroupText": globalStrings[lang]["socializer-group-box"],
            "friends": globalStrings[lang]["friends"],
            "groups": globalStrings[lang]["groups"],
            "home": globalStrings[lang]["home"],
            "messages": globalStrings[lang]["messages"],
            "notifications": globalStrings[lang]["notifications"],
            "like": globalStrings[lang]["like"],
            "comment": globalStrings[lang]["comment"],
            "share": globalStrings[lang]["share"],
            "search": globalStrings[lang]["search"],
            "dislike": globalStrings[lang]["dislike"],
            "refresh": globalStrings[lang]["refresh"],
            "viewAll": globalStrings[lang]["view-all"],
            "seeMore": globalStrings[lang]["see-more"],
            "showAll": globalStrings[lang]["show-all"],
            "peopleYouMayKnow": globalStrings[lang]["people-you-may-know"],
            "addFriend": globalStrings[lang]["add-friend"],
            "joinGroup": globalStrings[lang]["join-group"]
        },
        "userProfilePage": {
            "timeLine": globalStrings[lang]["timeline"],
            "friends": globalStrings[lang]["friends"],
            "about": globalStrings[lang]["about"],
            "photos": globalStrings[lang]["photos"],
            "videos": globalStrings[lang]["videos"],
            "socializerGroups": globalStrings[lang]["socializer-groups"],
            "home": globalStrings[lang]["home"],
            "messages": globalStrings[lang]["messages"],
            "notifications": globalStrings[lang]["notifications"],
            "groups": globalStrings[lang]["groups"],
            "search": globalStrings[lang]["search"],
            "helpText": globalStrings[lang]["help-text"],
            "settingsText": globalStrings[lang]["settings-text"],
            "logOutText": globalStrings[lang]["log-out-text"],
            "viewProfile": globalStrings[lang]["view-profile"]
        }
    };

    if (requestedPage && lang) {
        return pages[requestedPage];
    } else if (lang) {
        return pages;
    }
};