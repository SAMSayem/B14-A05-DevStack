
my-project

This is a beginner React website project where one can learn about various technology stacks and build their own technology stack. This project meets all the requirements specified in the A-5 Dev Stack Builder project and has an aesthetically appealing theme of orange-pink-purple gradient.

  
  
  
  Technologies Used:

- React.js
- JavaScript (ES6+)
- Vite
- React-Toastify
- JSON
- CSS

   3 features of my-project:

1. Responsive nav bar with desktop navigation and mobile hamburger navigation.
2. Technology cards that are loaded from a local JSON file having categories, difficulty, badges, icons, and ratings.
3. Personal “Your Stack” side bar with add, duplicate notification, remove, and remove-all functionalities.

  
  Additionally, provide the answers to the following React questions at the end of your Readme file (answers should be short and written in your own words):

1. What is JSX, and what is its role in React?

Answer: JSX allows developers to embed HTML-like markup in the JavaScript code. This approach simplifies building React components.

2. What is the difference between props and state?

 Answer: Props represent data that flows from a parent component to a child. State refers to data that is handled within a particular component.

3. What is the `useState` hook, and where did you use it in this project?

 Answer: The `useState` hook is responsible for storing mutable values. I utilized it for the technologies list loading state, mobile menu, and selected stack.

4. What is the `useEffect` hook, and why did you need it to load JSON data?

 Answer: `useEffect` hook allows executing some logic after the component rendering. I applied it to get the local JSON file with technologies data and switch off the loading state when the data was loaded.
5. Why does every element of a .map() array require a unique `key` prop?

 Answer: A unique key allows React to find every list element and apply changes only to the one element.

6. What is conditional rendering? Provide an example of where you implemented it.

 Answer: Conditional rendering is the process of rendering different interface based on some condition. I implemented conditional rendering in the stack sidebar component: if stack is empty, then empty message is rendered, and otherwise, selected technologies are shown.

7. How do you pass information from a parent component to a child component and vice versa?

 Answer: Information is passed from the parent component to the child via props. Also, the parent component can pass functions as props, and child components can execute these functions.
