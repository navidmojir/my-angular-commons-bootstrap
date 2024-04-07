import { Routes } from '@angular/router';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { MyPermissionsComponent } from './components/my-permissions/my-permissions.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { UsersComponent } from './components/users/users.component';
import { OrganizationalUnitsComponent } from './components/organizational-units/organizational-units.component';
import { CreateSoftwareComponent } from './components/create-software/create-software.component';

export const routes: Routes = [
    {
        path: 'my-permissions',
        component: MyPermissionsComponent
    },
    {
        path: 'permissions',
        component: PermissionsComponent
    },
    {
        path: 'softwares',
        component: SoftwaresComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'organizational-units',
        component: OrganizationalUnitsComponent
    },
    {
        path: 'create-software',
        component: CreateSoftwareComponent
    },
];
