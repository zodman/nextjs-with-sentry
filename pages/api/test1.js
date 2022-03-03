import { withSentry } from '@sentry/nextjs'

export const Data = "I'm cause the runtime error";

//const doAsyncWork = () => Promise.reject(new Error('API Test 1'))
//doAsyncWork()


async function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
