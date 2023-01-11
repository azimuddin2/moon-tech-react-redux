import { addProduct } from "../../actions/productActions";
import { toast } from 'react-toastify';

const addProductData = (product) => {

    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json",
            }
        });
        const data = await res.json();

        if (data.acknowledged) {

            dispatch(addProduct({
                _id: data.insertedId,
                ...product,
            }))
            toast.success('Add Product Successful');
        }

    };
};

export default addProductData;