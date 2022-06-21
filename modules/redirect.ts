import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  return new Response('', {
    status: 301,
    headers: {
      location: '/__zuplo/dev-portal',
    }
  })
}