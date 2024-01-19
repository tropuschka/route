module.exports = (x) => {
  const router = x.Router();

  router.route("/").all((r) => r.res.send("mew"));
  router
    .route("/deg/:n1/:n2")
    .all((r) => r.res.send("" + Number(r.params.n1) ** Number(r.params.n2)));

  return router;
};
