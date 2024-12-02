import { Router } from "express";
import { getProducts, getProductById } from "../Controller/ApiController.js";
const apiRouter = Router();

apiRouter.get("/products", getProducts);
apiRouter.get("/products/:id", getProductById);

export default apiRouter;