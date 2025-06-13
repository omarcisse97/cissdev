// src/components/SettingsDropdown.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faChevronDown, 
  faSun, 
  faMoon, 
  faGlobe,
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const SettingsDropdown = ({ lang, updateLang, className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(prev => !prev);
  };

  const handleLanguageChange = (newLang) => {
    if (lang !== newLang) {
      updateLang(newLang);
    }
    setDropdownActive(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setDropdownActive(false);
  };

  return (
    <div className={`settings-dropdown ${dropdownActive ? 'active' : ''} ${className}`}>
      <button 
        className="settings-trigger"
        onClick={toggleDropdown}
        aria-label="Settings"
        title="Settings"
      >
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faChevronDown} className="chevron" />
      </button>

      <div className={`settings-menu ${dropdownActive ? 'settings-menu-active' : ''}`}>
        {/* Theme Section */}
        <div className="settings-section">
          <div className="settings-section-title">
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
            <span>{lang === "English" ? "Theme" : "Thème"}</span>
          </div>
          <button 
            className="settings-option theme-option"
            onClick={handleThemeToggle}
          >
            <div className="option-content">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              <span>
                {isDarkMode 
                  ? (lang === "English" ? "Light Mode" : "Mode Clair")
                  : (lang === "English" ? "Dark Mode" : "Mode Sombre")
                }
              </span>
            </div>
          </button>
        </div>

        {/* Language Section */}
        <div className="settings-section">
          <div className="settings-section-title">
            <FontAwesomeIcon icon={faGlobe} />
            <span>{lang === "English" ? "Language" : "Langue"}</span>
          </div>
          
          <button 
            className={`settings-option ${lang === "English" ? "active" : ""}`}
            onClick={() => handleLanguageChange("English")}
          >
            <div className="option-content">
              <span className="flag">🇺🇸</span>
              <span>English</span>
            </div>
            {lang === "English" && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          </button>

          <button 
            className={`settings-option ${lang === "Français" ? "active" : ""}`}
            onClick={() => handleLanguageChange("Français")}
          >
            <div className="option-content">
              <span className="flag">🇫🇷</span>
              <span>Français</span>
            </div>
            {lang === "Français" && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDropdown;