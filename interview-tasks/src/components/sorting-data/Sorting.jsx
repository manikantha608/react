import { useEffect, useState } from "react";

function SortingData(){
    const [users,setUsers] = useState([])
    const [isloading,setIsLoading] = useState(true)
    const [sort,setSort] = useState("ascending")
    async function fetchAllUsers( ) {
        try{
            const apiResponce = await fetch("https://dummyjson.com/users")
            const result = await apiResponce.json()
            console.log(result.users,"rr")
            sort !== " "?handleSort(result.users):setUsers(result.users)

            setIsLoading(false)
        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchAllUsers()
    },[])

    function handleSort(listusers){
        let cpyUsers = [...listusers];
      if(sort === "ascending"){
        cpyUsers = cpyUsers.sort((firstUser,secondUser)=>firstUser.firstName > secondUser.firstName ? 1:-1)
        setUsers(cpyUsers)

      }else if(sort === "desending"){
        cpyUsers = cpyUsers.sort((firstUser,secondUser)=>firstUser.firstName > secondUser.firstName ? -1:1)
        setUsers(cpyUsers)
      }
    }
    useEffect(()=>{
      handleSort(users)
    },[sort])

    console.log(sort,"ss")
    if(isloading) return <h1>Loading users!please wait</h1>
    return(
        <div>
           <h2>Soring data</h2>
           <div>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} name="sort">
                <option>select order</option>
                <option value={"ascending"} id="ascending">Sort A-Z</option>
                 <option value={"desending"} id="desending">Sort Z-A</option>
            </select>
           </div>
           <ul>
            {
                users.map(userItem=><li key={userItem.id}>{userItem.firstName}</li>)
            }
           </ul>
        </div>
    )
}
export default SortingData;