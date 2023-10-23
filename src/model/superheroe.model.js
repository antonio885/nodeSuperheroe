
import dbConn from "./../../config/db.config.js"

function Superheroes  (superheroes) {
    this.nombre = superheroes.nombre
    this.apellido = superheroes.apellido
    this.nombre_superheroe = superheroes.nombre_superheroe
    this.ciudad = superheroes.ciudad
}
Superheroes.create = (nuevo_superheroes,result)=>{
    dbConn.query("INSERT INTO superheroe set ?",nuevo_superheroes, (err,res)=>{
        if(err){
            console.log("Eror",err);
            result(err, null);


        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
}
Superheroes.findById = (id,result)=>{
    dbConn.query("SELECT * FROM superheroe WHERE id=?",id,(err,res)=>{
        if(err){
console.log("error",err);
result(err, null);
        }else{
            result(null, res)

            }
    })
}

Superheroes.findAll = (result) =>{
    dbConn.query("SELECT * FROM superheroe",(err,res)=>{
        if(err){
            console.log("error",err);
            result(err, null);
        }else{
            console.log("superheroe",res);
            result(null, res)
        }
    })
}
Superheroes.update = (id,superheroe,result)=>{
    dbConn.query("UPDATE superheroe set nombre=?,apellido=?,nombre_superheroe=?,ciudad=? WHERE id=?",[superheroe.nombre,
        superheroe.apellido,superheroe.nombre_superheroe,superheroe.ciudad,id
    ],(err,res)=>{
        if(err){
            console.log("error", err);
            result(err,null)

        }else{
            result(null, res)
        }
    })
}
Superheroes.delete = (id,result)=>{
    dbConn.query("DELETE  FROM superheroe WHERE id=?",id,(err,res)=>{
        if(err){
            console.log("error", err);
            result(err,null)
        }else{
           
            console.log("eliminado", res);
            result(null, res)
        }
    });
}
export default Superheroes