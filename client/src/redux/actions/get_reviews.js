export const GET_REVIEWS = "GET_REVIEWS";
const { BACK_URL = 'http://localhost:3001' } = process.env


export const getReviews = (id) => dispatch => {
    return fetch(`https://pfproduction-production.up.railway.app/reviews/${id}`)
    .then(res => res.json())
    .then(obj => dispatch({type: GET_REVIEWS, payload: obj}))
    .catch(err => console.log(err))
    } 

    