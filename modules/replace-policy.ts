import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type ReplacePolicyOptions = {
	regex: string,
	replace: string,
}
export default async function (
	request: ZuploRequest,
	context: ZuploContext,
	options: ReplacePolicyOptions) {

	context.addEventListener("responseSending", async (event: any) => {
		//const body = await event.mutableResponse.clone();
		//event.mutableResponse = new Response('banana');
		
	});

	return request;
}