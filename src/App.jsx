import { Outlet } from "react-router";
import Header from "./pages/Header";
import Footer from "./custom/Footer";
function App() {
    return (
        <div className="overflow-hidden">
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default App;
