function notFoundHandler(req, res) {
  res.status(404).json({
    error: 'Not found',
    path: req.originalUrl,
  });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    error: 'Internal server error',
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
