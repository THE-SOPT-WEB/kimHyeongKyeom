import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import Error404 from "../components/Error404";

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Error404/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default Router;