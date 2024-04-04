import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
  const { id, preco, nome } = venda;

  return (
    <div className="venda box">
      <NavLink style={{ fontFamily: "monospace" }} to={`/vendas/${id}`}>
        {id}
      </NavLink>
      <div>{nome}</div>
      <div>
        {preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </div>
    </div>
  );
};

export default VendaItem;
