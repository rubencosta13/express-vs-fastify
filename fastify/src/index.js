import fastify from 'fastify';
import faker from 'faker';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { UserData } from './schema.js';

const start = async () => {
  // We wont be considering the time required to access the database, since thats a variable we can't count on
  await mongoose.connect(process.env.DB);
  
  const app = fastify();

  app.get("/user/getOne", async (req, res) => {
    const randomInteger = Math.floor(Math.random() * 1000) + 1;
    const user = await UserData.findOne({userId: randomInteger});
    if (!user)  return "NO USER";
    return { user }
  });
  app.get("/user/getAll", async (req, res) => {
    const user = await UserData.find({});
    console.log(user)
    return user
  });

  await app.listen({ port: 3000 });
};

start();

const generateRandomData = async () => {
  console.log("Connecting to the database")
  console.time("dbConnection");
  await mongoose.connect(process.env.DB);
  console.timeEnd("dbConnection");
  console.time("databaseAddingRecords");
  for (let user = 0; user < 1000; user++) {
    const userDetails = new UserData({
      userId: user,
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(true),
      password: faker.internet.password(20),
    })
    await userDetails.save();
    
  }
  console.timeEnd('databaseAddingRecords');
};

// generateRandomData();