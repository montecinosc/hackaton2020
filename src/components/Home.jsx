import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import imgcard1 from '../img/queremos-ayudarte.png';
import imgcard2 from '../img/cambiando-cosas.png';
import imgcard3 from '../img/salud.png';
import imgcard4 from '../img/actividades-p-cambio.png';

import '../styles/Home.css'

const titleDescription1 = 'La salud: Nuestra herramienta';
const buttonDescription1 = 'Solicita tu atención médica';
const description1 = 'Atenciones gratuitas de tele-medicina con los mejores profesionales de la salud en diversas especialidades.'; 

const titleDescription2 = 'Queremos ayudarte';
const buttonDescription2 = 'Descubre la red de apoyo';
const description2 = 'Una completa red de apoyo para que puedas contarnos tus problemas. Este es un espacio de confianza para tí y todas nosotroas.'; 

const titleDescription3 = 'Cambiando el estado de las cosas';
const buttonDescription3 = 'Accede a nuestro contenido';
const description3 = 'Atenciones gratuitas de tele-medicina con los mejores profesionales de la salud en diversas especialidades.'; 

const titleDescription4 = 'Actividades para el cambio';
const buttonDescription4 = 'Conoce nuestra agenda de actividades';
const description4 = 'Accede a una selección de actividades, enfocadas en temáticas de salud, educación y sociedad, ligadas dirigidas a mujeres.'; 

const InformationBlock = () => {
    return (  
        <div className='informationBlock'>
            <p>Te invitamos a ser parte de esta cooperativa de acción, que busca cambiar los paradigmas sociales del cuerpo y la belleza femenina.</p>
        </div>
    );
}

const CardHomeLeft = (props) => {
    return ( 
        <div className='cardContainerLeft'>
            <div className='imgContainer'>
                <img src={props.imgCard} alt='imagen de tarjeta' />
            </div>
            <div className='infoContainer'>
                <div className='cardTitle'>
                    <p>{props.title}</p>
                </div>
                <div className='cardDescription'>
                    <p>{props.description}</p>
                </div>
                <div>
                    <Link to={props.link}><button>{props.button}</button></Link>
                </div>
            </div>
        </div>
    );
}

const CardHomeRight = (props) => {
    return ( 
        <div className='cardContainerRight'>
            <div className='infoContainer'>
                <div className='cardTitle'>
                    <p>{props.title}</p>
                </div>
                <div className='cardDescription'>
                    <p>{props.description}</p>
                </div>
                <div>
                    <Link to={props.link}><button>{props.button}</button></Link>
                </div>
            </div>
            <div className='imgContainer'>
                <img src={props.imgCard} alt='imagen de tarjeta' />
            </div>
        </div>
    );
}

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Carousel />
            <InformationBlock />
            <div>
                <CardHomeLeft 
                    title={titleDescription2}
                    imgCard={imgcard2} 
                    button={buttonDescription2}
                    link={`/atencion-medica`} 
                    description={description2}
                />
                <CardHomeRight 
                    title={titleDescription3}
                    imgCard={imgcard1} 
                    button={buttonDescription3}
                    link={`/atencion-medica`} 
                    description={description3}
                    
                />
                <CardHomeLeft 
                    title={titleDescription1}
                    imgCard={imgcard3} 
                    button={buttonDescription1}
                    link={`/atencion-medica`} 
                    description={description1}
                />
                <CardHomeRight 
                    title={titleDescription4}
                    imgCard={imgcard4} 
                    button={buttonDescription4}
                    link={`/atencion-medica`} 
                    description={description4}
                />
            </div>
            <Footer />
        </div>
       
    );
}

export default Home;
