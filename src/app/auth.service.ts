
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogin = new BehaviorSubject<boolean>(false)

currentUser = new BehaviorSubject<any | null>(null)
  constructor(private http:HttpClient) { }

products = new BehaviorSubject<any[]>([]);
redirectUrl= ''
  signUp(data:any):Observable<any>{
    return this.http.post('https://route-egypt-api.herokuapp.com/signup', data)
  }
signin(data:any):Observable<any>{
  return this.http.post('https://route-egypt-api.herokuapp.com/signin',data)
}
  addData(cart:any){
    this.products.next([...this.products.getValue(), ...cart])
  }
  delete(id:number){
    const arr = this.products.getValue();
    const index = arr.findIndex(el => el.id === id)
    arr.splice(index, 1)
    this.products.next(arr)
  }

  getUser(){
    let user = localStorage.getItem('userLogin');
    if(user){
      const data = jwt_decode(user);
      this.currentUser.next(data)
      this.isLogin.next(true)


    }else{
      this.currentUser.next(null)
      this.isLogin.next(false)
    }

  }
}
