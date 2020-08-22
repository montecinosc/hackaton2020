import React from 'react';
import '../styles/Footer.css';
import ContactLogo from '../img/contact.png';
import DirectionLogo from '../img/direction.png'
import iconFb from '../img/FB.png';
import iconInstagram from '../img/IG.png';
import iconTwitter from '../img/Twitter.png';
import iconYoutube from '../img/Youtube.png';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerTitle'>
                <p>AMUSAS</p>
            </div>
            <div className="footerOptions">
                <div>
                    <p className="footerOptionBold">Quienes somos</p>
                </div>
                <div>
                    <p className="footerOptionBold">Atenciones Médicas</p>
                    <p className="footerOption">Salud física</p>
                    <p className="footerOption">Salud mental</p>
                </div>
                <div>
                    <p className="footerOptionBold">Grupos de ayuda</p>
                    <p className="footerOption">Ayuda grupal</p>
                    <p className="footerOption">Denuncias</p>
                </div>
                <div>
                    <p className="footerOptionBold">Contenido</p>
                    <p className="footerOption">Videos</p>
                    <p className="footerOption">Noticias</p>
                    <p className="footerOption">Opiniones</p>
                    <p className="footerOption">Documentos</p>
                </div>
                <div className="footerOptionBold">
                    <p>Actividades</p>
                </div>
                <div className="footerOptionBold">
                    <p>Contacto</p>
                </div>
            </div>
            <div className='footerEnd'>
                <p className="directionFooter"><img src={DirectionLogo} alt='iconDirection' className='icon'/>Av. de la Creatividad 2020, Santiago, Chile</p>
                <p className="contactFooter"><img src={ContactLogo} alt='iconContact' className='icon' /> contacto@amusaslatam.com</p>
                <div className="containerIcon">
                    <img src={iconFb} alt='iconFb' className='icon' />
                    <img src={iconInstagram} alt='iconContact' className='icon' />
                    <img src={iconTwitter} alt='iconContact' className='icon' />
                    <img src={iconYoutube} alt='iconContact' className='icon' />
                </div>
            </div>
        </div>
    );
}
 
export default Footer
