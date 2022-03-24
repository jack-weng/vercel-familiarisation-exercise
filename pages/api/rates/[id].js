import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler({ query: { id } }, res) { 
  const { db } = await connectToDatabase()

  const ratings = await db.collection("ratings").find({questionID: parseInt(id)}).toArray()
  return res.status(200).json(ratings)
}