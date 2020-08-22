import React from 'react'
import { db } from '../firebase'
import Swal from 'sweetalert2'
import '../styles/Reservation.css'

const Reservation = () => {
    const [tareas, setTareas] = React.useState([])
   // const [formulario, setFormulario] = React.useState(false);
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
        //setFormulario(true);
        upDate(item, email, nombre, telefono)

    }


const saludo = () => {
    console.log("hola")
}

 
    return (
        <div className="container mt-3">

<div className="btn-group-lg font-italic">
      <button type="button" className="active text-white btn btn-dark m-1"  onClick={() => saludo()}>
        Medicina General
      </button>
      <button type="button" className="text-white btn btn-dark m-3"  onClick={() => saludo()} >
        Nutrición
      </button>
      <button type="button" className="text-white btn btn-dark m-3"  onClick={() => saludo()} >
        Dermatologia
      </button>
      <button type="button" className="text-white btn btn-dark m-3"  onClick={() => saludo()} >
        Traumatología
      </button>
      <button type="button" className="text-white btn btn-dark m-3"  onClick={() => saludo()} >
        Pediatría
      </button>
      <button type="button" className="text-white btn btn-dark m-3"  onClick={() => saludo()} >
        Geriatría
      </button>
    </div>
{/*     <div className="btn-group-lg font-italic">
      {data.filter(item => item.type === type ).map((item, i) => (
        <button onClick={() => addProducto(item)} value={item.price} name={item.name}
          id={item.id}
          type="button" className="btn color m-1" key={i}>{item.name} ${item.price}</button>
      ))}
    </div> */}

                <form >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre del paciente</label>
                        <input type="text" requiere className="form-control" id="nombrePaciente" aria-describedby="emailHelp" placeholder="Ingrese nombre" onChange={e => setNombre(e.target.value)} value={nombre} />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Numero de contacto</label>
                        <input type="text" className="form-control" id="numeroContacto" placeholder="Telefono" onChange={e => setTelefono(e.target.value)} value={telefono} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="emailPaciente" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />

                    </div>
 
            
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

            </form>
        </div >
    )
}

export default Reservation