import * as actionTypes from './actionsType';

export const counterIncriment = () => ({ type: actionTypes.COUNTER_INCRIMENT });
export const counterDecriment = () => ({ type: actionTypes.COUNTER_DECRIMENT });

//Example of the async actoins with redux-tunk
export const counterIncrimentAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(counterIncriment);
    }, 2000);
};