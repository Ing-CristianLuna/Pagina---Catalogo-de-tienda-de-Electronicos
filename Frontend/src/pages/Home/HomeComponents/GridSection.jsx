import { useState, useEffect } from "react";
import { getProductos } from "../../../api/producto.api";

export function GridSection() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargaProductos() {
            const res = await getProductos();
            console.log(res.data);
            setProductos(res.data);
        }
        cargaProductos();
    }, []);

    return (
        <section className="grid-section py-5">
            <div className="container">

                <div className="row g-4">
                    {productos.map(producto =>
                        <div className="col-4" key={producto.id}>
                            <div className="grid-card">

                                <img
                                    src={producto.imagen}
                                    alt={producto.modelo}
                                    className="grid-card-img"
                                />

                                <div className="p-3">
                                    <h5 className="grid-card-title">{producto.modelo}</h5>
                                    <p className="grid-card-price">${producto.precio}</p>
                                    <p className="grid-card-text">{producto.descripcion}</p>

                                    <div className="grid-card-footer d-flex align-items-center justify-content-between">
                                        <div className="d-flex gap-1">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </div>
                                        <button className="btn grid-card-btn btn-sm">Ver más</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                {/* Paginador */}
                <div className="d-flex justify-content-center mt-5">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link">Anterior</button>
                            </li>
                            <li className="page-item active">
                                <button className="page-link">1</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">2</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">3</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">Siguiente</button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </section>
    )
}