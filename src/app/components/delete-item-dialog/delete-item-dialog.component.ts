import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html'
})
export class DialogOverviewExampleDialog {
  
  confirmDelete: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    console.log('I\'m clicked!!');
    this.confirmDelete.emit('Confirm Delete!');
  }

}