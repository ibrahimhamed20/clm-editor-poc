export const EDITOR_CONFIG = {
    selector: 'textarea#comments-callback',
    height: 500,
    plugins: 'code tinycomments help lists save',
    toolbar:
        'undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | addcomment showcomments | help | save',
    menubar: 'file edit view insert format tc',
    menu: {
        tc: {
            title: 'Comments',
            items: 'addcomment showcomments deleteallconversations',
        },
    },
    tinycomments_mode: 'callback',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

    /* The following setup callback opens the comments sidebar when the editor loads */
    setup: (editor: any) => {
        editor.on('SkinLoaded', () => {
            editor.execCommand('ToggleSidebar', false, 'showcomments', { skip_focus: true });
        });
    }
}