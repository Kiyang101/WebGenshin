let filter_count = true;
function Filter(){

    if (filter_count == true){
        document.querySelector("section.filter").style.cssText = "display: none;"
        filter_count = false;
        return
    }
    if (filter_count == false){
        document.querySelector("section.filter").style.cssText = "display: ;"
        filter_count = true;
    }
    
}