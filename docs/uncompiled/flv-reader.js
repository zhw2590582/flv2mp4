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
  function mergeTypedArrays(a, b) {
    var c = new a.constructor(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
  }
  function sleep() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  function getUint8Sum(arr) {
    return arr.reduce(function (totle, num, index) {
      return totle + num * Math.pow(256, arr.length - index - 1);
    }, 0);
  }
  function string2Bin(str) {
    var result = [];

    for (var i = 0; i < str.length; i += 1) {
      result.push(Number(str.charCodeAt(i).toString(10)));
    }

    return result;
  }
  function bin2String(array) {
    var _String$fromCharCode;

    return (_String$fromCharCode = String.fromCharCode).call.apply(_String$fromCharCode, [String].concat(toConsumableArray(array)));
  }
  function bin2Float(array) {
    var view = new DataView(new ArrayBuffer(array.length));
    array.forEach(function (b, i) {
      view.setUint8(i, b);
    });
    return view.getFloat64(0);
  }
  function bin2Boolean(bin) {
    return bin === 1;
  }
  function log(name) {
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    console.log("[".concat(name, "] ").concat(msg));
  }
  function readUint8(uint8) {
    var index = 0;
    return function read(length) {
      var tempUint8 = new Uint8Array(length);

      for (var i = 0; i < length; i += 1) {
        tempUint8[i] = uint8[index];
        index += 1;
      }

      read.index = index;
      return tempUint8;
    };
  }

  var utils = /*#__PURE__*/Object.freeze({
    errorHandle: errorHandle,
    mergeTypedArrays: mergeTypedArrays,
    sleep: sleep,
    getUint8Sum: getUint8Sum,
    string2Bin: string2Bin,
    bin2String: bin2String,
    bin2Float: bin2Float,
    bin2Boolean: bin2Boolean,
    log: log,
    readUint8: readUint8
  });

  function checkSupport(options) {
    var mediaElement = options.mediaElement,
        url = options.url;
    errorHandle(mediaElement instanceof HTMLVideoElement, 'The first parameter is not a video tag element');
    errorHandle(typeof url === 'string' || url instanceof File && url.type === 'video/x-flv', 'The second parameter is not a string type or flv file');
    var MP4H264MimeCodec = 'video/mp4; codecs="avc1.42001E, mp4a.40.2"';
    var canPlay = mediaElement.canPlayType(MP4H264MimeCodec);
    errorHandle(window.MediaSource && window.MediaSource.isTypeSupported(MP4H264MimeCodec) && (canPlay === 'probably' || canPlay === 'maybe'), "Unsupported MIME type or codec: ".concat(MP4H264MimeCodec));
    errorHandle(typeof window.Promise === 'function', "Unsupported 'Promise' method");
    errorHandle(typeof window.fetch === 'function', "Unsupported 'fetch' method");
    errorHandle(typeof window.Worker === 'function', "Unsupported 'Worker' method");
    errorHandle(typeof window.ReadableStream === 'function', "Unsupported 'ReadableStream' method");
  }

  var EventProxy =
  /*#__PURE__*/
  function () {
    function EventProxy() {
      classCallCheck(this, EventProxy);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
    }

    createClass(EventProxy, [{
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

    return EventProxy;
  }();

  var CreatWorker =
  /*#__PURE__*/
  function () {
    function CreatWorker() {
      classCallCheck(this, CreatWorker);

      this.workers = new Map();
    }

    createClass(CreatWorker, [{
      key: "add",
      value: function add(name, fn) {
        if (!this.workers.has(name)) {
          this.workers.set(name, CreatWorker.create(fn));
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
        var blob = new Blob([CreatWorker.fnToStr(fn)], {
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

    return CreatWorker;
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

  var config = {
    mse: mse
  };

  var CreatMediaSource =
  /*#__PURE__*/
  function () {
    function CreatMediaSource(flv) {
      classCallCheck(this, CreatMediaSource);

      this.flv = flv;
      this.creatUrl();
      this.eventBind();
    }

    createClass(CreatMediaSource, [{
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

    return CreatMediaSource;
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

  function fetchStream(flv, url) {
    flv.emit('flvFetchStart');
    fetch(url).then(function (response) {
      errorHandle(response.ok && response.status >= 200 && response.status <= 299, "".concat(response.status, " ").concat(response.statusText));
      var contentType = response.headers.get('content-type');
      errorHandle(contentType.includes('x-flv'), 'The resource does not seem to be a flv file');
      return new Response(new ReadableStream({
        start: function start(controller) {
          var reader = response.body.getReader();
          flv.on('destroy', function () {
            reader.cancel();
          });
          flv.on('readerCancel', function () {
            reader.cancel();
          });

          (function read() {
            reader.read().then(function (_ref) {
              var done = _ref.done,
                  value = _ref.value;

              if (done) {
                flv.emit('flvFetchEnd');
                controller.close();
                return;
              }

              flv.emit('flvFetching', new Uint8Array(value));
              controller.enqueue(value);
              read();
            }).catch(function (error) {
              throw error;
            });
          })();
        },
        cancel: function cancel() {
          flv.emit('flvFetchCancel');
        }
      }));
    });
  }

  function readFile(flv, file) {
    flv.emit('flvFetchStart');
    var proxy = flv.events.proxy;
    var reader = new FileReader();
    proxy(reader, 'load', function (e) {
      var buffer = e.target.result;
      var uint8 = new Uint8Array(buffer);
      flv.emit('flvFetchEnd', uint8);
    });
    reader.readAsArrayBuffer(file);
  }

  function parseScripTag(scripTagBody) {
    var readScripTag = readUint8(scripTagBody);
    var metadata = Object.create(null);
    var amf1 = Object.create(null);
    var amf2 = Object.create(null);

    var _readScripTag = readScripTag(1);

    var _readScripTag2 = slicedToArray(_readScripTag, 1);

    amf1.type = _readScripTag2[0];
    errorHandle(amf1.type === 2, "AMF: [amf1] type expect 2, but got ".concat(amf1.type));
    amf1.size = getUint8Sum(readScripTag(2));
    amf1.string = bin2String(readScripTag(amf1.size));

    var _readScripTag3 = readScripTag(1);

    var _readScripTag4 = slicedToArray(_readScripTag3, 1);

    amf2.type = _readScripTag4[0];
    errorHandle(amf2.type === 8, "AMF: [amf1] type expect 8, but got ".concat(amf2.type));
    amf2.size = getUint8Sum(readScripTag(4));
    amf2.metaData = Object.create(null);

    function getValue(type) {
      var value = null;

      if (type !== undefined) {
        switch (type) {
          case 0:
            value = bin2Float(readScripTag(8));
            break;

          case 1:
            value = bin2Boolean(readScripTag(1)[0]);
            break;

          case 2:
            {
              var valueLength = getUint8Sum(readScripTag(2));
              value = bin2String(readScripTag(valueLength));
              break;
            }

          case 3:
            {
              value = Object.create(null);
              var endObject = false;

              while (!endObject && readScripTag.index < scripTagBody.length) {
                var nameLength = getUint8Sum(readScripTag(2));
                var name = bin2String(readScripTag(nameLength));
                var _type = readScripTag(1)[0];

                if (name) {
                  value[name] = getValue(_type);
                }

                if (_type === 9) {
                  endObject = true;
                }
              }

              break;
            }

          case 8:
            {
              value = Object.create(null);
              var endArray = false;

              while (!endArray && readScripTag.index < scripTagBody.length) {
                var _nameLength = getUint8Sum(readScripTag(2));

                var _name = bin2String(readScripTag(_nameLength));

                var _type2 = readScripTag(1)[0];

                if (_name) {
                  value[_name] = getValue(_type2);
                }

                if (_type2 === 9) {
                  endArray = true;
                }
              }

              break;
            }

          case 10:
            {
              var _valueLength = getUint8Sum(readScripTag(4));

              value = [];

              for (var index = 0; index < _valueLength; index += 1) {
                var itemType = readScripTag(1)[0];
                value.push(getValue(itemType));
              }

              break;
            }

          case 12:
            {
              var _valueLength2 = getUint8Sum(readScripTag(4));

              value = bin2String(readScripTag(_valueLength2));
              break;
            }

          default:
            console.log(readScripTag(scripTagBody.length - readScripTag.index - 1));
            errorHandle(false, "AMF: Unknown metaData type: ".concat(type));
            break;
        }
      }

      return value;
    }

    while (readScripTag.index < scripTagBody.length) {
      var nameLength = getUint8Sum(readScripTag(2));
      var name = bin2String(readScripTag(nameLength));
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

  var FlvParse =
  /*#__PURE__*/
  function () {
    function FlvParse(flv) {
      var _this = this;

      classCallCheck(this, FlvParse);

      this.flv = flv;
      var _flv$options = flv.options,
          url = _flv$options.url,
          debug = _flv$options.debug;
      this.uint8 = new Uint8Array(0);
      this.index = 0;
      this.header = null;
      this.scripTag = null;
      this.tags = [];
      this.done = false;
      flv.on('flvFetchStart', function () {
        if (debug) {
          console.log('[flv-fetch-start]', url);
        }
      });
      flv.on('flvFetchCancel', function () {
        if (debug) {
          console.log('[flv-fetch-cancel]');
        }
      });
      flv.on('flvFetching', function (uint8) {
        _this.uint8 = mergeTypedArrays(_this.uint8, uint8);

        _this.parse();
      });
      flv.on('flvFetchEnd', function (uint8) {
        if (debug) {
          console.log('[flv-fetch-end]');
        }

        _this.done = true;

        if (uint8) {
          _this.uint8 = uint8;
          _this.index = 0;
          _this.header = null;
          _this.scripTag = null;
          _this.tags = [];

          _this.parse();
        }

        flv.emit('flvParseDone');

        if (debug) {
          console.log('[flv-parse-done]');
        }
      });

      if (typeof url === 'string') {
        fetchStream(flv, url);
      } else {
        readFile(flv, url);
      }
    }

    createClass(FlvParse, [{
      key: "parse",
      value: function parse() {
        var debug = this.flv.options.debug;

        if (this.uint8.length >= 13 && !this.header) {
          var header = Object.create(null);
          header.signature = bin2String(this.read(3));

          var _this$read = this.read(1);

          var _this$read2 = slicedToArray(_this$read, 1);

          header.version = _this$read2[0];

          var _this$read3 = this.read(1);

          var _this$read4 = slicedToArray(_this$read3, 1);

          header.flags = _this$read4[0];
          header.headersize = getUint8Sum(this.read(4));
          this.header = header;
          this.read(4);
          this.flv.emit('flvParseHeader', this.header);

          if (debug) {
            console.log('[flv-parse-header]', this.header);
          }
        }

        while (this.index < this.uint8.length) {
          var tag = Object.create(null);

          var _this$read5 = this.read(1);

          var _this$read6 = slicedToArray(_this$read5, 1);

          tag.tagType = _this$read6[0];
          tag.dataSize = getUint8Sum(this.read(3));
          tag.timestamp = this.read(4);
          tag.streamID = this.read(3);
          tag.body = this.read(tag.dataSize);
          this.tags.push(tag);
          this.read(4);

          switch (tag.tagType) {
            case 18:
              this.scripTag = parseScripTag(tag.body);
              this.flv.emit('flvParseScripTag', this.scripTag);

              if (debug) {
                console.log('[flv-parse-scrip-tag]', this.scripTag);
              }

              break;

            default:
              break;
          }

          this.flv.emit('flvParseTag', tag);
        }
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

    return FlvParse;
  }();

  var id = 0;

  var Flv =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(Flv, _Emitter);

    function Flv(options) {
      var _this;

      classCallCheck(this, Flv);

      _this = possibleConstructorReturn(this, getPrototypeOf(Flv).call(this));
      _this.options = Object.assign({}, Flv.DEFAULTS, options);
      checkSupport(_this.options);
      _this.events = new EventProxy(assertThisInitialized(assertThisInitialized(_this)));
      _this.workers = new CreatWorker(assertThisInitialized(assertThisInitialized(_this)));
      _this.mediaSource = new CreatMediaSource(assertThisInitialized(assertThisInitialized(_this)));
      _this.flvData = new FlvParse(assertThisInitialized(assertThisInitialized(_this)));
      id += 1;
      _this.id = id;
      Flv.instances.push(assertThisInitialized(assertThisInitialized(_this)));
      return _this;
    }

    createClass(Flv, [{
      key: "destroy",
      value: function destroy() {
        this.events.destroy();
        this.workers.killAll();
        Flv.instances.splice(Flv.instances.indexOf(this), 1);
        this.emit('destroy');
      }
    }], [{
      key: "DEFAULTS",
      get: function get() {
        return {
          mediaElement: '',
          url: '',
          debug: false
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

    return Flv;
  }(tinyEmitter);

  Object.defineProperty(Flv, 'instances', {
    value: []
  });
  window.Flv = Flv;

  exports.default = Flv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=flv-reader.js.map
