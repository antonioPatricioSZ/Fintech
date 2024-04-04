import { Outlet } from "react-router-dom";
import VendaItem from "../Components/VendaItem";
import { useData } from "../Context/DataContext";

const Vendas = () => {
  const { data } = useData();

  if (data === null) {
    return null;
  }

  return (
    <>
      <Outlet />
      <ul>
        {data.map((venda) => {
          return (
            <li key={venda.id}>
              <VendaItem venda={venda} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Vendas;
