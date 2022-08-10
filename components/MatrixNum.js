import { useState, useEffect } from "react";

const MatrixNum = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                setNum(() => i%2)
            })
        }
    }, [])

    return (
        <p className="select-none">{num}</p>
    )
}

export default MatrixNum