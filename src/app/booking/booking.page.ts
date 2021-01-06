import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: 'booking.page.html',
  styleUrls: ['booking.page.scss'],
})
export class BookingPage implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  displayedColumns: string[] = ['bookingId', 'client','bookingTime','streetAddress','bookingPrice'];

  value: string;
  
  dataSource: any = [];

  data: any = [];

  constructor(
    private bookingService: BookingService,
    private _router: Router
  ) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('data'));
    (user == null) ? this.logout() : this.fetchBookings();
  }

  fetchBookings = async () => {
    await this.bookingService.fetchBookings({ current: true })
      .subscribe((data: any) => {
        this.data = data
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (filterValue = ''){
      this.value = ''
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logout = () => {
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
