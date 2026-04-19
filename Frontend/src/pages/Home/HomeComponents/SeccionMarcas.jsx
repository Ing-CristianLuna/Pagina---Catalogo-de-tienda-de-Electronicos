import { useState, useEffect } from "react";
import { getMarcas } from "../../../api/marca.api";
import { Paginador } from "../../../components/Paginador";

export function SeccionMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    //Paginacion
    const cantidadRegistros = 3;
    const indiceFinal = cantidadRegistros * paginaActual;
    const indiceInicial = indiceFinal - cantidadRegistros;
    const registrosAMostrar = marcas.slice(indiceInicial, indiceFinal);
    const numeroPaginas = Math.ceil(marcas.length / cantidadRegistros);

    useEffect(() => {
        async function obtenerMarcas() {
            const res = getMarcas();
            console.log(res.data);
            setMarcas((await res).data)
        }
        obtenerMarcas();
    }, []);

    return (
        <section className="brands-section py-5">
            <div className="container">

                <div className="row justify-content-center g-4">

                    {registrosAMostrar.map(marca =>
                        <div className="col-12 col-md-4 text-center" key={marca.id}>
                            <div className="brand-card d-flex flex-column align-items-center">

                                <div className="brand-circle mb-3">
                                    <img
                                        src={marca.logo}
                                        alt={marca.nombre}
                                        className="brand-logo"
                                    />
                                </div>
                                <h5>{marca.nombre}</h5>
                                <p className="brand-description">{marca.descripcion}</p>

                                <div className="brand-badge d-flex align-items-center gap-2">
                                    <span className="badge-icon">✔</span>
                                    <span className="badge-text">Marca oficial verificada</span>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                <Paginador numeroPaginas={numeroPaginas} setPaginaActual={setPaginaActual} paginaActual={paginaActual} />
            </div>
        </section>
    )
}