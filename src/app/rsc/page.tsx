import ClientComponent from "@/components/ClientComponent"
// import { useState } from "react"
import Link from "next/link"

export default function ServerComponent () {
    // const [count, setCount] = useState(0)

    console.log('Server')
    return (
        <div>
            サーバー
            {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
            <ClientComponent />
            <Link href="/about">About</Link>
        </div>
    )
}