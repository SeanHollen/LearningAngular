import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core"; 

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0; 
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
    cropWidth: number = 75;
    ngOnChanges(): void {
        this.cropWidth = this.rating * this.cropWidth / 5; 
    }
    onClick() {
        this.ratingClicked.emit(`rating is ${this.rating}`); 
    }
}