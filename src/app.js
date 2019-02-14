//  App object to store the Data
const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// Form  Submit function 
const onFormSubmit = (e) => {
    // prevemting default behavior
    e.preventDefault();
    // taking input value
    const option = e.target.elements.option.value;
    // if input is not empty pushing it to App Object. 
    if(option) {
        app.options.push(option);
        // reseting input to an empty 
        e.target.elements.option.value = '';
    }
    //rerendering the page.
    renderApp();
}

//removing all options 
const removeAll = () => {
    app.options = [];
    renderApp();
}

// rendering App
const renderApp = () => {
    // Our template
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are you options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                   app.options.map((item) => {
                       return <li key={item}> {item}</li>
                   }) 
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    //rendering to the Dom
    ReactDOM.render(template, appRoot);
}
// Choosing html tag where our app goes 
const appRoot = document.getElementById("app");
// rendering the App
renderApp();
