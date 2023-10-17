import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Editor as TinyMCEEditor } from 'tinymce';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports: [EditorModule, FormsModule],
  standalone: true,

})


export class EditorComponent {
  content = '';
  @Input('editorData') editorData: any = { content: '' };
  // toolbarBtns = ` customStrikethrough customToggleStrikethrough
  //     undo redo | bold italic underline strikethrough |
  //     fontselect fontsizeselect formatselect |
  //     alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | 
  //     forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | 
  //     insertfile image media link anchor codesample | ltr rtl',  `

  toolbarBtns = 'clauseBtn language bullist numlist';
  editorConfig = {
    plugins: 'clauseBtn advlist formatpainter code tinycomments export preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    //advlist_number_styles:'lower-roman',
    menubar: 'file edit view insert format tools table help',
    toolbar: this.toolbarBtns,
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
    content_css: "/assets/css/tinymce.editor.css",
    external_plugins: {
      'clauseBtn': '/assets/plugins/clauseBtn.js'
    },
    tinycomments_can_resolve: function (req: any, done: any) {
      var allowed = req.comments.length > 0 &&
        req.comments[0].author === 'MRH';
      done({
        canResolve: allowed || 'MRH' === 'MRH'
      });
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    setup: this.editorSetup,
    init_instance_callback: this.insert_contents
  }

  editorSetup(editor: TinyMCEEditor) {
    editor.on('NodeChange', function (e) {
      // console.log("TEXT",editor.getContent({format:'text'}))
      // console.log(e.element.parentNode)
      if (e.selectionChange) {
        console.log("GET ITEM", e.element.getRootNode())
      }
    });

  }

  insert_contents(editor: TinyMCEEditor) {

  }


  onSaveContent() {

  }


}
