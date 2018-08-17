import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GenericAngularRoutes } from "./paths/angular.routes";
import { GenericListComponent } from "./components/generic-list.component";

export const routes: Routes = [
    { path: GenericAngularRoutes.GenericList, component: GenericListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenericRoutingModule { }