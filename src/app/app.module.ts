import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from './filter.pipe';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DialogOverviewExampleDialog } from './components/delete-item-dialog/delete-item-dialog.component';
import { FilterTodoComponent } from './components/filter-todo/filter-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    AddTodoComponent,
    DialogOverviewExampleDialog,
    FilterTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '**', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
