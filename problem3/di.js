let form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let n= form.number.value
  let m=""
  for(let i=0;i<=n;i++){
      for(let j=1;j<=i;j++){
            
          m+=j
          
        //   console.log(m)
          
      }
      document.getElementById('display').innerHTML= m+="<br>"
    
  }
  for(let i=1;i<=n-1;i++){
    for(let j=1;j<=n-i;j++){
    
        m+=j
        
        
    }
    document.getElementById('display').innerHTML= m+="<br>"
}
console.log(m)
})