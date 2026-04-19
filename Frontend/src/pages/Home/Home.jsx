import { Encabezado } from "./HomeComponents/Encabezado";
import { Features } from "./HomeComponents/Features";
import { GridSection } from "./HomeComponents/GridSection";
import { Seccion } from "./HomeComponents/Seccion";

export function Home() {
    return (
        <main className="m-5 p-5">
            <Encabezado />
            <Features />
            <GridSection />
            <Seccion />
        </main>
    )
}