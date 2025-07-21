import { useEffect, useState } from "react";

function DummyClock(){
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date())
        },1000)
    },[time])
    return(
        <div>
            <h2>Digital clock</h2>
          <div>
            <span>{time.getHours().toString().padStart(2,"0")}</span>:
            <span>{time.getMinutes().toString().padStart(2,"0")}</span>:
            <span>{time.getSeconds().toString().padStart(2,"0")}</span>
          </div>
          <div>
            {
                time.toLocaleDateString(undefined,{
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                })
            }
          </div>
        </div>
    )
}
export default DummyClock;