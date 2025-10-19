import { Property } from '../models/Property.ts';

const propertyRepository = {
    async insert(property: any) {
        return await Property.create(property);
    }
};

export default propertyRepository;