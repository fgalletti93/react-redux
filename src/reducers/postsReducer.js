export const postsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default: 
      return state
  }
}


/*RULES
-must return any value other than undefined
-produces state, or data to be used inside of your app using only previous state and action
-must not return reach 'out of itself' to decide what value to return (reducers are pure) (no inputs, no api requests)
-must not mutate its input state arguement (change contents)
*/