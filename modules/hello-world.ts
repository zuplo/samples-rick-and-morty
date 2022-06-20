import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  return fetch('https://icon-icons.com/downloadimage.php?id=209725&root=3325/ICO/512/&file=clock_time_furniture_icon_209725.ico');
}
