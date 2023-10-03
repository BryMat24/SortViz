import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "../algorithms/type/sortType";

const Navbar = ({ resetArray, sortArray, isSorting }) => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">SortViz</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button onClick={() => sortArray(BUBBLE_SORT)}>
                            {isSorting ? "Sorting..." : "Bubble Sort"}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(HEAP_SORT)}>
                            {isSorting ? "Sorting..." : "Heap Sort"}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(MERGE_SORT)}>
                            {isSorting ? "Sorting..." : "Merge Sort"}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(QUICK_SORT)}>
                            {isSorting ? "Sorting..." : "Quick Sort"}
                        </button>
                    </li>
                    <li>
                        <button onClick={resetArray} disabled={isSorting}>
                            {isSorting ? "Sorting..." : "Reset"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
