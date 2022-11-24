import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateUsuario extends Component {

    // Constructor
    constructor(props) {
        super(props);

        //establecer un estado inicial
        this.onChangeUsuarioNombre = this.onChangeUsuarioNombre.bind(this);
        this.onChangeUsuarioApellido = this.onChangeUsuarioApellido.bind(this);
        this.onChangeUsuarioEmail = this.onChangeUsuarioEmail.bind(this);
        this.onChangeUsuarioPlan = this.onChangeUsuarioPlan.bind(this);
        this.onChangeUsuarioFecha = this.onChangeUsuarioFecha.bind(this);
        this.onChangeUsuarioEstado = this.onChangeUsuarioEstado.bind(this);

        //inicializar el boton submit cuando ocurra el evento
        this.onSubmit = this.onSubmit.bind(this);

        //inicializar los objetos en un estado vacio para que se vayan actualizando
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            plan: "",
            fecha: "",
            estado: "",
        };
    }

    onChangeUsuarioNombre(e) {
        this.setState({ nombre: e.target.value });
    }

    onChangeUsuarioApellido(e) {
        this.setState({ apellido: e.target.value });
    }

    onChangeUsuarioEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangeUsuarioPlan(e) {
        this.setState({ plan: e.target.value });
    }

    onChangeUsuarioFecha(e) {
        this.setState({ fecha: e.target.value });
    }

    onChangeUsuarioEstado(e) {
        this.setState({ estado: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const usuarioObject = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            plan: this.state.plan,
            fecha: this.state.fecha,
            estado: this.state.estado,
        };

        //envio de datos con axios y post
        axios
            .post("http://localhost:4000/usuarios/create-usuario", usuarioObject) //envio de datos
            .then((res) => console.log(res.data)); //esta es una promesa

        //vamos a reseterar el estado de los elementos
        this.setState({
            nombre: "",
            apellido: "",
            email: "",
            plan: "",
            fecha: "",
            estado: "",
        });
    }


    render() {
        return (
            <div class="form-wrapper">

                <h1>Registrar Usuario</h1>

                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="Nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangeUsuarioNombre} />
                    </Form.Group>

                    <Form.Group controlId="Apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.apellido}
                            onChange={this.onChangeUsuarioApellido} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeUsuarioEmail} />
                    </Form.Group>

                    <Form.Group controlId="Plan">
                        <Form.Label>Plan</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.plan}
                            onChange={this.onChangeUsuarioPlan} />
                    </Form.Group>

                    <Form.Group controlId="Fecha">
                        <Form.Label>Fecha de Inicio</Form.Label>
                        <Form.Control
                            type="date"
                            value={this.state.fecha}
                            onChange={this.onChangeUsuarioFecha} />
                    </Form.Group>

                    <Form.Group controlId="Estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.estado}
                            onChange={this.onChangeUsuarioEstado} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">Registrar Usuario</Button>

                </Form>

            </div>
        );
    }

}
