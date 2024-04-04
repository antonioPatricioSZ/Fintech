import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Resumo from "./Pages/Resumo";
import Venda from "./Pages/Venda";
import Vendas from "./Pages/Vendas";
import "./Style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Resumo />,
      },
      {
        path: "vendas",
        element: <Vendas />,
      },
      {
        path: "vendas/:id",
        element: <Venda />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
