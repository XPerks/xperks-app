import { Ctx } from "blitz"
import db from "db"

export default async function getPopularGames(input, ctx: Ctx) {
  const games = await db.game.findMany({
    orderBy: [
      {
        priority: 'desc'
      }
    ],
    take: 5
  })

  return games
}