import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

//use routes here

app.get('/', (req, res) => {
    res.status(200).send('<h1>This is server</h1>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})