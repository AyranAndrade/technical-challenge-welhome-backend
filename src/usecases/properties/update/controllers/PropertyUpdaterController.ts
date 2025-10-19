import type { Request, Response } from 'express';
import propertyUpdaterService from '../services/PropertyUpdaterService.ts';

const propertyUpdaterController = {
    async update(req: Request, res: Response) {
        const { title, address, status } = req.body;

        if (!title && !address && !status) {
            return res.status(400).send({
                message: "It needs to have at least one attribute"
            });
        }

        const id = req.params.id as unknown as number;

        if (!id) {
            return res.status(400).send({
                message: "ID is missing"
            });
        }        

        await propertyUpdaterService.update(id, req.body);

        res.status(200).send();
    },
};

export default propertyUpdaterController;