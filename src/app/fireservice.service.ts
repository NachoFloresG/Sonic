
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(private firestore: AngularFirestore,
    public firestoree: AngularFirestore,
    public auth: AngularFireAuth

    ){ }
    loginWithEmail(data) {
      return this.auth.signInWithEmailAndPassword(data.email, data.password);
    }
  
    signup(data) {
      return this.auth.createUserWithEmailAndPassword(data.email, data.password);
    }
  
    saveDetails(data) {
      return this.firestore.collection("users").doc(data.uid).set(data);
    }
    getDetails(data) {
      return this.firestore.collection("users").doc(data.uid).valueChanges();
    }







  createDoc(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
}
   getCollection(){ 
console.log('estoy por leer una coleccion');

this.firestore.collection('Estudiantes').valueChanges().subscribe((res)=>{

  console.log('res->',res);
});
  }

}