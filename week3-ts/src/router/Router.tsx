import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Error404 from "../pages/Error404";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Error404 />}/>
        </Routes>
        </BrowserRouter>
    )
}