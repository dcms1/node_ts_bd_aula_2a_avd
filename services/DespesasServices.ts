import { getCustomRepository } from 'typeorm'
import { DespesaRepository } from '../repositories/DespesaRepository'

interface IDespesaCreate {
  data_da_compra: string;
  local_da_compra: string;
  valor: number;
  responsavel_id: string;
}

interface IDespesaShow {
  id: string;
}

interface IDespesaUpdate {
  data_da_compra: string;
  local_da_compra: string;
  valor: number;
  responsavel_id: string;
}

class DespesaServices {

  async create({ data_da_compra, local_da_compra, valor, responsavel_id }: IDespesaCreate) {
    const despesaRepository = getCustomRepository(DespesaRepository)

    const despesas = await despesaRepository.create({
      data_da_compra,
      local_da_compra,
      valor,
      responsavel_id
    })

    await despesaRepository.save(despesas)

    return despesas;

  }

  async index() {
    const despesaRepository = getCustomRepository(DespesaRepository)

    const despesas = await despesaRepository.find({ relations: ["responsavel"] })

    return despesas;
  }

  async show({ id }: IDespesaShow) {
    const despesaRepository = getCustomRepository(DespesaRepository)
    const despesas = await despesaRepository.findOne(id, { relations: ["responsavel"] })

    if (!despesas) {
      throw new Error('Despesas id not found!!')
    }

    return despesas
  }

  async delete({ id }: IDespesaShow) {
    const despesaRepository = getCustomRepository(DespesaRepository)

    const despesas = await despesaRepository.findOne({ id })

    if (!despesas) {
      throw new Error('Despesas id not found!!')
    }

    return await despesaRepository.delete({ id })
  }

  async update(id, { data_da_compra, local_da_compra, valor, responsavel_id }: IDespesaUpdate) {
    const despesaRepository = getCustomRepository(DespesaRepository)

    let despesas = await despesaRepository.findOne({ id })

    if (!despesas) {
      throw new Error('Despesas id not found!!')
    }

    await despesaRepository.update(id, {
      data_da_compra,
      local_da_compra,
      valor,
      responsavel_id
    })

    despesas = await despesaRepository.findOne({ id })

    return despesas
  }
}

export { DespesaServices }
