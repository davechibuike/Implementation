const { Mongoose } = require("mongoose");
const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");


const userOne = {
    name: "test test",
    email: "test1.test@gmail.com",
    role: "test user"
}

beforeEach(async()=>{
    await User.deleteMany()
    await new User(userOne).save()
})

test("Should Create a User", async()=>{
    await request(app).post("/api/user").send({
        name: "test case one",
        email: "testcaseone@gmail.com",
        role: "Admin"
    }).expect(201)
});

test("Should Return error cause user email exists", async()=>{
    await request(app).post("/api/user").send({
        email: "test1.test@gmail.com",
    }).expect(400)
});


test("Should get all User's --->array of users", async()=>{
    await request(app).get("/api/users").send({
       
    }).expect(200)
});


// test("Delete User By userId", async()=>{
//     await request(app).delete("/api/user?useriD=61520c40608873befa30f649").send({
//         _id: "61520c40608873befa30f649",
//         name: "test case one",
//         email: "testcaseone@gmail.com",
//         role: "Admin"
//     }).expect(200)
// });