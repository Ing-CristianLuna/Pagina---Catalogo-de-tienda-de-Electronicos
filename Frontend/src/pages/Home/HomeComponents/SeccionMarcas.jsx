import { useState, useEffect } from "react";

export function SeccionMarcas() {


    return (
        <section className="brands-section py-5">
            <div className="container">

                <div className="row justify-content-center g-4">

                    <div className="col-12 col-md-4 text-center">
                        <div className="brand-card d-flex flex-column align-items-center">

                            <div className="brand-circle mb-3">
                                <img
                                    src={marca.logo}
                                    alt={marca.nombre}
                                    className="brand-logo"
                                />
                            </div>

                            <p className="brand-description">{marca.descripcion}</p>

                            <div className="brand-badge d-flex align-items-center gap-2">
                                <span className="badge-icon">✔</span>
                                <span className="badge-text">Marca oficial verificada</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}