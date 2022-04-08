import {Component, Input} from '@angular/core';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

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
            clickCallback: () => {alert("Work in progress : Save")},
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

    constructor() {
    }

    public get hoverHint(): HoverHint | null {
        return this._hoverHint;
    }
}
