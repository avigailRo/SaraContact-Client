import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  visible: boolean = false;
  user: any = {
    email: '',
    senderEmail: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSendMail() {
    const formData = {
      recipient: this.user.email,
      sender: this.user.senderEmail,
      subject: this.user.subject,
      message: this.user.message
    };

    this.http.post('YOUR_SERVER_ENDPOINT', formData)
      .subscribe(response => {
        console.log('המייל נשלח בהצלחה:', response);
        this.visible = false; // לאחר ששלחנו את המייל, נסגור את ה-P-DIALOG
        // ניתן להוסיף פעולות נוספות כאן לאחר שהמייל נשלח
      }, error => {
        console.error('שגיאה בשליחת המייל:', error);
        // ניתן להטיל בשגיאה כאן
      });


  }

  onSubmit() {
    // קוד הפעולות שיש לבצע כאשר לוחצים על הכפתור שליחת מייל
    console.log("נשלח");
  }
}
