const items = require('./../assets/city.json');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}