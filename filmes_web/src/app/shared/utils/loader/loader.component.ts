import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { LoaderService } from "../../services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
    loading: boolean = false;
    subscription: Subscription = new Subscription;
    constructor(private loaderService: LoaderService) { }
    ngOnInit() {
        this.subscription = this.loaderService.isLoading
            .pipe(debounceTime(200))
            .subscribe((value: boolean) => {
                this.loading = value;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
