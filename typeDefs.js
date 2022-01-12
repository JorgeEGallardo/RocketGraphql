

import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Person {
    FirstName: String,
    SecondName:String,
    FatherLastName: String,
    MotherLastName:String,
    Birthday: String,
    Email:String,
    Phone: String,
  }
  type Mutation {
    addPerson(
      FirstName: String,
      SecondName:String,
      FatherLastName: String,
      MotherLastName:String,
      Birthday: String,
      Email:String,
      Phone: String,
    ):Person
}
  type Query {
    allPersons: [Person]!
  }
`;
export default typeDefs