import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {CodeAreaComponent} from './components/code-area/code-area.component';
import {MenuComponent} from "./components/menu/menu.component";
import {ButtonComponent} from "./components/button/button.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        CodeAreaComponent,
        MenuComponent,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
