const express = require ('express')
const dotenv = require ('dotenv')
// const logger = require ('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')


/**import routes */

const bootcamps = require('./routes/bootcamps')





/**load env vars */
dotenv.config({path:'./config/config.env'})

/**connect to database  after the env file*/
connectDB();

const app = express();
/**body parser */
app.use(express.json());


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
/**mount router to specific ur; */

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000

const server= app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

/**handle unhandled rejections promise rejections */
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error:${err.message}`.red);

    /**close and exit */
    server.close(()=> process.exit(1));
});