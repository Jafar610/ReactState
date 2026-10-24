import React, {useReducer} from 'react'

function UseReducer() {
      let reducer = (state, action) => {
        switch (action.type) {
          case "increment":
            return { count: state.count + 1 };
    
          case "decrement":
            return { count: state.count - 1 };
    
          case "reset":
            return { count: 0 };
    
          default:
            break;
        }
      };
      const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
        <h1>Count: {state.count} </h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="border border-1 mx-1 rounded"
        type="submit"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="border border-1 mx-1 rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="border border-1 mx-1 rounded"
      >
        Reset
      </button>
    </div>
  )
}

export default UseReducer