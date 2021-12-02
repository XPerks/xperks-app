import { resolver, SecurePassword } from "blitz"
import db from "db"
import { Signup } from "app/auth/validations"
import { Role } from "types"
import {nanoid} from 'nanoid'

export default resolver.pipe(resolver.zod(Signup), async ({ email, password, role }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  let roles:string[] = [];

  if(role === 'Coach'){
    roles = ['Coach', "Student"]
  } else { 
    roles = ['Student']
  }
  let user;
  if(role ==='Coach'){
    user = await db.user.create({
      data: { 
        email: email.toLowerCase().trim(), 
        hashedPassword, 
        roles: [...roles], 
        avatar: `https://avatars.dicebear.com/api/adventurer-neutral/${nanoid()}.svg` ,
        Coach: {
          create: {}
        },
        Student: {
          create: {}
        }
      },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        roles: true, 
        avatar: true 
      },
    })
  } else {
    user = await db.user.create({
      data: { 
        email: email.toLowerCase().trim(), 
        hashedPassword, 
        roles: [...roles], 
        avatar: `https://avatars.dicebear.com/api/adventurer-neutral/${nanoid()}.svg` ,
        Student: {
          create: {
            
          }
        }
      },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        roles: true, 
        avatar: true 
      },
    })
  }


  await ctx.session.$create({ userId: user.id, roles: user.roles as String[], activeRole: role === 'Coach' ? 'Coach': "Student" })
  return user
})
