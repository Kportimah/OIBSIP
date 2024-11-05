//Temporature Cnverter By Kportimah Gideon

const input = document.getElementById("input-field")
const convertBtn = document.querySelector(".convertBtn")
const tempOption = document.querySelectorAll("input[type = radio]")
const display = document.querySelector(".display span")

// initialize the input to be zero
input.value = 0

convertBtn.addEventListener("click", function(){
    // wrap the input value in a Number object to change it into a number
    const userInput = Number(input.value)

    //validate  whether the input field is empty and whether its a type of number
    if(userInput !== "" && (typeof userInput) === "number" ){

        //How to change from fahrenheits to celcius
        const temp_to_Celcius = (userInput - 32)* 5/9 

        //formula to change from celcius to fahrenheit
        const temp_to_Fahrenheit = (userInput * 9/5) + 32
        
        // this is where the option chosen is taken by the variable
        let tempChoice;

        //this is where the code loops to check which one is clicked
        tempOption.forEach(btn => {
            if(btn.checked){
                tempChoice = btn.value
            }
        })

        //shows the result 
        if(tempChoice === "Fahrenheit"){
            display.innerHTML = temp_to_Celcius + " &deg;C"
        }
        else{
            display.innerHTML = temp_to_Fahrenheit + " &deg;F"
        }
    }

})