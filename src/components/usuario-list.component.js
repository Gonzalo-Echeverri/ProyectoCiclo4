import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import UsuarioTableRow from "./UsuarioTableRow";

export default class UsuarioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/usuarios")
            .then((res) => {
                this.setState({
                    usuario: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable() {
        return this.state.usuario.map((res, i) => {
            return <UsuarioTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="table-wrapper">

                <h1>Lista de Usuarios Registrados</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo Electrónico</th>
                            <th>Plan</th>
                            <th>Fecha de Pago</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody> {this.DataTable()}  </tbody>
                </Table>
            </div>
        );
    }

}