var checkboxes = document.getElementsByClassName('input-checkbox');

Array.from(checkboxes).forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    var inputN = document.querySelector(".input-variant button");
    var nextBTN = document.querySelector(".btn-next-prev button");
    var spanElement = this.querySelector('span');
    
    if (spanElement.style.display === 'none') {
      inputN.style.background='#2F80ED'
      nextBTN.style.background='#2F80ED'
      spanElement.style.display = 'flex';
    } else {
      inputN.style.background='#83A1C9'
      nextBTN.style.background='#83A1C9'
      spanElement.style.display = 'none';
    }
  });
});


var checkboxes = document.getElementsByClassName('input-checkbox1');

Array.from(checkboxes).forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var btnNextPrev = document.querySelector("#next2");
        var inputN = document.querySelector("#input-push1");
        var nextBTN2 = document.querySelector("#next2-btn");
        var spanElement = this.querySelector('span');
        
        if (spanElement.style.display === 'none') {
            inputN.value = "Ваш вариант";
            btnNextPrev.style.background = '#2F80ED';
            nextBTN2.style.background = '#2F80ED';
            spanElement.style.display = 'flex';
        } else {
            inputN.value = "";
            btnNextPrev.style.background = '#83A1C9';
            nextBTN2.style.background = '#83A1C9';
            spanElement.style.display = 'none';
        }
    });
});

var checkboxes = document.getElementsByClassName('input-checkbox2');

Array.from(checkboxes).forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    var inputN = document.querySelector("#next5-btn");
    var spanElement = this.querySelector('span');
    
    if (spanElement.style.display === 'none') {
      inputN.style.background='#2F80ED'
      spanElement.style.display = 'flex';
    } else {
      inputN.style.background='#83A1C9'
      spanElement.style.display = 'none';
    }
  });
});


var newData = [];

function push() {
    const inputElement = document.querySelector('#input-push1');
    const value = inputElement.value;

    if (value !== '') {
        newData.push(value);
        document.querySelector(".input-variant button").style=`background:#83A1C9;`
        document.querySelector(".btn-next-prev button").style=`background:#2F80ED;`
        document.querySelector('.viber-close').innerHTML = newData
            .map((item , key) => `
                <div class="bnt-x">
                <span>${item}</span>
                <div class="close-x" ><i onclick="minus('${key}')" class='bx bx-x'></i></div>
        </div>
            `)
            .join('');

        inputElement.value = '';

    }
    
}



function minus(key) {
    newData.splice(key, 1);
    document.querySelector('.viber-close').innerHTML = newData
        .map((item, key) => `
            <div class="bnt-x">
                <span>${item}</span>
                <div class="close-x" onclick="minus(${key})"><i class='bx bx-x'></i></div>
            </div>
        `)
        .join('');
}


function next() {
  var nextButton = document.querySelector(".btn-next-prev button");
  var computedStyle = getComputedStyle(nextButton);
  var nextButtonBgColor = computedStyle.backgroundColor;

  if (nextButtonBgColor === 'rgb(47, 128, 237)') {
    document.getElementById("birincisi").style.display = "none";
    document.getElementById("ikincisi").style.display = "block";

    document.querySelector(".line-avtive-1").style.background = "#E5E5E5";
    document.querySelector(".line-avtive-2").style.background = "#83A1C9";
  } else {
    console.log('hello');
  }
}

var newData2 = []

