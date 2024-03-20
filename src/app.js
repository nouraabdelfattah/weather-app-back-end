
const  express = require("express")
const app = express()

const port =  process.env.PORT || 3000
const geocode=require("./tools/GeoCode")
const forcast=require("./tools/forcast")

///////////////////////////////////////////
const path=require("path")
const x=path.join(__dirname,"../public")
app.use(express.static(x))
///////////////////////////////////////////////////////
app.set("view engine","hbs")

const viewsPath=path.join(__dirname,"../temp1/views")
app.set("views",viewsPath)
/////////////////////////////////////////////////////////////////////////////////////////


app.get("/",(req,res)=>{
    res.render('index',{
        title:"Welcome to WeathCast...",
        desc:"This is Home page"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address)
      return res.send  ({
        error:"You must provide an address"
    })

    geocode(req.query.address,(error,data)=>{
if(error){
    return res.send({error})
}
    
    forcast(data.latitude,data.longtitude,(error,forcastData)=>{
        if(error){
            return res.send({error})
        }res.send({
            forcast:forcastData.forcast,
            location:req.query.address,
            longtitude:data.longtitude,
            latitude:data.latitude,
            capital:forcastData.region,
            temp:forcastData.temp,
            localTime:forcastData.localTime
        })
    })
 } )

})
app.listen(port , () => {
    console.log(`app is listening on port  ${port}`)
})
