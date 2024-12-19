import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
        const count = useSelector((state) => state.count);
        const dispatch = useDispatch();

        return (
            <div className="wrapper">
                <h1>COUNTER WITH REDUX</h1>
                <h1>Counter: {count}</h1>
                <div className="button-wrap">
                    <button className="button" onClick={() => dispatch({type: "INCREMENT"})}>
                        Increment
                    </button>
                    <button className="button" onClick={() => dispatch({type: "DECREMENT"})}>
                        Decrement
                    </button>
                </div>

            </div>
        )
}