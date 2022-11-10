import axios from 'axios';
const { BACK_URL = 'http://localhost:3001' } = process.env

export function getNameProduct(name) {
    return async function (dispatch) {
        var json = await axios(`https://pfproduction-production.up.railway.app/products?name=` + name);
        return dispatch({
            type: "GET_NAME_PRODUCT",
            payload: json.data
        })
    }
}