import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) { 
  const { db } = await connectToDatabase()

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body)
      const newRating = await db.collection("ratings").insertOne(bodyObject)
      return res.status(200).json(newRating)

    case "GET":
      const ratings = await db.collection("ratings").find({}).toArray()
      return res.status(200).json(ratings)
  }
}