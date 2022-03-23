const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'vercel-familiarisation-exercise-g01lck16a-jack-weng.vercel.app'