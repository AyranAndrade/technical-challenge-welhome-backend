import propertyRepository from "../../../../repositories/PropertyRepository.ts";

const propertyCreatorService = {
    async create(data: any) {
        return await propertyRepository.insert({
            title: data.title,
            address: data.address,
            status: data.status
        });
    },
};

export default propertyCreatorService;