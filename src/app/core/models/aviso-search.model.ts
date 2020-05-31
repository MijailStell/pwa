export class AvisoSearch {
  constructor(
    public id: number = 0,
    public direccion?: string,
    public distrito?: string,
    public documentoIdentidad?: string,
    public nombre?: string,
    public numeroAviso?: string,
    public numeroInstalacion?: string,
    public objetoConexionId?: string,
    public numeroContrato?: string,
	  public tipo: number = 0,
	  public objetoConexionTipo? :string // add jcastillo
  ) {}
}
