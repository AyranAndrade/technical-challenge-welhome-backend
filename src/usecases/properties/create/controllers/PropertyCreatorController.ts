import type { Request, Response } from 'express';
import propertyCreatorService from '../services/PropertyCreatorService.ts';

const propertyCreatorController = {
    async create(req: Request, res: Response) {
        const { title, address, status } = req.body;

        if (!title || !address || !status) {
            return res.status(400).send({
                message: "Attributes missing"
            });
        }

        const property = await propertyCreatorService.create(req.body);

        res.location(`/properties/${property.id}/`).status(201).send();
    },
};

export default propertyCreatorController;