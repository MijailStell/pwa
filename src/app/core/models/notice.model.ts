import { ConnectionPipe } from './connection-pipe.model';
import { FloorPlant } from './floor-plant.model';
import { IsometricPlan } from './isometric-plan.model';

export class Notice {
	// [x: string]: any;
  constructor(
    public id: number = 0,
    public avisosExistente?: Notice[],
    public direccion?: string,
    public distrito?: string,
    public documentoIdentidad?: string,
    public nombre?: string,
    public numeroAviso?: string,
    public numeroInstalacion?: string,
    public estado: number = 1,
    public numeroContrato?: string,
    public objetoConexionId?: string,
    public tipo: number = 0,
    public conexion?: ConnectionPipe,
    public fechaRegistro?: Date,
    public planoPlanta?: FloorPlant[],
	  public planoIsometrico?: IsometricPlan,
    public objetoConexionTipo?: string    
  ) {}
}
