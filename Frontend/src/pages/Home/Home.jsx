import { useState } from "react";
import { Encabezado } from "./HomeComponents/Encabezado";
import { Features } from "./HomeComponents/Features";
import { GridSection } from "./HomeComponents/GridSection";
import { Seccion } from "./HomeComponents/Seccion";
import { SeccionMarcas } from "./HomeComponents/SeccionMarcas";
import { ModalProducto } from "../../components/ModalProducto";

export function Home() {
    const [producto, setProducto] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    console.log(producto);

    return (
        <main className="m-5 p-5">
            <Encabezado />
            <Features />
            <GridSection setProducto={setProducto} setMostrarModal={setMostrarModal} />
            <Seccion />
            <SeccionMarcas />
            {mostrarModal && <ModalProducto producto={producto} setMostrarModal={setMostrarModal} />}
        </main>
    )
}   