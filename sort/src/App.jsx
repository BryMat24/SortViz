import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { bubbleSort } from "./algorithms/bubbleSort";
import { quickSort } from "./algorithms/quickSort";
import { heapSort } from "./algorithms/heapSort";
import { mergeSort } from "./algorithms/mergeSort";
import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "./algorithms/type/sortType";

function App() {
    const [array, setArray] = useState([]);
    const [move, setMove] = useState({});
    const [sliderValue, setSliderValue] = useState(40);

    useEffect(() => {
        resetArray();
    }, []);

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < sliderValue; i++) {
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

            case QUICK_SORT:
                animations = quickSort(copy);
                break;

            case HEAP_SORT:
                animations = heapSort(copy);
                break;

            case MERGE_SORT:
                animations = mergeSort(copy);
                break;

            default:
                return;
        }

        performSortingAnimations(animations);
    };

    const performSortingAnimations = (animations) => {
        if (animations.length === 0) return;
        const animate = animations.shift();
        const [i, j] = animate.comparison;
        const index = [i, j];
        let isSwap = false;
        let isOverride = false;

        if (animate.swap) {
            [array[i], array[j]] = [array[j], array[i]];
            setArray([...array]);
            isSwap = true;
        }

        if (animate.override) {
            array[i] = j;
            setArray([...array]);
            isOverride = true;
        }

        setMove({ index, isSwap });
        setTimeout(() => {
            setMove({});
            performSortingAnimations(animations);
        }, 50);
    };

    const getBackgroundColor = (index) => {
        if (move.index?.length === 2) {
            const [i, j] = move.index;
            if (index === i || index === j) {
                return move.isSwap || move.override ? "#a78bfa" : "#93c5fd";
            }
        }
        return "";
    };

    return (
        <div className="flex flex-col items-center min-h-screen gap-[20px]">
            <Navbar resetArray={resetArray} sortArray={sortArray} />
            <div className="w-full">
                <h1 className="mx-[30px] mb-[10px]">Array Size: </h1>
                <input
                    type="range"
                    min={5}
                    max={100}
                    value={sliderValue}
                    className="range range-error max-w-[250px] mx-[30px]"
                    onChange={(e) => {
                        setSliderValue(e.target.value);
                        resetArray();
                    }}
                />
            </div>
            <div className="flex gap-[5px] items-end grow">
                {array.map((val, index) => (
                    <div
                        key={index}
                        className="w-[3px] bg-red-400"
                        style={{
                            height: `${val}px`,
                            backgroundColor: getBackgroundColor(index),
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
