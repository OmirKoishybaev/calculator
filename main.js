function getInput() {
    let input = event.target.innerText;

    let display = document.querySelector(".result")
    let aktiv = display.innerText;

    if (aktiv == "0") {
        
        if (input != "C" && input != "DEL") {
            console.log("Asd")
            $(".res").text("");
            $(".res").text(input);
            
        }}

        else {
            if (input !="C" && input != "DEL" && input !="="){
            $(".res").text(aktiv + input);
        }
        if (input == "DEL"){
            $(".res").text("0");
        }

        if (input == "C"){

            $(".res").text(aktiv.slice(0, -1));
            if (aktiv.length <= 1) {
                $(".res").text("0");
            }
        }
        if (input == "="){
            $(".res").text(eval(aktiv));
        }

    }


    /* console.log(aktiv); */
    /* console.log(input); */
}

$(document).ready(() => {

    
    const buttons = document.querySelectorAll("button")

    buttons.forEach( (button) => {
        button.setAttribute("onclick", "getInput()");
    });
});

