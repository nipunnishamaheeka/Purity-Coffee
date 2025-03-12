import Nav from "../Nav.tsx";
import { Outlet } from "react-router-dom";


const RootLayout = () => {

    return(
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Nav />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;