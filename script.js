let $ = document
let input = $.querySelector(".input")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


btn.addEventListener("click" , ()=> {
    let inputValue = Number(input.value)
    
    switch(inputValue){
        case 20:
        case 19:
        case 18:
            showResult.innerHTML = "Level A"
            input.value = ""
            break;
        
        case 17:
        case 16:
        case 15:
            showResult.innerHTML = "Level B"
            input.value = ""
            break;
        
        case 14:
        case 13:
        case 12:
            showResult.innerHTML = "Level C"
            input.value = ""
            break;
        case 11:
        case 10:
        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            showResult.innerHTML = "Level D"
            input.value = ""
            break;
        default:
            showResult.innerHTML = "Enter the correct grade"
            input.value = ""
    }
})