import { Request, Response } from "express";
import { posts, Post } from "../models/post-model";

export const getPosts = (req:Request, res:Response)=>{
    res.json(posts)
}

export const createPosts = (req:Request, res:Response)=>{
    const {title, content} = req.body

    const newPost:Post={
        id:posts.length +1,
        title,
        content
    }
    posts.push(newPost)
    res.status(201).json(newPost)
}

export const deletePosts = (req:Request, res:Response)=>{
    const id = Number(req.params.id);

    const postIndex = posts.findIndex((post) => post.id === Number(id));
    if (postIndex === -1) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    posts.splice(postIndex,1)
    res.json({message:"post deleted succesfully"})
}

export const updatePost = (req:Request, res:Response)=>{
    
}