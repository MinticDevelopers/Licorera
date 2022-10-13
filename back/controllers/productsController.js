exports.getProducts=(req,res,next) => {
    res.status(200).json({
        sucess: true,
        message: "Se visualizan todos los productos"
    })
}