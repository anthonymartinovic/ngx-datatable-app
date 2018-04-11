import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-pager-li',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<li [flexiPagerStyle]="styleParams">
			<a (click)="initSetPage(button.value)">
				{{ button.symbol }}
			</a>
		</li>
	`
})
export class PagerLiComponent implements OnChanges {
	@Input() button: {
		name: string,
		symbol: number | string,
		value: number
	};
	@Input() page: number;
	@Input() currentPage: number;
	@Input() totalPages: number;

	@Output() onSetPage: EventEmitter<number> = new EventEmitter();

	styleParams: {};

	constructor() {
		this.styleParams = {};
	}

	ngOnChanges(): void {
		this.styleParams = {
			button: this.button.name,
			page: this.page,
			currentPage: this.currentPage,
			totalPages: this.totalPages
		}
	}

	initSetPage(page: number): void {
		this.onSetPage.emit(page);
	}
}
