let add_btn=document.getElementById('add_btn')
let sub_btn=document.getElementById('sub_btn')
let mul_btn=document.getElementById('mul_btn')
let div_btn=document.getElementById('div_btn')
add_btn.addEventListener('click',e=>{
    e.preventDefault()
    let t1 = document.getElementById("text1").value;
    let t2 = document.getElementById("text2").value;
  
    document.getElementById("operative").innerHTML= 'Addition :'
    let sum= parseFloat(t1)+parseFloat(t2)
    document.getElementById("operation").innerHTML= sum
    
})
sub_btn.addEventListener('click',e=>{
    e.preventDefault()
    let t1 = document.getElementById("text1").value;
    let t2 = document.getElementById("text2").value;
   
    document.getElementById("operative").innerHTML= 'subtraction'
    let sum= parseFloat(t1)-parseFloat(t2)
    document.getElementById("operation").innerHTML= sum
    

})
mul_btn.addEventListener('click',e=>{
    e.preventDefault()
    let t1 = document.getElementById("text1").value;
    let t2 = document.getElementById("text2").value;
   
    document.getElementById("operative").innerHTML= 'multiplication'
    let sum= parseFloat(t1)*parseFloat(t2)
    document.getElementById("operation").innerHTML= sum
    

})
div_btn.addEventListener('click',e=>{
    e.preventDefault()
    let t1 = document.getElementById("text1").value;
    let t2 = document.getElementById("text2").value;
   
    document.getElementById("operative").innerHTML= 'division'
    let sum= parseFloat(t1)/parseFloat(t2)
    document.getElementById("operation").innerHTML= sum
    

})



