    import { Select, Insert } from "./services/db.js";

    const persons = Select()
    const resolvers = {
        Query: {
            allPersons: () =>  persons,
        },
        Mutation:{
            addPerson: (root, args) => {
                const person = Insert(args)
                return person
            },
        }
    }  

    export default resolvers    