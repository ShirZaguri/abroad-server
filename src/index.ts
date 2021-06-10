import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import mongoose from 'mongoose';

// Start the server
const port = Number(process.env.PORT || 3000);
// const MONGODB_URI = process.env.MONGODB_URI || '';

mongoose
    .connect(
        'mongodb+srv://shirza:Aa123456@abroad.ka6kd.mongodb.net/abroad?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        app.listen(port, () => {
            logger.info('Express server started on port: ' + port);
        });
    });
