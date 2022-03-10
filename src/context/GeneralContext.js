import React, {createContext, useState} from 'react';
import { useTranslation } from 'react-i18next';

export const GeneralContext = createContext();

export const ProviderGeneralContext = ({children}) =>{
    const [ language, setLanguage ] = useState("en");
    const [ t, i18n ] = useTranslation("global");

    return (
        <GeneralContext.Provider
            value={{ 
                language, 
                setLanguage, 
                t,
                i18n
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
}
