// It is always helpful to use comments in your code!
//created variable, set value to a function, set function to equal "a number"
const boiling =()=> "212"
document.getElementById('boiling-temp').innerHTML=boiling();

const freezing =()=>"32"
document.getElementById('freezing-temp').innerHTML=freezing();

const waterTemp =()=>"72"
document.getElementById('water-temp').innerHTML=waterTemp();

//setTimeout method 
//created variables for elements  
//wrote function inside the setTimeout method
//used if/else because had multiple conditions each with diff element classes to alter
const boilingFooter = document.getElementById('boiling');
const frozenFooter = document.getElementById('frozen');
const goodTempFooter = document.getElementById('good-temp');


setTimeout( function(){
    if(waterTemp() >= 212){
        boilingFooter.classList.remove('hide'); 
        boilingFooter.classList.add('show');
    }else if(waterTemp() <= 32){
        frozenFooter.classList.remove('hide'); 
        frozenFooter.classList.add('show');
    }else{
        goodTempFooter.classList.remove('hide'); 
        goodTempFooter.classList.add('show');
    }
}, 3000);

