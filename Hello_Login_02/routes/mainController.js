var crypto = require('crypto')

module.exports = (app,userDTO)=>{
	app.get('/',(req,res)=>{
		let session = req.session;
		if(session.isLogin){
			
			let userType = session.isAdmin ? '관리자' : '일반사용자';
			res.render('index',{userId:session.userId,userType:userType})
		}else{
			res.render('login')
		}
	})
	
	app.post('/login',(req,res)=>{
		let userId = req.body.userId
		let password = req.body.password
		let session = req.session
		
		let encrypto = crypto
		.createHmac('sha1','1234')
		.uptate(password)
		.digest('base64')
	
		userDTO.findOne({userId:userId, password:encrypto})
			.exec((err,data)=>{
				if(data) {
					session.userId = data.userId;
					session.userisLogin = true;
					sesstion.isAdmin = data.isAdmin;
				}else{
					res.render('login');
				}
		})
	})
	
	
	app.get('/register',(req,res)=>{
		res.render('member_join')
	})
	
	app.post('/register',(req,res)=>{
		userDTO.findI()
			.count()
			.exec((err,data)=>{
				if(!data){
					req.body.isAdmin = true;
				}else{
					req.body.isAdmin = false;
				}
				
				// 원래 비밀번호를 추출
				let password = req.body.password;
				
				//암호화 시키고
				let encrypto = crypto
								.createHmac('sha1','1234')
								.uptate(password)
								.digest('base64')
				// 암호화 시킨 비번을 다시 할당
								req.body.password = ecrypto
				
				let vo = userDTO(req.body)
				vo.save((err,data)=>{
					res.json(data)
				})
			})
	})
}