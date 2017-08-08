module.exports = function(app, memberVO){
	
	// Read
	app.get('/list', function(req, res){
		memberVO.find(function(err, data){
//			res.json(data);
			res.render('list', {list:data});
		});
	});
	
	// update
	app.get('/update/:id', function(req, res){
		// _id값으로 1개의 레코드를 검색
		memberVO.findOne({_id:req.params.id}, function(err, item){
//			res.json(item);
			res.render('update_form', item);
		});
	});
	app.post('/update', function(req, res){
		memberVO.update('/list');
	});
	
	// delete
	app.get('/delate/:id', function(req, res){
		var id = req.params.id;
		memberVO.remove({_id:id}, function(err, data){
			res.redirect({_id:req.body.id}, item);
		});
	});
	
	// GREATE : insert
	// mongoDB를 대상으로 CRUD를 구현한다.
	app.get('/insert', function(req, res){
		res.render('insert_form');
	});
	
	app.post('/insert', function(req, res){		
		var vo = new add(req.body);
		vo.save(function(err, data){
			res.send('Db Insert OK');
			res.redirect('/list');
		});
	});
};