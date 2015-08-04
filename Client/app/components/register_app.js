
var validator = require('validator');
var React = require('react');


var Form = React.createClass({
  getInitialState: function () {
    return {
      isSubmitting: false,
      
      // We add a new state here, isValid, which will be true initially.
      // When inputs are attached they will be validated, in turn 
      // changing this value to false if any inputs are invalid
      isValid: true
    };
  }, 
  componentWillMount: function () {

    this.model = {};
    this.inputs = {}; // We create a map of traversed inputs
    this.registerInputs(this.props.children); // We register inputs from the children
  },
  componentDidMount: function () {
    this.validateForm();
  },
  registerInputs: function (children) {
    React.Children.forEach(children, function (child) {

      if (child.props.name) {
        child.props.attachToForm = this.attachToForm;
        child.props.detachFromForm = this.detachFromForm;
        
        // We also attach a validate method to the props of the input so
        // whenever the value is upated, the input will run this validate method
        child.props.validate = this.validate;

      }

      if (child.props.children) {
        this.registerInputs(child.props.children);
      }
      
    }.bind(this));
  },
  

  // All methods defined are bound to the component by React JS, so it is safe to use "this"
  // even though we did not bind it. We add the input component to our inputs map

    // The validate method grabs what it needs from the component,
  // validates the component and then validates the form
  validate: function (component) {

    // If no validations property, do not validate
    if (!component.props.validations) {
      return;
    }

    // We initially set isValid to true and then flip it if we
    // run a validator that invalidates the input
    var isValid = true;
    
    // We only validate if the input has value or if it is required
    if (component.state.value|| component.props.required) {

      // We split on comma to iterate the list of validation rules
      component.props.validations.split(',').forEach(function (validation) {

        // By splitting on ":"" we get an array of arguments that we pass
        // to the validator. ex.: isLength:5 -> ['isLength', '5']
        var args = validation.split(':');

        // We remove the top item and are left with the method to
        // call the validator with ['isLength', '5'] -> 'isLength'
        var validateMethod = args.shift();

        // We use JSON.parse to convert the string values passed to the
        // correct type. Ex. 'isLength:1' will make '1' actually a number
        args = args.map(function (arg) { return JSON.parse(arg); });

        // We then merge two arrays, ending up with the value
        // to pass first, then options, if any. ['valueFromInput', 5]
        args = [component.state.value].concat(args);
        
        
        if (!validator[validateMethod].apply(validator,args)) {
          isValid = false;
        }

      }); 


      
      
    }
    
    // Now we set the state of the input based on the validation
    component.setState({
      isValid: isValid,
      
      // We use the callback of setState to wait for the state
      // change being propagated, then we validate the form itself
    }, this.validateForm);

  },
  validateForm: function () {

    // We set allIsValid to true and flip it if we find any
    // invalid input components
    var allIsValid = true;
    
    // Now we run through the inputs registered and flip our state
    // if we find an invalid input component
    var inputs = this.inputs;
    Object.keys(inputs).forEach(function (name) {

      if (!inputs[name].state.isValid) {
        ;        allIsValid = false;
      }

    });
    
    // And last, but not least, we set the valid state of the
    // form itself
    this.setState({
      isValid: allIsValid
    });
  },
  attachToForm: function (component) {
    this.inputs[component.props.name] = component;
    this.model[component.props.name] = component.state.value;

  },

  // We want to remove the input component from the inputs map
  detachFromForm: function (component) {
    delete this.inputs[component.props.name];
    delete this.model[component.props.name];
  },

  updateModel: function (component) {
    Object.keys(this.inputs).forEach(function (name) {
      this.model[name] = this.inputs[name].state.value;
    }.bind(this));
  },
  CheckRequireField:function(component){
   var allIsRequired = true;

    // Now we run through the inputs registered and flip our state
    // if we find an invalid input component
    var inputs = this.inputs;
    var selects = this.selects;
    console.log(selects);
    Object.keys(inputs).forEach(function (name) {
     if(inputs[name].props.Required)
     {
      if(!inputs[name].state.value)
        { //console.log(inputs[name]);
          allIsRequired = false;}
    }
  }.bind(this));
    return allIsRequired;
  },
  TraverseRequireError:function(component){

    // Now we run through the inputs registered and flip our state
    // if we find an invalid input component
    var inputs = this.inputs;
    console.log(inputs);
    Object.keys(inputs).forEach(function (name) {
     if(inputs[name].props.Required)
     {
      if(!inputs[name].state.value)
              { //console.log(inputs[name]);
                inputs[name].setState({isRequired:false});}
              }
            }.bind(this));

  },
 // We prevent the form from doing its native
  // behaviour, update the model and log out the value
  submit: function (event) {
    event.preventDefault();
    var require = this.CheckRequireField();
    console.log(require);
    if(require)
      { console.log("Fsd");
    this.updateModel();}
    else
      { this.TraverseRequireError();}

  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
      {this.props.children}
      <button type="submit">Submit</button>
      </form>
      );
  }
});


