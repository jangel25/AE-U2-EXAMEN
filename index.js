const mongoose=require('mongoose');
const schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var Producto=mongoose.model('User2',schema,'productos');

producto = new Producto({
    code:3,
    price:63,
    description:'Suavizante de telas',
    quantity:2,
    minimum:7
})

//Consulta de productos en reorden
Producto.find(function(error,docs){
    if(error){console.log(error); process.exit(1);}
    if(docs.length){
        console.log('\n==========PRODUCTOS EN PUNTO DE REORDEN==========');
        for(i=0;i<docs.length;i++){
            if(docs[i].quantity<=docs[i].minimum){
                console.log('\n'+'Código de producto: '+docs[i].code+'\n'+
                            'Descripción: '+docs[i].description+'\n'+
                            'Precio: '+docs[i].price+'\n'+
                            'Existencias: '+docs[i].quantity+'\n'+
                            'Punto de reorden: '+docs[i].minimum);
            }
        }
    }else{
        console.log("No hay productos para reorden");
    }
    process.exit(0);
});

Producto.update({_id:''},{$set:{price:0}},function(error){
        if(error){
            console.log(error);
        }
        console.log('Actualizado');
        process.exit(0);
});

Producto.remove({_id:''},function(error){
    if(error){console.log(error);process.exit(1);}
    console.log('Eliminado!');
    process.exit(0);
})

Producto.find(function(error,docs){
    if(error){console.log(error),process.exit(1);}
    console.log(docs);
    process.exit(0);
});

producto.save(function(error){
    if(error){console.log(error); process.exit(1)}
    console.log('Guardado');
    process.exit(0);
})

