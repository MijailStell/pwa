import { IActionForm } from './action-form.model';

export class Menu {
  constructor(
    public icon: string,
    public label: string,
    public url: string,
    public items: Menu[],
    public actions: IActionForm[]
  ) {}
}
