
export function Footer() {
    return (
        <footer className="footer py-5">
            <div className="container">

                <div className="row g-4">

                    {/* Columna 1 - Logo y descripción */}
                    <div className="col-12 col-md-4">
                        <h5 className="footer-brand mb-3">Tu Marca</h5>
                        <p className="footer-text">
                            Descripción breve de tu empresa o proyecto.
                        </p>
                        <div className="d-flex gap-2 mt-3">
                            <span className="footer-social-icon"></span>
                            <span className="footer-social-icon"></span>
                            <span className="footer-social-icon"></span>
                            <span className="footer-social-icon"></span>
                        </div>
                    </div>

                    {/* Columna 2 - Links */}
                    <div className="col-6 col-md-4">
                        <h6 className="footer-heading mb-3">Redes Sociales</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Facebook: Mundo Electronico</a></li>
                            <li><a href="#" className="footer-link">Instagram: mundo_electronico1</a></li>
                            <li><a href="#" className="footer-link">Telefono: +52 476 123 5432</a></li>
                        </ul>
                    </div>

                    {/* Columna 3 - Links */}
                    <div className="col-6 col-md-4">
                        <h6 className="footer-heading mb-3">Información</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Términos y condiciones</a></li>
                            <li><a href="#" className="footer-link">Política de privacidad</a></li>
                            <li><a href="#" className="footer-link">Envíos</a></li>
                            <li><a href="#" className="footer-link">Devoluciones</a></li>
                        </ul>
                    </div>

                </div>

                {/* Línea divisora */}
                <hr className="footer-divider mt-4" />

                {/* Copyright */}
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="footer-copy mb-0">
                            © 2026 Mundo Electronico. Todos los derechos reservados.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}