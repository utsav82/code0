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

const codeMiddleware = async (req, res, next) => {
  const id = req.params.id;
  try {
    const code = await client.get(id);
    if (!!code) {
      res.status(200).json(JSON.parse(code));
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

// client.flushAll()

export { client, codeMiddleware };
