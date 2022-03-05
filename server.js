const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');


const app = express();





// middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));


// routes for services
const serviceRouter = require('./routes/serviceRouter.js')
app.use('/api/services', serviceRouter)

// routes for trainings
const trainingRouter = require('./routes/trainingRouter.js')
app.use('/api/training', trainingRouter);



// routes for orders
const orderRouter = require('./routes/orderRouter.js')
app.use('/api/order', orderRouter);


// routes for admissions
const admissionRouter = require('./routes/admissionRouter.js')
app.use('/api/admission', admissionRouter);



// static foleder
app.use('/images', express.static('./images'))


app.get('/', (req, res) => {
    res.send('Hello from server')
})




// PORT set
const PORT = process.env.PORT || 8081;



app.use((err, req, res, next) => {
    console.log(err.message)
})


// listening port
app.listen(PORT, () => {
    console.log('server is running on the port of' + PORT)
})