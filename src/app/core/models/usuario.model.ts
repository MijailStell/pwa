import { IOption } from 'src/app/shared/models/option.model';

export class Usuario {
  constructor(
    public nombres?: string,
    public apellidos?: string,
    public userName?: string,
    public password?: string,
    public id: number = 0,
    public estado: number = 1,
    public rolId: number = 1,
    public modoAutenticacion: number = 1,
    public roles?: IOption[]
  ) {}
}