var Input = React.createClass({

  // Create an initial state with the value passed to the input
  // or an empty value
  getInitialState: function () {
    return {
      value: this.props.value || '',
      isValid : true ,
      isRequired : true
    };
  },
  componentWillMount: function () {
    this.props.attachToForm(this); // Attaching the component to the form
    if (this.props.required) {
      this.props.validations = this.props.validations ? this.props.validations + ',' : '';
      this.props.validations += 'isValue';
    }
    
    this.props.attachToForm(this);
  },
  componentWillUnmount: function () {
    this.props.detachFromForm(this); // Detaching if unmounting
  },
  
  // Whenever the in1put changes we update the value state
  // of this component
  setValue: function (event) {

    this.setState({
      value: event.currentTarget.value
      
      // When the value changes, wait for it to propagate and
      // then validate the input
    }, function () {
      this.props.validate(this);

    }.bind(this));
    if(this.state.value)
      { this.setState({isRequired:true});}
  },
  render: function () {
    var markAsValid = this.state.isValid;
    var markAsRequired = this.state.isRequired ;
   // console.log(markAsRequired);
   var className = '';
   var change={
    color:'green',
    fontWeight:'bold'
  };
    //console.log(this.props.width);
    // We prioritize marking it as required over marking it
    // as not valid
    if (markAsRequired) {
      className = 'required';
    } else if (!markAsValid) {
      className = 'error';
      
   }
   
      
    return (<div className="form-group">
    <input   className="form-control" name={this.props.name} onChange={this.setValue} value={this.state.value} style={{width:this.props.width}}/>
    <span style={change}>{(markAsValid &&  markAsRequired )? null :  this.props.validationError}</span>
    </div>

    );

 }
});



var Iset = React.createClass({
    render:function(){
        return (
          <label>{this.props.label}</label>
          
        );
    }
});  


var Cars = React.createClass({
    getInitialState: function () {
    return {
      value: this.props.value || '',
      
      isRequired : true
    };
  },
  componentWillMount: function () {
    this.props.attachToForm(this); // Attaching the component to the form
    this.props.attachToForm(this);
  },
  componentWillUnmount: function () {
    this.props.detachFromForm(this); // Detaching if unmounting
  },
  setValue: function (event) {

    this.setState({
      value: event.currentTarget.value
    });
  },
  render: function () {
  
    var markAsRequired = this.state.isRequired ;
   // console.log(markAsRequired);
   var className = '';
   var change={
    color:'green',
    fontWeight:'bold'
  };
    if (markAsRequired) {
      className = 'required';
    } else {
      className = 'error';
      
   }
        return (
          <div className="form-group">
         
          <span style={{fontWeight:'bold'}}> Marital Status    </span>
          <select name={this.props.name} onChange={this.setValue}>>
          <option value=""></option>
          <option value="Married">Married</option>
          <option value="Not Married">Not Married</option>
          </select>
         <span style={change}>{(this.state.value || markAsRequired)? null :  this.props.validationError}</span>
          </div>
        );
    }
}); 




var Gender =  React.createClass({
   getInitialState: function () {
    return {
      value: this.props.value || '',
      
      isRequired : true
    };
  },
  componentWillMount: function () {
    this.props.attachToForm(this); // Attaching the component to the form
    this.props.attachToForm(this);
  },
  componentWillUnmount: function () {
    this.props.detachFromForm(this); // Detaching if unmounting
  },
  setValue: function (event) {
  console.log("aniket");
    this.setState({
      value: event.currentTarget.value
    });
  },
  render: function () {
  
    var markAsRequired = this.state.isRequired ;
   // console.log(markAsRequired);
   var className = '';
   var change={
    color:'green',
    fontWeight:'bold'
  };
    if (markAsRequired) {
      className = 'required';
    } else  {
      className = 'error';
      
   }
   
return (
  <div>
          <span style={{fontWeight:'bold'}}> Gender    </span>
          <select name={this.props.name} onChange={this.setValue}>
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Not specified">Not specified</option>
          </select>
          <span style={change}>{(this.state.value || markAsRequired)? null :  this.props.validationError}</span>
          </div>);

  }
 });



