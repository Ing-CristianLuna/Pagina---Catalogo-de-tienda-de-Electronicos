import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [statusError, setStatusError] = useState(false);
    const navega = useNavigate();

    //verificar datos
    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await loginUser(data);
            localStorage.setItem("token", response.data.token);
            navega("/home");
        } catch (error) {
            if (error.response?.status === 400) {
                setStatusError(true);
            }
        }
    })

    return (
        <main className="card card-body mx-auto" style={{ maxWidth: "500px" }}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Ingrese su correo:</label>
                        <input className="form-control" type="text" placeholder="correo..." {...register("correo", { required: true })}></input>
                        {errors.correo && <span>Es requerido el correo</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Ingrese su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("password", { required: true })}></input>
                        {errors.password && <span>Es requerida la contraseña.</span>}
                    </div>
                </div>

                <button className="btn btn-accion col-md-12 mt-3">
                    Ingresar
                </button>
            </form>
            {statusError && <span className="text-danger">Correo o usuario incorrecto. Intente de nuevo.</span>}
        </main>
    )
}