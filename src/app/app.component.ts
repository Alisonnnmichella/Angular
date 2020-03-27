import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement } from './contador/actions';
interface AppState {
  count:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  contador$: Observable<number>;
  constructor(private store: Store<AppState>){
    
    this.contador$ = store.pipe(select('count'));
  }
  incrementar(){
    this.store.dispatch(increment());
  }
  decrementar(){
    this.store.dispatch(decrement());
  }

}
