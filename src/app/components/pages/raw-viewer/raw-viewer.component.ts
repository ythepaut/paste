import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PasteService} from "../../../services/paste.service";
import Crypto from "../../../utils/crypto";
import StringUtils from "../../../utils/string";

@Component({
    selector: "app-raw-viewer",
    templateUrl: "./raw-viewer.component.html",
})
export class RawViewerComponent implements OnInit {

    private _id: string | null;
    private _key: string | null;

    public raw: string;

    constructor(private _route: ActivatedRoute, private _pasteService: PasteService) {
    }

    async ngOnInit() {
        this._route.params.subscribe(params => this._id = params["id"]);
        this._route.fragment.subscribe(key => this._key = key);

        if (!this._id || !this._key)
            return;

        const paste = await this._pasteService.fetch(this._id);
        if (!paste)
            return;

        this.raw = Crypto.decrypt(
            "AES-CTR",
            StringUtils.base64UrlToHex(this._key),
            StringUtils.base64UrlToHex(paste.iv),
            StringUtils.base64UrlToHex(paste.cipher),
            paste.tag ? StringUtils.base64UrlToHex(paste.tag) : undefined
        );
    }
}
