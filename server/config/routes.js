var controllers = require('../controllers/controllers');

module.exports = [{
    method: 'GET',
    path: '/api/home',
    config: controllers.home
},{
    method: 'GET',
    path: '/api/register',
    config: controllers.register
},{
    method: 'GET',
    path: '/api/register1',
    config: controllers.register1
},{
    method: 'GET',
    path: '/api/login',
    config: controllers.login
},{
    method: 'GET',
    path: '/api/createform',
    config: controllers.createform
},{
    method: 'GET',
    path: '/api/forms',
    config: controllers.get_forms
},{
    method: 'GET',
    path: '/api/forms/{id}',
    config: controllers.get_forms_id
},{
    method: 'POST',
    path: '/api/forms',
    config: controllers.formsCreate
},{
    method: 'PUT',
    path: '/api/forms/{id}',
    config: controllers.formsUpdate
},{
    method: 'DELETE',
    path: '/api/forms/{id}',
    config: controllers.formsDelete
},{
    method: 'GET',
    path: '/api/institutes',
    config: controllers.institutes
},{
    method: 'GET',
    path: '/api/institutes/{id}',
    config: controllers.institute
},{
	method: 'POST',
	path: '/api/institutes',
	config: controllers.instituteCreate
},/*{
    method: 'GET',
    path: '/api/centres',
    config: controllers.centres
}, {
    method: 'GET',
    path: '/api/centres/{id}',
    config: controllers.centre
}, {
    method: 'POST',
    path: '/api/centres',
    config: controllers.centreCreate
}, {
    method: 'PUT',
    path: '/api/centres/{id}',
    config: controllers.centreUpdate
}, {
    method: 'DELETE',
    path: '/api/centres/{id}',
    config: controllers.centreDelete
},*/{
    method: 'GET',
    path: '/api/students',
    config: controllers.students
}, {
    method: 'GET',
    path: '/api/students/{id}',
    config: controllers.student
}, {
	method: 'POST',
	path: '/api/students',
	config: controllers.studentCreate
}, {
	method: 'PUT',
	path: '/api/students/{id}',
	config: controllers.studentUpdate
}, {
	method: 'DELETE',
	path: '/api/students/{id}',
	config: controllers.studentDelete
},{
    method:'GET',
    path:'/assets/{params*}',
    config:controllers.assets

}/*,{ 
    method:'GET',
    path: '/', 
    config:controllers.home  
},{ 
    method: 'GET', 
    path: '/login', 
    config:controllers.login,
    auth: { mode: 'try' }//, 
   // plugins: { 'hapi-auth-cookie': { redirectTo: false } }

 },{
    method: 'POST', 
    path: '/login', 
    config:controllers.login,
    auth: { mode: 'try' }//, 
    //plugins: { 'hapi-auth-cookie': { redirectTo: false } }

 },{ method: 'GET',
     path: '/logout', 
     config: controllers.logout 
 }
*/

];
