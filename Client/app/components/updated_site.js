var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = require('react-router').RouteHandler;



    /*var Profilepic =  React.createClass({
      render: function () {
          return  (
               <div className="profile_pic">
                  <a className="navbar-brand" href="#/">Welcome </a>

                  <li className="dropdown">
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <img src="assets/image1.png" className="img-circle" alt="Cinque Terre" width="24" height="26"/> 
                      <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Action</a></li>
                      <li><a href="#/">Another action</a></li>
                      <li><a href="#/">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">One more separated link</a></li>
                    </ul>
                  </li> 
              </div>  
             );
      }
    });

*/
// declare our routes and their hierarchy
var About = React.createClass({
  render: function () {
    return( <h2>About</h2>);
  }
});

var Inbox = React.createClass({
  render: function () {
    return (<h2>I</h2>);
  }
});

var Home = React.createClass({
  render: function () {
    return (<h2>Home</h2>);
  }
});
var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
});
var Profilepic =  React.createClass({
      render: function () {
          return  (
               <div className="profile_pic">
                  <a className="navbar-brand" href="#/">Welcome </a>

                  <li className="dropdown">
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <img src="assets/image1.png" className="img-circle" alt="Cinque Terre" width="24" height="26"/> 
                      <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Action</a></li>
                      <li><a href="#/">Another action</a></li>
                      <li><a href="#/">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">One more separated link</a></li>
                    </ul>
                  </li> 
              </div>  
             );
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
                   <a className="navbar-brand" href="#/">Welcome </a>                
              </div>

             
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
                  <ul className="nav navbar-nav">
                
                  <li className="dropdown">
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="assets/image1.png" className="img-circle" alt="Cinque Terre" width="30" height="30"/> <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Change Profile pic</a></li>
                      <li><a href="#/">Edit your Profile</a></li>
                      <li><a href="#/">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <h4 className="navbar-text" color="black"> one form india  </h4>         
                <ul className="nav navbar-nav navbar-right">
                  
                  <li><a href="/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
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
                    <li><a href="#/"><span className="glyphicon glyphicon-th"></span></a></li>
                     <li className="active"><a href="#/home"><span className="glyphicon glyphicon-home"></span>  Home</a></li>
                     <li><a href="#/profile"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
                     <li><a href="#/jobs"><span className="glyphicon glyphicon-briefcase"></span> Offers</a></li>
                     <li><a href="#/catalog"><span className="glyphicon glyphicon-list-alt"></span> Catalog</a></li>
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
      var Formlook =  React.createClass({
         handleClick:function(){

         },
        render :function ()
        { 
             return (
                    <div>
                    <div className="row">
                    <div className="col-md-6">
                     <div onClick={this.handleClick}>
                    <div id="form_look"  style={{boxShadow:"1px 1px 3px black",backgroundColor:'#f5f5f5'}} >
                    <div className="panel panel-default">
                       
                        <div className="panel-heading">Panel heading</div>
                        <div className="panel-body" >
                          <p>Panel Body...</p>
                          <p> Content </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div id="form_look" style={{boxShadow:"1px 1px 3px black",backgroundColor:'#f5f5f5'}} >
                    <div className="panel panel-default">
                     
                        <div className="panel-heading">Panel heading</div>
                        <div className="panel-body">
                          <p>Panel Body...</p>
                           <p> Content </p>
                        </div></div>

                    </div>
                    </div>
                    </div>
                    </div>

              );
        }
      });
      var  AddNewData = React.createClass({

        render:function()
        { return (
              <div id="sideline">
                <div className="container">

                 
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-refresh"></span> Refresh</button>
                  

                  </div>
              <div id="news">
                <div className="panel panel-default">
                  <div className="panel-body">A Basic Panel</div>
                  
                  <br/>
                </div>
                </div>
                </div>
          );
        }
      });

     var Edit_profile  = React.createClass({
          render:function()
          {
              return (
                <div>
                <form role="form">
                <div className="form-group">
                <label >First Name:</label>
                <input type="text" className="form-control" id="fname" placeholder="First Name "value="Aniket"/>
                </div>
                <div className="form-group">
                <label >Last Name:</label>
                <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                <label >User Name:</label>
                <input type="text" className="form-control" id="uname" placeholder="User Name"/>
                </div>
                </form>
                <form className="form-inline" role="form">
                <label>Date Of Birth:</label>
                <div className="row">
                <div className = "col-xs-3 col-xs-offset-1">
                <div className="form-group">
                <label >Day</label>
                <select className="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
                </div>
                </div> 
                <div className="col-xs-3 ">

                <div className="form-group">
                <label>Month</label>
                <select className="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                
                </select>
                </div>

                </div>
                <div className = "col-xs-4">
                <div className="form-group">
                <label >Year</label>
                <select className="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
                </div>
                </div>
                </div>
                <br/><br/>
                <div className="container">
                <div className="row">
                <div className="col-md-6">
                <label> Email : </label>
                <input type="text" className="form-control" id="uname" placeholder="Email"/>
                </div>
                <div className="col-md-6">
                <label> Mobile : </label>
                <input type="text" className="form-control" id="uname" placeholder="Number"/>
                </div>
                </div>
                </div>
                <br/><br/>
                <div className="panel panel-default" style={{backgroundColor:'#f5f3f3 '}}>
                <div className="panel-body">
                <div className="form-group">
                <label>Residential Address :  </label>
                <input type="text" className="form-control" id="uname" placeholder="Address"/>
                </div>
                <br/><br/>
                
                <div className="row">
                <div className="col-md-3">
                <label>District</label>
                <input name="district" type="text" className="form-control"/>
                </div>
                <div className="col-md-3 col-md-offset-1">
                <label>State </label>
                <input name="state" type="text" className="form-control"/>
                </div>
                <div className="col-md-3 col-md-offset-1">
                <label>Nation </label>
                <input name="nation" type="text" className="form-control"/>
                </div>
                </div>
                

                </div>
                </div>
                <br/><br/>
                <div className="panel panel-default" style={{backgroundColor:'#f5f3f3 '}}>
                <div className="panel-body">


                
                <div className="form-group">
                <label>Permanent Address : </label><br/>
                <input type="text" className="form-control" id="uname" placeholder="Address"/>
                </div>
                <div className="row">
                <div className="col-md-3">
                <label>City</label>
                <input name="city" type="text" className="form-control"/>
                </div>
                <div className="col-md-3 col-md-offset-1">
                <label>State </label>
                <input name="state" type="text" className="form-control"/>
                </div>
                <div className="col-md-3 col-md-offset-1">
                <label>PinCode </label>
                <input name="pincode" type="text" className="form-control"/>
                </div>
                </div>
                

                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <label>Language</label>

                <input name="language"  type="text" className="form-control"/>
                </div>
                <div className="col-md-4">
                <label>Nationality</label>
                <input name="Nationality"  type="text" className="form-control"/>
                </div>
                <div className="col-md-4">
                <label>Religion</label>
                <input name="religion"  type="text" className="form-control"/>
                </div>
                </div>
                </form>
                </div>
                );
          }


     });


var Graph = React.createClass({

  render:function(){

    return (
     <table className="table table-bordered">
     <thead>
     <tr>
     <th>Category</th>
     <th>Number </th>

     </tr>
     </thead>
     <tbody>
     <tr>
     <td>Forms Applied</td>
     <td> 10 </td>

     </tr>
     <tr>
     <td>Forms Submitted</td>
     <td> 10 </td>
     </tr>
     <tr>
     <td>Forms Approved</td>
     <td> 10 </td>
     </tr>
     
     </tbody>
     </table>

      );
  }


});

     var Profile_show =  React.createClass({
        //user_png: "assets/user.png",
          render:function(){
              //var {user_png} = this.props;
              return (
                <div>
                <div className="container" style={{backgroundColor:'white'}}>
                 <br/>
                 <div className="row" >
                  <div className = "col-xs-4 col-xs-offset-1">
                   <img src={{user_png}} height = "200" width="200" className="img-circle img-responsive"></img>
                 </div> 
                 <div className="col-xs-4 col-xs-offset-1 ">
                  <br/>
                  <p> Username is {{user_png}} </p>
                  <p> Location </p>
                  <span style={{fontWeight:'bolder'}}> Education : </span> 
                </div>
                </div>
                <br/>
                <br/>
              </div>
              <br/>
                <br/>
              <div className="container" style={{backgroundColor:'white'}}>
                
                <div className="row">
                <div className="col-md-3">
                   <br/><br/>
                    <h5> Followers :  </h5>
                    <br/><br/>
                    <span> Following :  </span>
                    <br/>
                </div>
                <div className="col-md-6">
                <div  style={{height:300,width:500,boxShadow:'-2px -2px 2px #abb0a2'}}>
                <div >
                <div className="panel panel-default">
                <div className="panel-heading">Recent Activities</div>
                <Graph/>
                </div>
                <br/>
                 <div className="panel panel-default">
                <div className="panel-heading">Contact info :</div>
                <div className="panel-body">
                Birth Date :<br/><br/>
                Gender : <br/><br/>
                Mobile : <br/><br/>
                </div>
                </div>
                </div>
              </div>
                </div>
                </div>
              </div>
              </div>



                );


          }



     });
     var Detail_write = React.createClass({
          render:function(){
              return (
                    <div id="divide">
                    <div className="row">
                    <div className="col-md-6">
                    <img src="assets/avatar.jpg" className="img-thumbnail" alt="Cinque Terre" width="304" height="236"/> 
                     </div>
                     <div className="col-md-6">
                     <p> The Institute to which form is related </p><br/>
                     <p>  some Detail where it is, and state </p><br/>
                     <p> to which it applies type of recruits </p><br/>

                     </div>
                    </div>
                    </div>


                );


          }



     });
     var Form_Detail =  React.createClass({
        render:function(){
            return(
              <div >
                



          
                <div className="col-md-9 ">
                <nav>
                <ul className="pager" style={{display:'center-block'}}>
                <li><a href="#/home">Previous</a></li>
                </ul>
                </nav>
                      <div className="jumbotron" style={{backgroundColor:'white'}}>
                      <div id="Form_prospect">    
                      <Detail_write/>
                      </div>
                      <br/>
                      <p style={{fontWeight:"lighter"}}> The main content goes here the details of the form </p>
                      <br/><br/><br/><br/><br/>
                      <br/><br/>

                      </div>
                      <div style={{display:'center-block'}}>
                      <button type="button" className="btn btn-default center-block">Apply</button>
                      
                      </div>

                      
                </div>
               
                
                </div>
              );
        }

     });
     var Profile_detail= React.createClass({
         
          render:function(){
             
              return (
                    <div className="jumbotron">
                       <div className="container">
                          <div classna="row">
                              <div className="col-md-3">
                                  <div id="profile_menu">
                                   <div className="panel panel-default">
                                    <div className="panel-body">
                                      <p>Search by category</p>
                                    </div>

                                    <ul className="list-group">
                                      <li className="list-group-item"><a href="#/profile/look">Home Profile</a></li>
                                      <li className="list-group-item"><a href="#/profile/edit">Edit your Profile</a></li>
                                      <li className="list-group-item">Change your Resume</li>
                                      <li className="list-group-item">Admit Cards</li>
                                      <li className="list-group-item">Your submitted History</li>
                                    
                                    </ul>
                                  </div>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                {<RouteHandler /> || <Profile_show />}
                                </div>
                              </div>
                             </div>
                            </div> 
                );

          }

     });

  var Normal = React.createClass({

    render:function(){

        return (
              <div>
              <div className="col-md-7" style={{backgroundColor: 'white',height:600,boxshadow :'10 10 5 black'}}>
                <br/><Formlook/><br/><br/> <Formlook/><br/><br/><Formlook/>
                </div>
                <div className="col-md-2 ">
                <AddNewData/>
                </div>
                </div>

          );

    }
    });

      var Home_detail =React.createClass({
        
          render: function(){
          return (
                <div className="jumbotron">
                <div className="row"> 
                <div className="col-md-3" >
                <div id="category">
                <div className="panel panel-default">
                    <div className="panel-body">
                      <p>Search by category</p>
                    </div>
                    
                  <ul className="list-group">
                    <li className="list-group-item">Recent forms</li>
                    <li className="list-group-item">Important forms</li>
                    <li className="list-group-item">Forms with greater availibitly</li>
                    <li className="list-group-item">Filled forms</li>
                    <li className="list-group-item">Forms with closest deadline</li>
                  </ul>
                  </div>
                </div>
                </div>
                
                    <RouteHandler /> || <Normal />
                    } 

              
                
                </div>
                </div>



                );


        }
      });
 

      var Page =  React.createClass({
             render:function(){
               
          return (

                          <div>
                           <CommentBox/>
                           <br/><br/><br/><br/>
                            <TabButton/>
                            <RouteHandler />
                            </div>

                  );


             }

      });
     

     
Router.run(
    <Route name="page" path="/" handler={Page} >
      <Route name="home_detail" path="/home" handler={Home_detail} >
        <Route name ="form_detail"path="/home/detail" handler={Form_Detail} />
      </Route>
     
      <Route name="profile" path="/profile" handler={Profile_detail} >
          <Route name="edit" path="/profile/edit" handler={Edit_profile} />
          <Route name="look" path="/profile/look" handler={Profile_show} />
      </Route>
    </Route>
  
, function(Root){

  React.render(<Root />, document.getElementById('app'))
}
);

