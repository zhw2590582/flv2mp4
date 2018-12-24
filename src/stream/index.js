import fetchRequest from './fetchRequest';
import mozXhrRequest from './mozXhrRequest';
import xhrRequest from './xhrRequest';
import readFile from './readFile';

function supportsXhrResponseType(type) {
    try {
        const tmpXhr = new XMLHttpRequest();
        tmpXhr.responseType = type;
        return tmpXhr.responseType === type;
    } catch (e) {
        return false;
    }
}

export default class Stream {
    constructor(flv) {
        const { url } = flv.options;
        const transportFactory = Stream.getStreamFactory(url);
        transportFactory(flv, url);
    }

    static getStreamFactory(url) {
        if (url instanceof File) {
            return readFile;
        }

        if (
            typeof Response !== 'undefined' &&
            Object.prototype.hasOwnProperty.call(Response.prototype, 'body') &&
            typeof Headers === 'function'
        ) {
            return fetchRequest;
        }

        const mozChunked = 'moz-chunked-arraybuffer';
        if (supportsXhrResponseType(mozChunked)) {
            return mozXhrRequest;
        }

        return xhrRequest;
    }
}
