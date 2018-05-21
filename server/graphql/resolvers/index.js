import { mergeResolvers } from 'merge-graphql-schemas'
import userResolver from './userResolver'
// import productResolver from './productResolver'

const resolvers = [userResolver]

export default mergeResolvers(resolvers)
