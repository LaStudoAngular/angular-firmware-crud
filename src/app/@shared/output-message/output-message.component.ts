import { Component, Input, OnInit } from '@angular/core';
import { Firmware } from '../../@models/firmware';

@Component({
  selector: 'cr-output-message',
  templateUrl: './output-message.component.html',
  styleUrls: ['./output-message.component.scss'],
})
export class OutputMessageComponent implements OnInit {
  @Input() firmware: Firmware;

  constructor() {}

  ngOnInit() {}
}
