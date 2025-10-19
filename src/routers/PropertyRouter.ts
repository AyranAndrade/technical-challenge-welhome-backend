import express from 'express';

import propertyCreatorController from '../usecases/properties/create/controllers/PropertyCreatorController.ts';
import propertyDeleterController from '../usecases/properties/delete/controllers/PropertyDeleterController.ts';
import propertyGetterController from '../usecases/properties/get/controllers/PropertyGetterController.ts';
 
const PropertyRouter = express.Router();

PropertyRouter.post('/properties/', propertyCreatorController.create);
PropertyRouter.delete('/properties/:id/', propertyDeleterController.deleteById);
PropertyRouter.get('/properties/', propertyGetterController.getAll);
 
export default PropertyRouter;