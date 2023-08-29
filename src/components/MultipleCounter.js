import { useSelector } from "react-redux";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

const Counter = () => {
    const counterList = useSelector((state) => state.counter.counterList);
    const sum = counterList.reduce((prev, count) => prev + count, 0);
    return (
        <div>
            <CounterSizeGenerator />
            <CounterGroupSum sum={sum} />
            <CounterGroup counterList={counterList} />
        </div>
    );
};

export default Counter;
