import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', '/media_queries.scss']
})
export class FormComponent {
  message = false;
  isSubmitted = false;
  form = this.fb.group({
    name : ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?(?:[0-9] ?){0,13}[0-9]$/)]],   
    message: ['', Validators.required]
  })
  constructor(private fb:FormBuilder,private service:EmailService){}

  onSubmit(): void{
    this.isSubmitted = true;
    

    this.service.sendMail(
      this.form.get('name')?.value || '', 
      this.form.get('email')?.value || '', 
      this.form.get('phone')?.value || '', 
      this.form.get('message')?.value || ''
  ).subscribe({
         next: (response) => {
        // console.log('Email sent successfully');
        this.form.reset();
        this.isSubmitted = false;
        this.message = true;
      },
      error: (error) => {
        // console.error('Error sending email:', error);
        this.isSubmitted = false;
      }

      });
      
    }
    isInvalid(param:any) {
      return this.form.get(param)?.invalid &&
    (this.form.get(param)?.dirty || this.form.get(param)?.touched || this.isSubmitted);
  }
}


      