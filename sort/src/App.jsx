import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { bubbleSort } from "./algorithms/bubbleSort";
import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "./algorithms/type/sortType";

function App() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, []);

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 100; i++) {
            newArray.push(randomInteger(5, 800));
        }
        setArray(newArray);
    };

    const sortArray = (type) => {
        let newArray;

        switch (type) {
            case BUBBLE_SORT:
                newArray = bubbleSort(array);
                break;

            default:
                newArray = array;
                break;
        }

        setArray(newArray);
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Navbar resetArray={resetArray} sortArray={sortArray} />
            <div className="flex gap-[5px] items-end grow">
                {array.map((val, index) => (
                    <div
                        key={index}
                        className="w-[3px] bg-red-400"
                        style={{ height: `${val}px` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
