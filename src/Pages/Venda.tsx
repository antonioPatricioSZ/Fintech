import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { IVenda } from "../Context/DataContext";
import useFetch from "../Hooks/useFetch";

type VendaSemData = Omit<IVenda, "data">;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (data === null) {
    return null;
  }

  return (
    <div>
      <div className="box md">ID: {data.id}</div>
      <div className="box md">Nome: {data.nome}</div>
      <div className="box md">
        Preco:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box md">Status: {data.status}</div>
      <div className="box md">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Venda;
