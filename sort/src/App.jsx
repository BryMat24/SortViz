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
    const [comparing, setComparing] = useState(null);
    const [swapping, setSwapping] = useState(null);

    useEffect(() => {
        resetArray();
    }, []);

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 30; i++) {
            newArray.push(randomInteger(5, 800));
        }
        setArray(newArray);
    };

    const sortArray = (type) => {
        let animations;
        const copy = [...array];

        switch (type) {
            case BUBBLE_SORT:
                animations = bubbleSort(copy);
                break;

            default:
                return;
        }

        performSortingAnimations(animations);
    };

    const performSortingAnimations = (animations) => {
        if (animations.length === 0) return;
        const move = animations.shift();
        const [i, j] = move.comparison;
        setComparing([i, j]);

        if (move.swap) {
            setSwapping([i, j]);
            [array[i], array[j]] = [array[j], array[i]];
            setArray([...array]);
        }

        setTimeout(() => {
            setComparing(null);
            setSwapping(null);
            performSortingAnimations(animations);
        }, 50);
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Navbar resetArray={resetArray} sortArray={sortArray} />
            <div className="flex gap-[5px] items-end grow">
                {array.map((val, index) => (
                    <div
                        key={index}
                        style={{ height: `${val}px` }}
                        className={`w-[3px] bg-red-400 ${
                            swapping &&
                            (index === swapping[0] || index === swapping[1])
                                ? "bg-violet-800"
                                : comparing &&
                                  (index === comparing[0] ||
                                      index === comparing[1])
                                ? "bg-blue-300"
                                : ""
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
