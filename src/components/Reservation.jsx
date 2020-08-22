import React from 'react'
import { db } from '../firebase'
import { Link } from "react-router-dom";
import Form from './Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../styles/Reservation.css'

const Reservation = () => {
    const [tareas, setTareas] = React.useState([])
    const [formulario, setFormulario] = React.useState(true);
    const [nombre, setNombre] = React.useState();
    const [email, setEmail] = React.useState();
    const [telefono, setTelefono] = React.useState();


    React.useEffect(() => {

        const obtenerDatos = async () => {

            try {

                const data = await db.collection('tareas').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setTareas(arrayData)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDatos()

    }, [])

    const upDate = (item, email, nombre, telefono) => {
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

        console.log(email, nombre, telefono)
        console.log("esto es la dataaaa", item)
        setFormulario(true);
        upDate(item, email, nombre, telefono)

    }

    return (
        <div className="container mt-3">


            {formulario === true ? (
                <form >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre del paciente</label>
                        <input type="text" className="form-control" id="nombrePaciente" aria-describedby="emailHelp" placeholder="Ingrese nombre" onChange={e => setNombre(e.target.value)} value={nombre} />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Numero de contacto</label>
                        <input type="text" className="form-control" id="numeroContacto" placeholder="Telefono" onChange={e => setTelefono(e.target.value)} value={telefono} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="emailPaciente" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />

                    </div>


                </form>) : ""
            }
            <table class="table table-bordered">
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
                        tareas.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{item.name}</th>
                                    <th >{item.fecha}</th>
                                    <th >{item.hora}</th>
                                    <th>

                                        <button
                                            className="btn btn-info btn-sm "
                                            onClick={() => reservation(item)}> Reservar</button>

                                    </th>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div >
    )
}

export default Reservation