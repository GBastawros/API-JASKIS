// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis

// hit the + button and right down the database name and collection

// 2. Create a collection called bounties
// hit the + button and right down the database name and collection

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne(
    {
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  })
  { acknowledged: true,
    insertedId: ObjectId("633cf76ee995a18cfd735f8d") }
  

// 2. Query for all bounties in the bounties collection
db.bounties.find()
{ _id: ObjectId("633cf76ee995a18cfd735f8d"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f8e"),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  client: 'White tiger',
  reward: 1000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f8f"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f90"),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  client: 'Sabertooth',
  reward: 4000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f91"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f92"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f93"),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  client: 'Red wolf',
  reward: 5000,
  captured: false }

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany(
    [
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])
  { acknowledged: true,
    insertedIds: 
     { '0': ObjectId("633cf7a2e995a18cfd735f8e"),
       '1': ObjectId("633cf7a2e995a18cfd735f8f"),
       '2': ObjectId("633cf7a2e995a18cfd735f90"),
       '3': ObjectId("633cf7a2e995a18cfd735f91"),
       '4': ObjectId("633cf7a2e995a18cfd735f92"),
       '5': ObjectId("633cf7a2e995a18cfd735f93") } }
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location:"Grasslands"})
{ _id: ObjectId("633cf76ee995a18cfd735f8d"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f8f"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f91"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find( { reward: { $gt: 10000 } } )
{ _id: ObjectId("633cf7a2e995a18cfd735f91"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f92"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }
// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({},{client:0})
{ _id: ObjectId("633cf76ee995a18cfd735f8d"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  reward: 10000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f8e"),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  reward: 1000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f8f"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  reward: 2500,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f90"),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  reward: 4000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f91"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  reward: 40000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f92"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  reward: 50000,
  captured: false }
{ _id: ObjectId("633cf7a2e995a18cfd735f93"),
  name: 'Grim Panda',
  species: 'Giant Panda',
  location: 'Temperate forest',
  wantedFor: 'Eating all the bamboo',
  reward: 5000,
  captured: false }

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({$and:[{location:"Woodlands"},{species:"Groundhog"}]}, {name:1})
{ _id: ObjectId("633cf7a2e995a18cfd735f92"), name: 'Grandhog' }

// Update and Delete
// 1. Update the reward for Polarwind to 10000
// Alt:1
db.bounties.findOneAndUpdate(
    {"name":"Polarwind"},
    {$set:{"reward":10000}})
  { _id: ObjectId("633cf7a2e995a18cfd735f90"),
    name: 'Polarwind',
    species: 'Polar Bear',
    location: 'Arctic',
    wantedFor: 'Not hibernating',
    client: 'Sabertooth',
    reward: 10000,
    captured: false }
    // Alt:2
db.runCommand(
    {
      findAndModify:"bounties",
      query:{name:"Polarwind"},
      update:{$set:{reward:10000}}
    })
  {
    lastErrorObject: { n: 1, updatedExisting: true },
    value: {
      _id: ObjectId("633cf7a2e995a18cfd735f90"),
      name: 'Polarwind',
      species: 'Polar Bear',
      location: 'Arctic',
      wantedFor: 'Not hibernating',
      client: 'Sabertooth',
      reward: 4000,
      captured: false
    },
    ok: 1
  }
// 2. Remove Lokinkajou
db.bounties.deleteOne({name:"Lokinkajou"})
{ acknowledged: true, deletedCount: 1 }

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({"client":"Songbird"})
{ acknowledged: true, deletedCount: 3 }

// 4. Update all captured statuses to true
db.bounties.updateMany({}, { $set: { captured : true } })
{ acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0 }
