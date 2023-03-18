const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req,res)=>{
    res.send("aca esta el controler del get papilo");
}

cafeteriaCtrl.postPrueba = (req, res) => {
    console.log(req.body);
    res.send('este es el controller del post papilo');
}

export default cafeteriaCtrl;