var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = require('react-router').RouteHandler;

var Input = React.createClass({
    render:function(){
            return (
              <form role="form">
              <div className="form-group">
              <label for="email">{this.props.label} :</label>
              <input type="text" className="form-control" id={this.props.label} placeholder={this.props.label}/>
              </div>
              </form> 
                );
    }
});

var Gender = React.createClass({
        render:function(){
           return (<div>
           <span style={{fontWeight:'bold'}}> Gender  </span>
           <select name="Gender">
           <option value=""></option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="Not specified">Not specified</option>
           </select>
           
           </div>);
        }


});

var Date_Birth =  React.createClass({
  repeat_year:function(array)
  { var i;
    for( i=2015;i>=1945;i--)
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
  console.log(this.year);
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
      <br/>
      </div>

    );
 }
});

var Marital=   React.createClass({
    render:function(){
            return (
                <div>
                <span style={{fontWeight:'bold'}}> Marital Status </span>
                <select name="Marital Status">
                <option value=""></option>
                <option value="Married">Married </option>
                <option value="Not Married">Not Married</option>
                <option value="Married Virgin">Married Virgin</option>
                </select>

                </div>
                );
    }

});
var Header = React.createClass({
    render:function(){
        return (
            <thead>
            <tr>
            <th>Educational Qualification</th>
            <th>Grades</th>    
            </tr>
            </thead>
            );
    }
});

var arr=[];

