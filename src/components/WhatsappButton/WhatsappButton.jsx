import WappButton from '../../assets/whatsappButton/WhatsApp.svg.png'
import { useTranslation } from 'react-i18next';

import './whatsappButton.css'

const WhatsappButton = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='whatsappButton__MainContainer'>
            <a href="https://wa.me/554892109497" 
                target='_blank' rel="noreferrer"
                className='whatsappButton__Link'>
                    <span className='whatsappButton__Title'>{t('ventas1')}</span>
                    <img src={WappButton} className='whatsappButton__Image'/>
                </a>
                <a href="https://wa.me/554891553365" 
                target='_blank' rel="noreferrer"
                className='whatsappButton__Link'>
                    <span className='whatsappButton__Title'>{t('ventas2')}</span>
                    <img src={WappButton} className='whatsappButton__Image'/>
                </a>
            
        </div>
    )
}

export default WhatsappButton