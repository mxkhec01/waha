"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFileToBuffer = resolveFileToBuffer;
const axios_1 = require("axios");
async function resolveFileToBuffer(file) {
    if ('data' in file && file.data) {
        return Buffer.from(file.data, 'base64');
    }
    if ('url' in file && file.url) {
        const response = await axios_1.default.get(file.url, {
            responseType: 'arraybuffer',
        });
        return Buffer.from(response.data);
    }
    throw new Error('File must contain either "data" (base64) or "url".');
}
//# sourceMappingURL=media.utils.js.map