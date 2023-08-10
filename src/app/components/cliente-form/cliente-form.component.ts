import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm!: FormGroup;
  alerta:boolean = false
  tipoCliente: string = "Fisica";
  
  

  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {}

  ngOnInit() {
    this.initForm();
  }

  

  initForm() {
    this.clienteForm = this.fb.group({
      tipo: ['fisica', Validators.required],
      documento: ['', [Validators.required,Validators.minLength(11),Validators.maxLength(14)]],
      nome: ['', Validators.required,Validators.minLength(6)],
      nomeFantasia: [''],
      cep: ['', [Validators.required, this.validarCep]],
      endereco: [''],
      bairro: [''],
      cidade: [''],
      telefone: ['', [Validators.required, this.validarTelefone]],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onTipoClienteChange(event: any) {
    this.tipoCliente = event.target.value;
    console.log(event.target.value)
  }

  //validação
  validarCep(control: any) {
    const cep = control.value.replace(/\D/g, '');

    if (cep.length === 8) {
      return null;
    }

    return { cepInvalido: true };
  }

  validarTelefone(control: any) {
    const telefone = control.value.replace(/\D/g, '');

    if (telefone.length >= 10 && telefone.length <= 11) {
      return null;
    } 

    return { telefoneInvalido: true };
  }

  

  //validação...

  buscarEndereco() {
    const cep = this.clienteForm.get('cep')?.value.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((data: any) => {
        this.clienteForm.patchValue({
          endereco: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade
        });
      });
    }
  }

  submitForm() {
    if (this.clienteForm.valid) {
      const clienteData = this.clienteForm.value;
      const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      clientes.push(clienteData);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    
    // Redirecionar para a página de consulta
    this.router.navigate(['']);
    } else {
      alert('digite corretamente os campos!!')
    }
  }
}
