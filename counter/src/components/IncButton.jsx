function IncButton({ counterVariable, setCounterVariable }) {
  const handleClick = () => {
    setCounterVariable(counterVariable++);
    console.log("added 1 to counterVariable");
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default IncButton;
