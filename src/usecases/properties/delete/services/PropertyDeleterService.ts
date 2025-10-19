import propertyRepository from "../../../../repositories/PropertyRepository.ts";

const propertyDeleterService = {
    async deleteById(id: number) {
        return await propertyRepository.deleteById(id);
    },
};

export default propertyDeleterService;