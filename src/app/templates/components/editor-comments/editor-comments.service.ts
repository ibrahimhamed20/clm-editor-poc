import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorCommentsService {
  constructor() { }
}


export interface IConversation {
  uid?: string;
  comments: IComment[];
}

export interface IComment {
  uid: string,
  content: string,
  createdAt?: string,
  modifiedAt?: string,
  authorName?: string
}