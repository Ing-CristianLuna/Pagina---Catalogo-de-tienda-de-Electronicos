
export function ModalProducto({ producto, setMostrarModal }) {
    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#1a2b3c" }}>
                            <h5 className="modal-title modal-producto-title">Detalle del Producto</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setMostrarModal(false)}></button>
                        </div>

                        <div className="modal-body p-0">
                            <div className="row g-0">

                                <div className="col-md-5 modal-producto-img-wrapper d-flex align-items-center justify-content-center p-4">
                                    <img
                                        src={producto.imagen}
                                        alt={producto.modelo}
                                        className="modal-producto-img"
                                    />
                                </div>

                                <div className="col-md-7 p-4 d-flex flex-column justify-content-center">
                                    <span className="modal-producto-badge mb-2">Disponible</span>
                                    <h2 className="modal-producto-modelo">{producto.modelo}</h2>
                                    <p className="modal-producto-precio">${producto.precio}</p>
                                    <p className="modal-producto-descripcion">{producto.descripcion}</p>

                                    <p className="text-warning">Disponible en Mundo electrónico en: Benito Juarez #123 Col. Centro, Fresnillo, Zac. Mex.</p>
                                    <hr className="modal-producto-divider" />
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="modal-producto-tag">#{producto.categoria?.categoria}</span>
                                        <span className="modal-producto-tag">#{producto.marca?.nombre}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}