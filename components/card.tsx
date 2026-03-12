"use client"
import { useAppSelector } from "@/lip/hooks"
export default function Card(){
    // Get global state
    const count = useAppSelector((state) => state.counter.value)

    // despatch action
    const dispatch = useAppDispatch()
    return(
        <section> 
            <p> Calling global state</p>\
            <button onClick={() => dispatch(increment())}> Increase Button</button>
        </section>
    )
}