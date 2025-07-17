import ClientComponent from "@/components/ClientCoponent"
// import { useState } from "react"

export default function ServerComponent () {
    // const [count, setCount] = useState(0)

    console.log('Server')
    return (
        <div>
            サーバー
            {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
            <ClientComponent />
        </div>
    )
}