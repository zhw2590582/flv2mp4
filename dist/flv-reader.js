/*!
 * flv-reader.js v1.0.0
 * Github: https://github.com/zhw2590582/flv-reader#readme
 * (c) 2017-2018 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self)["flv-reader"]={})}(this,function(e){"use strict";var f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=t(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r});var l=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};var d=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t},h=t(function(t){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n}),i=t(function(n){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r});var a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)};function s(){}s.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}};var c=s;var u=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},p=t(function(r){function a(e,t,n){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?r.exports=a=function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&i(a,n.prototype),a}:r.exports=a=Reflect.construct,a.apply(null,arguments)}r.exports=a}),m=function(e){function r(e,t){var n;return f(this,r),n=d(this,h(r).call(this,e)),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(l(l(n)),t||n.constructor),n.name="FlvError",n}return a(r,e),r}(t(function(t){function r(e){var n="function"==typeof Map?new Map:void 0;return t.exports=r=function(e){if(null===e||!u(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return p(e,arguments,h(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,e)},r(e)}t.exports=r})(Error));function v(e,t){if(!e)throw new m(t)}function y(e,t){var n=document.createElement("a");n.style.display="none",n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}var g=Object.freeze({errorHandle:v,createAbortError:function(){try{return new DOMException("Aborted","AbortError")}catch(e){var t=new Error("Aborted");return t.name="AbortError",t}},sleep:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(e){return setTimeout(e,t)})},download:y});var b=function e(o){f(this,e);var i=o.options.debug;this.log=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;(o.emit.apply(o,["log",e].concat(n)),i)&&(a=console).log.apply(a,["Flv: [".concat(e,"]")].concat(n))},this.warn=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;(o.emit.apply(o,["warn",e].concat(n)),i)&&(a=console).warn.apply(a,["Flv: [".concat(e,"]")].concat(n))}},S=function(){function e(){f(this,e),this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return o(e,[{key:"proxy",value:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),this.destroyEvents.push(function(){e.removeEventListener(t,n,r)})}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(e){return e()})}}]),e}(),k=function(){function a(){f(this,a),this.workers=new Map}return o(a,[{key:"add",value:function(e,t){this.workers.has(e)||this.workers.set(e,a.create(t))}},{key:"run",value:function(e){for(var t=this.workers.get(e),n=arguments.length,r=new Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.post(r)}},{key:"kill",value:function(e){this.workers.get(e).kill()}},{key:"killAll",value:function(){this.workers.forEach(function(e){e.kill()})}}],[{key:"fnToStr",value:function(e){return"\n           self.onmessage = event => {\n               return self.postMessage((".concat(e,").apply(null, event.data));\n           }\n         ")}},{key:"create",value:function(e){var t=new Blob([a.fnToStr(e)],{type:"application/javascript"}),n=window.URL.createObjectURL(t),r=new Worker(n);return r.kill=function(){URL.revokeObjectURL(n),r.terminate()},r.post=function(e){return new Promise(function(t,n){r.onmessage=function(e){t(e.data)},r.onerror=function(e){n(e)},r.postMessage(e)})},r}}]),a}();function w(a,e){a.emit("streamStart"),fetch(e,{headers:a.options.headers}).then(function(e){var t=e.body.getReader();a.on("destroy",function(){t.cancel(),a.debug.log("stream-cancel")}),a.on("streamCancel",function(){t.cancel(),a.debug.log("stream-cancel")}),function r(){t.read().then(function(e){var t=e.done,n=e.value;t?a.emit("streamEnd"):(a.emit("streaming",new Uint8Array(n)),r())}).catch(function(e){throw e})}()})}function T(e,t){e.emit("streamStart");var n=e.events.proxy,r=e.options.headers,a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="moz-chunked-arraybuffer",Object.keys(r).forEach(function(e){a.setRequestHeader(e,r[e])}),n(a,"readystatechange",function(){e.emit("readystatechange",a)}),n(a,"progress",function(){e.emit("streaming",new Uint8Array(a.response))}),n(a,"loadend",function(){e.emit("streamEnd")}),n(a,"error",function(e){throw e}),e.on("destroy",function(){a.abort(),e.debug.log("stream-cancel")}),e.on("streamCancel",function(){a.abort(),e.debug.log("stream-cancel")}),a.send()}function A(t,e){t.emit("streamStart");var n=t.events.proxy,r=t.options.headers,a=new TextEncoder,o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="text",Object.keys(r).forEach(function(e){o.setRequestHeader(e,r[e])});var i=0;n(o,"readystatechange",function(){t.emit("readystatechange",o)}),n(o,"progress",function(){var e=o.responseText.substr(i);i=o.responseText.length,t.emit("streaming",a.encode(e,{stream:!0}))}),n(o,"loadend",function(){t.emit("streaming",a.encode("",{stream:!1})),t.emit("streamEnd")}),n(o,"error",function(e){throw e}),t.on("destroy",function(){o.abort(),t.debug.log("stream-cancel")}),t.on("streamCancel",function(){o.abort(),t.debug.log("stream-cancel")}),o.send()}function E(n,e){n.emit("streamStart");var t=n.events.proxy,r=new FileReader;t(r,"load",function(e){var t=e.target.result;n.emit("streamEnd",new Uint8Array(t))}),r.readAsArrayBuffer(e)}var x=function(){function n(e){f(this,n);var t=e.options.url;n.getStreamFactory(t)(e,t)}return o(n,null,[{key:"getStreamFactory",value:function(e){if(e instanceof File)return E;if("undefined"!=typeof Response&&Object.prototype.hasOwnProperty.call(Response.prototype,"body")&&"function"==typeof Headers)return w;return function(e){try{var t=new XMLHttpRequest;return t.responseType=e,t.responseType===e}catch(e){return!1}}("moz-chunked-arraybuffer")?T:A}}]),n}(),R={mse:{mediaSource:{propertys:["activeSourceBuffers","duration","readyState","sourceBuffers"],methods:["addSourceBuffer","endOfStream","removeSourceBuffer","clearLiveSeekableRange","setLiveSeekableRange"],events:["sourceclose","sourceended","sourceopen"]},sourceBuffer:{propertys:["mode","updating","buffered","timestampOffset","audioTracks","videoTracks","textTracks","appendWindowStart","appendWindowEnd","trackDefaults"],methods:["appendBuffer","appendStream","abort","remove"],events:["abort","error","update","updateend","updatestart"]},sourceBufferList:{propertys:["length"],events:["addsourcebuffer","removesourcebuffer"]}},flv:{header:{signature:{value:[70,76,86]},version:{value:[1]},flags:{0:"No audio and video tag",1:"Video tag only",4:"Audio tag only",5:"Audio and video tag"},dataOffset:{value:[9]}},tags:{header:{tagType:{8:"Video tag",9:"Audio tag",18:"Scrip tag"},dataSize:{lenght:3},timestamp:{lenght:4},streamID:{lenght:3}},body:{scripTag:{amf1:{type:{value:[2]},size:{lenght:2},string:{value:"onMetaData"}},amf2:{type:{value:[8]},size:{lenght:4},metaData:{type:{0:"Number",1:"Boolean",2:"String",3:"Object",4:"MovieClip (reserved, not supported)",5:"Null",6:"Undefined",7:"Reference",8:"ECMA array",9:"Object end marker",10:"Strict array",11:"Date",12:"Long string"},name:{audiocodecid:"Audio codec ID used in the file (see E.4.2.1 for available SoundFormat values)",audiodatarate:"Audio bit rate in kilobits per second",audiodelay:"Delay introduced by the audio codec in seconds",audiosamplerate:"Frequency at which the audio stream is replayed",audiosamplesize:"Resolution of a single audio sample",canSeekToEnd:"Indicating the last video frame is a key frame",creationdate:"Creation date and time",duration:"Total duration of the file in seconds",filesize:"Total size of the file in bytes",framerate:"Number of frames per second",height:"Height of the video in pixels",stereo:"Indicating stereo audio",videocodecid:"Video codec ID used in the file (see E.4.3.1 for available CodecID values)",videodatarate:"Video bit rate in kilobits per second",width:"Width of the video in pixels"}}}},audioTag:{soundFormat:{0:"Linear PCM, platform endian",1:"ADPCM",2:"MP3",3:"Linear PCM, little endian",4:"Nellymoser 16-kHz mono",5:"Nellymoser 8-kHz mono",6:"Nellymoser",7:"G.711 A-law logarithmic PCM",8:"G.711 mu-law logarithmic PCM",9:"reserved",10:"AAC",11:"Speex",14:"MP3 8-Khz",15:"Device-specific sound"},soundRate:{0:"5.5-kHz",1:"11-kHz",2:"22-kHz",3:"44-kHz"},soundSize:{0:"snd8Bit",1:"snd16Bit"},soundType:{0:"sndMono",1:"sndStereo"}},videoTag:{frameType:{1:"keyframe (for AVC, a seekable frame)",2:"inter frame (for AVC, a non-seekable frame)",3:"disposable inter frame (H.263 only)",4:"generated keyframe (reserved for server use only)",5:"video info/command frame"},codecID:{1:"JPEG (currently unused)",2:"Sorenson H.263",3:"Screen video",4:"On2 VP6",5:"On2 VP6 with alpha channel",6:"Screen video version 2",7:"AVC"}}}}},mp4:{},video:{propertys:["audioTracks","autoplay","buffered","controller","controls","crossOrigin","currentSrc","currentTime","defaultMuted","defaultPlaybackRate","duration","ended","error","loop","mediaGroup","muted","networkState","paused","playbackRate","played","preload","readyState","seekable","seeking","src","startDate","textTracks","videoTracks","volume"],methods:["addTextTrack","canPlayType","load","play","pause"],events:["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"]},aac:{AIDS:{},ADTS:{frame:{Header:{length:"56bits",SyncWord:{length:"12bits",value:4095},MPEGVersionID:{length:"1bits",0:"MPEG-4",1:"MPEG-2"},Layer:{length:"2bits",value:0},CRCProtection:{length:"1bits",0:"yes",1:"no"},Profile:{length:"2bits",1:"AAC-LC"},SamplingRate:{length:"4bits","0100":44100,"0111":22050},Private:{length:"1bits"},Channels:{length:"3bits",1:"CENTER",2:"LEFT/RIGHT"},Originality:{length:"1bits"},Home:{length:"1bits"},Copyrighted:{length:"1bits"},CopyrightID:{length:"1bits"},FrameLength:{length:"13bits",note:"ADTS Header + CRC + RDBs"},BufferFullness:{length:"11bits"},RDBsInFrame:{length:"2bits",note:"CRC if protection absent is 0"}},CRC:{length:"16bits"},RDB:{length:"nbits"}}},AudioSpecificConfig:{audioObjectType:{0:"Null",1:"AAC Main",2:"AAC LC (Low Complexity)",3:"AAC SSR (Scalable Sample Rate)",4:"AAC LTP (Long Term Prediction)",5:"SBR (Spectral Band Replication)",6:"AAC Scalable",7:"TwinVQ",8:"CELP (Code Excited Linear Prediction)",9:"HXVC (Harmonic Vector eXcitation Coding)",10:"Reserved",11:"Reserved",12:"TTSI (Text-To-Speech Interface)",13:"Main Synthesis",14:"Wavetable Synthesis",15:"General MIDI"},samplingFrequencyIndex:{0:"96000 Hz",1:"88200 Hz",2:"64000 Hz",3:"48000 Hz",4:"44100 Hz",5:"32000 Hz",6:"24000 Hz",7:"22050 Hz",8:"16000 Hz",9:"12000 Hz",10:"11025 Hz",11:"8000 Hz",12:"7350 Hz",13:"Reserved",14:"Reserved",15:"frequency is written explictly"},channelConfiguration:{0:"Defined in AOT Specifc Config",1:"1 channel: front-center",2:"2 channels: front-left, front-right",3:"3 channels: front-center, front-left, front-right",4:"4 channels: front-center, front-left, front-right, back-center",5:"5 channels: front-center, front-left, front-right, back-left, back-right",6:"6 channels: front-center, front-left, front-right, back-left, back-right, LFE-channel",7:"8 channels: front-center, front-left, front-right, side-left, side-right, back-left, back-right, LFE-channel","8-15":"Reserved"}}},h264:{}},C=function(){function t(e){f(this,t),this.flv=e,this.creatUrl(),this.eventBind()}return o(t,[{key:"creatUrl",value:function(){var e=this.flv,t=e.options.mediaElement,n=e.events.destroyEvents;this.mediaSource=new MediaSource;var r=URL.createObjectURL(this.mediaSource);n.push(function(){URL.revokeObjectURL(r)}),t.src=r}},{key:"eventBind",value:function(){var t=this,n=this.flv.events.proxy;R.mse.mediaSource.events.forEach(function(e){n(t.mediaSource,e,function(e){t.flv.emit("mediaSource:".concat(e.type),e)})}),R.mse.sourceBufferList.events.forEach(function(e){n(t.mediaSource.sourceBuffers,e,function(e){t.flv.emit("sourceBuffers:".concat(e.type),e)}),n(t.mediaSource.activeSourceBuffers,e,function(e){t.flv.emit("activeSourceBuffers:".concat(e.type),e)})})}}]),t}();var M=function(e){if(Array.isArray(e))return e};var O=function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n};var L=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var H=function(e,t){return M(e)||O(e,t)||L()};var P=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}};var j=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)};var z=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var D=function(e){return P(e)||j(e)||z()};function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce(function(e,t){return e+t.length},0),a=new t[0].constructor(r),o=0;return t.forEach(function(e){a.set(e,o),o+=e.length}),a}function B(e){var n=new DataView(new ArrayBuffer(e.length));return e.forEach(function(e,t){n.setUint8(t,e)}),n.getFloat64(0)}function U(e){var t;return(t=String.fromCharCode).call.apply(t,[String].concat(D(e)))}function I(r){return r.reduce(function(e,t,n){return e+t*Math.pow(256,r.length-n-1)},0)}function V(e){var a,o,m=(a=e,o=0,function e(t){for(var n=new Uint8Array(t),r=0;r<t;r+=1)n[r]=a[o],o+=1;return e.index=o,n}),t=Object.create(null),n=Object.create(null),r=Object.create(null),i=m(1),s=H(i,1);n.type=s[0],v(2===n.type,"AMF: [amf1] type expect 2, but got ".concat(n.type)),n.size=I(m(2)),n.string=U(m(n.size));var c=m(1),u=H(c,1);function y(e){var t=null;if(void 0!==e)switch(e){case 0:t=B(m(8));break;case 1:t=0!==m(1)[0];break;case 2:var n=I(m(2));t=U(m(n));break;case 3:t=Object.create(null);for(var r=-1;9!==r;){var a=I(m(2)),o=U(m(a)),i=m(1)[0];o&&(t[o]=y(i)),r=i}break;case 5:t=null;break;case 6:t=void 0;break;case 7:t="Reference #".concat(m.index),m(2);break;case 8:t=Object.create(null);for(var s=-1;9!==s;){var c=I(m(2)),u=U(m(c)),f=m(1)[0];u&&(t[u]=y(f)),s=f}break;case 10:var l=I(m(4));t=[];for(var d=0;d<l;d+=1){var h=m(1)[0];t.push(y(h))}break;case 11:t=B(m(2));break;case 12:var p=I(m(4));t=U(m(p));break;default:v(!1,"AMF: Unknown metaData type: ".concat(e))}return t}for(r.type=u[0],v(8===r.type,"AMF: [amf2] type expect 8, but got ".concat(r.type)),r.size=I(m(4)),r.metaData=Object.create(null);m.index<e.length;){var f=I(m(2)),l=U(m(f)),d=m(1)[0];l&&(r.metaData[l]=y(d))}return v(m.index===e.length,"AMF: Seems to be incompletely parsed"),v(r.size===Object.keys(r.metaData).length,"AMF: [amf2] length does not match"),t.amf1=n,t.amf2=r,t}var N=function(){function a(t){var n=this;f(this,a);var e=(this.flv=t).options,r=t.debug;this.uint8=new Uint8Array(0),this.index=0,this.header=null,this.tags=[],this.scripTagMeta=null,this.videoTagMeta=null,this.audioTagMeta=null,t.on("streamStart",function(){r.log("stream-start",e.url)}),t.on("streaming",function(e){n.uint8=F(n.uint8,e),n.parse()}),t.on("streamEnd",function(e){r.log("stream-end"),e&&(n.uint8=e,n.index=0,n.header=null,n.scripTag=null,n.tags=[],n.scripTagMeta=null,n.videoTagMeta=null,n.audioTagMeta=null,n.parse()),n.flv.loaded=!0,t.emit("parseDone"),r.log("parse-done")})}return o(a,[{key:"parse",value:function(){var e,t,n,r,a=this.flv.debug;if(!this.header&&this.readable(13)){var o=Object.create(null);o.signature=U(this.read(3));var i=this.read(1),s=H(i,1);o.version=s[0],v("FLV"===o.signature&&1===o.version,"FLV header not found");var c=this.read(1),u=H(c,1);o.flags=u[0],o.headersize=I(this.read(4)),this.header=o,this.read(4),this.flv.emit("parseHeader",this.header),a.log("parse-header",this.header)}for(;this.index<this.uint8.length;){var f=this.index,l=Object.create(null);if(!this.readable(11)){this.index=f;break}var d=this.read(1),h=H(d,1);if(l.tagType=h[0],l.dataSize=I(this.read(3)),l.timestamp=this.read(4),l.streamID=this.read(3),!this.readable(l.dataSize)){this.index=f;break}switch(l.body=this.read(l.dataSize),l.tagType){case 18:l.meta=V(l.body),this.scripTagMeta||(this.scripTagMeta=l.meta,this.flv.emit("scripTagMeta",l.meta),a.log("scrip-tag-meta",l.meta));break;case 9:l.meta=(n=l.body,void 0,{frameType:(240&(r=n[0]))>>4,codecID:15&r}),this.videoTagMeta||(this.videoTagMeta=l.meta,this.flv.emit("videoTagMeta",l.meta),a.log("video-tag-meta",l.meta));break;case 8:l.meta=(e=l.body,void 0,{soundFormat:(240&(t=e[0]))>>4,soundRate:(12&t)>>2,soundSize:(2&t)>>1,soundType:(1&t)>>0}),this.audioTagMeta||(this.audioTagMeta=l.meta,this.flv.emit("audioTagMeta",l.meta),a.log("audio-tag-meta",l.meta));break;default:a.warn("unknown-tag-type",l.tagType)}this.read(4),this.tags.push(l),this.flv.emit("parseTag",l)}}},{key:"readable",value:function(e){return this.uint8.length-this.index>=e}},{key:"read",value:function(e){for(var t=new Uint8Array(e),n=0;n<e;n+=1)t[n]=this.uint8[this.index],this.index+=1;return t}}]),a}(),_=function(){function u(e){f(this,u),this.flv=e,this.AudioSpecificConfig={audioObjectType:0,samplingFrequencyIndex:0,channelConfiguration:0}}return o(u,[{key:"demuxer",value:function(e,t){var n=this.flv.debug,r=e.body.slice(1),a=r[0],o=new Uint8Array(0),i={};if(0===a){var s=r.slice(1);this.AudioSpecificConfig=u.getAudioSpecificConfig(s),this.flv.emit("AudioSpecificConfig",this.AudioSpecificConfig),n.log("audio-specific-config",this.AudioSpecificConfig)}else{var c=e.dataSize-2+7;o=F(this.getADTSHeader(c),e.body.slice(2))}return t&&(i={format:"aac",sampleRate:u.SAMPLERATES[this.AudioSpecificConfig.samplingFrequencyIndex],channels:u.CHANNELS[this.AudioSpecificConfig.channelConfiguration],codec:"mp4a.40.".concat(this.AudioSpecificConfig.audioObjectType)}),{frame:o,header:i}}},{key:"getADTSHeader",value:function(e){var t=this.AudioSpecificConfig,n=t.audioObjectType,r=t.samplingFrequencyIndex,a=t.channelConfiguration,o=new Uint8Array(7);return o[0]=255,o[1]=240,o[1]|=0,o[1]|=0,o[1]|=1,o[2]=n-1<<6,o[2]|=(15&r)<<2,o[2]|=0,o[2]|=(4&a)>>2,o[3]=(3&a)<<6,o[3]|=0,o[3]|=0,o[3]|=0,o[3]|=0,o[3]|=(6144&e)>>11,o[4]=(2040&e)>>3,o[5]=(7&e)<<5,o[5]|=31,o[6]=252,o}}],[{key:"getAudioSpecificConfig",value:function(e){v(2<=e.length,"AudioSpecificConfig parss length is not enough");var t={};return t.audioObjectType=(248&e[0])>>3,t.samplingFrequencyIndex=((7&e[0])<<1)+((128&e[1])>>7&1),t.channelConfiguration=(127&e[1])>>3,t}},{key:"SAMPLERATES",get:function(){return{0:96e3,1:88200,2:64e3,3:48e3,4:44100,5:32e3,6:24e3,7:22050,8:16e3,9:12e3,10:11025,11:8e3,12:7350,13:0,14:0,15:0}}},{key:"CHANNELS",get:function(){return{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:8}}}]),u}(),q=function(){function d(e){f(this,d),this.flv=e}return o(d,[{key:"demuxer",value:function(e,t){var n=this.flv.debug,r=e.body.slice(1),a={};if(t){v(4<=r.length,"MP3 header missing"),v(255===r[0],"MP3 header mismatch");var o=r[1]>>>3&3,i=(6&r[1])>>1,s=(240&r[2])>>>4,c=(12&r[2])>>>2,u=3!==(r[3]>>>6&3)?2:1,f=0,l=0;switch(o){case 0:f=d.SAMPLERATES[25][c];break;case 2:f=d.SAMPLERATES[20][c];break;case 3:f=d.SAMPLERATES[10][c];break;default:n.warn("Unknown mp3 version: ".concat(o))}switch(i){case 1:l=d.BITRATES.L3[s];break;case 2:l=d.BITRATES.L2[s];break;case 3:l=d.BITRATES.L1[s];break;default:n.warn("Unknown mp3 layer: ".concat(i))}a={ver:o,layer:i,bitRate:l,sampleRate:f,channels:u,format:"mp3",codec:"mp3"}}return{frame:r,header:a}}}],[{key:"SAMPLERATES",get:function(){return{25:[11025,12e3,8e3,0],20:[22050,24e3,16e3,0],10:[44100,48e3,32e3,0]}}},{key:"BITRATES",get:function(){return{L1:[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],L2:[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],L3:[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1]}}}]),d}(),G=function(){function i(e){f(this,i),this.flv=e,this.audioBuffers=[],this.audioHeader=null,this.aac=new _(e,this),this.mp3=new q(e,this)}return o(i,[{key:"demuxer",value:function(e){var t=this.flv.debug,n=e.meta.soundFormat;if(10!==n&&2!==n)t.warn("unsupported-audio-format",n);else{var r=this[i.SOUND_FORMATS[n]].demuxer(e,!this.audioHeader),a=r.frame,o=r.header;this.audioBuffers.push(a),this.flv.emit("audioFrame",a),this.audioHeader||(this.audioHeader=o,this.flv.emit("audioHeader",this.audioHeader),t.log("audio-header",this.audioHeader))}}},{key:"download",value:function(){var e=this.flv,t=e.loaded,n=e.debug;v(this.audioHeader&&0<this.audioBuffers.length,"Audio data seems to be not ready"),t||n.warn("Audio data does not seem to be loaded completely"),y(URL.createObjectURL(new Blob([F.apply(void 0,D(this.audioBuffers))],{type:"audio/".concat(this.audioHeader.format)})),"audioTrack.".concat(this.audioHeader.format))}}],[{key:"SOUND_FORMATS",get:function(){return{10:"aac",2:"mp3"}}}]),i}(),W=function(){function t(e){f(this,t),this.flv=e}return o(t,[{key:"demuxer",value:function(e){}}]),t}(),X=function(){function t(e){f(this,t),this.h264=new W(e,this)}return o(t,[{key:"demuxer",value:function(e){this.h264.demuxer(e)}}]),t}(),J=function e(t){var n=this;f(this,e),this.audioTrack=new G(t),this.videoTrack=new X(t),t.on("parseTag",function(e){switch(e.tagType){case 9:n.videoTrack.demuxer(e);break;case 8:n.audioTrack.demuxer(e)}})},K=0,Q=function(e){function u(e){var t,n,r,a,o,i,s,c;return f(this,u),(t=d(this,h(u).call(this))).options=Object.assign({},u.DEFAULTS,e),n=l(l(t)),r=n.options,a=r.mediaElement,o=r.url,v(a instanceof HTMLVideoElement,"The 'mediaElement' option is not a video tag element"),v(n.constructor.instances.every(function(e){return e.options.mediaElement!==a}),"Cannot mount multiple instances on the same media element, please destroy the instance first"),v("string"==typeof o||o instanceof File&&"video/x-flv"===o.type,"The 'url' option is not a string type or flv file"),i=l(l(t)),s='video/mp4; codecs="avc1.42001E, mp4a.40.2"',c=i.options.mediaElement.canPlayType(s),v(window.MediaSource&&window.MediaSource.isTypeSupported(s)&&("probably"===c||"maybe"===c),"Unsupported MIME type or codec: ".concat(s)),v("function"==typeof window.Promise,"Unsupported 'Promise' method"),v("function"==typeof window.fetch,"Unsupported 'fetch' method"),t.loaded=!1,t.debug=new b(l(l(t))),t.events=new S(l(l(t))),t.workers=new k(l(l(t))),t.parse=new N(l(l(t))),t.demuxer=new J(l(l(t))),t.mse=new C(l(l(t))),t.stream=new x(l(l(t))),K+=1,t.id=K,u.instances.push(l(l(t))),t}return a(u,c),o(u,[{key:"destroy",value:function(){this.events.destroy(),this.workers.killAll(),u.instances.splice(u.instances.indexOf(this),1),this.emit("destroy")}}],[{key:"DEFAULTS",get:function(){return{mediaElement:"",url:"",debug:!1,live:!1,headers:{}}}},{key:"version",get:function(){return"1.0.0"}},{key:"config",get:function(){return R}},{key:"utils",get:function(){return g}}]),u}();Object.defineProperty(Q,"instances",{value:[]}),window.FlvReader=Q,e.default=Q,Object.defineProperty(e,"__esModule",{value:!0})});
