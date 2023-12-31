import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
import fileupload from "express-fileupload";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import shoppingCartRoutes from "./routes/shoppingCart.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "./upload",
    }),
);
app.use(
    cors({
        origin: "https://64896d2f29f8af0008a1ebe7--penguinmovies.netlify.app",
        credentials: true,
    }),
);
app.use(cookieParser());

app.use(moviesRoutes);
app.use(userRoutes);
app.use(shoppingCartRoutes);
app.use(orderRoutes);

export default app;
