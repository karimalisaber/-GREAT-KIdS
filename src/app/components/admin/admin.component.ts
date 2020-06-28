import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { Subscription } from 'rxjs';
import { AssetsService } from './../../services/assets.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit ,OnDestroy {
  displayedColumns: string[] = ['name', 'email', 'phone', 'date', 'time', 'message', 'notes'];
  dataSource = [];
  isLoading: boolean = false;
  subscription: Subscription;

  constructor(private backend: BackendService, private assets: AssetsService) { }

  ngOnInit(): void {
    this.getForms();
  }

  
  getForms(){
    this.isLoading = true;
    this.subscription = this.backend.getForms().snapshotChanges()
      .subscribe(
        (res:any)=> {
          this.dataSource = res
          this.isLoading = false
        }     
    );
  }

  delete(id){
    this.backend.delete(id);
  }

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.delete(id): false)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
