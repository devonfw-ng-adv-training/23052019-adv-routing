import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOverviewDialogComponent } from './book-overview-dialog.component';

describe('BookOverviewDialogComponent', () => {
  let component: BookOverviewDialogComponent;
  let fixture: ComponentFixture<BookOverviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOverviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