var Table = React.createClass({
       
        render:function(){
        
           if(arr.length === 1)
          { return (
            <table className="table">
            <Header/>
            <tbody>
            <tr>
            <td>{arr[0]}</td>
            <td> 10 </td>
    
            </tr>
            </tbody>
            </table>
            );
        }
        else if(arr.length === 2)
            { return (
            <table className="table">
            <Header/>
            <tbody>
            <tr>
            <td>{arr[0]}</td>
            <td> 10 </td>
            </tr>
            <tr>
            <td>{arr[1]}</td>
            <td> 10 </td>
            </tr>
            </tbody>
            </table>
            ); }
        else if(arr.length=== 3)
        {
             return (
            <table className="table">
            <Header/>
            <tbody>
            <tr>
            <td>{arr[0]}</td>
            <td> 10 </td>
            </tr>
            <tr>
            <td>{arr[1]}</td>
            <td> 10 </td>
            </tr>
            <tr>
            <td>{arr[2]}</td>
            <td> 10 </td>
            </tr>
            </tbody>
            </table>
            );
        }
    }
});
 var InstituteName;
 var Age;
 var Course;

   var ClickedDetail =  React.createClass({
            render:function(){
                  var createItem = function(itemText)
                  { 
                    if(itemText === "fname") return( <Input label={"First Name"}/>    );
                    if(itemText === "lname") return( <Input label="Last Name"/>);
                    if(itemText === "fathername") return( <Input label="Father Name"/>);
                    if(itemText === "mothername") return( <Input label="Mother Name"/>);
                    if(itemText === "gaurdianname") return( <Input label="Gaurdian Name"/>);
                    if(itemText === "email") return( <Input label="Email"/>);
                    if(itemText === "phonenumber") return( <Input label="Phone Number"/>);
                    if(itemText === "address") return( <Input label="Address"/>);
                    if(itemText === "city") return( <Input label="City"/>);
                    if(itemText === "pincode") return( <Input label="Pincode"/>);
                    if(itemText === "state") return( <Input label="State"/>);
                    if(itemText === "country") return( <Input label="Country"/>);
                    if(itemText === "nationality") return( <Input label="Nationality"/>);
                    if(itemText === "primarylanguage") return( <Input label="Primary Language"/>);
                    if(itemText === "religion") return( <Input label="Religion"/>);
                    if(itemText === "sex")  return (<div><Gender/><br/></div>) ;   
                    if(itemText === "dob")   return (<div><Date_Birth/><br/></div>);
                    if(itemText === "maritalstatus") return (<Marital/>);
                    if(itemText === "class10" || itemText === "class12" || itemText === "graduation" || itemText ==="masters" )
                        {   arr.push(itemText);return (<div></div>); }
              };
                    
                   return (<div>{this.props.items.map(createItem)}</div>);
            }
        });
        var info;

        var Secondpage =  React.createClass({

            render : function(){
                  console.log(info);
                  return(
                        
                        <div className="container-fluid">
                        <h1 style={{textAlign:'center'}}> {InstituteName}</h1>
                        <h2 >Application Form for course : {Course} </h2><br/>
                        <h2 >Applicable Age : {Age} </h2><br/>
                         <ClickedDetail items={info}/>
                         <Table/>
                         </div>
                        
                        
                        );
              }
        });

        var FormDetails = React.createClass({
       handleClick :function(event){
            InstituteName = event.target.value;
       },
       applicableAge :function(event){
            Age = event.target.value;
       },
       offerCourses :function(event){
            Course = event.target.value;
       },

        render: function () {
           
                
                return (
                <div>
                <form>
                    Institute Name:<br/>
                    <input type="text"  name="institutename" onChange={this.handleClick} />
                                        <br/>
                                        Applicable Age:<br/>
                    <input type="text" name="agelimit" onChange={this.applicableAge}/>
                                        <br/>
                                        Offer Course Name:<br/>
                    <input type="text" name="offercourse" onChange={this.offerCourses}/>
                                        <br/>

                </form>
                <label>
                    <input type="checkbox" name="checkbox" value="fname" />First Name
                                        <br/>
                </label>                        
                <label>    
                    <input type="checkbox" name="checkbox" value="lname" />Last Name
                                        <br/>
                </label>
                <form>    
                    <input type="checkbox" name="checkbox" value="sex" />Gender
                                        <br/>
                    <input type="checkbox" name="checkbox" value="dob" />Date of Birth
                                        <br/>
                    <input type="checkbox" name="checkbox" value="fathername" />Father Name
                                        <br/>
                    <input type="checkbox" name="checkbox" value="mothername" />Mother Name
                                        <br/>
                    <input type="checkbox" name="checkbox" value="gaurdianname" />Gaurdian Name
                                        <br/>
                    <input type="checkbox" name="checkbox" value="email" />Email Id
                                        <br/>
                    <input type="checkbox" name="checkbox" value="phonenumber" />Phone Number
                                        <br/>
                    <input type="checkbox" name="checkbox" value="address" />Address
                                        <br/>
                    <input type="checkbox" name="checkbox" value="city" />City
                                        <br/>
                    <input type="checkbox" name="checkbox" value="pincode" />Pincode
                                        <br/>
                    <input type="checkbox" name="checkbox" value="state" />State
                                        <br/>
                    <input type="checkbox" name="checkbox" value="country" />Country
                                        <br/>
                    <input type="checkbox" name="checkbox" value="maritalstatus" />Marital Status
                                        <br/>
                    <input type="checkbox" name="checkbox" value="primarylanguage" />Primary Language
                                        <br/>
                    <input type="checkbox" name="checkbox" value="nationality" />Nationality
                                        <br/>
                    <input type="checkbox" name="checkbox" value="religion" />Religion
                                        <br/>
                    <input type="checkbox" name="checkbox" value="class10" />Class 10 Qualification
                                        <br/>
                    <input type="checkbox" name="checkbox" value="class12" />Class 12 Qualification
                                        <br/>
                    <input type="checkbox" name="checkbox" value="graduation" />Graduation Qualifiaction
                                        <br/>
                    <input type="checkbox" name="checkbox" value="masters" />Masters Qualifiaction
                                        <br/>
                    <input type="checkbox" name="checkbox" value="photo" />Photo
                                        <br/>
                    <input type="checkbox" name="checkbox" value="signature" />Signature
                                        <br/>
                                        
                    <button type = "submit" onClick={function(){var info = myFunction(); }}><a href="#/formGenerate" >Submit</a></button>
                </form>
                
                 </div> ); 
             
             
                
        }
        });
           function   myFunction() {
        
            console.log("hi123");    
            //e.preventDefault();
            //var text = event.target.name;
            //console.log(text);
            //var newArray =  this.state.info.concat([text]);
            //this.setState({info:newArray});
            var checkboxes = document.getElementsByName("checkbox");
            var checkboxesChecked = [];
            // loop over them all
            for (var i=0; i<checkboxes.length; i++) {
            // And stick the checked ones onto an array...
                if (checkboxes[i].checked) {
                    checkboxesChecked.push(checkboxes[i].value);
                
                }
            }
            // Return the array if it is non-empty, or null
            
            info = checkboxesChecked.length > 0 ? checkboxesChecked : null;
           
        };

var Default = React.createClass({
    render:function(){
      return(
        <div> <RouteHandler /> </div>
        );
    }
});

Router.run( 
  <Route name="default" path="/" handler={Default} >  
    <Route name="form_generate" path="/formGenerate" handler={Secondpage} />
    <DefaultRoute handler={FormDetails} />
  </Route>      
, function(Root){

  React.render(<Root />, document.getElementById('example'))
}
);

