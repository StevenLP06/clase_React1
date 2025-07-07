import React from 'react'

function Table() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><button type="button" className="btn btn-warning">Insertar</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><button type="button" className='btn btn-danger'>Modificar</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td><button type="button" className="btn btn-success">Seleccionar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table