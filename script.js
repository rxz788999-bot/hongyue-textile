document.addEventListener("DOMContentLoaded", function(){


    console.log("Hongyue Textile Website Loaded");


    const buttons = document.querySelectorAll(".button");


    buttons.forEach(function(button){


        button.addEventListener("mouseenter",function(){

            button.style.transform="translateY(-5px)";

        });



        button.addEventListener("mouseleave",function(){

            button.style.transform="translateY(0)";

        });


    });



    const cards=document.querySelectorAll(".card");


    cards.forEach(function(card,index){


        card.style.opacity="0";


        setTimeout(function(){


            card.style.transition="0.8s";


            card.style.opacity="1";


        },300*index);


    });


});
