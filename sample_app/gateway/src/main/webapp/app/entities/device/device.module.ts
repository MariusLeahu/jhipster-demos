import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from '../../shared';
import {
    DeviceService,
    DevicePopupService,
    DeviceComponent,
    DeviceDetailComponent,
    DeviceDialogComponent,
    DevicePopupComponent,
    DeviceDeletePopupComponent,
    DeviceDeleteDialogComponent,
    deviceRoute,
    devicePopupRoute,
} from './';

const ENTITY_STATES = [
    ...deviceRoute,
    ...devicePopupRoute,
];

@NgModule({
    imports: [
        GatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DeviceComponent,
        DeviceDetailComponent,
        DeviceDialogComponent,
        DeviceDeleteDialogComponent,
        DevicePopupComponent,
        DeviceDeletePopupComponent,
    ],
    entryComponents: [
        DeviceComponent,
        DeviceDialogComponent,
        DevicePopupComponent,
        DeviceDeleteDialogComponent,
        DeviceDeletePopupComponent,
    ],
    providers: [
        DeviceService,
        DevicePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayDeviceModule {}
