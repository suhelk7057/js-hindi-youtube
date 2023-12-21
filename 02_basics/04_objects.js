// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname:"suhel",
            lastname: "kurane"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1 , obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users =[
    {
        id: 1,
        email: "abc@mm.com"
    }
    ,
    {
        id: 2,
        email: "m@hotmail.com"
    }
    ,
    {
        id: 3,
        email: "123@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "suhel"
}

// course.courseInstructore
// 
// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "hitesh")