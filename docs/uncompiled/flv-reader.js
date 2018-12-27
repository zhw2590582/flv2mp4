(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['flv-reader'] = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function E () {
    // Keep this empty so it's easier to inherit from
    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
  }

  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});

      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });

      return this;
    },

    once: function (name, callback, ctx) {
      var self = this;
      function listener () {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },

    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;

      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }

      return this;
    },

    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];

      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }

      // Remove event from queue to prevent memory leak
      // Suggested by https://github.com/lazd
      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

      (liveEvents.length)
        ? e[name] = liveEvents
        : delete e[name];

      return this;
    }
  };

  var tinyEmitter = E;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var FlvError =
  /*#__PURE__*/
  function (_Error) {
    inherits(FlvError, _Error);

    function FlvError(message, context) {
      var _this;

      classCallCheck(this, FlvError);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvError).call(this, message));

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(assertThisInitialized(assertThisInitialized(_this)), context || _this.constructor);
      }

      _this.name = 'FlvError';
      return _this;
    }

    return FlvError;
  }(wrapNativeSuper(Error));

  function errorHandle(condition, msg) {
    if (!condition) {
      throw new FlvError(msg);
    }
  }
  function createAbortError() {
    try {
      return new DOMException('Aborted', 'AbortError');
    } catch (err) {
      var abortError = new Error('Aborted');
      abortError.name = 'AbortError';
      return abortError;
    }
  }
  function sleep() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  function download(url, name) {
    var elink = document.createElement('a');
    elink.style.display = 'none';
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  }

  var utils = /*#__PURE__*/Object.freeze({
    errorHandle: errorHandle,
    createAbortError: createAbortError,
    sleep: sleep,
    download: download
  });

  function checkSupport(_ref) {
    var options = _ref.options;
    var MP4H264MimeCodec = 'video/mp4; codecs="avc1.42001E, mp4a.40.2"';
    var canPlay = options.mediaElement.canPlayType(MP4H264MimeCodec);
    errorHandle(window.MediaSource && window.MediaSource.isTypeSupported(MP4H264MimeCodec) && (canPlay === 'probably' || canPlay === 'maybe'), "Unsupported MIME type or codec: ".concat(MP4H264MimeCodec));
    errorHandle(typeof window.Promise === 'function', "Unsupported 'Promise' method");
    errorHandle(typeof window.fetch === 'function', "Unsupported 'fetch' method");
  }

  function validateOptions(flv) {
    var _flv$options = flv.options,
        mediaElement = _flv$options.mediaElement,
        url = _flv$options.url;
    errorHandle(mediaElement instanceof HTMLVideoElement, "The 'mediaElement' option is not a video tag element");
    errorHandle(flv.constructor.instances.every(function (item) {
      return item.options.mediaElement !== mediaElement;
    }), 'Cannot mount multiple instances on the same media element, please destroy the instance first');
    errorHandle(typeof url === 'string' || url instanceof File && url.type === 'video/x-flv', "The 'url' option is not a string type or flv file");
  }

  var Debug = function Debug(flv) {
    classCallCheck(this, Debug);

    var debug = flv.options.debug;

    this.log = function (name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      flv.emit.apply(flv, ['log', name].concat(args));

      if (debug) {
        var _console;

        (_console = console).log.apply(_console, ["[".concat(name, "]")].concat(args));
      }
    };

    this.warn = function (name) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      flv.emit.apply(flv, ['warn', name].concat(args));

      if (debug) {
        var _console2;

        (_console2 = console).warn.apply(_console2, ["[".concat(name, "]")].concat(args));
      }
    };
  };

  var Events =
  /*#__PURE__*/
  function () {
    function Events() {
      classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        target.addEventListener(name, callback, option);
        this.destroyEvents.push(function () {
          target.removeEventListener(name, callback, option);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyEvents.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  var Workers =
  /*#__PURE__*/
  function () {
    function Workers() {
      classCallCheck(this, Workers);

      this.workers = new Map();
    }

    createClass(Workers, [{
      key: "add",
      value: function add(name, fn) {
        if (!this.workers.has(name)) {
          this.workers.set(name, Workers.create(fn));
        }
      }
    }, {
      key: "run",
      value: function run(name) {
        var worker = this.workers.get(name);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return worker.post(args);
      }
    }, {
      key: "kill",
      value: function kill(name) {
        var worker = this.workers.get(name);
        worker.kill();
      }
    }, {
      key: "killAll",
      value: function killAll() {
        this.workers.forEach(function (worker) {
          worker.kill();
        });
      }
    }], [{
      key: "fnToStr",
      value: function fnToStr(fn) {
        return "\n           self.onmessage = event => {\n               return self.postMessage((".concat(fn, ").apply(null, event.data));\n           }\n         ");
      }
    }, {
      key: "create",
      value: function create(fn) {
        var blob = new Blob([Workers.fnToStr(fn)], {
          type: 'application/javascript'
        });
        var objectURL = window.URL.createObjectURL(blob);
        var worker = new Worker(objectURL);

        worker.kill = function () {
          URL.revokeObjectURL(objectURL);
          worker.terminate();
        };

        worker.post = function (args) {
          return new Promise(function (resolve, reject) {
            worker.onmessage = function (event) {
              resolve(event.data);
            };

            worker.onerror = function (error) {
              reject(error);
            };

            worker.postMessage(args);
          });
        };

        return worker;
      }
    }]);

    return Workers;
  }();

  function fetchRequest(flv, url) {
    flv.emit('flvFetchStart');
    fetch(url, {
      headers: flv.options.headers
    }).then(function (response) {
      var reader = response.body.getReader();
      flv.on('destroy', function () {
        reader.cancel();
      });
      flv.on('streamCancel', function () {
        reader.cancel();
      });

      (function read() {
        reader.read().then(function (_ref) {
          var done = _ref.done,
              value = _ref.value;

          if (done) {
            flv.emit('flvFetchEnd');
            return;
          }

          flv.emit('flvFetching', new Uint8Array(value));
          read();
        }).catch(function (error) {
          throw error;
        });
      })();
    });
  }

  function mozXhrRequest(flv, url) {
    flv.emit('flvFetchStart');
    var proxy = flv.events.proxy,
        headers = flv.options.headers;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'moz-chunked-arraybuffer';
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    proxy(xhr, 'readystatechange', function () {
      flv.emit('readystatechange', xhr);
    });
    proxy(xhr, 'progress', function () {
      flv.emit('flvFetching', new Uint8Array(xhr.response));
    });
    proxy(xhr, 'loadend', function () {
      flv.emit('flvFetchEnd');
    });
    proxy(xhr, 'error', function (error) {
      throw error;
    });
    flv.on('destroy', function () {
      xhr.abort();
      throw createAbortError();
    });
    flv.on('streamCancel', function () {
      xhr.abort();
      createAbortError();
    });
    xhr.send();
  }

  function xhrRequest(flv, url) {
    flv.emit('flvFetchStart');
    var proxy = flv.events.proxy,
        headers = flv.options.headers;
    var textEncoder = new TextEncoder();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    var index = 0;
    proxy(xhr, 'readystatechange', function () {
      flv.emit('readystatechange', xhr);
    });
    proxy(xhr, 'progress', function () {
      var rawText = xhr.responseText.substr(index);
      index = xhr.responseText.length;
      flv.emit('flvFetching', textEncoder.encode(rawText, {
        stream: true
      }));
    });
    proxy(xhr, 'loadend', function () {
      flv.emit('flvFetching', textEncoder.encode('', {
        stream: false
      }));
      flv.emit('flvFetchEnd');
    });
    proxy(xhr, 'error', function (error) {
      throw error;
    });
    flv.on('destroy', function () {
      xhr.abort();
      throw createAbortError();
    });
    flv.on('streamCancel', function () {
      xhr.abort();
      createAbortError();
    });
    xhr.send();
  }

  function readFile(flv, file) {
    flv.emit('flvFetchStart');
    var proxy = flv.events.proxy;
    var reader = new FileReader();
    proxy(reader, 'load', function (e) {
      var buffer = e.target.result;
      flv.emit('flvFetchEnd', new Uint8Array(buffer));
    });
    reader.readAsArrayBuffer(file);
  }

  function supportsXhrResponseType(type) {
    try {
      var tmpXhr = new XMLHttpRequest();
      tmpXhr.responseType = type;
      return tmpXhr.responseType === type;
    } catch (e) {
      return false;
    }
  }

  var Stream =
  /*#__PURE__*/
  function () {
    function Stream(flv) {
      classCallCheck(this, Stream);

      var url = flv.options.url;
      var transportFactory = Stream.getStreamFactory(url);
      transportFactory(flv, url);
    }

    createClass(Stream, null, [{
      key: "getStreamFactory",
      value: function getStreamFactory(url) {
        if (url instanceof File) {
          return readFile;
        }

        if (typeof Response !== 'undefined' && Object.prototype.hasOwnProperty.call(Response.prototype, 'body') && typeof Headers === 'function') {
          return fetchRequest;
        }

        var mozChunked = 'moz-chunked-arraybuffer';

        if (supportsXhrResponseType(mozChunked)) {
          return mozXhrRequest;
        }

        return xhrRequest;
      }
    }]);

    return Stream;
  }();

  var mse = {
    mediaSource: {
      propertys: ['activeSourceBuffers', 'duration', 'readyState', 'sourceBuffers'],
      methods: ['addSourceBuffer', 'endOfStream', 'removeSourceBuffer', 'clearLiveSeekableRange', 'setLiveSeekableRange'],
      events: ['sourceclose', 'sourceended', 'sourceopen']
    },
    sourceBuffer: {
      propertys: ['mode', 'updating', 'buffered', 'timestampOffset', 'audioTracks', 'videoTracks', 'textTracks', 'appendWindowStart', 'appendWindowEnd', 'trackDefaults'],
      methods: ['appendBuffer', 'appendStream', 'abort', 'remove'],
      events: ['abort', 'error', 'update', 'updateend', 'updatestart']
    },
    sourceBufferList: {
      propertys: ['length'],
      events: ['addsourcebuffer', 'removesourcebuffer']
    }
  };

  var flv = {
    header: {
      signature: {
        value: [0x46, 0x4c, 0x56]
      },
      version: {
        value: [0x01]
      },
      flags: {
        0x00: 'No audio and video tag',
        0x01: 'Video tag only',
        0x04: 'Audio tag only',
        0x05: 'Audio and video tag'
      },
      dataOffset: {
        value: [0x09]
      }
    },
    tags: {
      header: {
        tagType: {
          0x08: 'Video tag',
          0x09: 'Audio tag',
          0x12: 'Scrip tag'
        },
        dataSize: {
          lenght: 3
        },
        timestamp: {
          lenght: 4
        },
        streamID: {
          lenght: 3
        }
      },
      body: {
        scripTag: {
          amf1: {
            type: {
              value: [0x02]
            },
            size: {
              lenght: 2
            },
            string: {
              value: 'onMetaData'
            }
          },
          amf2: {
            type: {
              value: [0x08]
            },
            size: {
              lenght: 4
            },
            metaData: {
              type: {
                0x00: 'Number',
                0x01: 'Boolean',
                0x02: 'String',
                0x03: 'Object',
                0x04: 'MovieClip (reserved, not supported)',
                0x05: 'Null',
                0x06: 'Undefined',
                0x07: 'Reference',
                0x08: 'ECMA array',
                0x09: 'Object end marker',
                0x0a: 'Strict array',
                0x0b: 'Date',
                0x0c: 'Long string'
              },
              name: {
                audiocodecid: 'Audio codec ID used in the file (see E.4.2.1 for available SoundFormat values)',
                audiodatarate: 'Audio bit rate in kilobits per second',
                audiodelay: 'Delay introduced by the audio codec in seconds',
                audiosamplerate: 'Frequency at which the audio stream is replayed',
                audiosamplesize: 'Resolution of a single audio sample',
                canSeekToEnd: 'Indicating the last video frame is a key frame',
                creationdate: 'Creation date and time',
                duration: 'Total duration of the file in seconds',
                filesize: 'Total size of the file in bytes',
                framerate: 'Number of frames per second',
                height: 'Height of the video in pixels',
                stereo: 'Indicating stereo audio',
                videocodecid: 'Video codec ID used in the file (see E.4.3.1 for available CodecID values)',
                videodatarate: 'Video bit rate in kilobits per second',
                width: 'Width of the video in pixels'
              }
            }
          }
        },
        audioTag: {
          soundFormat: {
            0: 'Linear PCM, platform endian',
            1: 'ADPCM',
            2: 'MP3',
            3: 'Linear PCM, little endian',
            4: 'Nellymoser 16-kHz mono',
            5: 'Nellymoser 8-kHz mono',
            6: 'Nellymoser',
            7: 'G.711 A-law logarithmic PCM',
            8: 'G.711 mu-law logarithmic PCM',
            9: 'reserved',
            10: 'AAC',
            11: 'Speex',
            14: 'MP3 8-Khz',
            15: 'Device-specific sound'
          },
          soundRate: {
            0: '5.5-kHz',
            1: '11-kHz',
            2: '22-kHz',
            3: '44-kHz'
          },
          soundSize: {
            0: 'snd8Bit',
            1: 'snd16Bit'
          },
          soundType: {
            0: 'sndMono',
            1: 'sndStereo'
          }
        },
        videoTag: {
          frameType: {
            1: 'keyframe (for AVC, a seekable frame)',
            2: 'inter frame (for AVC, a non-seekable frame)',
            3: 'disposable inter frame (H.263 only)',
            4: 'generated keyframe (reserved for server use only)',
            5: 'video info/command frame'
          },
          codecID: {
            1: 'JPEG (currently unused)',
            2: 'Sorenson H.263',
            3: 'Screen video',
            4: 'On2 VP6',
            5: 'On2 VP6 with alpha channel',
            6: 'Screen video version 2',
            7: 'AVC'
          }
        }
      }
    }
  };

  var mp4 = {};

  var video = {
    propertys: ['audioTracks', 'autoplay', 'buffered', 'controller', 'controls', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'duration', 'ended', 'error', 'loop', 'mediaGroup', 'muted', 'networkState', 'paused', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'src', 'startDate', 'textTracks', 'videoTracks', 'volume'],
    methods: ['addTextTrack', 'canPlayType', 'load', 'play', 'pause'],
    events: ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']
  };

  // https://wiki.multimedia.cx/index.php?title=ADTS
  // https://github.com/uupaa/AAC.js/wiki/TechnicalTerms
  var aac = {
    AIDS: {},
    ADTS: {
      frame: {
        Header: {
          length: '56bits',
          SyncWord: {
            length: '12bits',
            value: 0xfff
          },
          MPEGVersionID: {
            length: '1bits',
            0: 'MPEG-4',
            1: 'MPEG-2'
          },
          Layer: {
            length: '2bits',
            value: 0
          },
          CRCProtection: {
            length: '1bits',
            0: 'yes',
            1: 'no'
          },
          Profile: {
            length: '2bits',
            1: 'AAC-LC'
          },
          SamplingRate: {
            length: '4bits',
            '0100': 44100,
            '0111': 22050
          },
          Private: {
            length: '1bits'
          },
          Channels: {
            length: '3bits',
            1: 'CENTER',
            2: 'LEFT/RIGHT'
          },
          Originality: {
            length: '1bits'
          },
          Home: {
            length: '1bits'
          },
          Copyrighted: {
            length: '1bits'
          },
          CopyrightID: {
            length: '1bits'
          },
          FrameLength: {
            length: '13bits',
            note: 'ADTS Header + CRC + RDBs'
          },
          BufferFullness: {
            length: '11bits'
          },
          RDBsInFrame: {
            length: '2bits',
            note: 'CRC if protection absent is 0'
          }
        },
        CRC: {
          length: '16bits'
        },
        RDB: {
          length: 'nbits'
        }
      }
    },
    AudioSpecificConfig: {
      audioObjectType: {
        0: 'Null',
        1: 'AAC Main',
        2: 'AAC LC (Low Complexity)',
        3: 'AAC SSR (Scalable Sample Rate)',
        4: 'AAC LTP (Long Term Prediction)',
        5: 'SBR (Spectral Band Replication)',
        6: 'AAC Scalable',
        7: 'TwinVQ',
        8: 'CELP (Code Excited Linear Prediction)',
        9: 'HXVC (Harmonic Vector eXcitation Coding)',
        10: 'Reserved',
        11: 'Reserved',
        12: 'TTSI (Text-To-Speech Interface)',
        13: 'Main Synthesis',
        14: 'Wavetable Synthesis',
        15: 'General MIDI'
      },
      samplingFrequencyIndex: {
        0: '96000 Hz',
        1: '88200 Hz',
        2: '64000 Hz',
        3: '48000 Hz',
        4: '44100 Hz',
        5: '32000 Hz',
        6: '24000 Hz',
        7: '22050 Hz',
        8: '16000 Hz',
        9: '12000 Hz',
        10: '11025 Hz',
        11: '8000 Hz',
        12: '7350 Hz',
        13: 'Reserved',
        14: 'Reserved',
        15: 'frequency is written explictly'
      },
      channelConfiguration: {
        0: 'Defined in AOT Specifc Config',
        1: '1 channel: front-center',
        2: '2 channels: front-left, front-right',
        3: '3 channels: front-center, front-left, front-right',
        4: '4 channels: front-center, front-left, front-right, back-center',
        5: '5 channels: front-center, front-left, front-right, back-left, back-right',
        6: '6 channels: front-center, front-left, front-right, back-left, back-right, LFE-channel',
        7: '8 channels: front-center, front-left, front-right, side-left, side-right, back-left, back-right, LFE-channel',
        '8-15': 'Reserved'
      }
    }
  };

  var h264 = {};

  var config = {
    mse: mse,
    flv: flv,
    mp4: mp4,
    video: video,
    aac: aac,
    h264: h264
  };

  var MSE =
  /*#__PURE__*/
  function () {
    function MSE(flv) {
      classCallCheck(this, MSE);

      this.flv = flv;
      this.creatUrl();
      this.eventBind();
    }

    createClass(MSE, [{
      key: "creatUrl",
      value: function creatUrl() {
        var _this$flv = this.flv,
            mediaElement = _this$flv.options.mediaElement,
            destroyEvents = _this$flv.events.destroyEvents;
        this.mediaSource = new MediaSource();
        var url = URL.createObjectURL(this.mediaSource);
        destroyEvents.push(function () {
          URL.revokeObjectURL(url);
        });
        mediaElement.src = url;
      }
    }, {
      key: "eventBind",
      value: function eventBind() {
        var _this = this;

        var proxy = this.flv.events.proxy;
        config.mse.mediaSource.events.forEach(function (eventName) {
          proxy(_this.mediaSource, eventName, function (event) {
            _this.flv.emit("mediaSource:".concat(event.type), event);
          });
        });
        config.mse.sourceBufferList.events.forEach(function (eventName) {
          proxy(_this.mediaSource.sourceBuffers, eventName, function (event) {
            _this.flv.emit("sourceBuffers:".concat(event.type), event);
          });
          proxy(_this.mediaSource.activeSourceBuffers, eventName, function (event) {
            _this.flv.emit("activeSourceBuffers:".concat(event.type), event);
          });
        });
      }
    }]);

    return MSE;
  }();

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function readBuffer(buffer) {
    var index = 0;
    return function read(length) {
      var tempUint8 = new Uint8Array(length);

      for (var i = 0; i < length; i += 1) {
        tempUint8[i] = buffer[index];
        index += 1;
      }

      read.index = index;
      return tempUint8;
    };
  }
  function mergeBuffer() {
    for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
      buffers[_key] = arguments[_key];
    }

    var bufferLength = buffers.reduce(function (pre, val) {
      return pre + val.length;
    }, 0);
    var buffer = new buffers[0].constructor(bufferLength);
    var offset = 0;
    buffers.forEach(function (buf) {
      buffer.set(buf, offset);
      offset += buf.length;
    });
    return buffer;
  }
  function readDouble(array) {
    var view = new DataView(new ArrayBuffer(array.length));
    array.forEach(function (b, i) {
      view.setUint8(i, b);
    });
    return view.getFloat64(0);
  }
  function readBoolean(array) {
    return array[0] !== 0;
  }
  function readString(array) {
    var _String$fromCharCode;

    return (_String$fromCharCode = String.fromCharCode).call.apply(_String$fromCharCode, [String].concat(toConsumableArray(array)));
  }
  function readBufferSum(array) {
    return array.reduce(function (totle, num, index) {
      return totle + num * Math.pow(256, array.length - index - 1);
    }, 0);
  }

  function scripTag(scripTagBody) {
    var readScripTag = readBuffer(scripTagBody);
    var metadata = Object.create(null);
    var amf1 = Object.create(null);
    var amf2 = Object.create(null);

    var _readScripTag = readScripTag(1);

    var _readScripTag2 = slicedToArray(_readScripTag, 1);

    amf1.type = _readScripTag2[0];
    errorHandle(amf1.type === 2, "AMF: [amf1] type expect 2, but got ".concat(amf1.type));
    amf1.size = readBufferSum(readScripTag(2));
    amf1.string = readString(readScripTag(amf1.size));

    var _readScripTag3 = readScripTag(1);

    var _readScripTag4 = slicedToArray(_readScripTag3, 1);

    amf2.type = _readScripTag4[0];
    errorHandle(amf2.type === 8, "AMF: [amf2] type expect 8, but got ".concat(amf2.type));
    amf2.size = readBufferSum(readScripTag(4));
    amf2.metaData = Object.create(null);

    function getValue(type) {
      var value = null;

      if (type !== undefined) {
        switch (type) {
          case 0:
            value = readDouble(readScripTag(8));
            break;

          case 1:
            value = readBoolean(readScripTag(1));
            break;

          case 2:
            {
              var valueLength = readBufferSum(readScripTag(2));
              value = readString(readScripTag(valueLength));
              break;
            }

          case 3:
            {
              value = Object.create(null);
              var lastType = -1;

              while (lastType !== 9) {
                var nameLength = readBufferSum(readScripTag(2));
                var name = readString(readScripTag(nameLength));
                var itemType = readScripTag(1)[0];

                if (name) {
                  value[name] = getValue(itemType);
                }

                lastType = itemType;
              }

              break;
            }

          case 5:
            value = null;
            break;

          case 6:
            value = undefined;
            break;

          case 7:
            value = "Reference #".concat(readScripTag.index);
            readScripTag(2);
            break;

          case 8:
            {
              value = Object.create(null);

              var _lastType = -1;

              while (_lastType !== 9) {
                var _nameLength = readBufferSum(readScripTag(2));

                var _name = readString(readScripTag(_nameLength));

                var _itemType = readScripTag(1)[0];

                if (_name) {
                  value[_name] = getValue(_itemType);
                }

                _lastType = _itemType;
              }

              break;
            }

          case 10:
            {
              var _valueLength = readBufferSum(readScripTag(4));

              value = [];

              for (var index = 0; index < _valueLength; index += 1) {
                var _itemType2 = readScripTag(1)[0];
                value.push(getValue(_itemType2));
              }

              break;
            }

          case 11:
            value = readDouble(readScripTag(2));
            break;

          case 12:
            {
              var _valueLength2 = readBufferSum(readScripTag(4));

              value = readString(readScripTag(_valueLength2));
              break;
            }

          default:
            errorHandle(false, "AMF: Unknown metaData type: ".concat(type));
            break;
        }
      }

      return value;
    }

    while (readScripTag.index < scripTagBody.length) {
      var nameLength = readBufferSum(readScripTag(2));
      var name = readString(readScripTag(nameLength));
      var type = readScripTag(1)[0];

      if (name) {
        amf2.metaData[name] = getValue(type);
      }
    }

    errorHandle(readScripTag.index === scripTagBody.length, 'AMF: Seems to be incompletely parsed');
    errorHandle(amf2.size === Object.keys(amf2.metaData).length, 'AMF: [amf2] length does not match');
    metadata.amf1 = amf1;
    metadata.amf2 = amf2;
    return metadata;
  }

  function videoTag(videoTagBody) {
    var meta = videoTagBody[0];
    var frameType = (meta & 0xf0) >> 4;
    var codecID = meta & 0x0f;
    return {
      frameType: frameType,
      codecID: codecID
    };
  }

  function audioTag(audioTagBody) {
    var meta = audioTagBody[0];
    var soundFormat = (meta & 0xf0) >> 4;
    var soundRate = (meta & 0x0c) >> 2;
    var soundSize = (meta & 0x02) >> 1;
    var soundType = (meta & 0x01) >> 0;
    return {
      soundFormat: soundFormat,
      soundRate: soundRate,
      soundSize: soundSize,
      soundType: soundType
    };
  }

  var Parse =
  /*#__PURE__*/
  function () {
    function Parse(flv) {
      var _this = this;

      classCallCheck(this, Parse);

      this.flv = flv;
      var url = flv.options.url,
          debug = flv.debug;
      this.uint8 = new Uint8Array(0);
      this.index = 0;
      this.header = null;
      this.tags = [];
      this.done = false;
      flv.on('flvFetchStart', function () {
        debug.log('flv-fetch-start', url);
      });
      flv.on('flvFetching', function (uint8) {
        _this.uint8 = mergeBuffer(_this.uint8, uint8);

        _this.parse();
      });
      flv.on('flvFetchEnd', function (uint8) {
        debug.log('flv-fetch-end');

        if (uint8) {
          _this.uint8 = uint8;
          _this.index = 0;
          _this.header = null;
          _this.scripTag = null;
          _this.tags = [];

          _this.parse();
        }

        _this.done = true;
        flv.emit('flvParseDone');
        debug.log('flv-parse-done');
      });
    }

    createClass(Parse, [{
      key: "parse",
      value: function parse() {
        var debug = this.flv.debug;

        if (!this.header && this.readable(13)) {
          var header = Object.create(null);
          header.signature = readString(this.read(3));

          var _this$read = this.read(1);

          var _this$read2 = slicedToArray(_this$read, 1);

          header.version = _this$read2[0];
          errorHandle(header.signature === 'FLV' && header.version === 1, 'FLV header not found');

          var _this$read3 = this.read(1);

          var _this$read4 = slicedToArray(_this$read3, 1);

          header.flags = _this$read4[0];
          header.headersize = readBufferSum(this.read(4));
          this.header = header;
          this.read(4);
          this.flv.emit('flvParseHeader', this.header);
          debug.log('flv-parse-header', this.header);
        }

        while (this.index < this.uint8.length) {
          var restIndex = this.index;
          var tag = Object.create(null);

          if (this.readable(11)) {
            var _this$read5 = this.read(1);

            var _this$read6 = slicedToArray(_this$read5, 1);

            tag.tagType = _this$read6[0];
            tag.dataSize = readBufferSum(this.read(3));
            tag.timestamp = this.read(4);
            tag.streamID = this.read(3);
          } else {
            this.index = restIndex;
            break;
          }

          if (this.readable(tag.dataSize)) {
            tag.body = this.read(tag.dataSize);
          } else {
            this.index = restIndex;
            break;
          }

          switch (tag.tagType) {
            case 18:
              tag.meta = scripTag(tag.body);
              this.flv.emit('scripTagMeta', tag.meta);
              debug.log('scrip-tag-meta', tag.meta);
              break;

            case 9:
              tag.meta = videoTag(tag.body);
              this.flv.emit('videoTagMeta', tag.meta);
              break;

            case 8:
              tag.meta = audioTag(tag.body);
              this.flv.emit('audioTagMeta', tag.meta);
              break;

            default:
              debug.warn('unknown-tag-type', tag.tagType);
              break;
          }

          this.read(4);
          this.tags.push(tag);
          this.flv.emit('flvParseTag', tag);
        }
      }
    }, {
      key: "readable",
      value: function readable(length) {
        return this.uint8.slice(this.index).length >= length;
      }
    }, {
      key: "read",
      value: function read(length) {
        var tempUint8 = new Uint8Array(length);

        for (var i = 0; i < length; i += 1) {
          tempUint8[i] = this.uint8[this.index];
          this.index += 1;
        }

        return tempUint8;
      }
    }]);

    return Parse;
  }();

  var AAC =
  /*#__PURE__*/
  function () {
    function AAC(flv, audioTrack) {
      classCallCheck(this, AAC);

      this.flv = flv;
      this.audioTrack = audioTrack;
      this.AudioSpecificConfig = {
        audioObjectType: 0,
        samplingFrequencyIndex: 0,
        channelConfiguration: 0
      };
    }

    createClass(AAC, [{
      key: "muxer",
      value: function muxer(tag) {
        var debug = this.flv.debug;
        var packet = tag.body.slice(1);
        var packetType = packet[0];
        var frame = new Uint8Array(0);
        var info = {};

        if (packetType === 0) {
          var packetData = packet.slice(1);
          this.AudioSpecificConfig = AAC.getAudioSpecificConfig(packetData);
          this.flv.emit('AudioSpecificConfig', this.AudioSpecificConfig);
          debug.log('audio-specific-config', this.AudioSpecificConfig);
        } else {
          var ADTSLen = tag.dataSize - 2 + 7;
          var ADTSHeader = this.getADTSHeader(ADTSLen);
          var ADTSBody = tag.body.slice(2);
          frame = mergeBuffer(ADTSHeader, ADTSBody);
        }

        info = {
          format: 'aac',
          codec: "mp4a.40.".concat(this.AudioSpecificConfig.audioObjectType)
        };
        return {
          frame: frame,
          info: info
        };
      }
    }, {
      key: "getADTSHeader",
      value: function getADTSHeader(ADTSLen) {
        var _this$AudioSpecificCo = this.AudioSpecificConfig,
            audioObjectType = _this$AudioSpecificCo.audioObjectType,
            samplingFrequencyIndex = _this$AudioSpecificCo.samplingFrequencyIndex,
            channelConfiguration = _this$AudioSpecificCo.channelConfiguration;
        var ADTSHeader = new Uint8Array(7);
        ADTSHeader[0] = 0xff;
        ADTSHeader[1] = 0xf0;
        ADTSHeader[1] |= 0 << 3;
        ADTSHeader[1] |= 0 << 1;
        ADTSHeader[1] |= 1;
        ADTSHeader[2] = audioObjectType - 1 << 6;
        ADTSHeader[2] |= (samplingFrequencyIndex & 0x0f) << 2;
        ADTSHeader[2] |= 0 << 1;
        ADTSHeader[2] |= (channelConfiguration & 0x04) >> 2;
        ADTSHeader[3] = (channelConfiguration & 0x03) << 6;
        ADTSHeader[3] |= 0 << 5;
        ADTSHeader[3] |= 0 << 4;
        ADTSHeader[3] |= 0 << 3;
        ADTSHeader[3] |= 0 << 2;
        ADTSHeader[3] |= (ADTSLen & 0x1800) >> 11;
        ADTSHeader[4] = (ADTSLen & 0x7f8) >> 3;
        ADTSHeader[5] = (ADTSLen & 0x7) << 5;
        ADTSHeader[5] |= 0x1f;
        ADTSHeader[6] = 0xfc;
        return ADTSHeader;
      }
    }], [{
      key: "getAudioSpecificConfig",
      value: function getAudioSpecificConfig(packetData) {
        errorHandle(packetData.length >= 2, 'AudioSpecificConfig parss length is not enough');
        var AudioSpecificConfig = {};
        AudioSpecificConfig.audioObjectType = (packetData[0] & 0xf8) >> 3;
        var rateIndex = ((packetData[0] & 7) << 1) + ((packetData[1] & 0x80) >> 7 & 1);
        AudioSpecificConfig.samplingFrequencyIndex = AAC.AAC_SAMPLE_RATES[rateIndex] || null;
        var channelsIndex = (packetData[1] & 0x7f) >> 3;
        AudioSpecificConfig.channelConfiguration = AAC.AAC_CHANNELS[channelsIndex] || null;
        return AudioSpecificConfig;
      }
    }, {
      key: "AAC_SAMPLE_RATES",
      get: function get() {
        return [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      }
    }, {
      key: "AAC_CHANNELS",
      get: function get() {
        return [0, 1, 2, 3, 4, 5, 6, 8];
      }
    }]);

    return AAC;
  }();

  var MP3 =
  /*#__PURE__*/
  function () {
    function MP3(flv, audioTrack) {
      classCallCheck(this, MP3);

      this.flv = flv;
      this.audioTrack = audioTrack;
    }

    createClass(MP3, [{
      key: "muxer",
      value: function muxer(tag) {
        var frame = tag.body.slice(1);
        var info = {
          format: 'mp3',
          codec: 'mp3'
        };
        return {
          frame: frame,
          info: info
        };
      }
    }]);

    return MP3;
  }();

  var AudioTrack =
  /*#__PURE__*/
  function () {
    function AudioTrack(flv) {
      classCallCheck(this, AudioTrack);

      this.flv = flv;
      this.audioBuffers = new Uint8Array(0);
      this.audioInfo = null;
      this.aac = new AAC(flv, this);
      this.mp3 = new MP3(flv, this);
    }

    createClass(AudioTrack, [{
      key: "muxer",
      value: function muxer(tag) {
        var debug = this.flv.debug;
        var soundFormat = tag.meta.soundFormat;

        if (soundFormat !== 10 && soundFormat !== 2) {
          debug.warn('unsupported-audio-format', soundFormat);
        } else {
          var formatName = AudioTrack.SOUND_FORMATS[soundFormat];

          var _this$formatName$muxe = this[formatName].muxer(tag),
              frame = _this$formatName$muxe.frame,
              info = _this$formatName$muxe.info;

          this.flv.emit('addAudioFrame', frame);
          this.audioBuffers = mergeBuffer(this.audioBuffers, frame);

          if (!this.audioInfo) {
            this.audioInfo = info;
            debug.log('audio-info', this.audioInfo);
          }
        }
      }
    }, {
      key: "download",
      value: function download$$1() {
        errorHandle(this.audioInfo && this.audioBuffers.length > 0, 'Audio data seems to be not ready');
        var url = URL.createObjectURL(new Blob([this.audioBuffers], {
          type: "audio/".concat(this.audioInfo.format)
        }));

        download(url, "audioTrack.".concat(this.audioInfo.format));
      }
    }], [{
      key: "SOUND_FORMATS",
      get: function get() {
        return {
          10: 'aac',
          2: 'mp3'
        };
      }
    }]);

    return AudioTrack;
  }();

  var VideoTrack =
  /*#__PURE__*/
  function () {
    function VideoTrack(flv) {
      classCallCheck(this, VideoTrack);
    }

    createClass(VideoTrack, [{
      key: "muxer",
      value: function muxer(tag) {}
    }]);

    return VideoTrack;
  }();

  var Transmuxer = function Transmuxer(flv) {
    var _this = this;

    classCallCheck(this, Transmuxer);

    this.audioTrack = new AudioTrack(flv);
    this.videoTrack = new VideoTrack(flv);
    flv.on('flvParseTag', function (tag) {
      switch (tag.tagType) {
        case 9:
          _this.videoTrack.muxer(tag);

          break;

        case 8:
          _this.audioTrack.muxer(tag);

          break;

        default:
          break;
      }
    });
  };

  var id = 0;

  var FlvReader =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(FlvReader, _Emitter);

    function FlvReader(options) {
      var _this;

      classCallCheck(this, FlvReader);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvReader).call(this));
      _this.options = Object.assign({}, FlvReader.DEFAULTS, options);
      validateOptions(assertThisInitialized(assertThisInitialized(_this)));
      checkSupport(assertThisInitialized(assertThisInitialized(_this)));
      _this.debug = new Debug(assertThisInitialized(assertThisInitialized(_this)));
      _this.events = new Events(assertThisInitialized(assertThisInitialized(_this)));
      _this.workers = new Workers(assertThisInitialized(assertThisInitialized(_this)));
      _this.parse = new Parse(assertThisInitialized(assertThisInitialized(_this)));
      _this.transmuxer = new Transmuxer(assertThisInitialized(assertThisInitialized(_this)));
      _this.mse = new MSE(assertThisInitialized(assertThisInitialized(_this)));
      _this.stream = new Stream(assertThisInitialized(assertThisInitialized(_this)));
      id += 1;
      _this.id = id;
      FlvReader.instances.push(assertThisInitialized(assertThisInitialized(_this)));
      return _this;
    }

    createClass(FlvReader, [{
      key: "destroy",
      value: function destroy() {
        this.events.destroy();
        this.workers.killAll();
        FlvReader.instances.splice(FlvReader.instances.indexOf(this), 1);
        this.emit('destroy');
      }
    }], [{
      key: "DEFAULTS",
      get: function get() {
        return {
          mediaElement: '',
          url: '',
          debug: false,
          headers: {}
        };
      }
    }, {
      key: "version",
      get: function get() {
        return '1.0.0';
      }
    }, {
      key: "config",
      get: function get() {
        return config;
      }
    }, {
      key: "utils",
      get: function get() {
        return utils;
      }
    }]);

    return FlvReader;
  }(tinyEmitter);

  Object.defineProperty(FlvReader, 'instances', {
    value: []
  });
  window.FlvReader = FlvReader;

  exports.default = FlvReader;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=flv-reader.js.map
