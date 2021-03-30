
export default class UserManager {

    static isUserLoggedIn() {

        var accountId = localStorage.getItem('accountId')
        if (accountId) {
            return true
        }
        else {
            return false
        }
    }

    static setSelectedLanguage(selectedLanguage) {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }
    static getSelectedLanguage() {
        return localStorage.getItem('selectedLanguage');
    }

    static clearPreferences()
    {
        localStorage.clear();
    }
}