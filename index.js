const [{ Server: h1 }, x] = [require("http"), require("express")];
const ApiRouter = require("./api");
const Router = x.Router();
const PORT = 4321;
const { log } = console;
const hu = { "Content-Type": "text/html; charset=utf-8" };
const app = x();

Router.route("/").get((r) => r.res.end("udachin"));

app
  .use((r, rs, n) => rs.status(200).set(hu) && n())
  .use(x.static("."))
  .use("/login", Router)
  .use("/", Router)
  .use("/api", ApiRouter(x))
  .use(({ res: r }) => r.status(404).set(hu).send("Empty"))
  .use((e, r, rs, n) => rs.status(500).set(hu).send(`Error: ${e}`))
  .set("x-powered-by", false);

module.exports = h1(app).listen(process.env.PORT || PORT, () =>
  log(process.pid),
);
