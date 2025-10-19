import express from 'express';
import propertyCreatorController from '../usecases/properties/create/controllers/PropertyCreatorController.ts';
 
const PropertyRouter = express.Router();

PropertyRouter.post('/properties/', propertyCreatorController.create);
 
export default PropertyRouter;