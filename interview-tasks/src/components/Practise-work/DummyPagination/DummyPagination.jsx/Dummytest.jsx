import { useState } from "react";
import DummyPagination from "./DummyPagination";


function Text(){
    let dummyData = Array.from({length:100},(_,index)=>({
        id:index+1,
        name:`product ${index+1}`
    }))
    const itemsPerPage=10
    const [currentPage,setCurrentPage] = useState(1)
    const lastItem = currentPage*itemsPerPage
    const firstIndex = lastItem - itemsPerPage
    const finalData = dummyData.slice(firstIndex,lastItem)
    function handlePageChange(page){
        setCurrentPage(page)
    }
    return(
        <div>
          <h2>Pagination</h2>
          <ul>
            {
                finalData.map(item=><li key={item.id}>{item.name}</li>)
            }
          </ul>
          <DummyPagination currentPage={currentPage} onPageChange={handlePageChange}/>
        </div>
    )
}
export default Text;