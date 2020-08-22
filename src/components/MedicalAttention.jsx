import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from '../img/viva-la-salud.png' 
import Image2 from '../img/salud-fisica.png'
import Image3 from '../img/salud-mental.png'
import '../styles/MedicalAttention.css';

const physicalHealth = 'Encuentra horas con especialistas en ginecología, nutrición, medicina general, entre otras especialidades.';
const mentalHealth = `Accede a sesiones con psicólogos, psiquiatras, coaching personalizado, entre otras actividades.`;
const backgroundPhysical = {backgroundColor: '#E5C4C8'}
const backgroundMental = {backgroundColor: '#D3E7F8'}

const Description = () => {
    return (
        <div className='descriptionMedicalAttention'>
            <p className='titleDescription'>¡Viva nuestra Salud!</p>
            <div className='descriptionContainer'>
                <img src={Image} alt='image' className='imgMedicalAttention' />
                <div>
                    <p className='contentDescriptionP'>
                        El cuidado de tu salud física y mental es fundamental para poder construirnos como mujeres sanas y fuertes.
                        <br />
                        <br />
                        Conoce nuestro servicio gratuito de atención  remota, donde encontrarás horas disponibles con los profesionales de la salud que forman parte de este colectivo y están especializados en áreas que se enfocan en la mujer.
                    </p>
                </div>
            </div>
        </div>
    );
}

const Specialties = (props) => {
    return (  
        <div className="specialtiesContainer">
                <p className="specialtiesTitle">{props.title}</p>
            <div className="specialty" style={props.styles}>
                <p className='contentDescription'>{props.specialtyDescription}</p>
                <img src={props.img} alt='speacialty image' className='speacialtyImage'></img>
                <button>Conoce las especialidades</button>
            </div>
        </div>
    );
}
 
const MedicalAttention = () => {
    return (
        <div>
            <Header />
            <Description />
            <div className='speacialtiesOption'>
                <Specialties title='Salud Física' specialtyDescription={physicalHealth} img={Image2} styles={backgroundPhysical} />
                <Specialties title='Salud Mental' specialtyDescription={mentalHealth} img={Image3} styles={backgroundMental} />
            </div>
            <Footer />
        </div>
    );
}
 
export default MedicalAttention
