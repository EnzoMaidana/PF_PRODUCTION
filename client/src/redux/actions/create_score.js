
export const CREATE_SCORE = "CREATE_SCORE";

const { BACK_URL = 'http://localhost:3001' } = process.env

export const createScore = (payload) => dispatch => {
    console.log("Paypoad:",payload)
    return fetch(`https://pfproduction-production.up.railway.app/reviews`,{method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)})
    .then(res => res.json())
    .then(res => dispatch({type: CREATE_SCORE, payload: res}) )
    .catch(err => console.log(err))
    }