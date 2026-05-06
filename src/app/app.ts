import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  nombre: string = '';
  segundoNombre: string = '';
  apellido: string = '';
  email: string = '';
  curp: string = '';
  rfc: string = '';
  tipoTDC: string = 'Estándar';
  monto: number = 500;
  telefono: string = '';
  genero: string = '';

 validarTelefono() {
  // 1. Elimina cualquier cosa que no sea número[cite: 1]
  // 2. Corta el texto a máximo 10 caracteres[cite: 1]
  this.telefono = this.telefono.replace(/[^0-9]/g, '').substring(0, 10);
}

  formularioValido(): boolean {
    return (
      this.nombre.trim().length > 0 &&
      this.apellido.trim().length > 0 &&
      this.telefono.length === 10 &&    // Debe tener exactamente 10 dígitos
      this.genero !== '' &&             // Debe haber seleccionado un género
      this.email.trim().length > 0 &&
      this.curp.trim().length > 0 &&
      this.rfc.trim().length > 0
    );
  }

  abrirPopupLegal(event: any) {
    if (event.target.checked) {
      const confirmar = confirm("INFORMACIÓN LEGAL: Al aceptar, autoriza al Banco Chile Morron a consultar su historial. ¿Desea continuar?");
      if (!confirmar) {
        event.target.checked = false;
      }
    }
  }
}