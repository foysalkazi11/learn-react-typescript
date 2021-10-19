import React,{useState,useEffect,useRef} from 'react'

const MutableRef = () => {
    const [time,setTime] = useState(0)
    const intervalRef = useRef< number | null >(null)

    const stopTimer = ()=>{
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
        
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(()=>{
            setTime(timer => timer + 1)
        },1000)
        return () => {
            stopTimer()
        }
    }, [])
    return (
        <div>
            {time}
        </div>
    )
}

export default MutableRef
