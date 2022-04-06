import lib from "../../lib";
import sampleFunction, { sampleFunction2 } from "package1";
export const hello = async (event) => {
	console.log(sampleFunction(), sampleFunction2, lib());
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello from service 1",
			sample: sampleFunction() + sampleFunction2(),
			lib: lib(),
		}),
	};
};
