# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web. 

    JS library that builds out User Interfaces using components. 

    Offload the performance hit of frequent DOM manipulation by only updating DOM elements/components that have changed. 

 

2.  What does it mean to think in react? 

    Break the UI into a component hierarchy 

    Build a static version in React 

    Identify a minimal (complete) representation of UI state. 

    Identify where state should live. 

    Add inverse Data Flow (callbacks).  

3.  Describe state 

    State is data that is rendered to the DOM.  Updates only occur to changed state/data.   

    It is a plain JS object, managed within the component (similar to variables declared within a function). 

 
4.  Describe props. 

    Short for properties.  a plain JS object that gets passed to the component (similar to function parameters). 

    Read only. 

 
5. What are side effects, and how do you sync effects in a React component to state or prop changes? 

    Side effects are anything that affects something outside the scope of the function being executed.  2 categories (1 – don't need clean up, 2 – require cleanup).  the effect hook using (useEffect()) is one way to manage side effects. 
