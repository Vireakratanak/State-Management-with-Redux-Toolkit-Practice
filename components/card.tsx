"use client"

import { increment } from "@/lib/features/counter/counterSlice"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"

export default function Card(){

    // Get global state
    const count = useAppSelector((state) => state.counter.value)

    // dispatch action
    const dispatch = useAppDispatch()

    return(
        <section> 
            <p>Calling global state: {count}</p>
            <button onClick={() => dispatch(increment(1))}>
                Increase Button
            </button>
        </section>
    )
}