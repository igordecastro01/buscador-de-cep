import {useState} from "react";

const Body = ({title}) => {
    const [num, setNum] = useState(0);
    const increment = () => setNum(num+1);
    const zero = () => setNum(num=>0);

    return (
    <div>
        <h1>{title}{num}</h1>
        <button onClick={increment} >Mudar</button>
        <button onClick={zero}>Zerar</button>
    </div>
    )
}

export default Body