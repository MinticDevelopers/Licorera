const mongoose = require ("mongoose")


const productsSchema= mongoose.Schema({
    nombre:{
        type :String,
        required:[true,"Por favor registre el nombre del producto."],//Se requiere obligatoriamente el ingreso del nombre del producto
        trim: true,//el trim elimina los espacios en blanco al principio y al final si llegasen a existir
        maxLength: [120, "El nombre del producto no debe exceder los 120 caracteres. "]
    }, 
    precio:{
        type:Number,
        required: [true,"Por favor registre el precio del producto."],
        //los número no tienen espacios en blanco por lo cual no se hace necesario el trim
        maxLength:[8, "El precio del producto unitario no debe exceder el monto de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type: String,
        required: [true,"Por favor ingrese la descripción del producto."]
    },
    Calificación:{
        type:Number,
        default: 0
    },
    Imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    categoría:{
        type:String,
        required:[true,"Por favor seleccione la categoría del producto." ],
        enum:{
            values:[
                "Vinos",
                "Licores",
                "Tequilas",
                "Coctelería",
                "bebidas sin alcohol",
                "Alimentos o Snacks"
            ]
        }
    },
    vendedor:{
        type: String,
        required:[true, "Por favor ingrese el vendedor del producto."]
    },
    inventario:{
        type:Number,
        required:[true,"Por favor registre el stock del producto."],
        maxLength:[5,"La cantidad máxima del producto no puede exceder de 99999" ],
        default: 0
    },
    numCalificaciones:{
        type:Number,
        default: 0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:[true, "Inserte su comentario"]
            }

        }
    ],
    fechacreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model("productos",productsSchema)