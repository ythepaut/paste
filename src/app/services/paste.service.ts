import {Injectable} from '@angular/core';
import Crypto, {Hex} from "../utils/crypto";
import {AngularFireDatabase} from "@angular/fire/compat/database"
import StringUtils from "../utils/string";

export interface Paste {
    id: string;
    cipher: string;
    iv: string;
    tag?: string;
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

    public async fetch(id: string): Promise<Paste | null> {
        return new Promise<Paste | null>((resolve) => {
            this._db.list<Paste>("pastes", paste => paste.orderByChild("id").equalTo(id))
                .valueChanges()
                .subscribe((results: Paste[]) => {
                    resolve(results.length === 1 ? results[0] : null);
                });
        });
    }

    public save(): [string | null, string | null] {

        if (this._value.length === 0)
            return [null, null];

        const id: string = StringUtils.hexToBase64Url(Crypto.randomBytes(12));

        const key: Hex = Crypto.randomBytes(32);
        const iv: Hex = Crypto.randomBytes(16);
        const encrypted = Crypto.encrypt("AES-CTR", key, iv, this._value);

        this._db.list<Paste>("pastes").push({
            id: id,
            cipher: StringUtils.hexToBase64Url(encrypted.cipher),
            iv: StringUtils.hexToBase64Url(iv)
        });

        return [id, StringUtils.hexToBase64Url(key)];
    }
}
