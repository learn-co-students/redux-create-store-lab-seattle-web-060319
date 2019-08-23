export default function createStore(reducer) {
  let state;

function dispatch(action) {
  state = reducer(state, action);
    render();
  }

  function getState() {
    return state; 
  }

  this.dispatch({type: '@@INIT'})

  return {dispatch, getState}
};



function render() {
  const container = document.getElementById('container');
}
