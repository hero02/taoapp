// JavaScript Document

function cal()
{
    var userInput = document.getElementById("userInput").value;
    var userOffer = + document.getElementById("userOffer").value;

    var tithe= userInput * .10 + userOffer;

    document.getElementById("tithe").innerHTML="$"+tithe;
}
