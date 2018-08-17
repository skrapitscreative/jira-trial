import { Component, OnInit, Output, ViewChild } from "@angular/core";

import { ResponseModelBase, SessionService, ApiService, DropdownOption, NotificationFx, NotificationFxOptions, SearchVm, PagingVm, Utils, PagingWithSearchVm, PagingComponent, SharedApiFunctions } from "../../shared_libs/index";

//import { AuthAppManagementApi } from "../paths/api.endpoints";
import { GenericPartialViews } from "../paths/html.paths";

//import { GenericObjectSearchVm, GenericResultsVm } from "../classes/generic.viewmodels";

@Component({
    selector: "generic-list-component",
    templateUrl: GenericPartialViews.GenericList,
    //alternately:
    //templateUrl: `${ServerPaths.Root}${ServerPaths.GenericList}`
    styleUrls: ['./Content/Permissions/permissions.css'] //borrowed... 
})
export class GenericListComponent {
   
    @ViewChild("PagingComponent")
    public _PagingComponent: PagingComponent;

    //public _ParentPagingComponent: PagingWithSearchVm<AvailableAppResourceSearchVm, AvailableAppResourcesVm>;

    //constructor(private _ajax: ApiService, private _sessionService: SessionService) {
    //    let availableResourceSearch: AvailableAppResourceSearchVm = new AvailableAppResourceSearchVm();
    //    availableResourceSearch.AppPermissionId = 0;
    //    availableResourceSearch.SearchText = "";
    //    availableResourceSearch.ResourceType = 2;

    //    this._ParentPagingComponent = new PagingWithSearchVm<AvailableAppResourceSearchVm, AvailableAppResourcesVm>(availableResourceSearch);
    //    this._ParentPagingComponent.PagerEnabled = false;
    //    this._ParentPagingComponent.AppCode = this._sessionService.AppCode;
    //    this._ParentPagingComponent.SearchApiEndpoint = `${this._sessionService.AuthApi}${AuthAppManagementApi._SearchAvailableAppResources}`;
    //}
    //// --- READ -- //  

    //public showAvailableResources(appPermission: AppPermission): void {
    //    this._AppPermission = appPermission;
    //    this._ParentPagingComponent.SearchVm.SearchData.AppPermissionId = appPermission.ID;
    //    Utils.fnBootstrapModal("resource-assignment-modal", true, undefined);

    //    //Reset Data
    //    this._PagingComponent._PagingComponentVm.SearchVm.SearchData.SearchText = "";
    //    this._PagingComponent._PagingComponentVm.SearchVm.SearchData.ResourceType = 2;
    //    this._PagingComponent._PagingComponentVm.PagingVm.Results.Data = [];

    //    this._ParentPagingComponent.SearchVm.SearchData.SearchText = "";
    //    this._ParentPagingComponent.SearchVm.SearchData.ResourceType = 2;
    //    this._ParentPagingComponent.PagingVm.Results.Data = [];
    //    this._PagingComponent.runPagingSearch();
    //}

    //public updateSearchResults(searchResults: PagingVm<AvailableAppResourcesVm>): void {
    //    this._ParentPagingComponent.PagingVm = searchResults;
    //}
    // --- END READ -- //

   
}