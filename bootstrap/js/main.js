var myImage=document.querySelector("#image")
document.addEventListener("mousemove",function(event){
    

    myImage.style.top=event.clientY
    myImage.style.left=event.clientX

})