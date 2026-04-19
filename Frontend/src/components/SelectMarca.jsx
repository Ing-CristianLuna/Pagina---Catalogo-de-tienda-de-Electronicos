import { useState, useEffect } from "react";
import { getMarcas } from "../api/marca.api";

export function SelectMarca({ register, errors }) {
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        async function obtenerMarcas() {
            const res = await getMarcas();
            console.log(res.data)
            setMarcas(res.data);
        }
        obtenerMarcas();
    }, []);

    return (
        <div>
            <label className="form-label">Seleccione la Marca:</label>
            <select className="form-select" key={marcas.length} {...register("marcaID", { required: true, valueAsNumber: true, validate: value => value !== 0 })} >
                <option value={0}>Seleccione un producto</option>
                {marcas.map(marca =>
                    <option key={marca.id} value={marca.id}> {marca.nombre} </option>
                )}
            </select>
            {errors.marcaID && <span className="text-danger">Este campo es requerido.</span>}
        </div>
    )
}