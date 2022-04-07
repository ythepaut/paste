import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import { CodeAreaComponent } from './components/code-area/code-area.component';
import {MenuComponent} from "./components/menu/menu.component";

@NgModule({
    declarations: [
        AppComponent,
        CodeAreaComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
