import { app } from "./app.js";
import { dbconnect } from "./data/database.js";

dbconnect

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
