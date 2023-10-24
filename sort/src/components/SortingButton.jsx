const SortingButton = ({ sortArray, isSorting, sortType, text }) => {
    return (
        <>
            <button onClick={() => sortArray(sortType)} disabled={isSorting}>
                {isSorting ? "Sorting..." : text}
            </button>
        </>
    );
};

export default SortingButton;
