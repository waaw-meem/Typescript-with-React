import React,{useReducer} from 'react'

const initialState = {count:0}

type CounterProps = {
    count:number
}

type UpdatePropse = {
    type:'increament' | 'decreament',
    payload:number
}

type resetProps = {
    type:'reset'
}

type ActionProps = UpdatePropse | resetProps

function reducer(state:CounterProps,action:ActionProps)  {
    switch(action.type){
        case 'increament':
            return { count:state.count + action.payload}
        case 'decreament':
            return { count:state.count - action.payload}
         case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter() {
const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      Count : {state.count}
      <button 
      onClick={() => {dispatch({type:'increament',payload:10})}}>Increase 10</button>

      <button 
      onClick={() => {dispatch({type:'decreament',payload:10})}}>Decrease 10</button>

<button 
      onClick={() => {dispatch({type:'reset'})}}>Reset</button>

    </div>
  )
}

export default Counter
