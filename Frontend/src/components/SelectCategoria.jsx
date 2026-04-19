import { useEffect, useState } from "react";
import { getCategorias } from "../api/categoria.api";

export function SelectCategoria({ register, errors }) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function obtenerCategorias() {
            const res = await getCategorias();
            console.log(res.data);
            setCategorias(res.data);
        }
        obtenerCategorias();
    }, []);

    return (
        <div>
            <label className="form-label">Seleccione la Categoria:</label>
            <select className="form-select" key={categorias.length} {...register("categoriaId", { required: true, valueAsNumber: true, validate: value => value !== 0 })} >
                <option value={0}>Seleccione un producto</option>
                {categorias.map(categoria =>
                    <option key={categoria.id} value={categoria.id}> {categoria.categoria} </option>
                )}
            </select>
            {errors.categoriaId && <span className="text-danger">Este campo es requerido.</span>}
        </div>
    )
}