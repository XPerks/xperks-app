import { Ctx } from "blitz"
import db from "db"

export default async function getCoachTutorials(input, ctx: Ctx) {
  const tutorials = await db.tutorial.findMany({
    where: {
      authorId: input
    },
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