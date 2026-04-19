import { useState, useEffect } from "react";
import { getProductos } from "../../../api/producto.api";
import { Paginador } from "../../../components/Paginador";

export function GridSection() {
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    //Paginacion
    const cantidadRegistros = 6;
    const indiceFinal = cantidadRegistros * paginaActual;
    const indiceInicial = indiceFinal - cantidadRegistros;
    const registrosAMostrar = productos.slice(indiceInicial, indiceFinal);
    const numeroPaginas = Math.ceil(productos.length / cantidadRegistros);


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
                    {registrosAMostrar.map(producto =>
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

                <Paginador numeroPaginas={numeroPaginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
            </div>
        </section>
    )
}