process.env.NODE_ENV = 'test'

var moment = require('moment');
var Code = require('code');
var Lab = require('lab');
var server = require('../server');
var bookshelf = require('../config/bookshelf');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

before(function(done) {
	bookshelf.knex.migrate.latest().then(function() {
		bookshelf.knex.seed.run().then(function() {
			done();
		});
	});
});

after(function(done) {
	bookshelf.knex('students').truncate().then(function() {
		done();
	});
});

describe('Students', function() {
	it("lists all students", function(done) {
	    var options = {
	        method: "GET",
	        url: "/api/students"
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(200);
	        var students = JSON.parse(result);
	        expect(students).to.be.instanceof(Object);
	        expect(students.students).to.be.instanceof(Array);
	        expect(students.students).to.have.length(2);
	 
	        done();
	    });
	});

	it("display a student", function(done) {
	    var options = {
	        method: "GET",
	        url: "/api/students/1"
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(200);
	        var student = JSON.parse(result);
	        expect(student).to.be.instanceof(Object);
	        expect(student.student['first_name']).to.equal('Joe');
	        expect(student.student['middle_initial']).to.equal(null);
	        expect(student.student['last_name']).to.equal('Smith');
	        expect(student.student['created_at']).to.not.equal(null);

	        done();
	    });
	});

	var localStudent = {
		student: {
			first_name: 'Jack',
			middle_initial: undefined,
			last_name: 'Johnson',
			title: 'President',
			phone_number: '(555) 222-2034',
			email: 'jjohnson@test.net',
			street_address: '123 Some Street',
			city: 'Pittsburgh',
			state: 'PA',
			zip_code: '11223'
		}
	};

	it("create a student", function(done) {
	    var options = {
	        method: "POST",
	        url: "/api/students",
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	 		if (response.statusCode === 400) {
	 			console.log(result);
	 		}
	        expect(response.statusCode).to.equal(200);
	        var student = JSON.parse(result);
	        expect(student).to.be.instanceof(Object);
	        // Set our localStudent variable for use in other tests 
	        localStudent = student;
	        expect(student.student['first_name']).to.equal('Jack');
	        expect(student.student['middle_initial']).to.equal(undefined);
	        expect(student.student['last_name']).to.equal('Johnson');
	        expect(student.student['phone_number']).to.equal('(555) 222-2034');

	        var created = moment(student.student['created_at']);
	        var updated = moment(student.student['updated_at']);

	        expect(created.isValid()).to.equal(true);
	        expect(updated.isValid()).to.equal(true);

    		var now = moment();
    		var then = moment().subtract(5, 'seconds');

    		expect(now.isAfter(created) || now.isSame(created)).to.equal(true);
    		expect(then.isAfter(created)).to.equal(false);
    		expect(now.isAfter(updated) || now.isSame(updated)).to.equal(true);
    		expect(then.isAfter(updated)).to.equal(false);
		    // Make sure our record is added
		    options = {
		        method: "GET",
		        url: "/api/students"
		    };
		 
		    server.inject(options, function(response) {
		        var result = response.result;
		 
		        expect(response.statusCode).to.equal(200);
		        var students = JSON.parse(result);
		        expect(students).to.be.instanceof(Object);
		        expect(students.students).to.be.instanceof(Array);
		        expect(students.students).to.have.length(3);
		 
		        done();
		    });
	    });

	});

	it("update a student", function(done) {
		// Modify some of the data on our student
		localStudent.student['first_name'] = 'Billy';
		localStudent.student['last_name'] = 'Smith';
		localStudent.student['phone_number'] = '(555) 111-2222';

	    var options = {
	        method: "PUT",
	        url: "/api/students/" + localStudent.student['id'],
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	 		if (response.statusCode === 400) {
	 			console.log(result);
	 		}
	        expect(response.statusCode).to.equal(200);
	        var student = JSON.parse(result);
	        expect(student).to.be.instanceof(Object);
	        // Set our localStudent variable for use in other tests 
	        localStudent = student;
	        expect(student.student['first_name']).to.equal('Billy');
	        expect(student.student['middle_initial']).to.equal(undefined);
	        expect(student.student['last_name']).to.equal('Smith');
	        expect(student.student['phone_number']).to.equal('(555) 111-2222');

	        var created = moment(student.student['created_at']);
	        var updated = moment(student.student['updated_at']);

	        expect(created.isValid()).to.equal(true);
	        expect(updated.isValid()).to.equal(true);

    		var now = moment();
    		var then = moment().subtract(5, 'seconds');

    		expect(now.isAfter(created) || now.isSame(created)).to.equal(true);
    		expect(updated.isAfter(created)).to.equal(true);
    		expect(now.isAfter(updated) || now.isSame(updated)).to.equal(true);
    		expect(then.isAfter(updated)).to.equal(false);

	        done();
	    });
	});

	it("delete a student", function(done) {
	    var options = {
	        method: "DELETE",
	        url: "/api/students/" + localStudent.student['id'],
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        expect(response.result).to.equal('{}');
		    // Make sure our record is removed
		    options = {
		        method: "GET",
		        url: "/api/students"
		    };
		 
		    server.inject(options, function(response) {
		        var result = response.result;
		 
		        expect(response.statusCode).to.equal(200);
		        var students = JSON.parse(result);
		        expect(students).to.be.instanceof(Object);
		        expect(students.students).to.be.instanceof(Array);
		        expect(students.students).to.have.length(2);
		 
		        done();
		    });
	    });
	});

	it("create a student fail first_name min length validation", function(done) {
		localStudent.student['first_name'] = 'J';

	    var options = {
	        method: "POST",
	        url: "/api/students",
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(400);
	        expect(result.validation.keys[0]).to.equal('student.first_name');

	        done();
	    });
	});

	it("create a student fail last_name required validation", function(done) {
		localStudent.student['first_name'] = 'Jack';
		localStudent.student['last_name'] = undefined;

	    var options = {
	        method: "POST",
	        url: "/api/students",
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(400);
	        expect(result.validation.keys[0]).to.equal('student.last_name');
	        expect(result.message).to.equal('last_name is required');

	        done();
	    });
	});

	it("create a student fail middle_initial max length validation", function(done) {
		localStudent.student['last_name'] = 'Johnson';
		localStudent.student['middle_initial'] = 'Long';

	    var options = {
	        method: "POST",
	        url: "/api/students",
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(400);
	        expect(result.validation.keys[0]).to.equal('student.middle_initial');

	        done();
	    });
	});

	it("create a student fail email format validation", function(done) {
		localStudent.student['middle_initial'] = undefined;
		localStudent.student['email'] = 'invalidemail';

	    var options = {
	        method: "POST",
	        url: "/api/students",
	        payload: JSON.stringify(localStudent)
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        expect(response.statusCode).to.equal(400);
	        expect(result.validation.keys[0]).to.equal('student.email');
	        expect(result.message).to.equal('email must be a valid email');

	        done();
	    });
	});
});