import { AuthenticationError, Ctx } from "blitz"

export default async function changeAuthRole(input: any, ctx: Ctx) {
  // This merges the input data with whatever is already in current publicData
  ctx.session.$authorize('Coach')
  if(input !== 'Admin' || 'ADMIN'){
    await ctx.session.$setPublicData({ activeRole: input }) 
  }
  else throw new AuthenticationError()
}