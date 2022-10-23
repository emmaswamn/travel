const items = require('./../assets/index.json');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}