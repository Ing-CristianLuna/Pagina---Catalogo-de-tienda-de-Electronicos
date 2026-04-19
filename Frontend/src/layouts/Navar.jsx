import { NavLink, useNavigate } from "react-router-dom";

export function Navar() {
    const ruta = useNavigate();
    const token = localStorage.getItem("token")
    const payload = token ? JSON.parse(atob(token.split(".")[1])) : false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-custom px-4 py-3 fixed-top">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand nav-logo" href="#">
                    <span className="nav-logo-icon"></span>
                    MiMarca
                </a>

                {/* Toggler mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center gap-2">
                        {payload && payload.rol && <li className="nav-item">
                            <NavLink to="/home" className={({ isActive }) =>
                                `nav-link ${isActive ? "active text-success" : "active"}`
                            }>Inicio</NavLink>
                        </li>}
                        {payload && payload.rol && <li className="nav-item">
                            <NavLink to="/productos" className={({ isActive }) =>
                                `nav-link ${isActive ? "active text-success" : "active"}`
                            }>Productos</NavLink>
                        </li>}

                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuario
                            </a>
                            <ul className="dropdown-menu">
                                <button className="dropdown-item" onClick={() => {
                                    if (token) {
                                        const confirm = window.confirm("Si se redirige al login, su sesion actual se cerrara, esta seguro/a?");
                                        if (confirm) {
                                            localStorage.removeItem("token");
                                            ruta("/loginUser");
                                        }
                                    } else { ruta("/loginUser"); }
                                }
                                }>Iniciar Sesión</button>
                                <button className="dropdown-item" href="/registerUser" onClick={() => {
                                    if (token) {
                                        const confirm = window.confirm("Si se redirige al registro de usuario, su sesion actual se cerrara, esta seguro/a?")
                                        if (confirm) {
                                            localStorage.removeItem("token");
                                            ruta("/registerUser");
                                        }
                                    } else { ruta("/registerUser"); }
                                }}>Registrarse</button>
                                <li><a className="dropdown-item text-danger" onClick={() => { localStorage.removeItem("token"); ruta('/loginUser'); }}>Cerrar Sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}