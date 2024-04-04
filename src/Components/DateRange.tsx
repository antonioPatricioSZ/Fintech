import { useData } from "../Context/DataContext";
import DateInput from "./DateInput";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="inicio"
        label="Início"
        value={inicio}
        onChange={(event) => setInicio(event.target.value)}
      />
      <DateInput
        id="final"
        label="Final"
        value={final}
        onChange={(event) => setFinal(event.target.value)}
      />
    </form>
  );
};

export default DateRange;
