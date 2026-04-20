import { useState, useEffect } from "react";
import { getProductos } from "../../../api/producto.api";
import { Paginador } from "../../../components/Paginador";

export function GridSection({ setProducto, setMostrarModal }) {
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    //Paginacion
    const cantidadRegistros = 8;
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
        <section className="grid-section py-5" style={{ minHeight: "850px" }}>

            <div className="container" >
                <h2 className="my-3">Productos disponibles</h2>
                <div className="row g-4" style={{ minHeight: "700px", alignContent: "flex-start" }}>
                    {registrosAMostrar.map(producto =>
                        <div className="col-3" key={producto.id}>
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

                                        <button className="btn btn-accion btn-sm" onClick={() => {
                                            setProducto(producto);
                                            setMostrarModal(true);
                                        }}
                                        >Detalles</button>
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