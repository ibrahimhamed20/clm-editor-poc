import { Component } from '@angular/core';
import { IComment, IConversation } from './editor-comments.service';
import { EDITOR_CONFIG } from './editor-config';

@Component({
  selector: 'app-editor-comments',
  templateUrl: './editor-comments.component.html',
  styleUrls: ['./editor-comments.component.scss']
})
export class EditorCommentsComponent {

  conversations: IConversation[] = localStorage.getItem('EDITOR_COMMENTS') ? JSON.parse(localStorage.getItem('EDITOR_COMMENTS') as string) : [];
  content: string = localStorage.getItem('EDITOR_CONTENT') ? localStorage.getItem('EDITOR_CONTENT') as string : 'Welcome to TinyMCE Angular';
  oldContent: string = localStorage.getItem('EDITOR_CONTENT') ? localStorage.getItem('EDITOR_CONTENT') as string : 'Welcome to TinyMCE Angular';

  showReplyBox: boolean = false;

  editorConfig = {
    ...EDITOR_CONFIG,
    tinycomments_create: (req: any, done: any, fail: any) => this.tinycomments_create(req, done, fail),
    tinycomments_reply: (req: any, done: any, fail: any) => this.tinycomments_reply(req, done, fail),
    tinycomments_edit_comment: (req: any, done: any, fail: any) => this.tinycomments_edit_comment(req, done, fail),
    tinycomments_delete,
    tinycomments_delete_all,
    tinycomments_delete_comment,
    tinycomments_lookup: (req: any, done: any, fail: any) => this.tinycomments_lookup(req, done, fail),
    save_onsavecallback: () => this.saveContent()
  }

  tinycomments_create = (req: any, done: any, fail: any) => {
    const { content, createdAt } = req;
    const conversationUid = new Date().getTime().toString();
    this.conversations.push({ uid: conversationUid, comments: [{ uid: conversationUid, content, createdAt, authorName: 'Hemio TinyMCE' }] });
    done({ conversationUid });
  }

  tinycomments_reply = (req: any, done: any, fail: any) => {
    const { conversationUid, content, createdAt } = req;
    const commentUid = new Date().getTime().toString();

    const conversation: IConversation = this.conversations.find(el => el.uid === conversationUid) || { uid: conversationUid, comments: [] };
    conversation.comments.push({ uid: commentUid, content, createdAt, authorName: 'Hemio TinyMCE' });
    done({ commentUid });
  }

  tinycomments_lookup = ({ conversationUid }: any, done: any, fail: any) => {
    const lookup = () => {
      const conversation = this.conversations.find(el => el.uid === conversationUid);
      return new Promise((res, err) => conversation?.uid ? res({ conversation }) : err('No Converations'));
    };
    lookup().then((data) => done(data)).catch((err) => fail(err));
  }

  tinycomments_edit_comment = (req: any, done: any, fail: any) => {
    const { conversationUid, commentUid, content, modifiedAt } = req;
    let comment = this.conversations.find(el => el.uid === conversationUid)?.comments.find(el => el.uid === commentUid) as IComment;
    comment = { ...comment, content, modifiedAt };
    done({ canEdit: true });
  };

  saveContent = () => {
    localStorage.setItem('EDITOR_CONTENT', this.content);
    localStorage.setItem('EDITOR_COMMENTS', JSON.stringify(this.conversations));
  }

  onKeyDown(ev: { event: any, editor: any }) {
    let container1 = document.createElement('div');
    let container2 = document.createElement('div');

    container1.innerHTML = this.oldContent;
    container2.innerHTML = this.content;

    if (container1.innerText !== container2.innerText) {
      this.content = this.oldContent;
    }
  }

}


const tinycomments_delete = (req: any, done: any, fail: any) => {
  const conversationUid = req.conversationUid;
  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
};

const tinycomments_delete_all = (_req: any, done: any, fail: any) => {
  fetch('https://api.example/conversations', {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
};

const tinycomments_delete_comment = (req: any, done: any, fail: any) => {
  const { conversationUid, commentUid } = req;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'DELETE',
    }
  ).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
};
