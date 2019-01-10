import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ButtonModule, TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule, LinkModule, ModalModule } from 'carbon-components-angular';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NewMasterCategoryComponent } from './newMasterCategory/newMasterCategory.component';
import { ModelmessageComponent } from './modelmessage/modelmessage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  { path: 'masterCategory', component: NewMasterCategoryComponent},
  { path: 'modal', component: ModelmessageComponent},
  { path: 'categoryList', component: CategoriesListComponent}
];


@NgModule({
  declarations: [
    AppComponent, NewMasterCategoryComponent, ModelmessageComponent, NavbarComponent, CategoriesListComponent
  ],
  imports: [
    BrowserModule, ButtonModule, TabsModule, AccordionModule, CheckboxModule, RadioModule, TableModule, DropdownModule,
    LinkModule, ModalModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
