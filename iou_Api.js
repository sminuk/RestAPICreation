/*Requirement :- Implement a simple RESTful API
Receives IOUs as POST requests
Deliver Summary info as GET requests.

Users are 4 roomates  Adam,Bob,Chuck,Dan

Functions to be defined 
1.GET
2.POST ADD
3.POST IOU

Methods Planned AddUSer() AddIouData() Post() Get() */

import jsonData from "./data"

class IouUsers
{
    IouUsers user;
    Constructor(currentUserName,borrowers ={ },lenders={ },balance=0){
    this.user = currentUserName;
    this.borrowers = borrowers;
    this.lenders = lenders;
    this.balanceAmount = balanceAmount;
    }
	
	//Main Expected Functionalities from the requirement
    function getUrlRequest(url){
     switch (url){
        case '/users':
            //call get
            break;
        case '/add':
        case '/iou':
            //call post
            break;
        default:
            //unknown url error
            break;
     }
    }

    AddUser(newUser){ //Adds the user to the db
     for (existing user of this.db) {
      if (user.name === newUser.name)
           return user;
        }
    else if(not existing in db){
         //add user name {"user":<name of new user (unique)>}
        let user = {
          name: dataUserAdd.user,
          owes: {},
          owed_by: {},
          balance: 0
        };
        this.db.push(user);
        return user;
        }   
    }
}
	
	get(url){
     //users	{"users":["Adam","Bob"]}	{"users":<List of all User objects>}	<users> (sorted by name)}
     //required Name sorting
     
     if(url === "/users"){
        let result = {db:[]};
        let db;
          db = url[1].split('=')[1].split(',');
        for (let user of db) {
          result.db.push(this.getUser(user));
        }
        return result;
    }

   IouDataAdd(){
      //format {"lender":<name of lender>,"borrower":<name of borrower>,"amount":5.25}
        
     lender = this.db.find(({name}) => name === lenderName) //from the db find the name and assign to lender
     borrower = this.db.find(({name}) => name === borrowerName) //from the db find the name and assign to borrower

    // situation where lender owes borrower something
    if (lender.owes[borrower]) {                   //Adam is lender bob is borrowe
       diff = lend_Amount - lender.owes[borrower]  //Adam lends 10 to Bob and Bob lends 8 to Adam
                                                   //difference will be lendAmount
    
    // lender gives more than he owes
      if (diff > 0) {
        lender.owes[borrower] = 0
        borrower.owed_by[lender] = 0
        lender.owed_by[borrower] = diff
        borrower.owes[lender] = diff
      }
      // lender gives same as they owe
      else if (diff === 0) {
        lender.owes[borrowerName] = 0
        borrower.owed_by[lenderName] = 0
      } 
      // lender gives less than they owe
      else if (diff < 0) {
        lender.owes[borrowerName] -= amount
        borrower.owed_by[lenderName] -= amount
      }
    }
     
   } 
   Post(url,userdata){
   switch (url){
        case '/add':
            //call AddUser()
            break;
        case '/iou':
            //call Ioufunction()
            break;
        default:
            //unknown url error
            break;
        }
    }
   
}

