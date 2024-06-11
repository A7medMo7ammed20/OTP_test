import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-phone-auth',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './phone-auth.component.html',
  styleUrl: './phone-auth.component.scss',
})
export class PhoneAuthComponent {}
// export class PhoneAuthComponent {
//   phoneNumber: string = '';
//   otp: string = '';
//   otpSent: boolean = false;
//   verificationId: string = '';

//   private recaptchaVerifier!: RecaptchaVerifier;

//   constructor(private afAuth: AngularFireAuth) {}

//   ngOnInit(): void {
//     const auth = getAuth();
//     this.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       'recaptcha-container',
//       {
//         size: 'invisible',
//         callback: (response: any) => {
//           // reCAPTCHA solved - will proceed with submit function
//         },
//       }
//     );
//   }

//   sendOtp() {
//     this.afAuth
//       .signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier)
//       .then((result) => {
//         this.verificationId = result.verificationId;
//         this.otpSent = true;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   verifyOtp() {
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       this.verificationId,
//       this.otp
//     );
//     this.afAuth
//       .signInWithCredential(credential)
//       .then((result) => {
//         console.log('Phone number verified:', result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
