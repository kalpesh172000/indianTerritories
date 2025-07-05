import error from '../config/apiResponse'

const notFound = (req,res,next) => {
    res.status(404).json(error(`request not found - ${req.originalUrl}`, 404));
}

export default notFound();
