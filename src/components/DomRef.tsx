import {useRef,useEffect} from 'react'

const DomRef = () => {
    const inputRaf = useRef<HTMLInputElement >(null)
    useEffect(()=>{
        inputRaf?.current?.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRaf}/>
        </div>
    )
}

export default DomRef
