import { Ctx } from "blitz"
import db from "db"

export default async function getAllTutorials(input, ctx: Ctx) {
  const tutorials = await db.tutorial.findMany({
    include: {
      author: {
        include: {
          user: true
        }
      }
      
    }
  })
  return tutorials
}