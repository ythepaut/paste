import {Injectable} from '@angular/core';
import Crypto, {Hex} from "../utils/crypto";

@Injectable({
    providedIn: 'root'
})
export class PasteService {

    private _value: string = "";

    constructor() {
    }

    public set value(value: string) {
        this._value = value;
    }

    public save(): void {
        console.log(`[DEBUG] Saving paste "${this._value}"...`);
        const key: Hex = Crypto.randomBytes(32);
        const iv: Hex = Crypto.randomBytes(16);
        const encrypted = Crypto.encrypt("AES-CTR", key, iv, this._value);
        console.log(`[DEBUG] ${encrypted.cipher} -> ${Crypto.decrypt("AES-CTR", key, iv, encrypted.cipher, encrypted.tag)}`);
        // TODO Save paste to database
        return;
    }
}
