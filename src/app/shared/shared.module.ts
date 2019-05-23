import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccessDeniedDialogComponent } from './security/components/access-denied-dialog/access-denied-dialog.component';

@NgModule({
  declarations: [AccessDeniedDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, RouterModule]
})
export class SharedModule {
}
