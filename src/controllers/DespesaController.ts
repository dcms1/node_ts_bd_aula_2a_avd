import { Request, Response } from 'express'
import { DespesaServices } from '../services/DespesasServices'

class DespesaController {

  async create(request: Request, response: Response) {
    const { data_da_compra, local_da_compra, valor, responsavel_id } = request.body

    const despesaServices = new DespesaServices()

    const despesa = await despesaServices.create({ data_da_compra, local_da_compra, valor, responsavel_id })

    return response.json(despesa)
  }

  async index(request: Request, response: Response) {
    const despesaServices = new DespesaServices()
    try {
      const despesa = await despesaServices.index()
      return response.json(despesa)

    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })

    }
  }

  async show(request: Request, response: Response) {
    const despesaServices = new DespesaServices()
    const { id } = request.params;

    try {
      const despesa = await despesaServices.show({ id })
      return response.json(despesa)

    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const despesaServices = new DespesaServices()
    const { id } = request.params;

    try {
      await despesaServices.delete({ id })
      return response.json({ message: 'Despesas id deleted successfully' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const despesaServices = new DespesaServices()
    const { id } = request.params
    const { data_da_compra, local_da_compra, valor, responsavel_id } = request.body

    try {
      const despesa = await despesaServices.update(id, { data_da_compra, local_da_compra, valor, responsavel_id })
      return response.json(despesa)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { DespesaController }
