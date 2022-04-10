import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PasteEditorComponent} from "./components/pages/paste-editor/paste-editor.component";
import {PasteViewerComponent} from "./components/pages/paste-viewer/paste-viewer.component";
import {RawViewerComponent} from "./components/pages/raw-viewer/raw-viewer.component";
import {ErrorPageComponent} from "./components/pages/error-page/error-page.component";

const ROUTES: Routes = [
    {path: "", component: PasteEditorComponent},
    {path: "p/:id", component: PasteViewerComponent},
    {path: "raw/:id", component: RawViewerComponent},
    {path: "**", component: ErrorPageComponent}
];

export const ROUTING_COMPONENTS = [PasteEditorComponent, PasteViewerComponent, RawViewerComponent, ErrorPageComponent];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
