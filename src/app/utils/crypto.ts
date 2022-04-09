import * as forge from "node-forge";

export type Hex = string;

export interface CipherTag {
    cipher: Hex;
    tag?: Hex;
}

export default class Crypto {

    /**
     * Generates n random bytes using the client's CSPRNG.
     *
     * @param {number}      n               Number of bytes to generate
     * @return {string}                     Random bytes as hexadecimal
     */
    public static randomBytes(n: number): Hex {
        return forge.util.bytesToHex(forge.random.getBytesSync(n));
    }


    /**
     * Encrypts a string using AES (CTR and GCM).
     * @param {string}      operation       Cipher and block mode of operation
     * @param {Hex}         key             AES key
     * @param {Hex}         iv              Initialization vector (128 bits)
     * @param {string}      str             String to encrypt
     * @return {Hex}                        Encrypted string
     */
    public static encrypt(operation: "AES-CTR" | "AES-GCM", key: Hex, iv: Hex, str: string): CipherTag {
        const cipher = forge.cipher.createCipher(operation, forge.util.hexToBytes(key));
        cipher.start({iv: forge.util.hexToBytes(iv)});
        cipher.update(forge.util.createBuffer(str));
        cipher.finish();
        return {
            cipher: cipher.output.toHex(),
            tag: operation === "AES-GCM" ? cipher.mode.tag.toHex() : undefined
        };
    }


    /**
     * Decrypts AES cipher text.
     * @param {string}      operation       Cipher and block mode of operation
     * @param {Hex}         key             AES key
     * @param {Hex}         iv              Initialization vector (128 bits)
     * @param {Hex}         str             Cipher string to decrypt
     * @param {Hex | null}  tag             GCM authentication tag
     * @return {string}                     Decrypted string
     */
    public static decrypt(operation: "AES-CTR" | "AES-GCM", key: Hex, iv: Hex, str: Hex, tag?: Hex): string {
        const decipher = forge.cipher.createDecipher(operation, forge.util.hexToBytes(key));
        decipher.start({
            iv: forge.util.hexToBytes(iv),
            tag: tag ? new forge.util.ByteStringBuffer(forge.util.hexToBytes(tag)) : undefined
        });
        decipher.update(forge.util.createBuffer(forge.util.hexToBytes(str)));
        return forge.util.hexToBytes(decipher.output.toHex());
    }
}
