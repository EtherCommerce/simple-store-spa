import { Pipe, PipeTransform } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Pipe({
  name: 'dataSource'
})
export class DataSourcePipe implements PipeTransform {
  transform<T>(value: Observable<T[]>, args?: any): DataSource<T> {
    if (!value) {
      return null;
    }

    return {
      connect() {
        return value;
      },
      disconnect() {}
    };
  }
}
