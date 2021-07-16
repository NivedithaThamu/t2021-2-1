let form=document.querySelector('form')
var odds=""
form.addEventListener('submit',(e)=>{
    e.preventDefault()
let input=form.in.value
for (i=1;i<=input;i++)
{
    if(i%2!=0)
    {
    odds += i +"<br>"

    console.log(i)
    
    } 
}
document.getElementById('display').innerHTML=odds

})
function Refresh(c)
{
    document.getElementById('c').innerHTML=" "
}