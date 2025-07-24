import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute>
                    <CheckOut />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-rosy-nu.vercel.app/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute>
                    <Bookings />
                </PrivateRoute>
            }
        ]
    },
]);

export default router;