var Date_Birth =  React.createClass({
  repeat_year:function(array)
  { var i;
    for( i=2015;i>=1965;i--)
    { array.push(i); }
  },
  repeat_date:function(array,max)
  { var i;
   
    for( i=1;i<=max;i++)
    { array.push(i); }
  },
  year:function(){
  var date_list=[];
  this.repeat_year(date_list);
   var createItem = function(itemText) {
      return <option key={itemText}>{itemText}</option>;
    };
    return (<select>{date_list.map(createItem)}</select>);
 },
 similar:function(num){
  var date_list=[];
  this.repeat_date(date_list,num);

   var createItem = function(itemText) {
      return <option key={itemText}>{itemText}</option>;
    };
    return (<select>{date_list.map(createItem)}</select>);
 },
 render:function(){
  //console.log(this.year);
  return(
  <div className="panel panel-default">
   <div className="panel-body">
   <label>Date of Birth</label><br/>
   <div className="row">

   <div className="col-md-4">
   <span style={{fontWeight:'bold'}}>Date :  </span>
   {this.similar(31)}
   </div>
   <div className="col-md-4">
   <span style={{fontWeight:'bold'}}>Month :  </span>
   {this.similar(12)}
   </div>
   <div className="col-md-4">
   <span style={{fontWeight:'bold'}}>Year :  </span>
   {this.year()}
   </div>
   </div>
   </div>
   </div>

    );
 }
});




 var Address= React.createClass({
  render:function(){
    return(
      <div className="form-group">
      

                    <label for="comment">Permanent  Address : </label>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                    </div>
      );
  }
 });

//var x="as";
var y = document.getElementById("variable_pass").getAttribute("name");

 var Display = React.createClass({
  render:function(){
      console.log(y);
      return (
        <div style={{backgroundColor :'#f5e9ff'}}>
        <CommentBox/>
        <br/><br/><br/><br/>
        <TabButton/>
        <div className="panel panel-default">
        <div className="panel-body" style={{textAlign:'center'}}>
        <span  style={{fontWeight:'bolder'}}> Basic Details which needs to be filled</span>
        </div>
        </div>
        <div className="container">    
        <Content name={y}/>
        </div>
        </div>

        );

  }

 });





 var Content = React.createClass({
    render:function(){
        return(
          <Form>
          <div className="form-group">
          <Iset label={"User Name"} />
	<Input name="username" Required="fds" validationError="This is a required field" value={this.props.name} />
          <div className="row">
          <div className="col-md-4">
          <Iset label={"First Name"} />
          <Input name="firstname" Required="fds" validationError="This is a required field" />
          </div>
          <div className="col-md-4">
          <Iset label={"Middle Name"} />
          <Input name="middlename" Required="fds" validationError="This is a required field"   />
          </div>
          <div className="col-md-4">
          <Iset label={"Last Name"} />
          <Input name="lastname" Required="fds" validationError="This is a required field"   />
          </div>
          </div>
         
          <Iset label={"Father Name"} />
          <Input name="fathername" Required="fds" validationError="This is a required field"  />  
        
          
          <Iset label={"Mother Name"} />
          <Input name="mothername" Required="fds" validationError="This is a required field"  />  
          
          
          <Iset label={"Gaurdian Name"} />
          <Input name="gaurdianname" Required="fds" validationError="This is a required field"  />  
          
          
          <br/>     

          <Iset label={"Email"}/>
          <Input name="email" validations="isEmail" validationError="This is not a correct email address" Required="fds" />



          <Iset label={"Mobile Number"}/>
          <Input name="number" Required="dCS" alidations="isNumeric,isLength:10:10" validationError="Incorrect Number"/>

          <br/>
          <div className="row">
          <div className="col-md-6">
          <Gender  name="gender" Required="fds" validationError="This is a required field"/>
          </div>
          <div className="col-md-6">
          <Cars name="marital status" Required="fds" validationError="This is a required field"/>
          </div>
          </div>
          <br/><Date_Birth />
          <br/> 
          <div className="panel panel-default" style={{backgroundColor:'#f5f3f3 '}}>
          <div className="panel-body">
          <Iset label={"Residential Address : "}/>
          <Input name="residential" Required="fds" validationError="This is a required field"/>
          <div className="row">
          <div className="col-md-4">
          <Iset label={"District"}/>
          <Input name="district" Required="fds" validationError="This is a required field"/>
          </div>
          <div className="col-md-4">
          <Iset label={"State"}/>
          <Input name="state_" Required="fds" validationError="This is a required field"/>
          </div>
          <div className="col-md-4">
          <Iset label={"Nation"}/>
          <Input name="nation" Required="fds" validationError="This is a required field"/>
          </div>
          </div>
          </div>
          </div>
          <div className="panel panel-default" style={{backgroundColor:'#f5f3f3 '}}>
          <div className="panel-body">
          <Iset label={"Permanent Address : "}/>
          <Input name="permanent" Required="fds" validationError="This is a required field"/>
          <div className="row">
          <div className="col-md-4">
          <Iset label={"City"}/>
          <Input name="city" Required="fds" validationError="This is a required field"/>
          </div>
          <div className="col-md-4">
          <Iset label={"State"}/>
          <Input name="state" Required="fds" validationError="This is a required field"/>
          </div>
          <div className="col-md-4">
          <Iset label={"PinCode"}/>
          <Input name="pincode"  Required="fds" validations="isNumeric,isLength:6:6" validationError="Incorrect Pincode"/>
          </div>
          </div>
          </div>
          </div>
          <br/>
          </div>
          <div className="row">
          <div className="col-md-4">
          <Iset label={"Language"}/>

          <Input name="language" Required="fds" validationError="This is a required field"/>
           </div>
          <div className="col-md-4">
          <Iset label={"Nationality"}/>
          <Input name="Nationality" Required="fds" validationError="This is a required field"/>
           </div>
          <div className="col-md-4">
          <Iset label={"Religion"}/>
          <Input name="religion" Required="fds" validationError="This is a required field"/>
          </div>
          </div>
        
          </Form>);
  }
 });







