import propertyRepository from "../../../../repositories/PropertyRepository.ts";

const propertyGetterService = {
    async getAll() {
        return propertyRepository.findAll();
    },
};

export default propertyGetterService;