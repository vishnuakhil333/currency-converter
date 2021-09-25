import { AiOutlineCloseCircle } from "react-icons/ai";
function Currency(props) {
  const { currency, removeFromToCurrencyList } = props;
  const removeItem = () => {
    removeFromToCurrencyList(currency);
  };
  return (
    <li>
      <span>{currency}</span>
      <button onClick={removeItem}>
        <AiOutlineCloseCircle />
      </button>
    </li>
  );
}

export default Currency;
