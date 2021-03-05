import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  // public tags :string[] = [];
  public tags = new Set();
  input = "";

  constructor() { }

  ngOnInit(): void {
  }

  tagInputKeyUp(event: any) {
    if (event.key == 'Enter') {
      if (this.input == "") { return ; }
      this.tags.add(this.input);
      this.input = "";
    }

    if (event.key == 'Backspace') {
      let arr = Array.from(this.tags);
      arr.pop();
      this.tags = new Set(arr);
    }
  }

}
