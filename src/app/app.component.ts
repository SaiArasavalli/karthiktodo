import { Component } from '@angular/core';
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { Validators, FormBuilder } from '@angular/forms';

interface Todo {
  id: string;
  text: string;
  created: Timestamp;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  todos: Todo[] = [];

  todoForm = this.fb.group({
    text: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const q = query(collection(db, 'todos'), orderBy('created', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.todos = [];
      querySnapshot.forEach((doc) => {
        this.todos.push({ id: doc.id, ...doc.data() } as Todo);
      });
    });
  }

  async addTodo() {
    if (this.todoForm.valid) {
      await addDoc(collection(db, 'todos'), {
        text: this.todoForm.value.text,
        created: serverTimestamp(),
      });
      this.todoForm.reset();
    }
  }
}
