
export function TablaProductos({ productos, setProducto, setMuestraModal }) {
    return (
        <div className="card card-body my-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Numero de Serie</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto =>
                        <tr key={producto.id}>
                            <td>{producto.modelo}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.num_serie}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.imagen}</td>
                            <td>{producto.categoriaId}</td>
                            <td>{producto.marcaID}</td>
                            <td>
                                <button onClick={() => { setProducto(producto); setMuestraModal(true); }}>
                                    Acciones
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}