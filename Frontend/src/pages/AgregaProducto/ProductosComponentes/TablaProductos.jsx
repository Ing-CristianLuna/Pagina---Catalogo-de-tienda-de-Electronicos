export function TablaProductos({ productos, setProducto, setMuestraModal }) {
    return (
        <div className="container my-5">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-header py-3" style={{ backgroundColor: '#1a2b3c' }}>
                    <h5 className="mb-0 text-white fw-bold">Productos</h5>
                </div>
                <div className="card-body p-0">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr style={{ backgroundColor: '#e8edf2' }}>
                                <th className="py-3 px-4">Modelo</th>
                                <th className="py-3 px-4">Precio</th>
                                <th className="py-3 px-4">Número de Serie</th>
                                <th className="py-3 px-4">Descripción</th>
                                <th className="py-3 px-4">Imagen</th>
                                <th className="py-3 px-4">Categoría</th>
                                <th className="py-3 px-4">Marca</th>
                                <th className="py-3 px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(producto =>
                                <tr key={producto.id}>
                                    <td className="py-3 px-4 fw-semibold">{producto.modelo}</td>
                                    <td className="py-3 px-4 tabla-precio">${producto.precio}</td>
                                    <td className="py-3 px-4">{producto.num_serie}</td>
                                    <td className="py-3 px-4 text-muted">{producto.descripcion}</td>
                                    <td className="py-3 px-4">
                                        <img
                                            src={producto.imagen}
                                            alt={producto.modelo}
                                            className="tabla-img"
                                        />
                                    </td>
                                    <td className="py-3 px-4">{producto.categoriaId}</td>
                                    <td className="py-3 px-4">{producto.marcaID}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className="btn btn-accion btn-sm tabla-btn"
                                            onClick={() => { setProducto(producto); setMuestraModal(true); }}
                                        >
                                            Acciones
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}