function test() {
    var input = document.querySelector("#input-push2").value
    if(input !== ''){
        newData2.push(input)
        document.querySelector("#next2").style=`background:#83A1C9;`
        document.querySelector("#next2-btn").style=`background:#2F80ED;`
        document.querySelector('.viber-close2').innerHTML = newData2
        .map((item, key) => `
          <div class="bnt-x2">
            <span>${item}</span>
            <div class="close-x2"><i onclick="minus2(${key})" class='bx bx-x'></i></div>
          </div>
        `)
        .join('');
  
      document.querySelector("#input-push2").value=''
    }
  }
  function minus2(key){
    newData2.splice(key, 1);
    document.querySelector('.viber-close2').innerHTML = newData2
        .map((item, key) => `
          <div class="bnt-x2">
            <span>${item}</span>
            <div class="close-x2"><i onclick="minus2(${key})" class='bx bx-x'></i></div>
          </div>
        `)
        .join('');

        
  }


  function nazad(){
    document.getElementById("birincisi").style=`display:block`
    document.getElementById("ikincisi").style=`display:none`
    // rang
    document.querySelector(".line-avtive-1").style=` background: #83A1C9;`
    document.querySelector(".line-avtive-2").style=` background: #E5E5E5;`
  }

  function nazad2(){
    document.getElementById("uchinchisi").style=`display:none`
    document.getElementById("ikincisi").style=`display:block`
    // rang
    document.querySelector(".line-avtive-2").style=` background: #83A1C9;`
    document.querySelector(".line-avtive-3").style=` background: #E5E5E5;`
  }


  function nazad4(){
    document.getElementById("uchinchisi").style=`display:block`
    document.getElementById("tortinchisi").style=`display:none`

    document.querySelector(".line-avtive-3").style=` background: #83A1C9;`
    document.querySelector(".line-avtive-4").style=` background: #E5E5E5;`
  }

  function nazad5(){
    document.getElementById("tortinchisi").style=`display:block`
    document.getElementById("besh").style=`display:none`

    document.querySelector(".line-avtive-4").style=` background: #83A1C9;`
    document.querySelector(".line-avtive-5").style=` background: #E5E5E5;`
  }

  function nazad6(){
    document.querySelector(".main-2").style=`display:none`
    document.querySelector(".main").style=`display:block`
    document.querySelector("body").style=`background:white`

    document.querySelector(".line-avtive-4").style=` background: #E5E5E5;`
    document.querySelector(".line-avtive-5").style=` background: #83A1C9;`
  }

  function next2(){

    var nextButton = document.querySelector("#next2-btn");
    var computedStyle = getComputedStyle(nextButton);
    var nextButtonBgColor = computedStyle.backgroundColor;
  
    if (nextButtonBgColor === 'rgb(47, 128, 237)') {
      document.getElementById("ikincisi").style.display = "none";
      document.getElementById("uchinchisi").style.display = "block";
  
      document.querySelector(".line-avtive-2").style.background = "#E5E5E5";
      document.querySelector(".line-avtive-3").style.background = "#83A1C9";
    } else {
      console.log('hello2');
    }

  }
  function next3(){
    document.getElementById("uchinchisi").style=`display:none`
    document.getElementById("tortinchisi").style=`display:block`

    document.querySelector(".line-avtive-3").style=` background: #E5E5E5;`
    document.querySelector(".line-avtive-4").style=` background: #83A1C9;`
  }

  function next4(){
    document.getElementById("tortinchisi").style=`display:none`
    document.getElementById("besh").style=`display:block`
   

    document.querySelector(".line-avtive-4").style=` background: #E5E5E5;`
    document.querySelector(".line-avtive-5").style=` background: #83A1C9;`
  }

  function next5(){
    document.querySelector(".main-2").style=`display:block`
    document.querySelector(".main").style=`display:none`
    document.querySelector("body").style=`background:#EEEEEE`
    document.querySelector("#becka").style=`background:none `

    document.querySelector("#te").style=` background: #E5E5E5;`
    document.querySelector("#tes").style=` background: #83A1C9;`
  }
  function next6(){
    document.querySelector(".main-2").style=`display:none`
    document.querySelector(".thanks").style=`display:block`
    document.querySelector("body").style=`background:#EEEEEE`
    document.querySelector(".container").style=`display:none`
  }
  function relod(){
    window.location='/'
  }
  function exit(){
    window.location='/'
  }

  function x(){
    document.querySelector("#b1").style=`display:none`
  }
  function xx(){
    document.querySelector("#b2").style=`display:none`
  }

  function xxx(){
    document.querySelector("#b3").style=`display:none`
  }

      
function openWatch2(){
  document.querySelector("#watchNone2").style=`display:none`
  document.querySelector("#watch-2").style=`display:block`
}

function closeWatch2(){
  document.querySelector("#watchNone2").style=`display:block`
  document.querySelector("#watch-2").style=`display:none`
}


function openPakazad(){
  document.querySelector("#pakazad").style=`display:flex`
  document.querySelector("#pakazad1").style=`display:flex`
  document.querySelector("#yopil1").style=`display:none`
}

function openVapros(){
  document.querySelector("#vaprosNone").style=`display:block`
  document.querySelector("body").style=`overflow: hidden;
  `
}
function ok(){
  document.querySelector("#vaprosNone").style=`display:none`
  document.querySelector("body").style=`overflow: scroll;
  background:#EEEEEE;
  `
}

function openNavbar(){
  document.querySelector("#menuNav").style=`display:block`
}

function closeNavbar(){
  document.querySelector("#menuNav").style=`display:none`
}

function back(){

  var input = document.querySelector("#input-push1").value;

  if(input.length > 0 ){
    document.querySelector(".input-variant button").style=`background:#2F80ED;`
    // document.querySelector(".btn-next-prev button").style=`background:#2F80ED;`
  }else{
    document.querySelector(".input-variant button").style=`background:#83A1C9;`
    // document.querySelector(".btn-next-prev button").style=`background:#83A1C9;`


  }
}



function back2(){
  var input = document.querySelector("#input-push2").value;

  if(input.length > 0 ){
    document.querySelector("#next2").style=`background:#2F80ED;`
    document.querySelector("#next2-btn").style=`background:#2F80ED;`
  }else{
    document.querySelector("#next2").style=`background:#83A1C9;`
    document.querySelector("#next2-btn").style=`background:#83A1C9;`


  }
}

function textaria(){
  var textaria = document.querySelector("#textaria").value;
  var textaria2 = document.querySelector("#textarea2").value;
  if(textaria.length > 0  || textaria2.length > 0){
    document.querySelector("#next3-btn").style=`background:#2F80ED;`
  }else{
    document.querySelector("#next3-btn").style=`background:#83A1C9;`


  }
}

function changeButtonBackground() {
  var radios = document.querySelectorAll('input[name="name"]');
  var nextButton = document.getElementById('next4-btn');

  radios.forEach(function(radio) {
      if (radio.checked) {
          nextButton.style.background = '#2F80ED';
      }
  });
}

function inputValue(value) {
  document.querySelector("#input-push1").value = value;
}

function inputValue1(value) {
  document.querySelector("#input-push2").value = value;
}
function openVapros2(){
  document.querySelector("#vaprosNone2").style=`display:block`
  document.querySelector("body").style=`overflow: hidden;`
}
function ok2(){
  document.querySelector("#vaprosNone2").style=`display:none`
  document.querySelector("body").style=`overflow: scroll;`
}