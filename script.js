let show = document.querySelector(".fa-sharp")
let menu = document.querySelector(".menu")
let cancel = document.querySelector(".cancel")
let main = document.querySelector("main")
let open = document.querySelector(".opened")


function disappear(e) {
   
    let get = e.target;

    if (get == show || get == open || get == menu  ) {    
        menu.style.width = "20rem"
        menu.style.padding = "2rem"
    }
    else{
        menu.style.width = "0"
        menu.style.padding = "0"
    }
}
main.addEventListener("click", disappear);
