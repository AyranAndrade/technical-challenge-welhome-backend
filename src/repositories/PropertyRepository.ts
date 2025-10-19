import { Property } from '../models/Property.ts';

const propertyRepository = {
    async insert(property: any) {
        return await Property.create(property);
    },
    async deleteById(id: number) {
        await Property.destroy({
            where: { id }
        });        
    },
    async findAll() {
        return await Property.findAll();
    },
    async update(id: number, data: any) {
        return await Property.update(data, { 
            where : { id }
        });
    },
};

export default propertyRepository;