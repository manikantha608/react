
function DummyPagination({totalPages=10,currentPage,onPageChange}){
    function generatePages(){
        const pages=[]
        for(let i=1;i<=totalPages;i++){
            pages.push(i)
        }
         console.log(pages,"pp")
         return pages;
    }
    return(
        <div>
            <button onClick={()=>onPageChange(currentPage-1)}>Prev</button>
            {
                generatePages().map(pageNo => <button key={pageNo} onClick={()=>onPageChange(pageNo)}>{pageNo}</button>)
            }
            <button onClick={()=>onPageChange(currentPage+1)}>Next</button>
        </div>
    )
}
export default DummyPagination;