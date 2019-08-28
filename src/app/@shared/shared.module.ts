import { NgModule } from '@angular/core';

// MODULES
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ErrorMessageComponent } from './error-message/error-message.component';
import { OutputMessageComponent } from './output-message/output-message.component';

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
];

@NgModule({
  declarations: [ErrorMessageComponent, OutputMessageComponent],
  imports: [...materials, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    ...materials,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ErrorMessageComponent,
    OutputMessageComponent,
  ],
})
export class SharedModule {}
