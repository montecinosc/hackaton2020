import React from 'react'
import { db } from '../firebase'
import { Link } from "react-router-dom";
import Form from './Form';

const Reservation = () => {
    const [tareas, setTareas] = React.useState([])
    const [reserv, setReserv] = React.useState([])
    //const [tarea, setTarea] = React.useState('')
    //const [modoEdicion, setModoEdicion] = React.useState(false)
    //const [id, setId] = React.useState('')


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


    const reservation = (item) => {
        /*       setModoEdicion(true)
              setTarea(item.name)
              setId(item.id) */
        setReserv(item)
        console.log(reserv)
    }

    return (
        <div className="container mt-3">
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
                                        <Link className="navItem" to="/reserva">
                                            <button
                                                className="btn btn-info btn-sm "
                                                onClick={() => reservation(item)}> Reservar</button>
                                        </Link>
                                    </th>
                                    <Form reserva={reserv} />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Reservation