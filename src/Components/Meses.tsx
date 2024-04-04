import Mes from "./Mes";

const Meses = () => {
  return (
    <div className="flex" >
      <Mes n={-3} />
      <Mes n={-2} />
      <Mes n={-1} />
      <Mes n={0} />
    </div>
  );
};

export default Meses;
