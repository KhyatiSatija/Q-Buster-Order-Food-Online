const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://satijakhyati2003:k443@cluster0.ue2isxi.mongodb.net/q-buster-dti?retryWrites=true&w=majority' 
// const mongoURI = 'mongodb+srv://satijakhyati2003:k443@cluster0.ue2isxi.mongodb.net/q-buster-dti?retryWrites=true&w=majority'
const mongoURI = 'mongodb://satijakhyati2003:k443@ac-u7nfyrn-shard-00-00.ue2isxi.mongodb.net:27017,ac-u7nfyrn-shard-00-01.ue2isxi.mongodb.net:27017,ac-u7nfyrn-shard-00-02.ue2isxi.mongodb.net:27017/q-buster-dti?ssl=true&replicaSet=atlas-a7p9b1-shard-0&authSource=admin&retryWrites=true&w=majority'
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = async function () {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log("connected to mongo");
  
      const foodCollection = await mongoose.connection.db.collection("food_items");
      const data = await foodCollection.find({}).toArray();
  
      const categoryCollection = await mongoose.connection.db.collection("foodCategory");
      const Catdata = await categoryCollection.find({}).toArray();
  
      return { err: null, data, Catdata }; // Return an object with data and Catdata
    } catch (err) {
      console.error("---" + err);
      return { err, data: null, Catdata: null }; // Return an object with error and null data
    }
  };
  