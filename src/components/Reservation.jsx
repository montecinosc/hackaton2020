import React, { Fragment } from 'react'
import { db } from '../firebase'
import Swal from 'sweetalert2'
import '../styles/Reservation.css'
import Header from './Header'
import Footer from './Footer'
import '../styles/Reservation.css'

const Reservation = () => {
    const [tareas, setTareas] = React.useState([])
    const [nombre, setNombre] = React.useState();
    const [email, setEmail] = React.useState();
    const [telefono, setTelefono] = React.useState();
    const [filtro, setFiltro] = React.useState('Psicologo');

    React.useEffect(() => {

        const obtenerDatos = async () => {
            try {
                const data = await db.collection('tareas').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                let filtrarDatos = arrayData.filter(arrayData => arrayData.especialidad === filtro);
                setTareas(filtrarDatos)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    }, [filtro])

    
    const upDate = (item , email, nombre, telefono ) => {

        db.collection('tareas').doc(item.id).update({ estado: "hora reservada", nombrePaciente: nombre, telefonoPaciente: telefono, emailPaciente: email })
        setNombre('')
        setTelefono('')
        setEmail('')
        Swal.fire({
            title: '¡Reserva exitosa!',
            text: 'Ha sido confirmada correctamente', icon: 'success', confirmButtonText: 'Ok',
            timer: 9000500
        })
    }

    const reservation = (item) => {
        setEmail(document.getElementById("emailPaciente").value)
        setNombre(document.getElementById("nombrePaciente").value)
        setTelefono(document.getElementById("numeroContacto").value)
        upDate(item, email, nombre, telefono)
    }
 
    return (
    <Fragment>
        <Header />
        <div className="container mt-3">

            <div className="btn-group-lg font-italic">
                <button type="button" className="btn colorbtn m-1"  onClick={() => setFiltro('Nutricionista')}>
                    Nutrición
                </button>
                 <button type="button" className="btn colorbtn m-3"  onClick={() => setFiltro('Psicologo')} >
                    Psicologo
                </button>
                <button type="button" className="btn colorbtn m-3"  onClick={() => setFiltro('Nutricionista')}  >
                    Dermatología
                </button>
{/*                 <button type="button" className="text-white btn btn-dark m-3"  onClick={() => setFiltro('Nutricionista')}  >
                    Traumatología
                </button>
                <button type="button" className="text-white btn btn-dark m-3"  onClick={() => setFiltro('Nutricionista')} >
                    Pediatría
                </button>
                <button type="button" className="text-white btn btn-dark m-3"  onClick={() => setFiltro('Nutricionista')}  >
                    Geriatría
                </button>  */}
            </div>


            <form >
                <div className="form-group">
                    <label for="exampleInputEmail1">Nombre del paciente</label>
                    <input type="text" className="form-control" id="nombrePaciente" aria-describedby="emailHelp" placeholder="Ingrese nombre" onChange={e => setNombre(e.target.value)} value={nombre}  />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Numero de contacto</label>
                    <input type="text" className="form-control" id="numeroContacto" placeholder="Telefono" onChange={e => setTelefono(e.target.value)} value={telefono}  />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="emailPaciente" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} /* required */ />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="col-sm-4">Especialista</th>
                            <th scope="col" className="col-sm-4">Fecha</th>
                            <th scope="col" className="col-sm-2">Hora</th>
                            <th scope="col" className="col-sm-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tareas.filter(item => item.especialidad === filtro).map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{item.name}</th>
                                        <th >{item.fecha}</th>
                                        <th >{item.hora}</th>
                                        <th>

                                        {
                                            item.estado === 'hora reservada' ? (
                                                <p> Ocupada</p>
                                            ) : (
                                                <button
                                                className="btnreserva"
                                                onClick={() => reservation(item)}> Reservar</button>
                                            )
                                        }      
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div >
    <Footer/>
</Fragment>
    )
}

export default Reservation