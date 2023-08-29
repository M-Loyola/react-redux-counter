import { useDispatch } from "react-redux";
import { updateSize } from "./counterSlice";

const CounterSizeGenerator = (props) => {
    const dispatch = useDispatch()
    const onInputChange = (event) => {
        const inputSize = parseInt(event.target.value);
        dispatch(updateSize(inputSize));
    };

    return (
        <div>
            <input
                type="number"
                min={0}
                value={props.size}
                onChange={onInputChange}
            />
        </div>
    );
};

export default CounterSizeGenerator;
