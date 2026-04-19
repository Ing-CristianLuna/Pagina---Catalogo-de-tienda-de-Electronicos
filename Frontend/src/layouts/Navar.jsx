import { NavLink, useNavigate } from "react-router-dom";

export function Navar() {
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
                        <li className="nav-item">
                            <NavLink to="/home" className={({ isActive }) =>
                                `nav-link ${isActive ? "active text-success" : "active"}`
                            }>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos" className={({ isActive }) =>
                                `nav-link ${isActive ? "active text-success" : "active"}`
                            }>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#">Contacto</a>
                        </li>
                        <li className="nav-item ms-2">
                            <a className="btn nav-btn px-4" href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}