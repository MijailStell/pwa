import { SweetAlertType } from 'sweetalert2';

export interface IMessageParameter {
  title: string;
  type: SweetAlertType;
  position?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'top-left'
    | 'top-right'
    | 'center'
    | 'center-start'
    | 'center-end'
    | 'center-left'
    | 'center-right'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-left'
    | 'bottom-right';
}
