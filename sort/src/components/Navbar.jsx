import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "../algorithms/type/sortType";

const Navbar = ({ resetArray, sortArray }) => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">SortViz</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button onClick={() => sortArray(BUBBLE_SORT)}>
                            Bubble Sort
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(HEAP_SORT)}>
                            Heap Sort
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(MERGE_SORT)}>
                            Merge Sort
                        </button>
                    </li>
                    <li>
                        <button onClick={() => sortArray(QUICK_SORT)}>
                            Quick Sort
                        </button>
                    </li>
                    <li>
                        <button onClick={resetArray}>Reset</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
