function menu(){
    let menuArea = document.querySelector("#menu-area")
    if ( menuArea.style.width == '130px'){
        menuArea.style.width = '0px'
    }else{
        menuArea.style.width = '130px'
    }
}