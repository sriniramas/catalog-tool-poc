import { Component, Input, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import {TableModel, TableHeaderItem, TableItem } from "carbon-components-angular";

@Component({
selector : 'app-master',
templateUrl : './newMasterCategory.component.html',
styleUrls : ['./newMasterCategory.component.scss'],
})

export class NewMasterCategoryComponent implements OnInit{
title: 'NewMasterCotegory';

@Input() model = new TableModel();
@Input() size = "md";
@Input() showSelectionColumn = true;
@Input() striped = true;
ngOnInit() {
    this.model.header = [
        new TableHeaderItem({data: "Sequence"}), new TableHeaderItem({data: "Type"}), 
        new TableHeaderItem({data: "Store"}), new TableHeaderItem({data: "Path"}),
        new TableHeaderItem({data: "Code"}), new TableHeaderItem({data: "Usage"}),
        new TableHeaderItem({data: "Administative name (United State English)"}), 
        new TableHeaderItem({data: "Display name (United State English)"}),
        new TableHeaderItem({data: "Short description (United State English)"}),
    ];
    this.model.data = [
        [new TableItem({ data: '0 of 0 selected' }), new TableItem({ data: ''}), new TableItem({ data: ''}), 
        new TableItem({ data: '' }), new TableItem({ data: ''}), new TableItem({ data: ''}),
        new TableItem({ data: '' }), new TableItem({ data: ''}), new TableItem({ data: ''})]   
    ];
}
}