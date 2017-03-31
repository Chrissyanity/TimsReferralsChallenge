var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'TimsReferrals://postgres:FrontEnd@localhost:5432/TimsReferrals';
var client = new pg.Client(connectionString);

var config = {
    user: 'postgres',
    database: 'TimsReferrals',
    password: 'FrontEnd',
    host: 'localhost',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

app.use(bodyParser.json({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get('/get-referral', function(req, res) {
    var results = [];

    pg.connect(connectionString, function(err, client, done) {

        var query = client.query('SELECT * FROM referrals');

        query.on('row', function(row) {
            results.push(row);
        });
        query.on('end', function() {
          console.log(results);
            client.end();
            return res.json(results);
        });
    });
});

app.post('/add-referral', function(req, res, next) {
    var results = [];
    var data = {
        linktitle: req.body.linktitle,
        clicks: req.body.clicks
    };

    pg.connect(connectionString, function(err, client, done) {

        client.query('INSERT INTO referrals(linktitle, clicks) values($1, $2)', [data.linktitle, 0]);
        var query = client.query('SELECT * FROM referrals');

query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                console.log(results);
                client.end();
                return res.json(results);
            });

        });

    });


app.put('/edit-referral/:id', function(req, res, next) {
    var results = [];
    var id = req.params.id;
    var data = {
        linktitle: req.body.linktitle
    };
    pg.connect(connectionString, function(err, client, done) {

        client.query('UPDATE referrals SET linktitle = ($1) WHERE id = ($2)', [data.linktitle, id]);
var query = client.query('SELECT * FROM referrals');

            query.on('row', function(row) {
                results.push(row);

            });
            query.on('end', function() {
                client.end();
                return res.json(results);
            });
        });
    });


app.delete('/delete-referral/:id', function(req, res, next) {
    var results = [];
    var id = req.params.id;

    pg.connect(connectionString, function(err, client, done) {
      client.query('DELETE FROM referrals WHERE id = ($1)', [id]);
  var query = client.query('SELECT * FROM referrals');

            query.on('row', function(row) {
                results.push(row);
            });
            query.on('end', function() {
                client.end();
                return res.json(results);
            });
        });
    });


var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('PostgreSQL server running at http://localhost:%s', port);
});
