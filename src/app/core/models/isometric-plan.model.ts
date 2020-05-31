export class IsometricPlan {
  constructor(
    public id: number = 0,
    public avisoId: number = 0,
    public descripcion: string = '',
    public canvasView: string = '',
    public accesorio: string = '',
    public pipeline: string = '',
    public item: string = '',
    public tieneCuadricula: boolean = true,
    public estado: number = 1,
    public canvasViewBase64: string = ''
  ) {}
}
