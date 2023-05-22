const container=document.querySelector(".container")
const bodyEnd=document.querySelector(".body_end")
const divs=document.querySelector(".divs")
const firstPage=document.querySelector(".first_page")
const secondPage=document.querySelector(".second_page")
const thirdPage=document.querySelector(".third_page")
const end=document.querySelector(".end")
const end2=document.querySelector(".end2")
const end3=document.querySelector(".end3")

firstPage.addEventListener("click",()=>{
    secondPage.style.backgroundColor="gray" 
    firstPage.style.backgroundColor="white" 
    thirdPage.style.backgroundColor="gray" 
    end.style.display="block"
    end2.style.display="none"
    end3.style.display="none"
})

secondPage.addEventListener("click",()=>{
    firstPage.style.backgroundColor="gray"
    secondPage.style.backgroundColor="white"
    thirdPage.style.backgroundColor="gray" 
    end.style.display="none"
    end2.style.display="block"
})

thirdPage.addEventListener("click",()=>{
    firstPage.style.backgroundColor="gray"
    secondPage.style.backgroundColor="gray" 
    thirdPage.style.backgroundColor="white" 
    end.style.display="none"
    end2.style.display="none"
    end3.style.display="block"
})






