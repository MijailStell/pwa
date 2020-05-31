import { Injectable } from '@angular/core';
import swal, { SweetAlertResult } from 'sweetalert2';
import { IMessageParameter } from '../models/message-parameter.model';
import { IConfirmParameter } from '../models/confirm-parameter.model';
import { EnviromentService } from './enviroment.service';
import { Constantes } from '../util/constantes';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public enviromentService: EnviromentService) {}

  toastMessage(parameter: IMessageParameter) {
    swal.fire({
      title: parameter.title,
      type: parameter.type,
      toast: true,
      position: parameter.position ? parameter.position : 'top-end',
      showConfirmButton: false,
      timer: this.enviromentService.timeOutNotifications
    });
  }

  confirmMessage(parameter: IConfirmParameter | string): Promise<SweetAlertResult> {
    return this.baseConfirmMessage(parameter, 'request');
  }

  deleteConfirmMessage(parameter: IConfirmParameter | string): Promise<SweetAlertResult> {
    return this.baseConfirmMessage(parameter, 'delete');
  }

  private baseConfirmMessage(parameter: IConfirmParameter | string, type: 'delete' | 'request'): Promise<SweetAlertResult> {
    let parametersMessage: IConfirmParameter;

    if (typeof parameter === 'string') {
      parametersMessage = {
        title: parameter,
        text: type === 'request' ? Constantes.EstasSeguroRealizarOperacion : `${Constantes.EstasSeguroEliminar} ${parameter}`,
        type: Constantes.Question
      };
    } else {
      parametersMessage = parameter;
    }

    return swal.fire({
      title: parametersMessage.title,
      text: parametersMessage.text,
      type: parametersMessage.type,
      showCancelButton: true,
      confirmButtonText: Constantes.Aceptar,
      cancelButtonText: Constantes.Cancelar
    });
  }

  successSaveMessage() {
    this.showMessage({
      title: Constantes.Guardado,
      text: Constantes.LaOperacionSeRealizoSatisfactoriamente,
      type: Constantes.Success
    });
  }

  showMessage(parameter: IConfirmParameter) {
    swal.fire(parameter.title, parameter.text, parameter.type);
  }
}
