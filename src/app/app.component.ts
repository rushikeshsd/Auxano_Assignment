import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auxano-assign';

  timeForm: any = { startTime: '00:00:00', endTime: '00:00:00' };
  outputArray = [];
  getTime() {
    this.outputArray = [];

    let starttimeObject = new Date();
    let endTimeObject = new Date();


    starttimeObject.setHours(this.timeForm.startTime.split(':')[0]);
    starttimeObject.setMinutes(this.timeForm.startTime.split(':')[1]);
    starttimeObject.setSeconds(this.timeForm.startTime.split(':')[2]);

    endTimeObject.setHours(this.timeForm.endTime.split(':')[0]);
    endTimeObject.setMinutes(this.timeForm.endTime.split(':')[1]);
    endTimeObject.setSeconds(this.timeForm.endTime.split(':')[2]);

    while (starttimeObject < endTimeObject) {

      let time = starttimeObject.getHours() + '' + starttimeObject.getMinutes() + '' + starttimeObject.getSeconds()
      let displayTime = starttimeObject.getHours().toString().padStart(2, '0') + ':' + starttimeObject.getMinutes().toString().padStart(2, '0') + ':' + starttimeObject.getSeconds().toString().padStart(2, '0');

      let resData = this.countDistinct(time)
      if (Object.keys(resData).length <= 2) {
        console.log("magical time", starttimeObject.getTime());

        this.outputArray.push(displayTime);
      }

      starttimeObject.setSeconds(starttimeObject.getSeconds() + 1)

    }
    console.log(this.outputArray);
  }

  countDistinct(arr: any) {
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
    }
    return counts;
  }
}
