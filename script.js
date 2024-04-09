

document.addEventListener("DOMContentLoaded", function(){
    
    let h1 = document.querySelector("h1");
    let pOne = document.querySelector(".p-one");
    let pTwo = document.querySelector(".p-two");
    let pThree = document.querySelector(".p-three");
    let pFour = document.querySelector(".p-four");
    let h4 = document.querySelector("h3");
    let h2 = document.querySelector("h2");

    let popUp = document.querySelector(".popup");
    let popupInput = document.querySelector(".popup-input");
    let popupbtn = document.querySelector(".popup-btn");





    pOne.textContent = "As Eid Al-Fitr arrives, I wanted to take a moment to extend my warmest wishes to you and your family.";
    
    pTwo.textContent = "Eid commemorates the conclusion of Ramadan, a month of commitment and spiritual development. It's even more important this year as we consider our fortitude and resiliency.";
    
    pThree.textContent = "I hope you have a happy Eid filled with blessings and possibilities, as well as a renewed sense of purpose and motivation.";
    
    pFour.textContent = "Wishing You a Joyous and successful Eid Al-Fitr!";
    
    h4.textContent = "Warmest Regards";
    
    h2.textContent = "Hazrat Bilal";




    function showPopup(){
        popUp.style.display = "block";
    }

    function hidePopup(){
        popUp.style.display = "none";
    }


    function inputValue(){
        let fullName = popupInput.value.trim();

        if(fullName === "" || !/^[a-zA-Z\s]+$/.test(fullName)){
            alert("Please enter a valid name with alphabets only.");
        } else {
            h1.textContent = "Dear " + fullName;
            hidePopup();
        };

    }


    showPopup();

    popupbtn.addEventListener("click", inputValue);

});

