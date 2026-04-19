import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createProducto, deleteProducto, updateProducto } from "../../../api/producto.api";
import { SelectMarca } from "../../../components/SelectMarca";
import { SelectCategoria } from "../../../components/SelectCategoria";

export function ModalProducto({ producto, agrega, cerrarModal, actualizaTabla }) {
    const { formState: { errors }, register, setValue, handleSubmit } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createProducto(data);
        cerrarModal();
        actualizaTabla();
    })
    const onActualiza = handleSubmit(async (data) => {
        await updateProducto(producto.id, data);
        cerrarModal();
        actualizaTabla();
    })
    const onElimina = handleSubmit(async (data) => {
        await deleteProducto(producto.id);
        cerrarModal();
        actualizaTabla();
    })

    useEffect(() => {
        if (producto && !agrega) {
            setValue("modelo", producto.modelo);
            setValue("precio", producto.precio);
            setValue("num_serie", producto.num_serie);
            setValue("descripcion", producto.descripcion);
            setValue("imagen", producto.imagen);
            setValue("marcaID", Number(producto.marcaID));
            setValue("categoriaId", Number(producto.categoriaId));
        }
    }, []);

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el Modelo:</label>
                                        <input className="form-control" type="text" placeholder="modelo..."  {...register("modelo", { required: true })}></input>
                                        {errors.modelo && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el Precio:</label>
                                        <input className="form-control" type="number" placeholder="precio..."  {...register("precio", { required: true })}></input>
                                        {errors.precio && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el Numero de Serie:</label>
                                        <input className="form-control" type="text" placeholder="numero de serie..."  {...register("num_serie", { required: true })}></input>
                                        {errors.num_serie && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese una breve descripcion:</label>
                                        <textarea className="form-control" rows="5" cols="40" placeholder="Escriba..."  {...register("descripcion", { required: true })}></textarea>
                                        {errors.descripcion && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese la URL de la imagen:</label>
                                        <input className="form-control" type="text" placeholder="URL..."  {...register("imagen", { required: true })}></input>
                                        {errors.imagen && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <SelectMarca register={register} errors={errors} />
                                    </div>
                                    <div className="col-md-6">
                                        <SelectCategoria register={register} errors={errors} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cerrarModal()}>Cerrar</button>
                                {agrega && <button type="button" className="btn btn-primary" onClick={onAgrega}>Agregar</button>}
                                {!agrega && <button type="button" className="btn btn-warning" onClick={onActualiza}>Actualizar</button>}
                                {!agrega && <button type="button" className="btn btn-danger" onClick={onElimina}>Eliminar</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}