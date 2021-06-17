import { Router } from 'express'

import { ClientsController } from './controllers/ClientsController'

import { ServicesController } from './controllers/ServicesController'

import { OrdermServicoController } from './controllers/OrdemServicoController'

const routes = Router();

const clientsController = new ClientsController()

const servicesController = new ServicesController()

const ordemServicoController = new OrdermServicoController()

routes.post('/clients', clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.delete('/clients/:id', clientsController.delete)
routes.put('/clients/:id', clientsController.update)

routes.post('/services', servicesController.create)
routes.get('/services', servicesController.index)
routes.get('/services/:id', servicesController.show)
routes.delete('/services/:id', servicesController.delete)
routes.put('/services/:id', servicesController.update)

routes.post('/ordemservico', ordemServicoController.create)
routes.get('/ordemservico', ordemServicoController.index)
routes.get('/ordemservico/:id', ordemServicoController.show)
routes.delete('/ordemservico/:id', ordemServicoController.delete)
routes.put('/ordemservico/:id', ordemServicoController.update)

export { routes }

