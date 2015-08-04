var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;

var Route = Router.Route;

var Detail=React.createClass({
  render:function(){
      return (
        <div>
        <div className="jumbotron" style={{backgroundColor:'#2ba6cb'}}>
        Indian institue of technology was founded in 1961.
        </div>
        </div>);
  }
});


var FormHistory=React.createClass({
  render:function(){
      return (
        <div>
        <table className="table table-bordered">
    <thead>
      <tr>
        <th>Form name</th>
        <th>No of students registered</th>
        <th>Detail</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Clerk</td>
        <td>12</td>
        <td><a href="#">get the list</a></td>
      </tr>
       <tr>
        <td>Clerk</td>
        <td>12</td>
        <td><a href="#">get the list</a></td>
      </tr>
    </tbody>
  </table>
        </div>);
  }
});

var Home = React.createClass({
  render:function(){
    return(
      
        <div className="container" style={{backgroundColor:'white'}}>
                 <br/>
                 <div className="row" >
                  <div className = "col-xs-4 col-xs-offset-1">
                   <img src="assets/user.png" height = "200" width="200"></img>
                 </div> 
                 <div className="col-xs-4 col-xs-offset-1 ">
                  <br/>
                  <p> Institute Name </p>
                  <p> Location </p>
                </div>
                </div>
                <br/>
                <br/>
              </div>

      );
  }

});




var Main = React.createClass({

	render :function(){
		return(
		<div className="jumbotron">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                  <div id="profile_menu">
                                   <div className="panel panel-default">
                                    <div className="panel-body">
                                      <p>Search by category</p>
                                    </div>

                                    <ul className="list-group">
                                      <li className="list-group-item"><a href="#/">Home Profile</a></li>
                                      <li className="list-group-item"><a href="#/details">Details</a></li>
                                      <li className="list-group-item"><a href="#/create_form">Create A Form</a></li>
                                      <li className="list-group-item"><a href="#/form_history">Form History</a></li>
                                      <li className="list-group-item"><a href="#/centre_pool">Centre Pool</a></li>
                                      <li className="list-group-item"><a href="#/generate_admitcard">Genrate Admit Cards</a></li>
                                    
                                    </ul>
                                  </div>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                	<RouteHandler />
                                </div>
                              </div>
                             </div>
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
                  
                  <li><a href="#/"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
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
    


var Page =  React.createClass({
             render:function(){
               
          return (

                          <div>
                            <CommentBox/>
                            <br/><br/><br/><br/>
                            <TabButton/>
                            
    <div className="jumbotron">
                       <div className="container">
                          <div className="row">
                              <div className="col-md-3">
                                  <div id="profile_menu">
                                   <div className="panel panel-default">
                                    <div className="panel-body">
                                      <p>Search by category</p>
                                    </div>

                                    <ul className="list-group">
                                      <li className="list-group-item"><a href="#/">Home Profile</a></li>
                                      <li className="list-group-item"><a href="#/details">Details</a></li>
                                      <li className="list-group-item"><a href="institute/createform/">Create A Form</a></li>
                                      <li className="list-group-item"><a href="#/form_history">Form History</a></li>
                                      <li className="list-group-item"><a href="#/centre_pool">Centre Pool</a></li>
                                    
                                    </ul>
                                  </div>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                  <RouteHandler />
                                </div>
                              </div>
                             </div>
                            </div>  
                          </div>

                  );


             }

      });






Router.run(
  <Route name="page" path="/" handler={Page} >
    
      <Route name="details" path="/details" handler = {Detail} />
      <Route name="formhistory" path="/form_history" handler = {FormHistory} />
      <Route name="centrepool" path="/centre_pool" handler = {Home} />
      
      
      <DefaultRoute handler={Home} />
    
  </Route>
,function(Root){

  React.render(<Root />, document.getElementById('app'));
});