import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { GenericRoutingModule } from "./generic.routing.module";
import { SharedModule } from "../shared.module";
import { GenericListComponent } from "./components/generic-list.component";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        GenericRoutingModule
    ],
    declarations: [
        GenericListComponent
    ]
})
export class GenericModule { }