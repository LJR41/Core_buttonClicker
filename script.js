function logOut(element){
    if (element.innerText == "Login"){
    element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }

}

function popUp(){
    alert("Ninja was Liked!")

}

function hide(element){
    element.remove()
}