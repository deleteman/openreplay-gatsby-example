import gql from 'graphql-tag'



export function init(recorder, queryStr, result ) {
        console.log("inside the trackQuery fn")
        let queryParsed = gql`${queryStr}`

        console.log(queryParsed)
        let {definitions} = queryParsed

        //let result = await queryFn(str)

        definitions.forEach(element => {
            let {operation, name, variableDefinitions } = element
            recorder(operation, name, variableDefinitions, result) 
        });
    }
    /*
    async function trackedQuery(str, ...keys) {
        console.log("inside the trackQuery fn")
        let queryParsed = gql`${str}`

        console.log(queryParsed)
        let {definitions} = queryParsed

        let result = await queryFn(str)

        definitions.forEach(element => {
            let {operation, name, variableDefinitions } = element
            recorder(operation, name, variableDefinitions, result) 
        });


        return queryFn`${str}`


    }

    async function trackedQueryFn(str) {
        let queryParsed = gql`${str}`

        console.log(queryParsed)
        let {definitions} = queryParsed

        let result = await queryFn(str)

        definitions.forEach(element => {
            let {operation, name, variableDefinitions } = element
            recorder(operation, name, variableDefinitions, result) 
        });


        return result


    }

    return {
        trackedQuery,
        trackedQueryFn
    }

   
}
*/

