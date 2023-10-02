const Navbar = ({ resetArray }) => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">SortViz</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button>Bubble Sort</button>
                    </li>
                    <li>
                        <button>Heap Sort</button>
                    </li>
                    <li>
                        <button>Merge Sort</button>
                    </li>
                    <li>
                        <button>Quick Sort</button>
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
