import { Request, Response } from "express";
import { prisma } from "../connection/client";

export const getProducts = async (req: Request, res:Response)=>{
    const { sortBy, order, minPrice, maxPrice, limit, offset }
        = req.query;

    const filters:any = {};
        if(minPrice) filters.price = {
            gte:parseFloat(minPrice as string)};
        if(maxPrice){
            filters.price ={
                ...(filters.price || {}),
                lte: parseFloat(maxPrice as string)
            }}
    try {
        const products = await prisma.product.findMany({
            where:filters,
            orderBy:{
                [sortBy as string]: order as "asc" | "desc"
            },
            take: Number(limit),
            skip: Number(offset),
        });
        const total = await prisma.product.count({ where: filters })
        res.json({data: products, total})
    } catch (error) {
        res.status(500).json({error: "failed to fecth data"})
    }
}

// export const getProductById = async (req: Request, res:Response)=>{
//     try {
//         const id = parseInt(req.params.id);

//         const products = await prisma.product.findUnique({
//             where:{id}
//         })
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({error: "failed to fecth data"})
//     }
// }

export const createProduct = async (req: Request, res:Response)=>{
    try {
        const{ name, price, stock, orders } = req.body
        const product = await prisma.product.create({
            data:{name, price:parseFloat(price), stock, orders},
        })
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({error: "failed to create product"})
    }
}