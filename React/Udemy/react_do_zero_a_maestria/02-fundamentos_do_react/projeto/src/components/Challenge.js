const Challenge = () => {

    const n1 = 5;
    const n2 = 4;

    return (
        <div>
            <p>A: {n1}</p>
            <p>B: {n2}</p>
            <button onClick={() => console.log(n1 + n2)}>Somar</button>
        </div>
    );

};

export default Challenge;