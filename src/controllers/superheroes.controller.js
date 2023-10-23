import Superheroe from "../model/superheroe.model.js"

export function create(req, res)  {
    const nuevo_superheroes = new Superheroe(req.body)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "no tienes datos" })
    } else {
        Superheroe.create(nuevo_superheroes, (err, superheroe) => {
            if (err) res.send(err)
            res.json({
                error: false,
                message: "superheroe creado",
                data: superheroe
            })
        })

    }


}
//find id
export function findById (req, res)  {
    Superheroe.findById(req.params.id, (err, superheroe) => {
        if (err) res.send(err)
        res.json(superheroe)
    })
}
export function findAll (req, res)  {
    Superheroe.findAll((err, superheroe) => {
        if (err) res.send(err)
        console.log("res", superheroe);
        res.send(superheroe)

    })
}
export function update  (req, res)  {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400)
        .send({
            error: true,
            message:"datos imcompletos"
        })
    }else{
        Superheroe.update(req.params.id,new Superheroe(req.body),(err, superheroe)=>{
            if(err) res.send(err)
            res.json({
        error: false,
        message: "heroe actualizado",
        data: superheroe
            })
        })
    }
}
export function deletes (req, res)  {
    Superheroe.delete(parseInt(req.params.id), (err,superheroe)=>{
        if(err) res.send(err)
        res.json({
    error: false,
    message: "superheroe eliminado",
    data: superheroe
        })

    })
}
export default Superheroe