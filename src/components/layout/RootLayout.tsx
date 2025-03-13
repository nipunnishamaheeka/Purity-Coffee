import Nav from "../Nav.tsx";
import Footer from "../Footer.tsx";
import { Outlet } from "react-router-dom";


const RootLayout = () => {

    return(
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <Nav />
            <div className="h-16 md:h-20"></div>
            <main className="container mx-auto px-4 py-8 flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;