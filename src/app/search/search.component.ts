import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // styleUrls: ['./search.component.scss']
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = '';
  selectedTags :string[] = [];
  availableTags = [
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

  debug() {
    console.log(this.search);
  }

  //return true if given tag fuzzily matches
  filterTags() {
    // if (this.search == null) {
    //   return;
    // }
    return this.availableTags.filter(x => this.doesTagMatch(x));
  }

  selectTag(t:string) {
    this.search = '';
    if (!this.selectedTags.includes(t))
      this.selectedTags.push(t);
  }

  unselectTag(t: string) {
    let index = this.selectedTags.indexOf(t);
    let copyTags = this.selectedTags;
    this.selectedTags = copyTags.slice(0,index).concat(copyTags.slice(index+ 1, copyTags.length));
    // this.selectedTags.splice(index);
  }

  doesTagMatch(tag: string) {
    // if (tag.includes(this.search[0])) { return true; } else { return false; }
    let chars = this.search.split('');
    for (let i = 0; i < chars.length; i++) {
      if (!tag.includes(chars[i])) {
        return false;
      }
    }
    return true;
  }

  searchBlured(){
    if (this.search == '') {
      this.search = null;
    }
  }

}
