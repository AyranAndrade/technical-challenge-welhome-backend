import propertyRepository from "../../../../repositories/PropertyRepository.ts";

const propertyUpdaterService = {
    async update(id: number, data: any) {
        return await propertyRepository.update(id, data);
    },
};

export default propertyUpdaterService;