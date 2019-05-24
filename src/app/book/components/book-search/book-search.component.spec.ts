import { BookSearchComponent } from './book-search.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

fdescribe('BookSearchComponent', () => {
  let title;
  let author;

  beforeEach(() => {
    title = 'My Title';
    author = 'My Author';
  });

  describe('(class)', () => {
    let eventMock;

    beforeEach(() => {
      eventMock = {
        preventDefault() {
        },
        target: {
          querySelector(selector: string) {
            return selector === '#title' ? {value: title} : {value: author};
          }
        }
      };
    });

    it('fires an event containing search criteria when clicked', (done) => {
      // given
      const component = new BookSearchComponent();
      component.search.subscribe(searchCriteria => {
        // then
        expect(searchCriteria).toBeDefined();
        expect(searchCriteria.title).toBe(title);
        expect(searchCriteria.author).toBe(author);
        done();
      });
      // when
      component.handleSearch(eventMock);
    });

    it('prevents default submit behavior when clicked', (done) => {
      // given
      spyOn(eventMock, 'preventDefault');
      const component = new BookSearchComponent();
      component.search.subscribe(searchCriteria => {
        // then
        expect(eventMock.preventDefault).toHaveBeenCalled();
        done();
      });
      // when
      component.handleSearch(eventMock);
    });
  });

  describe('(DOM)', () => {
    let component: BookSearchComponent;
    let fixture: ComponentFixture<BookSearchComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [BookSearchComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(BookSearchComponent);
      component = fixture.componentInstance;
    });

    it('is successfully created', () => {
      // when
      fixture.detectChanges();
      // then
      expect(component).toBeTruthy();
    });

    it('renders search criteria', () => {
      // given
      component.criteria = {
        title, author
      };
      // when
      fixture.detectChanges();
      // then
      const componentHtmlElement = fixture.nativeElement as HTMLElement;
      const titleInput = componentHtmlElement.querySelector<HTMLInputElement>('#title');
      expect(titleInput.value).toBe(title);
      const authorInput = componentHtmlElement.querySelector<HTMLInputElement>('#author');
      expect(authorInput.value).toBe(author);
    });

    it('fires an event when clicked on search button', () => {
      // given
      component.criteria = {
        title, author
      };
      const newAuthor = 'New Author';
      const newTitle = 'New Title';
      component.search.subscribe(searchCriteria => {
        // then
        expect(searchCriteria.title).toBe(newTitle);
        expect(searchCriteria.author).toBe(newAuthor);
      });
      // when
      fixture.detectChanges(); // binding input

      const componentHtmlElement = fixture.nativeElement as HTMLElement;
      const titleInput = componentHtmlElement.querySelector<HTMLInputElement>('#title');
      titleInput.value = newTitle;
      const authorInput = componentHtmlElement.querySelector<HTMLInputElement>('#author');
      authorInput.value = newAuthor;

      const buttonElement = componentHtmlElement.querySelector<HTMLButtonElement>('button');
      buttonElement.click();

      fixture.detectChanges(); // be aware of the click event
    });
  });
});
