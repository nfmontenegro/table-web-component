import jwt from 'jsonwebtoken'

const secret =
  process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret'

export const authService = () => {
  const signJWT = payload => jwt.sign(payload, secret, { expiresIn: 10800 })
  const verifyJWT = (token, cb) => jwt.verify(token, secret, {}, cb)

  return {
    signJWT,
    verifyJWT
  }
}
