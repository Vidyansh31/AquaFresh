//Creating Async Error handler
module.exports = AsyncHandler => (req,res,next) => {

    Promise.resolve(AsyncHandler(req,res,next)).catch(next);
}