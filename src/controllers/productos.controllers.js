import Producto from '../models/productos.models';


const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req,res)=>{
    res.send("aca esta el controler del get papilo");
}

cafeteriaCtrl.post = async (req, res) => {
    console.log(req.body);

    try {
        const {nombreProducto, precioProducto, categoria} = req.body;

        //hacer validaciones
        //crear un objeto en la BD
        const productoNuevo = new Producto({
            nombreProducto,
            precioProducto,
            categoria
        });
        // guardar el nuevo producto
        await productoNuevo.save();

        //enviar respuesta al front
        res.status(201).json('Producto agregado a la BD');


    } catch (error) {
        console.log(error)
        // enviar respuesta al front
        res.status(500).json('Mira papilo, no te vua toma eso datos, no le rompa lo huevo a mi base de dato quere');
    }

}

export default cafeteriaCtrl;