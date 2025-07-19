import { useState } from "react";
import Pagination from "./Pagination";

function PaginationTest() {
    const dummydata = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`
    }));

    const itemsPerpage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerpage;
    const indexOfFirstItem = indexOfLastItem - itemsPerpage;
    const currentListOfItems = dummydata.slice(indexOfFirstItem, indexOfLastItem);

    function handlePageChange(currentPage) {
        setCurrentPage(currentPage);
    }

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
            <h2>🛍️ Product List</h2>
            <ul style={{ listStyle: "none", padding: 0 ,display:"flex",gap:"10px"}}>
                {currentListOfItems.map((listItem) => (
                    <li
                        key={listItem.id}
                        style={{
                            width:"500px",
                            padding: "1rem",
                            marginBottom: "0.5rem",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #ddd",
                            borderRadius: "8px"
                        }}
                    >
                        {listItem.name}
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalpages={Math.ceil(dummydata.length / itemsPerpage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PaginationTest;
