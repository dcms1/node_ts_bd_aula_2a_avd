import { Router } from 'express'

import { ResponsavelController } from './controllers/ResponsavelController'

import { DespesaController } from './controllers/DespesaController'


const routes = Router();

const responsavelController = new ResponsavelController()

const despesaController = new DespesaController()

routes.post('/responsavel', responsavelController.create)
routes.get('/responsavel', responsavelController.index)

routes.post('/despesa', despesaController.create)
routes.get('/despesa', despesaController.index)
routes.get('/despesa/:id', despesaController.show)
routes.delete('/despesa/:id', despesaController.delete)
routes.put('/despesa/:id', despesaController.update)

export { routes }

