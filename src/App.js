import React, { Component } from "react";
import "./bootstrap/dist/css/bootstrap.min.css";
import firebase from './Firebase';

class App extends Component {
constructor(props) {
    
    super(props);
   
    this.state = {result : [], result1 : []}
    }
    
    componentDidMount() {



      firebase.database().ref("users").on("value", snapshot => {
        let userslist = [];
        snapshot.forEach(snap => {
            userslist.push(snap.val());
            // console.log(snap.val());

          });
        this.setState({ result: userslist });
      });

        

        firebase.database().ref("accounts").on("value", snapshot => {
          let s1 = [];
          snapshot.forEach(data => {
            // console.log(data.key);
            firebase.database().ref("accounts").child(data.key).child("apps").on("value", snaps => {
              
              snaps.forEach(snap => {
              // console.log(data.key);
              // console.log(snap.val().title);
              s1.push({
                account: data.key,
                title: snap.val().title,
              });
          });        
            });
          });
          // console.log(s1);
          this.setState({ result1: s1 });
        });


    }
  
  render(){
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center bg-sky">
          <h3>Coding Challenge</h3>
      </div>
    
      <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Account</th>
                </tr>
            </thead>
            <tbody>
            {this.state.result.map(data => {
                
                return (
                    <tr key={data.account}>     
                    <td>{data.name}</td>
                    <td>{data.account}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>

     <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                    <th>Account</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {this.state.result1.map(data => {
                
                return (
                    <tr key={data.account}>     
                    <td>{data.account}</td>
                    <td>{data.title}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default App;