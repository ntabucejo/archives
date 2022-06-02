import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../library/data'
import { DataApiInterface } from '../../library/interfaces'

const handler = async (req: NextApiRequest, res: NextApiResponse<DataApiInterface>) => {
  res.status(200).json({ dataApi: data })
}
export default handler
