// const routes = require("./routes/superheroe.routes");
import  Express  from "express";
import bodyParser from "body-parser";
import cors from "cors"
import routes from "./routes/superheroe.routes.js";

const app = Express()
const PORT = process.env.PORT || 3000 //cambiar la ruta a 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/api/v1/superheroe", routes)
app.listen(PORT, async ()=>{
    console.log("servidor corriendo " + PORT)

})




