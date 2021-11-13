import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import { PopoverController } from '@ionic/angular';
import { FireserviceService } from '../fireservice.service';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public router:Router,
    public fireService:FireserviceService,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          alert('Welcome '+ res['name']);
          localStorage.setItem('ingresado','true');
          this.navCtrl.navigateRoot('inicio');
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }

  signup(){
    this.router.navigateByUrl('signup');
  }

}