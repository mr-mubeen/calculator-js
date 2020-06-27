function inp(num){
    
   var a =  document.getElementById("inp");
    a.value += num;
}

function clr(){
     var a = document.getElementById("inp")
    a.value = ""
}

function getrslt(){
    var a = document.getElementById("inp")
    a.value = eval(a.value)
    
}

function empty(){
    var a = document.getElementById("inp")
    a.value= ""
}