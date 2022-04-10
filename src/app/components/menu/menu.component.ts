import {Component, Input} from '@angular/core';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {PasteService} from "../../services/paste.service";
import {Router} from "@angular/router";

interface HoverHint {
    title: string;
    description: string;
    shortcut: string;
}

interface MenuButton {
    name: string;
    icon: IconProp;
    clickCallback: () => void;
    hoverCallback: () => void;
    leaveCallback: () => void;
}

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
})
export class MenuComponent {

    public buttons: MenuButton[] = [
        {
            name: "Save",
            icon: faSave,
            clickCallback: () => {
                const [id, key] = this._pasteService.save();
                if (!id || !key) return; // TODO Better error handling and feedback
                this._router.navigate([`/raw/${id}`], {fragment: key}).then(_ => {});
            },
            hoverCallback: () => {
                this._hoverHint = {
                    title: "Save",
                    description: "Encrypt and save your paste.",
                    shortcut: "CTRL+S"
                }
            },
            leaveCallback: () => this._hoverHint = null
        }
    ];

    @Input()
    private _hoverHint: HoverHint | null = null;

    constructor(private _pasteService: PasteService, private _router: Router) {
    }

    public get hoverHint(): HoverHint | null {
        return this._hoverHint;
    }
}
