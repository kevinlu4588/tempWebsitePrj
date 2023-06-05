
import app from './app.js'

const HOSTNAME = 'localhost';
const port =  3000;

app.listen(port, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${port}/`);
});