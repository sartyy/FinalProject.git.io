function subscribe(){
    document.getElementById("email-box").value = ""
    var msg = document.getElementById("thanks").innerHTML = "Thanks for submitting!"
    setTimeout((subscribe) => {
           msg = document.getElementById("thanks").innerHTML = ""
    }, 4000);
}
function submit(){
    document.getElementById("fname-fill-up").value = ""
    document.getElementById("lname-fill-up").value = ""
    document.getElementById("email-fill-up").value = ""
    document.getElementById("message-fill-up").value = ""
    var msg2 = document.getElementById("thanks2").innerHTML = "Thanks for submitting!"
    setTimeout((submit) => {
           msg2 = document.getElementById("thanks2").innerHTML = ""
    }, 4000);
}