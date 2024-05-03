import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoute from './routes/userRoute.js'
// import protectedRoute from './routes/protectedRoute.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/user', userRoute);
// app.use('/protected', protectedRoute);


app.get('/', (req, res) => {
    res.status(200).send('This is server');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})