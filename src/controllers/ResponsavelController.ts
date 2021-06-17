import { Request, response, Response } from 'express'
import { ResponsavelServices } from '../services/ResponsavelServices'

class ResponsavelController {

  async create(request: Request, response: Response) {
    const { cliente, telefone, email } = request.body

    const responsavelServices = new ResponsavelServices()

    try {
      const responsavel = await responsavelServices.create({ cliente, telefone })
      return response.json(responsavel)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const responsavelServices = new ResponsavelServices()

    try {
      const responsavel = await responsavelServices.index()
      return response.json(responsavel)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

}

export { ResponsavelController }

// rotas (/clients) - get/post/put/delete
// controller - responsabilidade de pegar as informações da rota
// services - responsabilidade da regra de negócio da aplicação e devolver
//            para o controller
// MVC - M (Model) - V (View) - C (Controller)
// Arquitetura de sofware

// Métodos do controller
// create() - Gravar registro
// index() - listar todos os registros
// show() - listar um único registro
// update() - Alterar registro
// delete() - Excluir registro