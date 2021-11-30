/* //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/meritas-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/meritas-frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); */

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/meritas-app'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/meritas-ui/index.html'));
});
app.listen(process.env.PORT || 8080);
