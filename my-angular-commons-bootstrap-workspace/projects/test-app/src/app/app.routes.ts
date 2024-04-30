import { Routes } from '@angular/router';
import { SoftwaresComponent } from './components/software/softwares/softwares.component';
import { MyPermissionsComponent } from './components/my-permissions/my-permissions.component';
import { PermissionsComponent } from './components/permission/permissions/permissions.component';
import { OrganizationalUnitsComponent } from './components/organizational-unit/organizational-units/organizational-units.component';
import { CreateSoftwareComponent } from './components/software/create-software/create-software.component';
import { SoftwareDetailsComponent } from './components/software/create-software/software-details/software-details.component';
import { UsersComponent } from './components/user/users/users.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { CreateOrganizationalUnitComponent } from './components/organizational-unit/create-organizational-unit/create-organizational-unit.component';
import { OrganizationalUnitDetailsComponent } from './components/organizational-unit/organizational-unit-details/organizational-unit-details.component';
import { CreatePermissionComponent } from './components/permission/create-permission/create-permission.component';
import { PermissionDetailsComponent } from './components/permission/permission-details/permission-details.component';

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
        path: 'create-permission',
        component: CreatePermissionComponent
    },
    {
        path: 'permissions/:id',
        component: PermissionDetailsComponent
    },
    {
        path: 'softwares',
        component: SoftwaresComponent
    },
    {
        path: 'softwares/:id',
        component: SoftwareDetailsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/:username',
        component: UserDetailsComponent
    },
    {
        path: 'organizational-units',
        component: OrganizationalUnitsComponent
    },
    {
        path: 'organizational-units/:id',
        component: OrganizationalUnitDetailsComponent
    },
    {
        path: 'create-organizational-unit',
        component: CreateOrganizationalUnitComponent
    },
    {
        path: 'create-software',
        component: CreateSoftwareComponent
    },
    {
        path: 'create-user',
        component: CreateUserComponent
    },
];
