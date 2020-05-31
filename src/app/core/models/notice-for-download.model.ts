export class NoticeForDownload {
  constructor(
    public id: number = 0,
    public rutaPlantView?: string,
    public rutaVerticalView?: string,
    public rutaFloorView?: string[],
    public rutaIsometricView?: string
  ) {}
}
