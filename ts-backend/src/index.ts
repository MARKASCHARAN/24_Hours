import express from "express";
import userRoutes from "./routes/user.routes";
import "dotenv/config";
import { errorHandler } from "./middlewares/error.middleware";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serever is Running ON http://localhost:${PORT}`);
});
