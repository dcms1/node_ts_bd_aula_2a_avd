import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'
import { Responsavel } from './Responsavel';
import { v4 as uuid } from 'uuid'

@Entity("despesa")
class Despesa {

  @PrimaryColumn()
  id: String;

  @Column()
  data_da_compra: string;

  @Column()
  local_da_compra: String;

  @Column()
  valor: Number;

  @Column()
  responsavel_id: String;
  @JoinColumn({ name: 'responsavel_id' })
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {

    if (!this.id) {
      this.id = uuid()
    }

  }

}

export { Despesa }