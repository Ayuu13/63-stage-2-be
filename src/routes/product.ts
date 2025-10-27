import express from "express";
import { getAllProducts, getProducts, createProduct } from "../controllers/product";

const router = express.Router()

router.get('/all-products', getAllProducts)
router.get('/products', getProducts)
// router.get('/product/:id', getProductById)
router.post('/product', createProduct)

export default router;