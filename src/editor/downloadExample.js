import { URL_PARAMS } from '../common/config';
import { downloadBlob } from '../common/helper';
import { getExampleFileBlob } from './getExampleFileBlob';

export function download(sourceHeader) {
  const file = getExampleFileBlob(sourceHeader);
  // download the blob
  downloadBlob(file, (URL_PARAMS.c || Date.now()) + '.html');
}
