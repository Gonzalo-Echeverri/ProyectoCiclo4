import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

export default class EditUsuario extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsuarioNombre = this.onChangeUsuarioNombre.bind(this);
        this.onChangeUsuarioApellido = this.onChangeUsuarioApellido.bind(this);
        this.onChangeUsuarioEmail = this.onChangeUsuarioEmail.bind(this);
        this.onChangeUsuarioPlan = this.onChangeUsuarioPlan.bind(this);
        this.onChangeUsuarioFecha = this.onChangeUsuarioFecha.bind(this);
        this.onChangeUsuarioEstado = this.onChangeUsuarioEstado.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            plan: "",
            fecha: "",
            estado: "",
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/usuarios/edit-usuario/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    nombre: res.data.nombre,
                    apellido: res.data.apellido,
                    email: res.data.email,
                    plan: res.data.plan,
                    fecha: res.data.fecha,
                    estado: res.data.estado,
                });
            })
            .catch((error) => {
                console.log(error);
            });
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

        axios
            .put(
                "http://localhost:4000/usuarios/update-usuario/" + this.props.match.params.id,
                usuarioObject)

            .then((res) => {
                console.log(res.data);
                console.log("Usuario actualizado con exito!");
            })

            .catch((error) => {
                console.log(error);
            });

        this.props.history.push("/usuario-list");
    }

    render() {
        return (
            <div className="form-wrapper">

                <h1>Editar Usuario</h1>

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

                    <br />
                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar Usuario
                    </Button>
                </Form>
            </div>
        );
    }

}