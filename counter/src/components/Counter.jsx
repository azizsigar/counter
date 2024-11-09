import { useState } from "react";
import IncButton from "./IncButton";

function Counter() {
  const [counterVariable, setCounterVariable] = useState(0);
return (
    <div>
        <h1>count={counterVariable}</h1>
        <IncButton
            counterVariable={counterVariable}
            setCounterVariable={setCounterVariable}
        />
    </div>
);
}

export default Counter;
