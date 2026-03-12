"use client"
import { useAppSelector } from "@/lip/hooks"
export default function TextCard(){
    // Get global state
    const count = useAppSelector((state) => state.counter.value)
    return(
        <section> 
            <p> In another Card: global state
            </p>
        </section>
    )
}