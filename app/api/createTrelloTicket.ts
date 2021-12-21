import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import axios from 'axios'

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  res.setHeader("Content-Type", "application/json")
  const boards = await axios.get(`https://api.trello.com/1/members/me/boards/?key=1db299679ca72bab88a5e8cf0d0892f9&token=467a5888a2a7fffa95245eec383b8a74310ae5d3e99f4abc620212ed3510ea9e`)

  return res.json(boards.data)
}
export default handler