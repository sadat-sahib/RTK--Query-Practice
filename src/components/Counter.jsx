import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../app/features/counters/CounterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{
        display: "flex",
        justifyItems:"center",
        alignItems:"center",
        height: "full",
        width: "full",
        gap:"12px"
    }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div style={{
            padding:"5px"
        }}>{count}</div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
       
    </div>
  )
}

export default Counter
