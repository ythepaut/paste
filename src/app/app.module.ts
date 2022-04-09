import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {CodeAreaComponent} from './components/code-area/code-area.component';
import {MenuComponent} from "./components/menu/menu.component";
import {ButtonComponent} from "./components/button/button.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PasteService} from "./services/paste.service";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        CodeAreaComponent,
        MenuComponent,
        ButtonComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule
    ],
    providers: [PasteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
