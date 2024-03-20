const request=require("request")

const forecast=(latitude,longtitude,callback)=>{
    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
    
    request ({url , json : true  } , (error , response) => {
    
            if (error) {
               callback("unable to connect to weather api",undefined)
            } else if (response.body.error){
               callback(response.body.error.message,undefined)
            }else {
                console.log(response.body)
                callback(undefined,{
                    name: response.body.location.name ,
                    forcast: response.body.current.condition.text,
                    region:response.body.location.tz_id ,
                    temp: response.body.current.temp_c,
                    localTime:response.body.location.localtime
                }
                 
                )
            }
        })}
        // /////////////////////////////////////////////////////
        

        module.exports=forecast