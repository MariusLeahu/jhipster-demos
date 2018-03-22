import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { DeviceComponent } from './device.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DevicePopupComponent } from './device-dialog.component';
import { DeviceDeletePopupComponent } from './device-delete-dialog.component';

export const deviceRoute: Routes = [
    {
        path: 'device',
        component: DeviceComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.device.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'device/:id',
        component: DeviceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.device.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const devicePopupRoute: Routes = [
    {
        path: 'device-new',
        component: DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.device.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/edit',
        component: DevicePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.device.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'device/:id/delete',
        component: DeviceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gatewayApp.device.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
