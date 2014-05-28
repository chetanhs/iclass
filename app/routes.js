module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/', function(req, res) {
    res.redirect('/home');
  });

  app.get('/home', function(req, res) {
		res.render('home', {title: 'Welcome', css: 'pricing'});
	});

  app.get('/classifieds/listings', function(req, res) {
    res.render('classifieds/listing', {title: 'Automobile', css: 'blog', realativePath: "../"});
  });

  app.get('/classifieds', function(req, res) {
    res.render('classifieds/index', {title: 'Categories', css: 'pricing'});
  });

};