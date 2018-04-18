import { Component, OnInit } from '@angular/core';

import { Project, Person } from './fake/model';
import { ColumnConfig } from './packages/flexi-table/models/column.model';

import { FakeService } from './fake/fake.service';


@Component({
	selector: 'ngx-root',
	template: `
		<ngx-flexi-table
			[records]="projects"
			[caption]="'NASA Projects'"
			[config]="projectConfig"
			[newTabCaption]="'Route'"
			[newTabKeys]="['cost']"
			[recordsPerPage]="recordsPerPage"
			[fixedFilterColumn]="filterColumn"
			[columnFilters]="columnFilters"
			[groupBy]="['name']"
			(onRowSelection)="logRow($event)"
			(onCheckboxChange)="logRows($event)"
			(onNewTabSelection)="logRoute($event)"
		></ngx-flexi-table>
		<ngx-flexi-table
			[records]="people"
			[caption]="'NASA Astronauts'"
		></ngx-flexi-table>
	`
})
export class AppComponent implements OnInit {
	people: Person[];
	personnelConfig: ColumnConfig[] = [
		{  primeKey: 'name' },
		{  primeKey: 'year_joined', header: 'Joined' },
		{  primeKey: 'missions' },
		{  primeKey: 'manager'  },
		{  primeKey: 'crewWith', header: 'Crew mates'},
	];

	projects: Project[];
	projectConfig: ColumnConfig[] = [
		{
			primeKey: 'name',
			header: 'Name',
		}
	];

	recordsPerPage: number = 5;

	filterColumn: string = 'name';
	columnFilters: boolean = false;

	constructor(
		private _fakeService: FakeService
	) {}

	ngOnInit() {
		this.projects = this._fakeService.getProjects();
		this.people = this._fakeService.getPersonnel();
		this.projects = [
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
			{
				id: 1,
				name: 'Mercury',
				cost: 277000000,
				first_flight: 'September 9, 1959',
				status: 'Complete',
			},
			{
				id: 2,
				name: 'Gemini',
				cost: 1300000000,
				first_flight: 'April 8, 1964',
				status: 'Complete',
			},
		];
		setTimeout(() => {
			this.projectConfig = [
				{
					primeKey: 'name',
					header: 'Name',
				},
				{
					primeKey: 'first_launch',
					altKeys: ['launch', 'first_flight'],
					header: 'First launch',
				},
				{
					primeKey: 'cost',
					altKeys: ['total_cost'],
					header: 'Cost',
					format: 'currency',
				},
			];
			this.projects = this._fakeService.getProjects();
			this.recordsPerPage = 10;
			this.filterColumn = undefined;
			this.columnFilters = true;
		}, 5000);
	}

	rowSelection(row: any) {
		console.log(row);
	}

	logRow(event) {
		console.log('SELECTED-ROW', event);
	}

	logRows(event) {
		console.log('CHECKED-ROWS', event);
	}

	logRoute(event) {
		console.log('ROUTE', event)
	}
}
