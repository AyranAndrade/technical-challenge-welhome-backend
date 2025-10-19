import type { Request, Response } from 'express';
import propertyDeleterService from '../services/PropertyDeleterService.ts';

const propertyDeleterController = {
    async deleteById(req: Request, res: Response) {
        const id = req.params.id as unknown as number;

        if (!id) {
            return res.status(400).send({
                message: "ID is missing"
            });
        }

        await propertyDeleterService.deleteById(id);

        res.status(200).send();
    },
};

export default propertyDeleterController;