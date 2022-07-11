exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: {
            test: event.test
        },
    };
    return response;
};
