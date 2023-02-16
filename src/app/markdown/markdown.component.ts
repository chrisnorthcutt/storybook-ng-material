import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent {
  defaultTemplate = `# Heading level 1
  ## Heading level 2
  ### Heading level 3
  #### Heading level 4
  ##### Heading level 5
  ###### Heading level 6
  **This is bold**
  - First item
  - Second item
  - Third item
      - Indented item
      - Indented item
  - Fourth item`;
  
    validationDisabledTemplate = `# Test 1
  <open without closing
  # Test 2
  {{ safe`;
  
    maxLengthTemplate = `# Max Length Test
  Errors with more than 50 chars.`
  
    updateMarkdown(markdown: string) {
      console.log(markdown);
    }
  constructor() { }


}
