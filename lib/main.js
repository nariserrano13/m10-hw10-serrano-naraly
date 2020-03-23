"use strict";

// It is always helpful to use comments in your code!
var boiling = function boiling() {
    return "212";
};
document.getElementById('boiling-temp').innerHTML = boiling();

var freezing = function freezing() {
    return "32";
};
document.getElementById('freezing-temp').innerHTML = freezing();

var waterTemp = function waterTemp() {
    return "72";
};
document.getElementById('water-temp').innerHTML = waterTemp();

//setTimeout method 
//created variables for elements  
//wrote function inside the setTimeout method
//used if/else because had multiple conditions each with diff element classes to alter
var boilingFooter = document.getElementById('boiling');
var frozenFooter = document.getElementById('frozen');
var goodTempFooter = document.getElementById('good-temp');

setTimeout(function () {
    if (waterTemp() >= 212) {
        boilingFooter.classList.remove('hide');
        boilingFooter.classList.add('show');
    } else if (waterTemp() <= 32) {
        frozenFooter.classList.remove('hide');
        frozenFooter.classList.add('show');
    } else {
        goodTempFooter.classList.remove('hide');
        goodTempFooter.classList.add('show');
    }
}, 3000);