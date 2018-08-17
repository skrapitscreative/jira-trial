"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var generic_routing_module_1 = require("./generic.routing.module");
var shared_module_1 = require("../shared.module");
var generic_list_component_1 = require("./components/generic-list.component");
var GenericModule = /** @class */ (function () {
    function GenericModule() {
    }
    GenericModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                shared_module_1.SharedModule,
                generic_routing_module_1.GenericRoutingModule
            ],
            declarations: [
                generic_list_component_1.GenericListComponent
            ]
        })
    ], GenericModule);
    return GenericModule;
}());
exports.GenericModule = GenericModule;
