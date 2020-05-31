import { Menu } from './menu.model';

export class Sidebar {
  constructor(
    public rolNombre: string,
    public usuarioNombre: string,
    public username: string,
    public menus: Menu[],
    public rolId: number
  ) {}
}
