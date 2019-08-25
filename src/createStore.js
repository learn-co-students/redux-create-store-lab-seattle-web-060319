export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  dispatch({ type: "@@INIT" });

  return {
    dispatch,
    getState
  };
}

// let store = createStore(candyReducer); 
// createStore(candyReducer).dispatch({ type: "@@INIT" });

function render() {
  const container = document.getElementById('container');
}
