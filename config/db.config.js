import mysql from "mysql";


const bdconn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_superheroe"
})
bdconn.connect((err)=>{
    if(err) throw err;
    console.log("base de datos conectada")
})

export default bdconn

