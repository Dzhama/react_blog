const multiplier = {
    number: [2,4,6],
    multiplyBy: 2,
    multiply: function (arr) {
        return this.number.map((num) => num * this.multiplyBy);
    }
};

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
let appRoot = document.getElementById("app");
let count = 0;

// minus one

const addOne = () => {
    count +=1;
    console.log(count);
    renderCounterApp();
}

const minusOne = () => {
    count -=1
    console.log(count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log(count);
    renderCounterApp();
};


const renderCounterApp = () => {
    
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button id="add-id" className="addButton" onClick={addOne}>+1</button>
            <button id="minus-id" className="minusButton" onClick={minusOne}> -1</button>
            <button id="reset-id" className="resetButton" onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderCounterApp();


////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////




console.log(multiplier.multiply());
console.log(multiplier.number);