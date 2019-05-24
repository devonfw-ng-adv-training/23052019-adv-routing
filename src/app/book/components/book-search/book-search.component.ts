import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BookSearchCriteria } from '../../model/book-search-criteria';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
  @Input()
  set criteria(newCriteria: BookSearchCriteria) {
    if (newCriteria) {
      this.form.setValue(newCriteria);
    }
  }

  @Output()
  search: EventEmitter<BookSearchCriteria> = new EventEmitter();

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: '',
      author: ''
    });
  }

  handleSearch() {
    this.search.emit(this.form.value);
  }
}
