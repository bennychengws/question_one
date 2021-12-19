import React from 'react'
import { useTranslation } from 'react-i18next';
import moduleCss from "../examples.module.css";

const Trans_example_two = () => {
    const { t, i18n } = useTranslation();

    const handleLangChange = (e) => {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

    return (
        <div className={moduleCss.container}>
            <h1 className={moduleCss.bookTitle}>{t('eg_two.book')}</h1>
            <p>{t('eg_two.quote')}</p>
            <div className={moduleCss.inputBox}>
                <span><input type="radio" id="english" name="language" value="en" defaultChecked onChange={handleLangChange}></input><label htmlFor="en">English</label></span>
                <span><input type="radio" id="english" name="language" value="es" onChange={handleLangChange}></input><label htmlFor="es">Español</label></span>     
            </div>
        </div>
    )
}

export default Trans_example_two
