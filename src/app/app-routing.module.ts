import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'customers',
        component: HomeComponent
    },
    {
        path: 'customers/new',
        component: CustomerNewComponent
    },
    {
        path: 'customers/:id',
        component: CustomerDetailsComponent
    },
    {
        path: "calendar",
        component: CalendarComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
