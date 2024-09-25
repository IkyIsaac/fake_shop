import { ActionTypes } from "../constants/action-types"

const initialState={
    products: [{
        id:1,
        title:"Dipesh",
        category:"programmer",
    },
 ],
}

export const productReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}

// const initialState = {
//     products: [],
//   };
  
//   export const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_PRODUCTS':
//         return {
//           ...state,
//           products: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  