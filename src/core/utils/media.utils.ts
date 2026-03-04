import axios from 'axios';
import { BinaryFile, RemoteFile } from '@waha/structures/files.dto';

/**
 * Resolves a BinaryFile or RemoteFile into a Buffer.
 * - BinaryFile: decodes the base64 `data` field.
 * - RemoteFile: downloads from `url` and returns the response as a Buffer.
 */
export async function resolveFileToBuffer(
  file: BinaryFile | RemoteFile,
): Promise<Buffer> {
  if ('data' in file && file.data) {
    return Buffer.from(file.data, 'base64');
  }
  if ('url' in file && file.url) {
    const response = await axios.get(file.url, {
      responseType: 'arraybuffer',
    });
    return Buffer.from(response.data);
  }
  throw new Error('File must contain either "data" (base64) or "url".');
}
