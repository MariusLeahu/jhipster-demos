import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Device } from './device.model';
import { DeviceService } from './device.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-device',
    templateUrl: './device.component.html'
})
export class DeviceComponent implements OnInit, OnDestroy {
devices: Device[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private deviceService: DeviceService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.deviceService.query().subscribe(
            (res: HttpResponse<Device[]>) => {
                this.devices = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDevices();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Device) {
        return item.id;
    }
    registerChangeInDevices() {
        this.eventSubscriber = this.eventManager.subscribe('deviceListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
