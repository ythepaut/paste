import {Hex} from "node-forge";
import {Buffer} from "buffer";

export default class StringUtils {

    /**
     * Converts a hexadecimal string to a base64 url encoded string
     */
    public static hexToBase64Url(hex: Hex): string {
        return Buffer.from(hex, "hex").toString("base64")
            .replace(/\//g, "-")
            .replace(/\+/g, "_")
            .replace(/=/g, "");
    }


    /**
     * Converts a base64 url encoded string to a hexadecimal string
     */
    public static base64UrlToHex(str: string): Hex {
        str = str.replace(/-/g, "/")
            .replace(/_/g, "+");
        return Buffer.from(str, "base64").toString("hex");
    }
}
