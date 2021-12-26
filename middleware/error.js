const errorHandler = (err, req, res, next) => {
  // Log to console for dev
  console.log(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

module.exports=errorHandler;
