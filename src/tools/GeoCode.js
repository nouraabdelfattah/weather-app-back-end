const request=require("request")


const geocode=(countryName,callback)=>{
const geoCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/" +countryName+ ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
 
request({url:geoCodeUrl,json:true},(error,responce)=>{
// console.log(responce.body)

if(error){
    callback("unable to connect to website",undefined)

}else if(responce.body.message){
   callback(responce.body.message,undefined)
}else if(responce.body.features.length==0){
    callback("unable to find location",undefined)
}

else{
    callback(undefined,{
         longtitude:responce.body.features[0].center[0],
     latitude:responce.body.features[0].center[1],
 
    })
    
    
   
}})}
module.exports=geocode