import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-clause',
  templateUrl: './add-new-clause.component.html',
  styleUrls: ['./add-new-clause.component.scss']
})
export class AddNewClauseComponent implements OnInit {

  clauseForm: FormGroup;

  editorConfig = {
    plugins: 'formatpainter code tinycomments export preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    tinycomments_author: 'author',
    tinycomments_author_name: 'MRH',
    tinycomments_mode: 'embedded',
    tinycomments_can_resolve: function (req: any, done: any) {
      var allowed = req.comments.length > 0 &&
        req.comments[0].author === 'MRH';
      done({
        canResolve: allowed || 'MRH' === 'MRH'
      });
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewClauseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.initClauseForm();
  }

  onSubmit(): void {
    this.dialogRef.close({ clause: this.clauseForm.value });
  }

  initClauseForm(): void {
    this.clauseForm = new FormGroup({
      'titleAR': new FormControl('', Validators.required),
      'titleEN': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'classification': new FormControl('', Validators.required),
      'isNegotiable': new FormControl(false),
      'content': new FormControl('', Validators.required),
    });
    this.setListOrder(333);
    this.clauseForm.patchValue(this.data);
  }

  setListOrder(order: number): void {
    this.data.content = (this.data.content as string).replace('<ol', `<ol start="${order}"`);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 && (c2 === c1);
  }
}
