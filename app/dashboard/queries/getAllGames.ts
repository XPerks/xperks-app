import {Ctx} from 'blitz'
import db from 'db'

export default async function getAllGames(input, ctx: Ctx) {
  const games = db.game.findMany()
  return games
}