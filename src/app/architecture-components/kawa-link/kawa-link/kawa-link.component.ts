import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-kawa-link',
  templateUrl: './kawa-link.component.html',
  styleUrls: ['./kawa-link.component.css']
})
export class KawaLinkComponent implements OnInit {

  //---------------------------------------Variables----------------------------------

  @Input() linkText: any;
  @Input() linkToGo: any;
  @Input() colorOnHover: any;
  @Input() color: any;
  @Input() id: any;

  colorToSet: any;
  colorMyLink: boolean;

  //---------------------------------------Methods----------------------------------
  constructor() { }

  ngOnInit(): void {
    document.getElementById("myId").style.color = this.color;
  }

  setLinkColor(isLinkHovered: boolean) {
    if (isLinkHovered === true) {
      document.getElementById("myId").style.color = this.colorOnHover;

    }
    else {
      document.getElementById("myId").style.color = this.color;
    }
  }





}
