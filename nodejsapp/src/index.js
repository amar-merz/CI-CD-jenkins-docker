import express from 'express';
import Joi from 'joi'

const app = express();
app.use(express.json())
const courses =[

	{id:1, name: 'course1'},	
	{id:2, name: 'course2'},
	{id:3, name: 'course3'}

]
app.get('/api/courses/:id',(req,res)=>{

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) re.status(404).send('The course with a given ID not found');
  res.send(course);

})


app.post ('/api/courses',(req,res)=>{

	const schema =Joi.object( { name: Joi.string().min(3).required()});
	

	const result = schema.validate(req.body);

	if(result.error){
	 res.status(400).send(result.error.message);
	}
   
	const course = {
	 id: courses.length +1,
	 name:req.body.name
	};

	courses.push(course);
	res.send(course);

})
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`Listening on port ${port}...`));
