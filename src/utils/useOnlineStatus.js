import { useState, useEffect } from "react";

const useOnlineStatus=()=>{
    const [isOnline,setIsOnline]=useState(navigator.onLine)

    const handleOnlineStatus=()=>{
        setIsOnline(true)
    }
  
    const handleOfflineStatus=()=>{
        setIsOnline(false)
    }

    useEffect(()=>{
        const UpdateOnlineStatus=()=>{
            window.addEventListener("online",handleOnlineStatus)
        }

        const UpdateOfflineStatus=()=>{
            window.addEventListener("offline",handleOfflineStatus)
        }
        UpdateOnlineStatus();
        UpdateOfflineStatus();

        return(()=>{
            window.removeEventListener("online",handleOnlineStatus)
            window.removeEventListener("offline",handleOfflineStatus)
        })
    },[])
    return isOnline
}

export default useOnlineStatus;