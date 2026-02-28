# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-> These are four main methods to select elements from the DOM. Now I am giving difference step by step in the below

getElementById ->This method is commonly used to manipulate and target one specific element on the page. It is a DOM method that gives us permission to select an unique single element by the help of its id. It's static. Meaning that it references element of the DOM directly. But when we update DOM Stacture it don't update or change automatically.It's return type is an element.

getElementsByClassName -> This method is generlly used to manipulate and select multiple elements together by the help of same class at once. It is a DOM method that gives us permission to select multiple elements by using same class for all the elements. It returns an HTMLCollection that is dynamically changed or live. It means that it can update itself automatically when the DOM is changed. It can select all the elements together by using same class Name.

querySelectorAll -> This method is used primarilly to select and work with multiple elements at once. querySelector returns the one first matching element where querySelectorAll returns all the matching elements. It returns these elements as a NodeList that is static. We use querySelector when we want to select multiple elements to our working purpose. When new matching elements are inserted to the DOM later it doesn't automatically change.

querySelector -> querySelector is a DOM Method. It is used to select an element by using a css selector. It returns the first matching element. It returns a single element its static. Means that , if the DOM is change later it doesn't update dynamically.

# 2. How do you create and insert a new element into the DOM?

-> To Create and Insert a new element inside the DOM , we will do it step by step.

step-1: Firstly we have to find parent element where we will add our new child element.We will find the parent element by using it's unique id. Necessary code syntax -> const parent = document.getElementById("parent id name");

step-2: Now , We have to make the Child element. code syntax -> const child = document.createElement("child name");

step-3:After making child element, We have to insert the child element into the parent element. By using 3 methods of DOM, We can insert new element.

3.a: append();  // This child element will be insert the end position inside the parent. It's a New Standard Method that will help us to add multiple elements and text inside the parent.

3.b: appendChild(); // It helps us to add only one new child element inside the parent element . It also will be insert the end position inside the parent.

3.c: prepend(); // We can add single or multiple new child elements inside the parent element. It  adds this child element in the first position of the parent element.

# 3. What is Event Bubbling? And how does it work?
-> Event Bubbling: Event Bubbling is a mechanism of DOM. When an event is triggered on the specific element , it bubbles up through the DOM Tree from the child element to it's parent element.

It will work by using 3 different stages.

stage-1: 1st stage is called Capturing Phase. The Event moves step by step from the top of the DOM Tree to the down of the Target element. Checking each element along the way.

stage-2: 2nd stage is called Bubble Phase. After getting the target element, this event bubbles return by checking each parent element step by step from the down of the Target Element to the top.

stage-3: 3rd stage is called Target Phase. When the event gets the element what we want, the Event Handler on that element will give it's expected output.


# 4. What is Event Delegation in JavaScript? Why is it useful?
-> Event Delegation: Event Delegation is a Javascript Technique where a single event listener inserted to a parent element to handle events on its child elements. We don't use unnecessary multiple unique event listener. We use a single event listener depending on their parent element. We use event handler of parent element to handle child elements events.

Why it is Useful ->

4.1: Memory Optimization: We use one listener for parent element. We don't insert multiple various listeners for child element.Thats why it decreases memory space.

4.2: Supports Runtime Elements: After adding new child in the DOM it can handle parent elements automatically.

4.3:Simple code: As we avoid our extra listener , So It helps to keep our code simple and clean. We can maintain our all the codes easily.


# 5. What is the difference between preventDefault() and stopPropagation() methods?
->preventdefault():It is a Javascript Event method. It is used to prevent default browser behaviour of link nevigation, scroll , context menu , form submission etc. It stops the default behaviour of browser of an element.Meaning that the browser won't finish its default action after clicking event trigger.

 stopPropagation(): It is a Javascript Event Method.It is used to prevent parent click listener from firing. It stops captuiring or event bubbling . Meaning that though we trigger event on the child element it don't trigger listener of parent element.
