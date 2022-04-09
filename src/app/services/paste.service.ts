import {Injectable} from '@angular/core';
import Crypto, {Hex} from "../utils/crypto";
import {AngularFireDatabase} from "@angular/fire/compat/database"

export interface Paste {
    cipher: Hex;
    iv: Hex;
    tag?: Hex;
}

@Injectable({
    providedIn: 'root'
})
export class PasteService {

    private _value: string = "";

    constructor(private _db: AngularFireDatabase) {
    }

    public set value(value: string) {
        this._value = value;
    }

    public save(): void {
        const key: Hex = Crypto.randomBytes(32);
        const iv: Hex = Crypto.randomBytes(16);
        const encrypted = Crypto.encrypt("AES-CTR", key, iv, this._value);

        this._db.list<Paste>("pastes").push({
            cipher: encrypted.cipher,
            iv: iv
        })
    }
}
