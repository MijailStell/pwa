import { Notice } from './notice.model';

export class FloorPlant {
  constructor(
    public id: number = 0,
    public avisoId: number = 0,
    public descripcion?: string,
    public canvasView?: string,
    public ambiente?: string,
    public estado: number = 1,
    public notice?: Notice,
    public canvasViewBase64: string = '',
  ) {

  }
}
