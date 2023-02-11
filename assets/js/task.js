"use strict"

let user1 = {
    name: "Gultaj",
    surname: "Jafarova",
    age: 18,


}
let user2 = {
    name: "Lale",
    surname: "Quliyeva",
    age: 25,


}

let user3 = {
    name: "Novreste",
    surname: "Aslanzade",
    age: 18,
   
}

let users = [user1, user2, user3]

function checkAge(obj) {
    return obj.age > 20
}

function getDatas(users,callback){
    for (const item of users) {
        if(callback(item)){
             let date=new Date()
            let result=date.getFullYear()-item.age
            console.log(result+" "+item.name+" "+item.surname)
        }
        
    }
  

}
console.log(getDatas(users,checkAge))
