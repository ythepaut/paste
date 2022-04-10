import {Component} from '@angular/core';
import {PasteService} from "../../../services/paste.service";

@Component({
    selector: "app-paste-editor",
    templateUrl: "./paste-editor.component.html",
})
export class PasteEditorComponent {

    public paste: string = "";

    constructor(private _pasteService: PasteService) {
    }

    public handleEdit(): void {
        this._pasteService.value = this.paste;
    }
}
