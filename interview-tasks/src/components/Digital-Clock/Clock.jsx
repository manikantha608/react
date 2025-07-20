import { useEffect, useState } from "react";
function Clock(){
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
     const intervalId = setInterval(()=>{
        setTime(new Date())
     },1000)
     return ()=>{
        clearInterval(intervalId)
     }
    },[])
    return(
        <div>
            <span>{time.getHours().toString().padStart(2,"0")}</span>:
            <span>{time.getMinutes().toString().padStart(2,"0")}</span>:
            <span>{time.getSeconds().toString().padStart(2,"0")}</span>

            <div>
                {time.toLocaleDateString(undefined, {
                 weekday: "long",
                 year: "numeric",
                 month: "long",
                 day: "numeric",
          })}
            </div>
        </div>
    )
}
export default Clock;