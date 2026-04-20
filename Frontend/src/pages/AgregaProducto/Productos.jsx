import { useState, useEffect } from "react";
import { getProductos } from "../../api/producto.api";
import { TablaProductos } from "./ProductosComponentes/TablaProductos";
import { ModalProducto } from "./ProductosComponentes/ModalProducto";

export function Productos() {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState([]);
    const [agrega, setAgrega] = useState(false);
    const [muestraModal, setMuestraModal] = useState(false);

    async function obtenerProductos() {
        const res = await getProductos();
        console.log(res.data);
        setProductos(res.data);
    }

    function cerrarModal() {
        setAgrega(false);
        setMuestraModal(false);
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <main className="container m-5">
            <button className="mt-5 col-md-12 btn btn-accion" onClick={() => { setAgrega(true); setMuestraModal(true) }}> Agregar</button>
            <TablaProductos productos={productos} setProducto={setProducto} setMuestraModal={setMuestraModal} />
            {muestraModal && <ModalProducto producto={producto} agrega={agrega} cerrarModal={cerrarModal} actualizaTabla={obtenerProductos} />}
        </main>
    )
}