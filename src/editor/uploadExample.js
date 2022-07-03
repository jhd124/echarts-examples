import { getExampleFileBlob } from './getExampleFileBlob';
import { URL_PARAMS } from '../common/config';

export function upload(sourceHeader) {
  const file = getExampleFileBlob(sourceHeader);
  // download the blob
  const formData = new FormData();
  formData.append('file', file, (URL_PARAMS.c || Date.now()) + '.html');
  const api = `https://www.laojing.cc/service/upload_file`;
  return fetch(api, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((res) => res.json())
    .then((res) => res.filepath);
}
