/*
const req Time =(req, res,next)
´{

    console.log(´time:$´{date.now()´})
    next();
}

app.get('url'[vaLIDARiD],controller)

es el validator


Se pone antes del controladsor para ir procesando antes para evitar erroresa, ese es el concepto de middleware
Para valdiar se ponen corchetes cuando es mas de un middleware


*/
const {param} ={require ('express-validator'); }
const reqTime =(req, res,next)
´{

    console.log(´time:$´{date.now()´})
    next();
}

app.get('url,'[vaLIDARiD],controller)
 
app.get('url,param('iD).notEmpty()






,controller)
 



const validarId =(req,resp,next)
{
 //const nombre = req.params.nomre 

    if(req.params.id) next()

    else res.status(400).json({error :"Id invalido"})

   
///recorartorio para postmanm  en el post localhost:3000/paises/francia o(este es un parametro de ruta) ? =francia(query string)

//entrar en express-validator la guia de git hub
//primero lo instalo(aca ya esta instalado)

