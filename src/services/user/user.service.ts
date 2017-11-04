import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
    private user: Observable<firebase.User>

    constructor(private afauth: AngularFireAuth){
      this.user = afauth.authState;
    }

    signUp(email: string, password: string){
      return this.afauth.auth.createUserWithEmailAndPassword(email, password);
    }
    signIn(email: string, password: string){
      return this.afauth.auth.signInWithEmailAndPassword(email, password);
    }
    logout(){
      return this.afauth.auth.signOut();
    }
}
