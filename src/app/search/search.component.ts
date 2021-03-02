import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // styleUrls: ['./search.component.scss']
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  typing = false;
  search = '';
  tags = [
    'vegitarian',
    'pasta',
    'slow cooker',
    'soup',
    'chicken',
    'beef'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showTags(): boolean {
    if (this.search || this.typing==true) {
      this.typing = true;
      return true;
    } else {
      return false;
    }
  }

  debug() {
    console.log(this.filterTags());
  }

  //return true if given tag fuzzily matches
  filterTags() {
    return this.tags.filter(x => this.doesTagMatch(x));
  }

  doesTagMatch(tag: string) {
    // if (tag.includes(this.search[0])) { return true; } else { return false; }
    let chars = this.search.split('');
    for (let i = 0; i < chars.length; i++) {
      if (!tag.includes(chars[i])) {
        console.log(chars[i]);
        return false;
      }
    }
    return true;
  }

}
