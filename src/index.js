const express = require('express');
const citiesRouter = require('./routes/cities');
const restaurantsRouter = require('./routes/restaurants');
const barsRouter = require('./routes/bars');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/cities', citiesRouter);
app.use('/api/cities', restaurantsRouter);
app.use('/api/cities', barsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
