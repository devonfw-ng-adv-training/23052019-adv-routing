import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccessDeniedDialogComponent } from './security/components/access-denied-dialog/access-denied-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccessDeniedDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class SharedModule {
}
