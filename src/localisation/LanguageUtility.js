import i18n from "../localisation/i18n";
import UserManager from "../util/UserManager";


class LanguageUtility {
  
    static changeLanguage(selectedLanguage) {
        UserManager.setSelectedLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    }

    static trans(key) {
        return i18n.t(key);
    }
}

export default LanguageUtility;