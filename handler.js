'use strict';

module.exports.HTTPendpoint = ( event, context, callback ) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, the time is ${new Date().toTimeString() }`,
  }),
  };
  callback( null, response );
};
