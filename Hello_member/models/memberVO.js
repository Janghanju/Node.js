var mongoose = require('mongoose');
			
			//mongoose의 Schema method를 이용해서
// schema 객채를 생성한다.
var schema = mongoose.Schema({
	strName : String, // 문자열 저장하는 field
	strAddr : String,
	intAge : Number // 숫자(정수, 실수 관계없이)
});

module.exports = mongoose.model('address', schema);