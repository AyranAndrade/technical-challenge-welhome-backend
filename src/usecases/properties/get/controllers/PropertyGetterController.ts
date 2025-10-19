import type { Request, Response } from 'express';
import propertyGetterService from '../services/PropertyGetterService.ts';

const propertyGetterController = {
    async getAll(req: Request, res: Response) {
        const properties = await propertyGetterService.getAll();

        res.status(201).send(properties);
    },
};

export default propertyGetterController;