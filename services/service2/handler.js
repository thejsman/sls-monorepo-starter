"use strict";

module.exports.hello = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Hello from service 2",
				input: event,
			},
			null,
			2
		),
	};
};
