/*
  Note: We have included the plugin in the same JavaScript file as the TinyMCE
  instance for display purposes only. Tiny recommends not maintaining the plugin
  with the TinyMCE instance and using the `external_plugins` option.
*/
tinymce.PluginManager.add('clauseBtn', (editor, url) => {
    const openDialog = () => editor.windowManager.open({
      title: 'Clauses plugin',
      body: {
        type: 'panel',
        items: [
          {
            type: 'input',
            name: 'title',
            label: 'Enter Clause Title'
          }
        ]
      },
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'submit',
          text: 'Save',
          buttonType: 'primary'
        }
      ],
      onSubmit: (api) => {
        const listHtml = (data) => `
        <div id="clause_container" data-elment="10">
        <ol id="main_clause" class="main_clause">
          <li class="main_clause_li" value="">${data.title}<a></a></li>
          <ol id="main_clause_sub"><li id="main_clause_li_sub">Dummy</li></ol>
        </ol>
        </div>`;
        console.log("api",api)
        const data = api.getData();
        if(data.title !='') {
          /* Insert content when the window form is submitted */
          editor.insertContent(listHtml(data));
          api.close();
          console.log("PARENT",editor.contentDocument.getElementById("main_clause").closest("#clause_container"))
        }
      }
    });
    /* Add a button that opens a window */
    editor.ui.registry.addToggleButton('clauseBtn', {
      text: 'My Clauses',
      onAction: (api) => {
        /* Open window */
        if(!editor.contentDocument.getElementById("main_clause")){
          openDialog();
        }else{
          alert("already have clause added")
        }
      }
    });
    /* Adds a menu item, which can then be included in any menu via the menu/menubar configuration */
    editor.ui.registry.addMenuItem('clauseBtn', {
      text: 'Clauses plugin',
      onAction: () => {
        /* Open window */
        openDialog();
      }
    });
    /* Return the metadata for the help plugin */
    return {
      getMetadata: () => ({
        name: 'Clauses plugin',
        url: 'http://exampleplugindocsurl.com'
      })
    };
  });
  