import { Insert } from "./components/Insert";
import { Delete } from "./components/Delete";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

const AppRoutes = [
    {
        //index: true,
        //element: <Login />
        index: true,
        element: <Home />
    },
    {
        path: '/Anasayfa',
        element: <Home />
    },
    {
        path: '/Ekle',
        element: <Insert/>
    },
    {
        path: '/Cikar',
        element: <Delete />
    },
    {
        path: '/Listele',
        element: <FetchData />
    }
];

export default AppRoutes;
