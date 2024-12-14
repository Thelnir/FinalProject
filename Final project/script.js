/*
Student Name: Joshua Whitmore
Today's Date: 12/9/2024
File Name: styles.css
*/

var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");
var nextQ = document.querySelector("#Q2");

//Hamburger menu function
function hamburger() 
{
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block")
    {
        navlinks.style.display = "none";
        menuicon.style.color = "#0047AB"
    }
    else
    {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4"
    }
}
//Function to display the first answer
function ans1()
{
    heading.style.display = "block";
    answer.textContent ="Computers are not the only things in our lives that can be broken down into the same three components.";
    nextQ.style.display="block";
}
function ans2()
{
    heading.style.display = "block";
    nextQ = document.querySelector("#Q3");
    answer.textContent ="Think about it: what are the most basic organs of a computer? What fundamental systems do they require to function?";
    nextQ.style.display = "block";
}
function ans3()
{
    heading.style.display = "block";
    nextQ=document.querySelector("#ans");
    answer.textContent = "Energy to perform an action, code to tell the energy what to do, and a processor to run the code. These three components make up everything around us. See the next page for examples.";
    nextQ.style.display = "block";
}
