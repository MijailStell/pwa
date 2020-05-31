import { Ambiente } from './ambiente.model';

export class PisoAmbiente {
  constructor(
    public id: string = '',
    public ambienteList: Ambiente[]
  ) {}
}
