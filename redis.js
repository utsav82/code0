import redis from "redis";
const client = redis.createClient({
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
});

(async () => {
  await client.connect();
})();

client.on("connect", () => {
  console.log("Connected!");
});

client.on("error", (err) => {
  console.log(`Error:${err}`);
});

process.on("SIGINT", () => {
  client.quit();
  console.log("redis client quit");
});


export { client };
