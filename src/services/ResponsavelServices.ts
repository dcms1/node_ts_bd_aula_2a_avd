import { getCustomRepository } from 'typeorm'
import { ResponsavelRepository } from '../repositories/ResponsavelRepository'

interface IResponsavelCreate {
  cliente: string;
  telefone: string;
}

interface IResponsavelShow {
  id: string
}


class ResponsavelServices {

  async create({ cliente, telefone }: IResponsavelCreate) {

    const responsavelRepository = getCustomRepository(ResponsavelRepository)

    //cadastrando Responsavel
    const responsavel = responsavelRepository.create({
      cliente,
      telefone
    })

    await responsavelRepository.save(responsavel)

    return responsavel
  }

  async index() {
    const responsavelRepository = getCustomRepository(ResponsavelRepository)

    const responsavel = await responsavelRepository.find()

    return responsavel;
  }
}

export { ResponsavelServices }