import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-component',
  imports: [],
  templateUrl: './child-to-parent-component.html',
  styleUrl: './child-to-parent-component.css',
})
export class ChildToParentComponent {
  @Input() newLanguage!: string;
  @Output() selectedLanguage = new EventEmitter<string>();
  @Output() deleteLanguageByName = new EventEmitter<string>();

  getLanguage(lan: string | undefined) {
    this.selectedLanguage.emit(lan);
  }
  deleteLanguage(lan: string | undefined) {
    this.deleteLanguageByName.emit(lan);
  }
}
