import {Component} from '@angular/core';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface MenuButton {
    name: string;
    icon: IconProp;
    clickCallback: () => void;
}

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
})
export class MenuComponent {

    buttons: MenuButton[] = [
        {
            name: "Save",
            icon: faSave,
            clickCallback: () => {alert("Work in progress : Save")}
        }
    ];

    constructor() {
    }
}
