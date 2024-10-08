const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: `./config.env` });

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});