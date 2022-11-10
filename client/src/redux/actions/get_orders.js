export const GET_ORDERS = "GET_ORDERS";
const { BACK_URL = 'http://localhost:3001' } = process.env


export const getOrders = (email) => dispatch => {
    return fetch(`https://pfproduction-production.up.railway.app/orders?email=${email}`)    
    .then(res => res.json())
    .then(obj => dispatch({type: GET_ORDERS, payload: obj}))
    .catch(err => console.log(err))
    } 

    