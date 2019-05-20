//  App object to store the Data
const app = {
    title: 'Indicision Visibility Toggle',
    text: 'Hey! Here you can see the text',
};

// Form  Submit function 
const hide = (e) => {
    // prevemting default behavior
    e.preventDefault();
    // taking input value
    let btn = document.getElementById("hide_button");
    let text = document.getElementById("text");

        if(btn.innerHTML === "Hide the content"){
            btn.innerHTML = "Show content";
            text.style.display = "none";
        }else {
            btn.innerHTML = "Hide the content";
            text.style.display = "block";
        }
   
  
    //rerendering the page.
    renderApp();
}


// rendering App
const renderApp = () => {
    // Our template
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button id="hide_button" onClick={hide}>Hide the content </button>
            <p id="text">{app.text}</p>
        </div>
    );
    //rendering to the Dom
    ReactDOM.render(template, appRoot);
}
// Choosing html tag where our app goes 
const appRoot = document.getElementById("app");
// rendering the App
renderApp();
