import { toast } from "react-toastify";
import { deleteProduct } from "../../actions/productActions";

const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(deleteProduct(id))
            toast.success("Delete Successful")
        }
    }
};

export default deleteProductData;