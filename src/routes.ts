import { Router } from 'express'

import { ResponsavelController } from './controllers/ResponsavelController'

import { ServicesController } from './controllers/DespesaController'

import { OrdermServicoController } from './controllers/OrdemServicoController'

const routes = Router();

const responsavelController = new ResponsavelController()

const servicesController = new ServicesController()

const ordemServicoController = new OrdermServicoController()

routes.post('/responsavel', responsavelController.create)
routes.get('/responsavel', responsavelController.index)

routes.post('/services', servicesController.create)
routes.get('/services', servicesController.index)
routes.get('/services/:id', servicesController.show)
routes.delete('/services/:id', servicesController.delete)
routes.put('/services/:id', servicesController.update)

export { routes }

