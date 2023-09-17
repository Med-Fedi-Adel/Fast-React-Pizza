import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice";
const { useDispatch } = require("react-redux"); 

function DeleteItem({pizzaId}) {
    const dispatch = useDispatch(); 
    return (
        <Button type="small" onClick={()=>dispatch(deleteItem(pizzaId))} >Delete</Button>
   
    )
}

export default DeleteItem
