import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
const { useSelector } = require("react-redux");

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

   if(!totalCartQuantity ) return null
  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm flex items-center justify-between md:text-base sm:px-6" >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6" >
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
