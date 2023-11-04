import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pages } from "./pages";


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pages.App/>}/>
                <Route path="/game" element={<Pages.CocosApp/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;