var mongoose = require('mongoose'),
//모듈을 받아서 변수에 담는다.
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema;

//스키마 개수이다. 
var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  //User모델의 ID를 reference하고 있을 것이다. 
  title: {type: String, trim: true, required: true},
  content: {type: String, trim: true, required: true},
  tags: [String],
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  competitionType: {type: String, trim: true, required: true},
  participant: {type: String, trim: true, required: true},
  field: {type: String, trim: true, required: true},
  startTime: {type: String, trim: true, required: true},
  endTime: {type: String, trim: true, required: true},
  sponsor: {type: String, trim: true, required: true},
  award: {type: String, trim: true, required: true},
  image: { data: Buffer, contentType: String },
  
  createdAt: {type: Date, default: Date.now}  //만들어진 날짜
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Competition = mongoose.model('Competition', schema);
//이 컬렉션의 이름을 Competition이라고 하였기 때문에 디비에는 이렇게 생길 것이다. 

module.exports = Competition;
