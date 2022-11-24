import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class UsuarioTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario() {
        axios
            .delete("http://localhost:4000/usuarios/delete-usuario/" + this.props.obj._id)
            .then((res) => {
                console.log("Usuario eliminado con exito");

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.apellido}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.plan}</td>
                <td>{this.props.obj.fecha}</td>
                <td>{this.props.obj.estado}</td>
                <td>
                    <Link
                        className="edit-link"
                        path={"product/:id"}
                        to={"/edit-usuario/" + this.props.obj._id}
                    >
                        Editar
                    </Link>
                    <Button onClick={this.deleteUsuario} size="sm" variant="danger">
                        Eliminar
                    </Button>
                </td>
            </tr>
        );
    }
}