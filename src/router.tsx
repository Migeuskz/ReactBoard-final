import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ],
        errorElement: <h1>Error 404</h1>
    }
]);

export default router