import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import ImageReinventarnos from '../img/reinventarnos.png' 
import Feliz from '../img/feliz.png' 
import SinPrejuicios from '../img/sin-prejuicios.png' 
import SeguirLuchando from '../img/seguir-luchando.png' 
import Infante from '../img/infante.png' 
import Adolescente from '../img/adolescente.png' 
import Protesta from '../img/protesta.png' 
import ContentLogo from '../img/contenido.gif' 
import '../styles/MedicalAttention.css';

const Description = () => {
    return (
        <div className='descriptionMedicalAttention'>
            <p className='titleDescription'>Estamos aquí para cambiar el mundo</p>
            <div className='descriptionContainer'>
                <img src={ContentLogo} alt='image' className='imgMedicalAttention' />
                <div>
                    <p className='contentDescriptionP'>
                    Queremos construir esta revolución en conjunto. Cada uno de nosotros puede ser parte de este proceso de cambio, que necesitamos urgentemente
                    Es hora de que nos amemos a nosotras, respetando nuestros cuerpos y disfrutando la vida sin prejuicios ni tapujos heredados de una historia de mentalidad  obsoleta. 
                    <br/>
                    Te invitamos a ser parte de esta hermosa lucha, levantemos nuevas bases hacia el amor propio, el auto cuidado y nuestro valor como personas. 
                    </p>
                </div>
            </div>
        </div>
    );
}

const InformationBlock = (props) => {
    return (  
        <div className='informationBlock'>
            <p>{props.info}</p>
        </div>
    );
}

const titleStyle = {    
    fontFamily: 'Alef',
    fontWeight: '900',
    fontStyle: 'bold',
    fontSize: '40px',
    lineHeight: '50px',
    letterSpacing: '0.5px',
    padding: '0.5em 7em 0.5em 7em',
}

const Outstanding = (props) => {
    return ( 
        <div>
            <p style={titleStyle}>Destacado de la semana</p>
            <div className='cardContainerRight' style={{ backgroundColor: '#D2C4E5' }}>
                <div className='infoContainer'>
                    <div className='cardTitle' style={{ paddingTop: '1em' }}>
                        <p>“Todos podemos reinventarnos”</p>
                    </div>
                        <p>Cortometraje, 2020, Andrea Silva</p>
                    <div className='cardDescription'>
                        <p>Diseñadora Gráfica y UX, Andrea recorre su experiencia como proceso de cambio, a través de un cortometraje documental, de cómo decidió transformar su vida laboral hacia un destino desconocido, pero siempre confiando en sí misma. </p>
                    </div>
                    <div>
                        <Link to={props.link}><button  style={{ backgroundColor: '#217CCD' }}>Accede a este video</button></Link>
                    </div>
                </div>
                <div className='imgContainer'>
                    <img src={ImageReinventarnos} alt='imagen de tarjeta' />
                </div>
            </div>
        </div>
    );
}

const Article = (props) => {
    return (
        <div>
            <div>
                <img src={props.img} alt='imagen de tarjeta' style={{ width: '428px', height: '331px' }}/>
            </div>
            <div className='infoContainer'>
                <div className='cardTitle' style={{ paddingTop: '1em' }}>
                    <p>{props.title}</p>
                </div>
                <div className='cardDescription'  style={{ width: '428px', marginRight: '1em', height: '100px' }}>
                    <p>{props.description}</p>
                </div>
                <div>
                    <Link to={props.link}><button  style={{ backgroundColor: '#217CCD', marginTop: '2em' }} className='button'>Leer este articulo</button></Link>
                </div>
            </div>
        </div>
    );
}

const Articles = () => {
    return ( 
        <div>    
            <p style={titleStyle}>Articulos</p>
            <div 
                className='cardContainer' 
                style={{ backgroundColor: '#E5C4C8', display: 'flex', flexDirection: 'row', height: '631px', paddingLeft: '20em',
                paddingRight: '20em' ,paddingTop:'1em'}} 
            >
               <Article 
                    title={`Creciendo sin prejuicios`} 
                    description={`¿Existen formas de crecer con una mente libre de prejuicios? La respuesta es si, sólo requiere un poco de voluntad.`}
                    img={SinPrejuicios} 
                />
               <Article 
                    title={`Quiero seguir luchando`} 
                    description={`Una historia de vida y aprendizaje que nos muestra la historia de una ex reina de belleza, que llegó a los extremos por complir con lo que le exigían.`}
                    img={SeguirLuchando}
                />
               <Article 
                    title={`Feliz hasta el infinito`} 
                    description={`La búsqueda del bienestar es el secreto de la felicidad, ya que descubres que la importancia no está en la meta, sino en el camino. `}
                    img={Feliz}
                /> 
            </div>
        </div>
    );
}

const ArticleNews = (props) => {
    return (
        <div>
            <div>
                <img src={props.img} alt='imagen de tarjeta' style={{ width: '428px', height: '331px' }}/>
            </div>
            <div className='infoContainer'>
                <div className='cardTitle' style={{ paddingTop: '1em' }}>
                    <p>{props.title}</p>
                </div>
                <div className='cardDescription'  style={{ width: '428px', marginRight: '1em', height: '100px' }}>
                    <p>{props.description}</p>
                </div>
                <div>
                    <p style={{ marginLeft: '70%' }}>{props.author}</p>
                </div>
            </div>
        </div>
    );
}

const News = () => {
    return ( 
        <div>    
            <p style={titleStyle}>Noticias</p>
            <div 
                className='cardContainer' 
                style={{ backgroundColor: '#D2C4E5', display: 'flex', flexDirection: 'row', height: '554px', paddingLeft: '20em',
                paddingRight: '20em', paddingTop:'1em'}} 
            >
               <ArticleNews 
                    description={`Cambios en dietas Junaeb, para transformar la salud de los niños.`}
                    img={Infante} 
                    author={`Por Marcel Ríos`}
                />
               <ArticleNews 
                    description={`Marchas en Miami por igualdad de género.`}
                    img={Protesta}
                    author={`Por Luciana Peña`}
                />
               <ArticleNews 
                    description={`Alarmante: Crece tasa de suicidio juvenil en Chile.`}
                    img={Adolescente}
                    author={`Por Pastora Leiva`}
                /> 
            </div>
        </div>
    );
}

const Content = () => {
    return (  
        <div>
            <Header />
            <Description />
            <InformationBlock info={`Nuestro contenido busca hacer cambios en las personas desde la salud y la cultura, entregando herramientas para cambiar la forma en que te situas en el mundo.`}/>
            <Outstanding />
            <Articles />
            <News />
            <InformationBlock info={`¿No encuentras lo que buscas? Nos encantaría saber tus sugerencias.`}/>
            <Footer />
        </div>
    );
}
 
export default Content;