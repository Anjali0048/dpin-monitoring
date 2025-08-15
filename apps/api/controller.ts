import { Request, Response } from "express";
import { prismaClient } from "db/client";


export const postWebsite = async (req: Request, res: Response) => {
    const userId = req.userId!;
    const data = await prismaClient.website.create({
        data: {
            userId: userId,
            url: req.body.url,
        }
    })
    res.status(201).json({ 
        id: data.id,
        message: 'Website created successfully' 
    });
}

export const getWebsiteStatus = async (req: Request, res: Response) => {
    const websiteId = req.query.id as string;
    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId: req.userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    })
    res.json(data);
}

export const getWebsites = async (req: Request, res: Response) => {
    const userId = req.userId!;
    const data = await prismaClient.website.findMany({
        where: {
            userId: userId,
            disabled: false
        }
    })
    res.json(data);
}

export const deleteWebsite = async (req: Request, res: Response) => {
    const websiteId = req.query.websiteId as string;
    await prismaClient.website.update({
        where: {
            id: websiteId,
            userId: req.userId
        },
        data: {
            disabled: true
        }
    })
    res.json({ message: 'Website deleted successfully' });
}