import Koa from "koa"
import koaBody from "koa-body"
import got from "got"
import { NetlifyHook } from "./types"

const port = 3030

const token = process.env.BOT_TOKEN
const chat_id = process.env.CHAT_ID
if (!token || !chat_id) {
  throw new Error("BOT_TOKEN and CHAT_ID must be provided!")
}
const method = (m: string) => `https://api.telegram.org/bot${token}/${m}`
const deployMessage = (hook: NetlifyHook) => {
  const {
    deploy_time,
    links: { permalink },
  } = hook

  return `☁️ successfully published <a href="${permalink}">new version</a> in ${deploy_time} seconds.`
}
const deployError = ({ error_message }: NetlifyHook) => `🛑 deploy error:\n${error_message}`

const app = new Koa()
app.use(koaBody())

app.use(async (ctx) => {
  if (ctx.url === "/hook" && ctx.request.body.site_capabilities) {
    ctx.status = 200
    const { body } = ctx.request

    return await got.post(method("sendMessage"), {
      json: {
        chat_id,
        text: body.error_message ? deployError(body) : deployMessage(body),
        disable_web_page_preview: true,
        parse_mode: "HTML",
        disable_notification: true,
      },
    })
  }
  ctx.status = 500
})

app.listen(port).on("listening", () => console.log(`running on port ${port}`))
