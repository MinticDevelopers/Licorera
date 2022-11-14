const cliente = require ("../models/auth")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); 


exports.getClientes = async (req,res,next)=>{

    const clientes= await cliente.find();

    res.status(200).json({
        success:true,

        cantidadItems: clientes.length,
        clientes 
    })
}


// Consulta de clientes por ID

exports.getClientesByID= async(req,res,next)=>{
    const client = await cliente.findById(req.params.id)
    if (!client){
        return res.status(404).json({
            sucess:false,
            message: "El cliente solicitado no se encuentró"
        })
    }
    res.status(200).json({
        success:true,
        message:"A continuación se muestran los resultados obtenidos",
        client 
    }) 

}


//Update de un cliente
exports.UpdateClient = async (req,res,next)=>{
    let client = await cliente.findById(req.params.id)
    if (!client){
        return res.status(404).json({
            sucess:false,
            message: "El cliente solicitado no se encuentró"
        })
    }

    
    client= await cliente.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
        
    });

    
    res.status(200).json({
        success:true,
        message:"Cliente actualizado satisfactoriamente.",
        client 
    })    
}


// Eliminar un Cliente

exports.deleteClient = async (req,res,next)=>{
    const client = await cliente.findById(req.params.id)
    if (!client){
        return res.status(404).json({
            sucess:false,
            message: "El usuario solicitado no se encontró"
        })
    }

    await client.remove();
    res.status(200).json({
        success:true,
        message:"Usuario eliminado exitosamente.",
        client
    })    
}    


//crear nuevo Cliente 
exports.newCliente=async(req,res,next)=>{
    const client= await cliente.create(req.body);

    res.status(201).json({
        success:true,
        client
    })
}

// hablemos de FETCH (ES UN MÓDULO) // esto es opcional segun cada desarrollador

//ver todos los productos 
//ver por ID

function verClientes(){
    fetch('http://localhost:4000/api/clientes')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verClientes(); //LLamamos al metodo creado para probar la consulta

//Ver por id
function verClientePorID(id){
    fetch('http://localhost:4000/api/cliente/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

// verClientePorID('63456a8d9163cb9dbbcaa235'); Probamos el metodo con un id
