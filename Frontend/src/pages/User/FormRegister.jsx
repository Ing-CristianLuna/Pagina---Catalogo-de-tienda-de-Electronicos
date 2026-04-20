import { useForm } from "react-hook-form";
import { createUser } from "../../api/user.api";
import { useNavigate } from "react-router-dom";

export function FormRegister() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navega = useNavigate();

    const password = watch("password");

    const onSubmit = handleSubmit(async (data) => {
        const response = await createUser(data);
        localStorage.setItem("token", response.data.token);
        navega("/home");
    });

    return (
        <main className="card card-body mx-auto" style={{ maxWidth: "500px" }}>
            <h2>Registro de Usuario</h2>
            <form onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Ingrese su nombre y apellido:</label>
                        <input className="form-control" type="text" placeholder="nombre..." {...register("nombre", { required: true })}></input>
                        {errors.nombre && <span>Es requerido su nombre.</span>}
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Ingrese su correo:</label>
                        <input className="form-control" type="text" placeholder="correo..." {...register("correo", { required: true })}></input>
                        {errors.correo && <span>Es requerido el correo.</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Cree su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("password", { required: true })}></input>
                        {errors.password && <span>Es requerida la contraseña.</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Confirme su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("passwordConfirm", { required: true, validate: (value) => value === password || "Las contrasenas no coinciden" })}></input>
                        {errors.passwordConfirm && <span className="text-danger">{errors.passwordConfirm.message}</span>}
                    </div>
                    <div className="col-md-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="checkDefault" {...register("rol")} />
                            <label className="form-check-label" htmlFor="checkDefault">
                                Es admin?
                            </label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-accion col-md-12 mt-3">
                    Registrar
                </button>
            </form>
        </main>
    )
}