const faker = require ("@faker-js/faker").faker;
const mongoose = require ("mongoose");
require ("../config/db.config");

//Borrar y crear datos de la Db//
const Admin = require ("../models/admin.model");
const User = require("../models/user.model");
const Tweet = require ("../models/tweet.model");

mongoose.connection
.dropDatabase()
.then (() => {
    Admin.create({
     name:"Alberto Caño Esteban",
     username: "acanest",
     password: "123456789",
    })
    .then((admin) => {
        console.log("Admin created");

        for (let i = 0; i < 8; i++) {
            User.create([
             {
             name: faker.person.fullName(),
             username: faker.internet.userName(),
             password: "123456789",
             avatarUrl: faker.image.avatarLegacy()
             }
            ])
            .then((user) => {
                console.log(`user "${user.name}"created`);

                for (let j = 0; j < 5; j++) {
                    Tweet.create([
                     {
                        message: faker.lorem.paragraphs(1),
                        userCreate: user[Math.round(Math.random() * user.length -1)]._id,
                    }
                    ])
                    .then((tweet) => {
                        console.log (`Tweet "${tweet.name}" created`);
                    })
                }
            })
            .catch(console.error);
        }
    })
    .catch(console.error);
})
.catch (console.error);