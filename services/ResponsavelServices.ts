import { getCustomRepository } from 'typeorm'
import { Responsavel } from '../entities/Responsavel'
import { ResponsavelRepository } from '../repositories/ResponsavelRepository'

interface IResponsavelCreate {
  nome: string;
  telefone: number;
}

interface IResponsavelShow {
  id: string
}


class ResponsavelServices {

  async create({ nome, telefone }: IResponsavelCreate) {

    const responsavelRepository = getCustomRepository(ResponsavelRepository)

    //cadastrando Responsavel
    const responsavel = responsavelRepository.create({
      nome,
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