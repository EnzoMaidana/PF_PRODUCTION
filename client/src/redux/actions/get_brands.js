export const GET_BRANDS = "GET_BRANDS";
const { BACK_URL = 'http://localhost:3001' } = process.env

export const getBrands = () => dispatch => {;
    return fetch(`https://pfproduction-production.up.railway.app/brands`) 
    .then(res => res.json()) 
    .then(arr => dispatch({type: GET_BRANDS, payload: arr}))
    .catch(err => console.log(err))
    }
