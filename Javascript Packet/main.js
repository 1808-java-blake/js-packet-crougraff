// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA(){
   let  allElements = document.getElementsByTagName("*"); //returns a collection of all elements in the document with
                                                        // any tag name as a NodeList object
    //The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.                                                    
   for(let i = 0; i < allElements.length;i++){
       if(allElements[i].textContent === "USA"){
            console.log(allElements[i].innerHTML);
       }
   }
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let employeeNames = document.getElementsByClassName("empName");
    Array.from(document.getElementsByClassName("empName")).forEach(
        function(element, index, array) {
            let departments = element.parentElement.getElementsByTagName("td");    
            for(let i=0; i<departments.length; i++){
                if(departments[i].textContent === "Sales"){
                    console.log(element.innerHTML);
                }
            }       
        }
    );
}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let allAElements = document.getElementsByTagName('a');
    for (let i = 0; i < allAElements.length; i++) {
        let allSpanElements = allAElements[i].getElementsByTagName('span');
        for (let j = 0; j < allSpanElements.length; j++) {
            console.log(allSpanElements[j].textContent);
        }
    }
}
//getAnchorChildren();
// 4. Hobbies
// Define function 	getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies(){
    let hobbies = document.getElementsByName("hobbies");
    console.log(hobbies[0].options[hobbies[0].selectedIndex].value);
    let skills = document.getElementsByName("skills");
    console.log(skills[0].textContent);
}
//getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute(){
    let allElements = document.getElementsByTagName("*");
    for(let i = 0; i < allElements.length;i++){
        if(allElements[i].hasAttribute('data-customAttr')){
             console.log(allElements[i].getAttribute('data-customAttr'));
             console.log(allElements[i].innerHTML);
        }
    }
}
//getCustomAttribute();   

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
//
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

function onchangeSumEvent(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let sum = document.getElementById("sum");
    let allNums = document.getElementsByClassName('nums');

    for (let i = 0; i < allNums.length; i++) {
        allNums[i].addEventListener("change", () => 
        {
            isNaN(+num1 + +num2) ? sum.innerText = "Cannot add" :sum.innerText = `${+num1.value + +num2.value}`;
        });
    }
}
onchangeSumEvent();

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function selectSkillAlert(){
    let skills = document.getElementsByName("skills");
    for(let i = 0; i < skills.length;i++){
        skills[i].addEventListener("change",() =>
        {
            alert(`Are you sure ${skills[i].value} is one of your skills?`);
        });
    }
}
//selectSkillAlert();

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function favoriteColorEvent(){
    let favColor = document.getElementsByName("favoriteColor");
    let prevColor;
    for(let i = 0; i < favColor.length; i++){
        favColor[i].addEventListener("change",()=>{
            if(prevColor === undefined){
                alert(`So you like ${favColor[i].value} now?`);
            }else{
                alert(`So you like ${favColor[i].value} more than ${prevColor} now?`);
            }
            
            prevColor = favColor[i].value;
        });
    }
}
//favoriteColorEvent();

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function showHideName(){
    let employeeNames = document.getElementsByClassName("empName");
    for(let i = 0; i < employeeNames.length; i++){
        employeeNames[i].addEventListener("mouseover",()=>{
            (employeeNames[i].style.opacity == 100) ? employeeNames[i].style.opacity = 0
            : employeeNames[i].style.opacity = 100;
        });
    }
}
//showHideName();

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime(){
    setInterval(()=>{
        let currTime = document.getElementById("currentTime");
        let date = new Date, sec = date.getSeconds(), min = date.getMinutes(), hr = date.getHours();
        (hr>12) ? currTime.innerText = `${hr%12}:${min}:${("0" + sec).slice(-2)} PM`: currTime.innerText = `${hr%12}:${min}:${("0" + sec).slice(-2)} AM`;
    }, 1000);
}
// currentTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delay(){
    let helloWorld = document.getElementById("helloWorld");
    setInterval(()=>{
        helloWorld.style.color = '#'+Math.random().toString(16).substr(-6);
    }, 3000);
}
//delay();
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node,func){
    for(let i = 0; i < node.childNodes.length; i++){
        console.log(node.childNodes[i]);
        func(node.childNodes[i], func);
    }
}
//walkTheDOM(document, walkTheDOM);