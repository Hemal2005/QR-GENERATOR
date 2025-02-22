function genQr(){
    let qrContainer=document.getElementById("qrBox")
    let inputText=document.getElementById("input_box").value

    if(inputText.trim()===""){
        alert("Please Fill the input field");
        return;
    }

    qrContainer.innerHTML="";

    new QRCode(qrContainer,{
        text:inputText,
        width:200,
        height:200
    })
}