function love(){
 document.querySelector("#love").style=`display:none`
 document.querySelector("#none").style=`display:flex`
}
function loveExit(){
    document.querySelector("#love").style=`display:flex`
    document.querySelector("#none").style=`display:none`
   }

   function love2(){
    document.querySelector("#love2").style=`display:none`
    document.querySelector("#none2").style=`display:flex`
   }
   function loveExit2(){
       document.querySelector("#love2").style=`display:flex`
       document.querySelector("#none2").style=`display:none`
    }




function openWatch(){
    document.querySelector("#watchNone").style=`display:none`
    document.querySelector("#watch-1").style=`display:block`
}
function closeWatch(){
    document.querySelector("#watchNone").style=`display:block`
    document.querySelector("#watch-1").style=`display:none`
}




function openWatch2(){
    document.querySelector("#watchNone2").style=`display:none`
    document.querySelector("#watch-2").style=`display:block`
}

function closeWatch2(){
    document.querySelector("#watchNone2").style=`display:block`
    document.querySelector("#watch-2").style=`display:none`
}


function openObnav(){
    document.querySelector("#openObnav").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function closeObnav(){
    document.querySelector("#openObnav").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`

}


function openBlock1(){
    var y= document.querySelector("#pas").style.display;
    if(y==="none"){
        document.querySelector("#pas").style.display="block";
        document.querySelector("#pas2").style.display="none";
        document.querySelector("#pas3").style.display="none";
        document.querySelector("#pas4").style.display="none";
        document.querySelector(".name-icon i").style=` transform: rotate(90deg);`
        }else{
           document.querySelector("#pas").style.display="none";
           document.querySelector(".name-icon i").style=` transform: rotate(0deg);`
        }


}
function openBlock2(){
    var y= document.querySelector("#pas2").style.display;
    if(y=="none"){
        document.querySelector("#pas2").style.display="block";
        document.querySelector("#pas").style.display="none";
        document.querySelector("#pas3").style.display="none";
        document.querySelector("#pas4").style.display="none";
        document.querySelector("#transdomt").style=` transform: rotate(90deg);`
        }else{
           document.querySelector("#pas2").style.display="none";
           document.querySelector("#transdomt").style=` transform: rotate(0deg);`
        }


}
function openBlock3(){
    var y= document.querySelector("#pas3").style.display;
    if(y=="none"){
        document.querySelector("#pas3").style.display="block";
        document.querySelector("#pas4").style.display="none";
        document.querySelector("#pas2").style.display="none";
        document.querySelector("#pas").style.display="none";

        document.querySelector("#transdomt2").style=` transform: rotate(90deg);`
        }else{
           document.querySelector("#pas3").style.display="none";
           document.querySelector("#transdomt2").style=` transform: rotate(0deg);`
        }

}
function openBlock4(){
    var y= document.querySelector("#pas4").style.display;
    if(y=="none"){
        document.querySelector("#pas4").style.display="block";
        document.querySelector("#pas3").style.display="none";
        document.querySelector("#pas2").style.display="none";
        document.querySelector("#pas").style.display="none";
        document.querySelector("#transdomt3").style=` transform: rotate(90deg);`
        }else{
           document.querySelector("#pas4").style.display="none";
           document.querySelector("#transdomt3").style=` transform: rotate(0deg);`
        }

}
function openFilter(){
    document.querySelector("#filterModal").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function tes(){
    document.querySelector("#filterModal").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`

}

function ekran1(){
    window.location='./ekran.html'
}
function ekran2(){
    window.location='./ekran2.html'
}

function openVapros(){
    document.querySelector("#vaprosNone").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}
function ok(){
    document.querySelector("#vaprosNone").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`
}
function openPakazad(){
    document.querySelector("#pakazad").style=`display:flex`
    document.querySelector("#pakazad1").style=`display:flex`
    document.querySelector("#yopil1").style=`display:none`
}

var checkboxes = document.getElementsByClassName('input-checkbox');

Array.from(checkboxes).forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var spanElement = this.querySelector('span');
        spanElement.style.display = (spanElement.style.display === 'none') ? 'flex' : 'none';
    });
})

function openNavbar(){
    document.querySelector("#menuNav").style=`display:block`
    document.querySelector("body").style=`overflow: hidden;`
}

function closeNavbar(){
    document.querySelector("#menuNav").style=`display:none`
    document.querySelector("body").style=`overflow: scroll;`
}