var CommentBox = React.createClass({
  render: function() {
    return (
     <nav className="navbar navbar-default navbar-fixed-top">
     <div className="container-fluid">

     <div className="navbar-header">

     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
     <span className="sr-only">Toggle navigation</span>
     <span className="icon-bar"></span>
     <span className="icon-bar"></span>
     <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="#">Welcome </a>                
     </div>


     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

     <ul className="nav navbar-nav">

     <li className="dropdown">
     <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="assets/image1.png" className="img-circle" alt="Cinque Terre" width="30" height="30"/> <span className="caret"></span></a>
     <ul className="dropdown-menu">
     <li><a href="#">Change Profile pic</a></li>
     <li><a href="#">Edit your Profile</a></li>
     <li><a href="#">Something else here</a></li>
     <li role="separator" className="divider"></li>
     <li><a href="#">Separated link</a></li>
     <li role="separator" className="divider"></li>
     <li><a href="#">One more separated link</a></li>
     </ul>
     </li>
     </ul>
     <h4 className="navbar-text" color="black"> one form india  </h4>         
     <ul className="nav navbar-nav navbar-right">

     <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
     </ul>

     </div>
     </div>
     </nav>
     );
}
});



var TabButton = React.createClass({
  render:function(){
    var colour = {
      color:'grey'
    }; 
    var style={
      display:'none'
    };

    return (
      <div className="panel panel-default">
      <div className="panel-body" >
      <div className="row">
      <div className="col-md-8">
      <nav className="navbar navbar-default" >
      <div className="container-fluid" >
      <div className="navbar-header">

      </div>
      <div>
      <ul className="nav navbar-nav">
      <li><a href="#"><span className="glyphicon glyphicon-th"></span></a></li>
      <li className="active"><a href="#home"><span className="glyphicon glyphicon-home"></span>  Home</a></li>
      <li><a href="#profile"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
      <li><a href="#jobs"><span className="glyphicon glyphicon-briefcase"></span> Offers</a></li>
      <li><a href="#catalog"><span className="glyphicon glyphicon-list-alt"></span> Catalog</a></li>
      </ul>
      </div>
      </div>
      </nav>
      </div>
      <div className="col-md-4">
      <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Search"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </div>
      </div>

      </div>
      </div>
      );
}
});



React.render(<Display />
            ,document.getElementById('app'));
