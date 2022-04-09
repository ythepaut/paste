import {Component} from '@angular/core';
import {PasteService} from "../../services/paste.service";

@Component({
    selector: "app-code-area",
    templateUrl: "./code-area.component.html",
})
export class CodeAreaComponent {

    public paste: string = "";

    constructor(private _pasteService: PasteService) {
    }

    public handleEdit(): void {
        this._pasteService.value = this.paste;
    }
}
