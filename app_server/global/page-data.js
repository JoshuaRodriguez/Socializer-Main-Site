var globalStrings = require("./global-strings");

module.exports = function(requestedPage, lang) {

    var pages = {
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
            "friends": globalStrings[lang].friends,
            "groups": globalStrings[lang].groups,
            "home": globalStrings[lang].home,
            "messages": globalStrings[lang].messages,
            "notifications": globalStrings[lang].notifications,
            "like": globalStrings[lang].like,
            "comment": globalStrings[lang].comment,
            "share": globalStrings[lang].share,
            "search": globalStrings[lang].search,
            "dislike": globalStrings[lang].dislike,
            "refresh": globalStrings[lang].refresh,
            "viewAll": globalStrings[lang]["view-all"],
            "seeMore": globalStrings[lang]["see-more"],
            "showAll": globalStrings[lang]["show-all"],
            "peopleYouMayKnow": globalStrings[lang]["people-you-may-know"],
            "addFriend": globalStrings[lang]["add-friend"],
            "joinGroup": globalStrings[lang]["join-group"]
        }
    };

    if (requestedPage && lang) {
        return pages[requestedPage];
    } else if (lang) {
        return pages;
    }
};