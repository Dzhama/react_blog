'use strict';

//  App object to store the Data
var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// Form  Submit function 
var onFormSubmit = function onFormSubmit(e) {
    // prevemting default behavior
    e.preventDefault();
    // taking input value
    var option = e.target.elements.option.value;
    // if input is not empty pushing it to App Object. 
    if (option) {
        app.options.push(option);
        // reseting input to an empty 
        e.target.elements.option.value = '';
    }
    //rerendering the page.
    renderApp();
};

//removing all options 
var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

// getting random number
var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

// rendering App
var renderApp = function renderApp() {
    // Our template
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are you options" : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            'What shoulk i do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    ' ',
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    //rendering to the Dom
    ReactDOM.render(template, appRoot);
};
// Choosing html tag where our app goes 
var appRoot = document.getElementById("app");
// rendering the App
renderApp();
