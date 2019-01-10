import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modelmessage',
  templateUrl: './modelmessage.component.html',
  styleUrls: ['./modelmessage.component.scss']
})
export class ModelmessageComponent implements OnInit {
  @Input() modalText = "Footer sample model";
  @Output() close = new EventEmitter();
	closeModal(e): void {
		this.close.emit();
	}

  constructor() { }

  ngOnInit() {
  }
  
}
