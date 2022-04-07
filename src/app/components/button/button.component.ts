import {Component, Input} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
})
export class ButtonComponent {

    @Input() icon: IconProp;
    @Input() clickCallback: (e: MouseEvent) => void;

    constructor() {
    }
}
