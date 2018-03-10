const Author = require('./author');
const Quote = require('./quote');

module.exports = function(app) {

    // Gets all authors
    app.get('/authors', function(req, res) {
        Author.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });

    // Posts new author
    app.post('/authors', function(req, res) {
        var author = new Author({ name: req.body.name });
        author.save(function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        });
    });

    // Find Author by ID
    app.get('/authors/:id', function(req, res) {
        Author.findById(req.params.id, function(err, data) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });

    // Edit an Author's name
    app.put('/authors/:id', function(req, res) {
        var author = {};
        author.name = req.body.name;
        Author.update({_id: req.params.id} , author, function(err, results) {
            if (err) {
                console.log(err);
                res.json({error:err});
            } else {
                res.json({success: results});
            }
        });
    });

    // Get all Quotes of one Author
    app.get('/authors/:id/quotes', function (req, res) {
        Author.findOne({_id: req.params.id})
        .populate('quotes')
            .exec(function(err, post) {
                res.render('post', {post:post});
            });
    });

    // Adding a quote
    app.post('/authors/:id/quotes', function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author) {
            var quote = new Quote(req.body);
            quote._author = post._id;
            quote.save(function(err) {
                author.quotes.push(comment);
                author.save(function(err) {
                    if(err) {
                        console.log('Error');
                    } else {
                        res.redirect('/');
                    }
                });
            });
        });
    });

    // Increment vote count
    app.put('/quotes/:id/up', function(req, res) {
        Quote.findById(req.params.id, function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                results.votes += 1;
                Quote.update({_id: req.params.id}, results, function(err, results) {
                    if (err) {
                        console.log(err);
                        res.json({error: err});
                    } else {
                        res.json({success: results});
                    }
                });
            }
        });
    });

}
