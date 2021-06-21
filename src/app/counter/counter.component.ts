import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() aim = 10;
  @Input() counter: {name: string, id: number} | undefined
  @Output() countChange = new EventEmitter<number>();
  count = 0
  @ViewChild('btn') buttonRef: ElementRef<HTMLButtonElement> | undefined;

  constructor() {
    console.log('ctr');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    // this.buttonRef!.nativeElement.textContent = 'Set from TS';

  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  incrementCounter() {
    this.count++;
    this.countChange.emit(this.count);
  }

  get isComplete() {
    return this.count >= this.aim;
  }

}
