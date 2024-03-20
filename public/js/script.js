let form=document.getElementById("form1")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(document.getElementById("address").value)
    weatherFun()
    form.reset()
})

let countryF =document.getElementById("country")
const capital =document.getElementById("capital")
const forcast =document.getElementById("forcast")
const longitude =document.getElementById("longitude")
const latidude =document.getElementById("latidude")
const errorF =document.getElementById("error")
const localTime=document.getElementById("localTime")
const temp=document.getElementById("temp")

let weatherFun=async()=>{
  try{
    const addressValue=document.getElementById("address").value
    const res=await fetch("http://localhost:3000/weather?address="+addressValue)
    const data=await  res.json()
    console.log(data)
    if(data.error){
errorF.innerText=data.error
countryF.innerText=""
    }else{
      countryF.innerHTML="Country :"+" "+ data.location
        setTimeout(()=>{
          capital.innerText="Time Zone :"+" "+data.capital
        },1000)
        
        setTimeout(()=>{
          longitude.innerText="longtitude :"+" "+data.longtitude
        },2000)
        setTimeout(()=>{
          latidude.innerText="latitude :"+" "+data.latitude
        },3000)
        setTimeout(()=>{
          forcast.innerText="Forcast :"+" "+data.forcast
        },4000)
        setTimeout(()=>{
          temp.innerText="Temprature :"+" "+data.temp+" C"
        },5000)
     
        setTimeout(()=>{
          localTime.innerText="localTime :"+" "+data.localTime
        },6000)
       
        
       
        errorF.innerText=""

    }
  }
  catch(e){
console.log(e)
  }
}