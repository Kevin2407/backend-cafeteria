import Producto from '../models/productos.models';


const cafeteriaCtrl = {};

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

cafeteriaCtrl.listarProductos = async (req, res) => {
    try {
        // obtener un arreglo con todos los documentos
        const arregloProductos = await Producto.find();
        res.status(200).json(arregloProductos);
    } catch (error) {
        console.log(error);
        res.status(500).json('No te voy a mostra los datos papilo')
    }
}

cafeteriaCtrl.eliminarProducto = async (req,res) => {
    try {
        console.log(req.params.id);
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json('Ya lo emo fusilao al objeto ese chango');
    } catch (error) {
        console.log(error);
        res.status(500).json('Ese id no existe, deja de hace invento, pelotudo')
    }
}

cafeteriaCtrl.obtenerProducto = async (req,res) => {
    try {
        const productoEncontrado = await Producto.findById(req.params.id);
        res.status(200).json(productoEncontrado);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se lo a encontrao al producto chango, volve a intenta');
    }
}


cafeteriaCtrl.editarProducto = async (req,res) => {
    try {
        console.log(req.body);
        // validar

        // actualizar
        await Producto.findByIdAndUpdate(req.params.id,req.body);

        res.status(200).json('Se cambio el producto   '+req.body);
    } catch (error) {
        console.log(error);
        res.status(404).json('No se lo a podio actualiza al producto chango')
    }
}

export default cafeteriaCtrl;