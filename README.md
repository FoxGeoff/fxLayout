# FxLayout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## KanBan Task: Demo fxLayout responsive examples

1. Ref. <https://www.arundhaj.com/blog/5-responsive-layouts-built-angular-flexlayout.html>

### Task: Add Angular Material

1. run ```ng add @angular/material```
2. Add module Material
3. Restart server
4. Check with Mat Button

### Task: Add Angular flex layout

1. ref <https://github.com/angular/flex-layout>
2. run ```npm i -s @angular/flex-layout @angular/cdk```
3. Add FlexLayoutModule to app.module
4. Restart server

```typescript
/* app.module */
...
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
...
````
