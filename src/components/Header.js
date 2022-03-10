import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Header = () => {
    const { language, setLanguage, i18n } = useContext(GeneralContext);

    const handleChangeLanguage = (e) =>{
        const lang= e.target.value
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    return(
        <div className="header">
            <h1 className="header__title">{"Breaking Bad"}</h1>
            <select 
                className="header__select" 
                onChange={handleChangeLanguage} 
                value={language}
            >
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select>
        </div>
    )
}

export default Header;