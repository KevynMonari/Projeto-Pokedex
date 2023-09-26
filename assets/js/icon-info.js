
function mudarModal(){

    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display

    if(actualStyle == 'block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}