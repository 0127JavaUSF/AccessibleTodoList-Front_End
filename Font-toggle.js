let toToggle = true;

function toggleMenu(){
    
    if (toToggle) {
        window.document.getElementById("font_menu").setAttribute("style","visibility:hidden;");
        window.document.getElementById("font_menu").setAttribute("style","background-color: blue;");
        toToggle = false;
    }
    else  
    {
        window.document.getElementById("font_menu").setAttribute("style","visibility:visible;");
        toToggle = true;
    }
}

function toComic(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Comic Sans MS;");    
}

function toArial(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Arial;");    
}

function toTahoma(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Tahoma");    
}

function toVerdana(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Verdana");    
}

function toGothic(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Gothic");    
}

function toTrebuchet(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Trebuchet");    
}

function toBookman(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Bookman");    
}

function toCourier(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Courier");    
}

function toGeorgia(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Georgia");    
}

function toHelvetica(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Helvetica");    
}

function toImpact(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Impact");    
}

function toTimes(){
    window.document.getElementsByTagName('body')[0].setAttribute("style","font-family:Times");    
}


