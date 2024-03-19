import redis from "redis";
const client = redis.createClient({
  url: process.env.REDIS_URL,
});
(async () => {
  await client.connect();
})();

client.on("connect", () => {
  console.log("Redis Connected!");
});

client.on("error", (err) => {
  console.log(`Error:${err}`);
});

process.on("SIGINT", () => {
  client.quit();
  console.log("redis client quit");
});

const outputMiddleware = async (req, res, next) => {
  const token = req.params.token;
  try {
    const output = await client.get(token);
    if (!!output) {
      res.status(200).send({ output });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

export { client, outputMiddleware };
