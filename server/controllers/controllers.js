var models = require('../models/models'),
    models1 = require('../models/models1'),
    models2 = require('../models/models2'),
    //models3 = require('../models/models3'),
    moment = require('moment'),
    validators = require('../validators/validators'),
    utils = require('../utils/utils');

module.exports = {
    home: {
        handler: function(request, reply) {
          reply.view('home.html');
        }
    },

    register: {
        handler: function(request, reply) {
          reply.view('registration.html');
        }
    },


    register1: {
        handler: function(request, reply) {
          reply.view('registration1.html');
        }
    },

    login: {
        handler: function(request, reply) {
          reply.view('login.html');
        }
    },

    createform: {
        handler: function(request, reply) {
          reply.view('forms.html');
        }
    },

    institutes: {
        handler: function(request, reply) {
            models2.Institute.fetchAll().then(function(institutes) {
                reply(utils.formatJson('institutes', institutes));
            });
        }
    },

    institute: {
        handler: function(request, reply) {
            new models2.Institute({id: request.params.id}).fetch().then(function(institute) {
                reply(utils.formatJson('institute', institute));
            });
        }
    },

    instituteCreate: {
        handler: function(request, reply) {
            
          new models2.Institute({college_name:  '"' + request.payload.collegename +'"',
                               college_code: '" ' + request.payload.collegecode +'"',
                               session: '" ' + request.payload.session +'"',
                               address: '" ' + request.payload.address +'"',
                               contact_number: '" ' + request.payload.contact +'"',
                               email: '" ' + request.payload.email +'"',
                               password: '" ' + request.payload.password +'"'
                               }).save().then(function(institute) {
                reply(utils.formatJson('institute', institute));
            });
        }//,
       // validate: {
           // payload: validators
        //}
    },

    /*centres: {
        handler: function(request, reply) {
            models3.Centres.fetchAll().then(function(centres) {
                reply(utils.formatJson('centres', centres));
            });
        }
    },

    centre: {
        handler: function(request, reply) {
            new models3.Centres({id: request.params.id}).fetch().then(function(centre) {
                reply(utils.formatJson('centre', centre));
            });
        }
    },
    
    centreCreate: {
        handler: function(request, reply) {
            //request.payload.centre.created_at = new Date();
            //request.payload.centre.updated_at = new Date();
            new models3.Centres({first_name:  '"' + request.payload.firstname +'"',
                               middle_name: '" ' + request.payload.middlename +'"',
                               last_name: '" ' + request.payload.lastname +'"',
                               phone_number: '" ' + request.payload.phone +'"',
                               email: '" ' + request.payload.email +'"',
                               street_address: '" ' + request.payload.saddress +'"',
                               city: '" ' + request.payload.city +'"',
                               state: '" ' + request.payload.state +'"',
                               pin_code: '" ' + request.payload.zip +'"'
                               }).save().then(function(centre) {
                reply(utils.formatJson('centre', centre));
            });
        },
        validate: {
            payload: validators
        }
    },
    
    centreUpdate: {
        handler: function(request, reply) {
            //request.payload.centre.updated_at = new Date();
            new models3.Centres(request.payload.centre).save().then(function(centre) {
                reply(utils.formatJson('centre', centre));
            });
        },
        //validate: {
          //  payload: validators
        //} 
    },

    centreDelete: {
        handler: function(request, reply) {
            new models3.(request.payload.centre).destroy().then(function(centre) {
                reply(JSON.stringify(centre));
            });
        }
    },
*/

    students: {
        handler: function(request, reply) {
            models1.Student.fetchAll().then(function(students) {
                reply(utils.formatJson('students', students));
            });
        }
    },

    student: {
        handler: function(request, reply) {
            new models1.Student({id: request.params.id}).fetch().then(function(student) {
                reply(utils.formatJson('student', student));
            });
        }
    },
    
    studentCreate: {
        handler: function(request, reply) {
            //request.payload.student.created_at = new Date();
            //request.payload.student.updated_at = new Date();
            new models1.Student({first_name:  '"' + request.payload.firstname +'"',
                               middle_name: '" ' + request.payload.middlename +'"',
                               last_name: '" ' + request.payload.lastname +'"',
                               phone_number: '" ' + request.payload.phone +'"',
                               email: '" ' + request.payload.email +'"',
                               street_address: '" ' + request.payload.saddress +'"',
                               city: '" ' + request.payload.city +'"',
                               state: '" ' + request.payload.state +'"',
                               pin_code: '" ' + request.payload.zip +'"'
                               }).save().then(function(student) {
                reply(utils.formatJson('student', student));
            });
        }/*,
        validate: {
            payload: validators
        }*/
    },
    
    studentUpdate: {
        handler: function(request, reply) {
            //request.payload.student.updated_at = new Date();
            new models1.Student(request.payload.student).save().then(function(student) {
                reply(utils.formatJson('student', student));
            });
        },
        validate: {
            payload: validators
        } 
    },

    studentDelete: {
        handler: function(request, reply) {
            new models1.Student(request.payload.student).destroy().then(function(student) {
                reply(JSON.stringify(student));
            });
        }
    },

    get_forms: {
        handler: function(request, reply) {
            models.Forms.fetchAll().then(function(forms) {
                reply(utils.formatJson('forms', forms));
            });
        }
    },

    get_forms_id: {
        handler: function(request, reply) {
            models.Forms.fetch().then(function(form) {
                reply(utils.formatJson('form', form));
            });
        }
    },

    formsCreate: {
        handler: function(request, reply) {
            
             new models.Forms({college_name:  '"' + request.payload.collegename +'"',
                               applicable_age: '" ' + request.payload.age +'"',
                               course_name: '" ' + request.payload.coursename +'"',
                               first_name: '" ' + request.payload.firstname +'"',
                               last_name: '" ' + request.payload.lastname +'"',
                               gender: '" ' + request.payload.gender +'"',
                               father_name: '" ' + request.payload.fathername +'"',
                               mother_name: '" ' + request.payload.mothername +'"',
                               gaurdian_name: '" ' + request.payload.gaurdianname +'"',
                               email_id: '" ' + request.payload.email +'"',
                               phone_number: '" ' + request.payload.contact +'"',
                               address: '" ' + request.payload.address +'"',
                               city: '" ' + request.payload.city +'"',
                               pincode: '" ' + request.payload.pin +'"',
                               state: '" ' + request.payload.state +'"',
                               country: '" ' + request.payload.country +'"',
                               matrial_status: '" ' + request.payload.material +'"',
                               primary_language: '" ' + request.payload.language +'"',
                               nationality: '" ' + request.payload.nationality +'"',
                               religion: '" ' + request.payload.religion +'"',
                               high_school: '" ' + request.payload.highschool +'"',
                               intermediate: '" ' + request.payload.intermediate +'"',
                               graduation: '" ' + request.payload.graduation +'"',
                               post_graduation: '" ' + request.payload.postgraduation +'"',
                               photo: '" ' + request.payload.photo +'"', 
                               signature: '" ' + request.payload.signature +'"'
                               
                               }).save().then(function(forms) {
                reply(utils.formatJson('forms', forms));
            });
        }//,
        //validate: {
           // payload: validators
       // }
    },

    formsUpdate: {
        handler: function(request, reply) {
            //request.payload.student.updated_at = new Date();
            new models.Forms(request.payload.forms).save().then(function(forms) {
                reply(utils.formatJson('forms', forms));
            });
        },
        validate: {
            payload: validators
        } 
    },

    formsDelete: {
        handler: function(request, reply) {
            new models.Forms(request.payload.forms).destroy().then(function(forms) {
                reply(JSON.stringify(forms));
            });
        }
    },



   assets: {
    handler:{
      directory:{
        path: "../client/public"
      }
    }

   }/*,


home: {
   handler: function (request, reply) {
        reply('<html><head><title>Login page</title></head><body><h3>Welcome '
      + request.auth.credentials.name
      + '!</h3><br/><form method="get" action="/logout">'
      + '<input type="submit" value="Logout">'
      + '</form></body></html>');
   }
},

login: {
   handler: function (request, reply) {

    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var account = null;

    if (request.method === 'post') {

        if (!request.payload.username ||
            !request.payload.password) {

            message = 'Missing username or password';
        }
        else {
            account = users[request.payload.username];
            if (!account ||
                account.password !== request.payload.password) {

                message = 'Invalid username or password';
            }
        }
    }

    if (request.method === 'get' ||
        message) {

        return reply('<html><head><title>Login page</title></head><body>'
            + (message ? '<h3>' + message + '</h3><br/>' : '')
            + '<form method="post" action="/login">'
            + 'Username: <input type="text" name="username"><br>'
            + 'Password: <input type="password" name="password"><br/>'
            + '<input type="submit" value="Login"></form></body></html>'
            );
    }

     var uuid = 1; 

    var sid = String(++uuid);
    request.server.app.cache.set(sid, { account: account }, 0, function (err) {

        if (err) {
            reply(err);
        }

        request.auth.session.set({ sid: sid });
        return reply.redirect('/');
    });
}
},

logout:{
    handler:function (request, reply) {

    request.auth.session.clear();
    return reply.redirect('/');
}
}*/

};