// import "./style.css";
function Pagination({currentPage,totalpages=10,onPageChange}){
    console.log(onPageChange,"gg")
    function generateNoOfPages(){
        const pages = [];
        for(let i=1;i<= totalpages;i++){
            pages.push(i)
        }
        return pages;
    }
    return(
        <div className="pagination">
           <button className="pagination-btn" onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Prev</button>
            {
                           generateNoOfPages().map(pageNo => <button className="pagination-btn" key={pageNo} onClick={()=>onPageChange(pageNo)}>{pageNo}</button>)
            }
           <button className="pagination-btn" onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalpages}>Next</button>
        </div>
    )
}
export default Pagination;