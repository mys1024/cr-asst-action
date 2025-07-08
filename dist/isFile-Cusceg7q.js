import { createRequire } from "node:module";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n$1 = keys.length, key; i$1 < n$1; i$1++) {
		key = keys[i$1];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$1) => from[k$1]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region node_modules/.pnpm/web-streams-polyfill@4.0.0-beta.3/node_modules/web-streams-polyfill/dist/ponyfill.mjs
/**
* @license
* web-streams-polyfill v4.0.0-beta.3
* Copyright 2021 Mattias Buelens, Diwank Singh Tomer and other contributors.
* This code is released under the MIT license.
* SPDX-License-Identifier: MIT
*/
const e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol : (e$1) => `Symbol(${e$1})`;
function t() {}
function r(e$1) {
	return "object" == typeof e$1 && null !== e$1 || "function" == typeof e$1;
}
const o = t;
function n(e$1, t$1) {
	try {
		Object.defineProperty(e$1, "name", {
			value: t$1,
			configurable: !0
		});
	} catch (e$2) {}
}
const a = Promise, i = Promise.prototype.then, l = Promise.resolve.bind(a), s = Promise.reject.bind(a);
function u(e$1) {
	return new a(e$1);
}
function c(e$1) {
	return l(e$1);
}
function d(e$1) {
	return s(e$1);
}
function f(e$1, t$1, r$1) {
	return i.call(e$1, t$1, r$1);
}
function b(e$1, t$1, r$1) {
	f(f(e$1, t$1, r$1), void 0, o);
}
function h(e$1, t$1) {
	b(e$1, t$1);
}
function _(e$1, t$1) {
	b(e$1, void 0, t$1);
}
function p(e$1, t$1, r$1) {
	return f(e$1, t$1, r$1);
}
function m(e$1) {
	f(e$1, void 0, o);
}
let y = (e$1) => {
	if ("function" == typeof queueMicrotask) y = queueMicrotask;
	else {
		const e$2 = c(void 0);
		y = (t$1) => f(e$2, t$1);
	}
	return y(e$1);
};
function g(e$1, t$1, r$1) {
	if ("function" != typeof e$1) throw new TypeError("Argument is not a function");
	return Function.prototype.apply.call(e$1, t$1, r$1);
}
function w(e$1, t$1, r$1) {
	try {
		return c(g(e$1, t$1, r$1));
	} catch (e$2) {
		return d(e$2);
	}
}
var S = class {
	constructor() {
		this._cursor = 0, this._size = 0, this._front = {
			_elements: [],
			_next: void 0
		}, this._back = this._front, this._cursor = 0, this._size = 0;
	}
	get length() {
		return this._size;
	}
	push(e$1) {
		const t$1 = this._back;
		let r$1 = t$1;
		16383 === t$1._elements.length && (r$1 = {
			_elements: [],
			_next: void 0
		}), t$1._elements.push(e$1), r$1 !== t$1 && (this._back = r$1, t$1._next = r$1), ++this._size;
	}
	shift() {
		const e$1 = this._front;
		let t$1 = e$1;
		const r$1 = this._cursor;
		let o$1 = r$1 + 1;
		const n$1 = e$1._elements, a$1 = n$1[r$1];
		return 16384 === o$1 && (t$1 = e$1._next, o$1 = 0), --this._size, this._cursor = o$1, e$1 !== t$1 && (this._front = t$1), n$1[r$1] = void 0, a$1;
	}
	forEach(e$1) {
		let t$1 = this._cursor, r$1 = this._front, o$1 = r$1._elements;
		for (; !(t$1 === o$1.length && void 0 === r$1._next || t$1 === o$1.length && (r$1 = r$1._next, o$1 = r$1._elements, t$1 = 0, 0 === o$1.length));) e$1(o$1[t$1]), ++t$1;
	}
	peek() {
		const e$1 = this._front, t$1 = this._cursor;
		return e$1._elements[t$1];
	}
};
const v = e("[[AbortSteps]]"), R = e("[[ErrorSteps]]"), T = e("[[CancelSteps]]"), q = e("[[PullSteps]]"), C = e("[[ReleaseSteps]]");
function E(e$1, t$1) {
	e$1._ownerReadableStream = t$1, t$1._reader = e$1, "readable" === t$1._state ? O(e$1) : "closed" === t$1._state ? function(e$2) {
		O(e$2), j(e$2);
	}(e$1) : B(e$1, t$1._storedError);
}
function P(e$1, t$1) {
	return Gt(e$1._ownerReadableStream, t$1);
}
function W(e$1) {
	const t$1 = e$1._ownerReadableStream;
	"readable" === t$1._state ? A(e$1, /* @__PURE__ */ new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : function(e$2, t$2) {
		B(e$2, t$2);
	}(e$1, /* @__PURE__ */ new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t$1._readableStreamController[C](), t$1._reader = void 0, e$1._ownerReadableStream = void 0;
}
function k(e$1) {
	return /* @__PURE__ */ new TypeError("Cannot " + e$1 + " a stream using a released reader");
}
function O(e$1) {
	e$1._closedPromise = u((t$1, r$1) => {
		e$1._closedPromise_resolve = t$1, e$1._closedPromise_reject = r$1;
	});
}
function B(e$1, t$1) {
	O(e$1), A(e$1, t$1);
}
function A(e$1, t$1) {
	void 0 !== e$1._closedPromise_reject && (m(e$1._closedPromise), e$1._closedPromise_reject(t$1), e$1._closedPromise_resolve = void 0, e$1._closedPromise_reject = void 0);
}
function j(e$1) {
	void 0 !== e$1._closedPromise_resolve && (e$1._closedPromise_resolve(void 0), e$1._closedPromise_resolve = void 0, e$1._closedPromise_reject = void 0);
}
const z = Number.isFinite || function(e$1) {
	return "number" == typeof e$1 && isFinite(e$1);
}, L = Math.trunc || function(e$1) {
	return e$1 < 0 ? Math.ceil(e$1) : Math.floor(e$1);
};
function F(e$1, t$1) {
	if (void 0 !== e$1 && "object" != typeof (r$1 = e$1) && "function" != typeof r$1) throw new TypeError(`${t$1} is not an object.`);
	var r$1;
}
function I(e$1, t$1) {
	if ("function" != typeof e$1) throw new TypeError(`${t$1} is not a function.`);
}
function D(e$1, t$1) {
	if (!function(e$2) {
		return "object" == typeof e$2 && null !== e$2 || "function" == typeof e$2;
	}(e$1)) throw new TypeError(`${t$1} is not an object.`);
}
function $(e$1, t$1, r$1) {
	if (void 0 === e$1) throw new TypeError(`Parameter ${t$1} is required in '${r$1}'.`);
}
function M(e$1, t$1, r$1) {
	if (void 0 === e$1) throw new TypeError(`${t$1} is required in '${r$1}'.`);
}
function Y(e$1) {
	return Number(e$1);
}
function Q(e$1) {
	return 0 === e$1 ? 0 : e$1;
}
function N(e$1, t$1) {
	const r$1 = Number.MAX_SAFE_INTEGER;
	let o$1 = Number(e$1);
	if (o$1 = Q(o$1), !z(o$1)) throw new TypeError(`${t$1} is not a finite number`);
	if (o$1 = function(e$2) {
		return Q(L(e$2));
	}(o$1), o$1 < 0 || o$1 > r$1) throw new TypeError(`${t$1} is outside the accepted range of 0 to ${r$1}, inclusive`);
	return z(o$1) && 0 !== o$1 ? o$1 : 0;
}
function H(e$1) {
	if (!r(e$1)) return !1;
	if ("function" != typeof e$1.getReader) return !1;
	try {
		return "boolean" == typeof e$1.locked;
	} catch (e$2) {
		return !1;
	}
}
function x(e$1) {
	if (!r(e$1)) return !1;
	if ("function" != typeof e$1.getWriter) return !1;
	try {
		return "boolean" == typeof e$1.locked;
	} catch (e$2) {
		return !1;
	}
}
function V(e$1, t$1) {
	if (!Vt(e$1)) throw new TypeError(`${t$1} is not a ReadableStream.`);
}
function U(e$1, t$1) {
	e$1._reader._readRequests.push(t$1);
}
function G(e$1, t$1, r$1) {
	const o$1 = e$1._reader._readRequests.shift();
	r$1 ? o$1._closeSteps() : o$1._chunkSteps(t$1);
}
function X(e$1) {
	return e$1._reader._readRequests.length;
}
function J(e$1) {
	const t$1 = e$1._reader;
	return void 0 !== t$1 && !!K(t$1);
}
var ReadableStreamDefaultReader = class {
	constructor(e$1) {
		if ($(e$1, 1, "ReadableStreamDefaultReader"), V(e$1, "First parameter"), Ut(e$1)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
		E(this, e$1), this._readRequests = new S();
	}
	get closed() {
		return K(this) ? this._closedPromise : d(ee("closed"));
	}
	cancel(e$1) {
		return K(this) ? void 0 === this._ownerReadableStream ? d(k("cancel")) : P(this, e$1) : d(ee("cancel"));
	}
	read() {
		if (!K(this)) return d(ee("read"));
		if (void 0 === this._ownerReadableStream) return d(k("read from"));
		let e$1, t$1;
		const r$1 = u((r$2, o$1) => {
			e$1 = r$2, t$1 = o$1;
		});
		return function(e$2, t$2) {
			const r$2 = e$2._ownerReadableStream;
			r$2._disturbed = !0, "closed" === r$2._state ? t$2._closeSteps() : "errored" === r$2._state ? t$2._errorSteps(r$2._storedError) : r$2._readableStreamController[q](t$2);
		}(this, {
			_chunkSteps: (t$2) => e$1({
				value: t$2,
				done: !1
			}),
			_closeSteps: () => e$1({
				value: void 0,
				done: !0
			}),
			_errorSteps: (e$2) => t$1(e$2)
		}), r$1;
	}
	releaseLock() {
		if (!K(this)) throw ee("releaseLock");
		void 0 !== this._ownerReadableStream && function(e$1) {
			W(e$1);
			const t$1 = /* @__PURE__ */ new TypeError("Reader was released");
			Z(e$1, t$1);
		}(this);
	}
};
function K(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_readRequests") && e$1 instanceof ReadableStreamDefaultReader;
}
function Z(e$1, t$1) {
	const r$1 = e$1._readRequests;
	e$1._readRequests = new S(), r$1.forEach((e$2) => {
		e$2._errorSteps(t$1);
	});
}
function ee(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStreamDefaultReader.prototype.${e$1} can only be used on a ReadableStreamDefaultReader`);
}
Object.defineProperties(ReadableStreamDefaultReader.prototype, {
	cancel: { enumerable: !0 },
	read: { enumerable: !0 },
	releaseLock: { enumerable: !0 },
	closed: { enumerable: !0 }
}), n(ReadableStreamDefaultReader.prototype.cancel, "cancel"), n(ReadableStreamDefaultReader.prototype.read, "read"), n(ReadableStreamDefaultReader.prototype.releaseLock, "releaseLock"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableStreamDefaultReader.prototype, e.toStringTag, {
	value: "ReadableStreamDefaultReader",
	configurable: !0
});
var te = class {
	constructor(e$1, t$1) {
		this._ongoingPromise = void 0, this._isFinished = !1, this._reader = e$1, this._preventCancel = t$1;
	}
	next() {
		const e$1 = () => this._nextSteps();
		return this._ongoingPromise = this._ongoingPromise ? p(this._ongoingPromise, e$1, e$1) : e$1(), this._ongoingPromise;
	}
	return(e$1) {
		const t$1 = () => this._returnSteps(e$1);
		return this._ongoingPromise ? p(this._ongoingPromise, t$1, t$1) : t$1();
	}
	_nextSteps() {
		if (this._isFinished) return Promise.resolve({
			value: void 0,
			done: !0
		});
		const e$1 = this._reader;
		return void 0 === e$1 ? d(k("iterate")) : f(e$1.read(), (e$2) => {
			var t$1;
			return this._ongoingPromise = void 0, e$2.done && (this._isFinished = !0, null === (t$1 = this._reader) || void 0 === t$1 || t$1.releaseLock(), this._reader = void 0), e$2;
		}, (e$2) => {
			var t$1;
			throw this._ongoingPromise = void 0, this._isFinished = !0, null === (t$1 = this._reader) || void 0 === t$1 || t$1.releaseLock(), this._reader = void 0, e$2;
		});
	}
	_returnSteps(e$1) {
		if (this._isFinished) return Promise.resolve({
			value: e$1,
			done: !0
		});
		this._isFinished = !0;
		const t$1 = this._reader;
		if (void 0 === t$1) return d(k("finish iterating"));
		if (this._reader = void 0, !this._preventCancel) {
			const r$1 = t$1.cancel(e$1);
			return t$1.releaseLock(), p(r$1, () => ({
				value: e$1,
				done: !0
			}));
		}
		return t$1.releaseLock(), c({
			value: e$1,
			done: !0
		});
	}
};
const re = {
	next() {
		return oe(this) ? this._asyncIteratorImpl.next() : d(ne("next"));
	},
	return(e$1) {
		return oe(this) ? this._asyncIteratorImpl.return(e$1) : d(ne("return"));
	}
};
function oe(e$1) {
	if (!r(e$1)) return !1;
	if (!Object.prototype.hasOwnProperty.call(e$1, "_asyncIteratorImpl")) return !1;
	try {
		return e$1._asyncIteratorImpl instanceof te;
	} catch (e$2) {
		return !1;
	}
}
function ne(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStreamAsyncIterator.${e$1} can only be used on a ReadableSteamAsyncIterator`);
}
"symbol" == typeof e.asyncIterator && Object.defineProperty(re, e.asyncIterator, {
	value() {
		return this;
	},
	writable: !0,
	configurable: !0
});
const ae = Number.isNaN || function(e$1) {
	return e$1 != e$1;
};
function ie(e$1, t$1, r$1, o$1, n$1) {
	new Uint8Array(e$1).set(new Uint8Array(r$1, o$1, n$1), t$1);
}
function le(e$1) {
	const t$1 = function(e$2, t$2, r$1) {
		if (e$2.slice) return e$2.slice(t$2, r$1);
		const o$1 = r$1 - t$2, n$1 = new ArrayBuffer(o$1);
		return ie(n$1, 0, e$2, t$2, o$1), n$1;
	}(e$1.buffer, e$1.byteOffset, e$1.byteOffset + e$1.byteLength);
	return new Uint8Array(t$1);
}
function se(e$1) {
	const t$1 = e$1._queue.shift();
	return e$1._queueTotalSize -= t$1.size, e$1._queueTotalSize < 0 && (e$1._queueTotalSize = 0), t$1.value;
}
function ue(e$1, t$1, r$1) {
	if ("number" != typeof (o$1 = r$1) || ae(o$1) || o$1 < 0 || r$1 === Infinity) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
	var o$1;
	e$1._queue.push({
		value: t$1,
		size: r$1
	}), e$1._queueTotalSize += r$1;
}
function ce(e$1) {
	e$1._queue = new S(), e$1._queueTotalSize = 0;
}
var ReadableStreamBYOBRequest = class {
	constructor() {
		throw new TypeError("Illegal constructor");
	}
	get view() {
		if (!fe(this)) throw Be("view");
		return this._view;
	}
	respond(e$1) {
		if (!fe(this)) throw Be("respond");
		if ($(e$1, 1, "respond"), e$1 = N(e$1, "First parameter"), void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
		this._view.buffer, function(e$2, t$1) {
			const r$1 = e$2._pendingPullIntos.peek();
			if ("closed" === e$2._controlledReadableByteStream._state) {
				if (0 !== t$1) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
			} else {
				if (0 === t$1) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
				if (r$1.bytesFilled + t$1 > r$1.byteLength) throw new RangeError("bytesWritten out of range");
			}
			r$1.buffer = r$1.buffer, qe(e$2, t$1);
		}(this._associatedReadableByteStreamController, e$1);
	}
	respondWithNewView(e$1) {
		if (!fe(this)) throw Be("respondWithNewView");
		if ($(e$1, 1, "respondWithNewView"), !ArrayBuffer.isView(e$1)) throw new TypeError("You can only respond with array buffer views");
		if (void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
		e$1.buffer, function(e$2, t$1) {
			const r$1 = e$2._pendingPullIntos.peek();
			if ("closed" === e$2._controlledReadableByteStream._state) {
				if (0 !== t$1.byteLength) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
			} else if (0 === t$1.byteLength) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
			if (r$1.byteOffset + r$1.bytesFilled !== t$1.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
			if (r$1.bufferByteLength !== t$1.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
			if (r$1.bytesFilled + t$1.byteLength > r$1.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
			const o$1 = t$1.byteLength;
			r$1.buffer = t$1.buffer, qe(e$2, o$1);
		}(this._associatedReadableByteStreamController, e$1);
	}
};
Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
	respond: { enumerable: !0 },
	respondWithNewView: { enumerable: !0 },
	view: { enumerable: !0 }
}), n(ReadableStreamBYOBRequest.prototype.respond, "respond"), n(ReadableStreamBYOBRequest.prototype.respondWithNewView, "respondWithNewView"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableStreamBYOBRequest.prototype, e.toStringTag, {
	value: "ReadableStreamBYOBRequest",
	configurable: !0
});
var ReadableByteStreamController = class {
	constructor() {
		throw new TypeError("Illegal constructor");
	}
	get byobRequest() {
		if (!de(this)) throw Ae("byobRequest");
		return function(e$1) {
			if (null === e$1._byobRequest && e$1._pendingPullIntos.length > 0) {
				const t$1 = e$1._pendingPullIntos.peek(), r$1 = new Uint8Array(t$1.buffer, t$1.byteOffset + t$1.bytesFilled, t$1.byteLength - t$1.bytesFilled), o$1 = Object.create(ReadableStreamBYOBRequest.prototype);
				(function(e$2, t$2, r$2) {
					e$2._associatedReadableByteStreamController = t$2, e$2._view = r$2;
				})(o$1, e$1, r$1), e$1._byobRequest = o$1;
			}
			return e$1._byobRequest;
		}(this);
	}
	get desiredSize() {
		if (!de(this)) throw Ae("desiredSize");
		return ke(this);
	}
	close() {
		if (!de(this)) throw Ae("close");
		if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
		const e$1 = this._controlledReadableByteStream._state;
		if ("readable" !== e$1) throw new TypeError(`The stream (in ${e$1} state) is not in the readable state and cannot be closed`);
		(function(e$2) {
			const t$1 = e$2._controlledReadableByteStream;
			if (e$2._closeRequested || "readable" !== t$1._state) return;
			if (e$2._queueTotalSize > 0) return void (e$2._closeRequested = !0);
			if (e$2._pendingPullIntos.length > 0) {
				if (e$2._pendingPullIntos.peek().bytesFilled > 0) {
					const t$2 = /* @__PURE__ */ new TypeError("Insufficient bytes to fill elements in the given buffer");
					throw Pe(e$2, t$2), t$2;
				}
			}
			Ee(e$2), Xt(t$1);
		})(this);
	}
	enqueue(e$1) {
		if (!de(this)) throw Ae("enqueue");
		if ($(e$1, 1, "enqueue"), !ArrayBuffer.isView(e$1)) throw new TypeError("chunk must be an array buffer view");
		if (0 === e$1.byteLength) throw new TypeError("chunk must have non-zero byteLength");
		if (0 === e$1.buffer.byteLength) throw new TypeError("chunk's buffer must have non-zero byteLength");
		if (this._closeRequested) throw new TypeError("stream is closed or draining");
		const t$1 = this._controlledReadableByteStream._state;
		if ("readable" !== t$1) throw new TypeError(`The stream (in ${t$1} state) is not in the readable state and cannot be enqueued to`);
		(function(e$2, t$2) {
			const r$1 = e$2._controlledReadableByteStream;
			if (e$2._closeRequested || "readable" !== r$1._state) return;
			const o$1 = t$2.buffer, n$1 = t$2.byteOffset, a$1 = t$2.byteLength, i$1 = o$1;
			if (e$2._pendingPullIntos.length > 0) {
				const t$3 = e$2._pendingPullIntos.peek();
				t$3.buffer, Re(e$2), t$3.buffer = t$3.buffer, "none" === t$3.readerType && ge(e$2, t$3);
			}
			if (J(r$1)) if (function(e$3) {
				const t$3 = e$3._controlledReadableByteStream._reader;
				for (; t$3._readRequests.length > 0;) {
					if (0 === e$3._queueTotalSize) return;
					We(e$3, t$3._readRequests.shift());
				}
			}(e$2), 0 === X(r$1)) me(e$2, i$1, n$1, a$1);
			else {
				e$2._pendingPullIntos.length > 0 && Ce(e$2);
				G(r$1, new Uint8Array(i$1, n$1, a$1), !1);
			}
			else Le(r$1) ? (me(e$2, i$1, n$1, a$1), Te(e$2)) : me(e$2, i$1, n$1, a$1);
			be(e$2);
		})(this, e$1);
	}
	error(e$1) {
		if (!de(this)) throw Ae("error");
		Pe(this, e$1);
	}
	[T](e$1) {
		he(this), ce(this);
		const t$1 = this._cancelAlgorithm(e$1);
		return Ee(this), t$1;
	}
	[q](e$1) {
		const t$1 = this._controlledReadableByteStream;
		if (this._queueTotalSize > 0) return void We(this, e$1);
		const r$1 = this._autoAllocateChunkSize;
		if (void 0 !== r$1) {
			let t$2;
			try {
				t$2 = new ArrayBuffer(r$1);
			} catch (t$3) {
				return void e$1._errorSteps(t$3);
			}
			const o$1 = {
				buffer: t$2,
				bufferByteLength: r$1,
				byteOffset: 0,
				byteLength: r$1,
				bytesFilled: 0,
				elementSize: 1,
				viewConstructor: Uint8Array,
				readerType: "default"
			};
			this._pendingPullIntos.push(o$1);
		}
		U(t$1, e$1), be(this);
	}
	[C]() {
		if (this._pendingPullIntos.length > 0) {
			const e$1 = this._pendingPullIntos.peek();
			e$1.readerType = "none", this._pendingPullIntos = new S(), this._pendingPullIntos.push(e$1);
		}
	}
};
function de(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_controlledReadableByteStream") && e$1 instanceof ReadableByteStreamController;
}
function fe(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_associatedReadableByteStreamController") && e$1 instanceof ReadableStreamBYOBRequest;
}
function be(e$1) {
	const t$1 = function(e$2) {
		const t$2 = e$2._controlledReadableByteStream;
		if ("readable" !== t$2._state) return !1;
		if (e$2._closeRequested) return !1;
		if (!e$2._started) return !1;
		if (J(t$2) && X(t$2) > 0) return !0;
		if (Le(t$2) && ze(t$2) > 0) return !0;
		if (ke(e$2) > 0) return !0;
		return !1;
	}(e$1);
	if (!t$1) return;
	if (e$1._pulling) return void (e$1._pullAgain = !0);
	e$1._pulling = !0;
	b(e$1._pullAlgorithm(), () => (e$1._pulling = !1, e$1._pullAgain && (e$1._pullAgain = !1, be(e$1)), null), (t$2) => (Pe(e$1, t$2), null));
}
function he(e$1) {
	Re(e$1), e$1._pendingPullIntos = new S();
}
function _e(e$1, t$1) {
	let r$1 = !1;
	"closed" === e$1._state && (r$1 = !0);
	const o$1 = pe(t$1);
	"default" === t$1.readerType ? G(e$1, o$1, r$1) : function(e$2, t$2, r$2) {
		const o$2 = e$2._reader._readIntoRequests.shift();
		r$2 ? o$2._closeSteps(t$2) : o$2._chunkSteps(t$2);
	}(e$1, o$1, r$1);
}
function pe(e$1) {
	const t$1 = e$1.bytesFilled, r$1 = e$1.elementSize;
	return new e$1.viewConstructor(e$1.buffer, e$1.byteOffset, t$1 / r$1);
}
function me(e$1, t$1, r$1, o$1) {
	e$1._queue.push({
		buffer: t$1,
		byteOffset: r$1,
		byteLength: o$1
	}), e$1._queueTotalSize += o$1;
}
function ye(e$1, t$1, r$1, o$1) {
	let n$1;
	try {
		n$1 = t$1.slice(r$1, r$1 + o$1);
	} catch (t$2) {
		throw Pe(e$1, t$2), t$2;
	}
	me(e$1, n$1, 0, o$1);
}
function ge(e$1, t$1) {
	t$1.bytesFilled > 0 && ye(e$1, t$1.buffer, t$1.byteOffset, t$1.bytesFilled), Ce(e$1);
}
function we(e$1, t$1) {
	const r$1 = t$1.elementSize, o$1 = t$1.bytesFilled - t$1.bytesFilled % r$1, n$1 = Math.min(e$1._queueTotalSize, t$1.byteLength - t$1.bytesFilled), a$1 = t$1.bytesFilled + n$1, i$1 = a$1 - a$1 % r$1;
	let l$1 = n$1, s$1 = !1;
	i$1 > o$1 && (l$1 = i$1 - t$1.bytesFilled, s$1 = !0);
	const u$1 = e$1._queue;
	for (; l$1 > 0;) {
		const r$2 = u$1.peek(), o$2 = Math.min(l$1, r$2.byteLength), n$2 = t$1.byteOffset + t$1.bytesFilled;
		ie(t$1.buffer, n$2, r$2.buffer, r$2.byteOffset, o$2), r$2.byteLength === o$2 ? u$1.shift() : (r$2.byteOffset += o$2, r$2.byteLength -= o$2), e$1._queueTotalSize -= o$2, Se(e$1, o$2, t$1), l$1 -= o$2;
	}
	return s$1;
}
function Se(e$1, t$1, r$1) {
	r$1.bytesFilled += t$1;
}
function ve(e$1) {
	0 === e$1._queueTotalSize && e$1._closeRequested ? (Ee(e$1), Xt(e$1._controlledReadableByteStream)) : be(e$1);
}
function Re(e$1) {
	null !== e$1._byobRequest && (e$1._byobRequest._associatedReadableByteStreamController = void 0, e$1._byobRequest._view = null, e$1._byobRequest = null);
}
function Te(e$1) {
	for (; e$1._pendingPullIntos.length > 0;) {
		if (0 === e$1._queueTotalSize) return;
		const t$1 = e$1._pendingPullIntos.peek();
		we(e$1, t$1) && (Ce(e$1), _e(e$1._controlledReadableByteStream, t$1));
	}
}
function qe(e$1, t$1) {
	const r$1 = e$1._pendingPullIntos.peek();
	Re(e$1);
	"closed" === e$1._controlledReadableByteStream._state ? function(e$2, t$2) {
		"none" === t$2.readerType && Ce(e$2);
		const r$2 = e$2._controlledReadableByteStream;
		if (Le(r$2)) for (; ze(r$2) > 0;) _e(r$2, Ce(e$2));
	}(e$1, r$1) : function(e$2, t$2, r$2) {
		if (Se(0, t$2, r$2), "none" === r$2.readerType) return ge(e$2, r$2), void Te(e$2);
		if (r$2.bytesFilled < r$2.elementSize) return;
		Ce(e$2);
		const o$1 = r$2.bytesFilled % r$2.elementSize;
		if (o$1 > 0) {
			const t$3 = r$2.byteOffset + r$2.bytesFilled;
			ye(e$2, r$2.buffer, t$3 - o$1, o$1);
		}
		r$2.bytesFilled -= o$1, _e(e$2._controlledReadableByteStream, r$2), Te(e$2);
	}(e$1, t$1, r$1), be(e$1);
}
function Ce(e$1) {
	return e$1._pendingPullIntos.shift();
}
function Ee(e$1) {
	e$1._pullAlgorithm = void 0, e$1._cancelAlgorithm = void 0;
}
function Pe(e$1, t$1) {
	const r$1 = e$1._controlledReadableByteStream;
	"readable" === r$1._state && (he(e$1), ce(e$1), Ee(e$1), Jt(r$1, t$1));
}
function We(e$1, t$1) {
	const r$1 = e$1._queue.shift();
	e$1._queueTotalSize -= r$1.byteLength, ve(e$1);
	const o$1 = new Uint8Array(r$1.buffer, r$1.byteOffset, r$1.byteLength);
	t$1._chunkSteps(o$1);
}
function ke(e$1) {
	const t$1 = e$1._controlledReadableByteStream._state;
	return "errored" === t$1 ? null : "closed" === t$1 ? 0 : e$1._strategyHWM - e$1._queueTotalSize;
}
function Oe(e$1, t$1, r$1) {
	const o$1 = Object.create(ReadableByteStreamController.prototype);
	let n$1, a$1, i$1;
	n$1 = void 0 !== t$1.start ? () => t$1.start(o$1) : () => {}, a$1 = void 0 !== t$1.pull ? () => t$1.pull(o$1) : () => c(void 0), i$1 = void 0 !== t$1.cancel ? (e$2) => t$1.cancel(e$2) : () => c(void 0);
	const l$1 = t$1.autoAllocateChunkSize;
	if (0 === l$1) throw new TypeError("autoAllocateChunkSize must be greater than 0");
	(function(e$2, t$2, r$2, o$2, n$2, a$2, i$2) {
		t$2._controlledReadableByteStream = e$2, t$2._pullAgain = !1, t$2._pulling = !1, t$2._byobRequest = null, t$2._queue = t$2._queueTotalSize = void 0, ce(t$2), t$2._closeRequested = !1, t$2._started = !1, t$2._strategyHWM = a$2, t$2._pullAlgorithm = o$2, t$2._cancelAlgorithm = n$2, t$2._autoAllocateChunkSize = i$2, t$2._pendingPullIntos = new S(), e$2._readableStreamController = t$2, b(c(r$2()), () => (t$2._started = !0, be(t$2), null), (e$3) => (Pe(t$2, e$3), null));
	})(e$1, o$1, n$1, a$1, i$1, r$1, l$1);
}
function Be(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStreamBYOBRequest.prototype.${e$1} can only be used on a ReadableStreamBYOBRequest`);
}
function Ae(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableByteStreamController.prototype.${e$1} can only be used on a ReadableByteStreamController`);
}
function je(e$1, t$1) {
	e$1._reader._readIntoRequests.push(t$1);
}
function ze(e$1) {
	return e$1._reader._readIntoRequests.length;
}
function Le(e$1) {
	const t$1 = e$1._reader;
	return void 0 !== t$1 && !!Fe(t$1);
}
Object.defineProperties(ReadableByteStreamController.prototype, {
	close: { enumerable: !0 },
	enqueue: { enumerable: !0 },
	error: { enumerable: !0 },
	byobRequest: { enumerable: !0 },
	desiredSize: { enumerable: !0 }
}), n(ReadableByteStreamController.prototype.close, "close"), n(ReadableByteStreamController.prototype.enqueue, "enqueue"), n(ReadableByteStreamController.prototype.error, "error"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableByteStreamController.prototype, e.toStringTag, {
	value: "ReadableByteStreamController",
	configurable: !0
});
var ReadableStreamBYOBReader = class {
	constructor(e$1) {
		if ($(e$1, 1, "ReadableStreamBYOBReader"), V(e$1, "First parameter"), Ut(e$1)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
		if (!de(e$1._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
		E(this, e$1), this._readIntoRequests = new S();
	}
	get closed() {
		return Fe(this) ? this._closedPromise : d(De("closed"));
	}
	cancel(e$1) {
		return Fe(this) ? void 0 === this._ownerReadableStream ? d(k("cancel")) : P(this, e$1) : d(De("cancel"));
	}
	read(e$1) {
		if (!Fe(this)) return d(De("read"));
		if (!ArrayBuffer.isView(e$1)) return d(/* @__PURE__ */ new TypeError("view must be an array buffer view"));
		if (0 === e$1.byteLength) return d(/* @__PURE__ */ new TypeError("view must have non-zero byteLength"));
		if (0 === e$1.buffer.byteLength) return d(/* @__PURE__ */ new TypeError("view's buffer must have non-zero byteLength"));
		if (e$1.buffer, void 0 === this._ownerReadableStream) return d(k("read from"));
		let t$1, r$1;
		const o$1 = u((e$2, o$2) => {
			t$1 = e$2, r$1 = o$2;
		});
		return function(e$2, t$2, r$2) {
			const o$2 = e$2._ownerReadableStream;
			o$2._disturbed = !0, "errored" === o$2._state ? r$2._errorSteps(o$2._storedError) : function(e$3, t$3, r$3) {
				const o$3 = e$3._controlledReadableByteStream;
				let n$1 = 1;
				t$3.constructor !== DataView && (n$1 = t$3.constructor.BYTES_PER_ELEMENT);
				const a$1 = t$3.constructor, i$1 = t$3.buffer, l$1 = {
					buffer: i$1,
					bufferByteLength: i$1.byteLength,
					byteOffset: t$3.byteOffset,
					byteLength: t$3.byteLength,
					bytesFilled: 0,
					elementSize: n$1,
					viewConstructor: a$1,
					readerType: "byob"
				};
				if (e$3._pendingPullIntos.length > 0) return e$3._pendingPullIntos.push(l$1), void je(o$3, r$3);
				if ("closed" !== o$3._state) {
					if (e$3._queueTotalSize > 0) {
						if (we(e$3, l$1)) {
							const t$4 = pe(l$1);
							return ve(e$3), void r$3._chunkSteps(t$4);
						}
						if (e$3._closeRequested) {
							const t$4 = /* @__PURE__ */ new TypeError("Insufficient bytes to fill elements in the given buffer");
							return Pe(e$3, t$4), void r$3._errorSteps(t$4);
						}
					}
					e$3._pendingPullIntos.push(l$1), je(o$3, r$3), be(e$3);
				} else {
					const e$4 = new a$1(l$1.buffer, l$1.byteOffset, 0);
					r$3._closeSteps(e$4);
				}
			}(o$2._readableStreamController, t$2, r$2);
		}(this, e$1, {
			_chunkSteps: (e$2) => t$1({
				value: e$2,
				done: !1
			}),
			_closeSteps: (e$2) => t$1({
				value: e$2,
				done: !0
			}),
			_errorSteps: (e$2) => r$1(e$2)
		}), o$1;
	}
	releaseLock() {
		if (!Fe(this)) throw De("releaseLock");
		void 0 !== this._ownerReadableStream && function(e$1) {
			W(e$1);
			const t$1 = /* @__PURE__ */ new TypeError("Reader was released");
			Ie(e$1, t$1);
		}(this);
	}
};
function Fe(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_readIntoRequests") && e$1 instanceof ReadableStreamBYOBReader;
}
function Ie(e$1, t$1) {
	const r$1 = e$1._readIntoRequests;
	e$1._readIntoRequests = new S(), r$1.forEach((e$2) => {
		e$2._errorSteps(t$1);
	});
}
function De(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStreamBYOBReader.prototype.${e$1} can only be used on a ReadableStreamBYOBReader`);
}
function $e(e$1, t$1) {
	const { highWaterMark: r$1 } = e$1;
	if (void 0 === r$1) return t$1;
	if (ae(r$1) || r$1 < 0) throw new RangeError("Invalid highWaterMark");
	return r$1;
}
function Me(e$1) {
	const { size: t$1 } = e$1;
	return t$1 || (() => 1);
}
function Ye(e$1, t$1) {
	F(e$1, t$1);
	const r$1 = null == e$1 ? void 0 : e$1.highWaterMark, o$1 = null == e$1 ? void 0 : e$1.size;
	return {
		highWaterMark: void 0 === r$1 ? void 0 : Y(r$1),
		size: void 0 === o$1 ? void 0 : Qe(o$1, `${t$1} has member 'size' that`)
	};
}
function Qe(e$1, t$1) {
	return I(e$1, t$1), (t$2) => Y(e$1(t$2));
}
function Ne(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => w(e$1, t$1, [r$2]);
}
function He(e$1, t$1, r$1) {
	return I(e$1, r$1), () => w(e$1, t$1, []);
}
function xe(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => g(e$1, t$1, [r$2]);
}
function Ve(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2, o$1) => w(e$1, t$1, [r$2, o$1]);
}
Object.defineProperties(ReadableStreamBYOBReader.prototype, {
	cancel: { enumerable: !0 },
	read: { enumerable: !0 },
	releaseLock: { enumerable: !0 },
	closed: { enumerable: !0 }
}), n(ReadableStreamBYOBReader.prototype.cancel, "cancel"), n(ReadableStreamBYOBReader.prototype.read, "read"), n(ReadableStreamBYOBReader.prototype.releaseLock, "releaseLock"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableStreamBYOBReader.prototype, e.toStringTag, {
	value: "ReadableStreamBYOBReader",
	configurable: !0
});
const Ue = "function" == typeof AbortController;
var WritableStream = class {
	constructor(e$1 = {}, t$1 = {}) {
		void 0 === e$1 ? e$1 = null : D(e$1, "First parameter");
		const r$1 = Ye(t$1, "Second parameter"), o$1 = function(e$2, t$2) {
			F(e$2, t$2);
			const r$2 = null == e$2 ? void 0 : e$2.abort, o$2 = null == e$2 ? void 0 : e$2.close, n$2 = null == e$2 ? void 0 : e$2.start, a$2 = null == e$2 ? void 0 : e$2.type, i$1 = null == e$2 ? void 0 : e$2.write;
			return {
				abort: void 0 === r$2 ? void 0 : Ne(r$2, e$2, `${t$2} has member 'abort' that`),
				close: void 0 === o$2 ? void 0 : He(o$2, e$2, `${t$2} has member 'close' that`),
				start: void 0 === n$2 ? void 0 : xe(n$2, e$2, `${t$2} has member 'start' that`),
				write: void 0 === i$1 ? void 0 : Ve(i$1, e$2, `${t$2} has member 'write' that`),
				type: a$2
			};
		}(e$1, "First parameter");
		var n$1;
		(n$1 = this)._state = "writable", n$1._storedError = void 0, n$1._writer = void 0, n$1._writableStreamController = void 0, n$1._writeRequests = new S(), n$1._inFlightWriteRequest = void 0, n$1._closeRequest = void 0, n$1._inFlightCloseRequest = void 0, n$1._pendingAbortRequest = void 0, n$1._backpressure = !1;
		if (void 0 !== o$1.type) throw new RangeError("Invalid type is specified");
		const a$1 = Me(r$1);
		(function(e$2, t$2, r$2, o$2) {
			const n$2 = Object.create(WritableStreamDefaultController.prototype);
			let a$2, i$1, l$1, s$1;
			a$2 = void 0 !== t$2.start ? () => t$2.start(n$2) : () => {};
			i$1 = void 0 !== t$2.write ? (e$3) => t$2.write(e$3, n$2) : () => c(void 0);
			l$1 = void 0 !== t$2.close ? () => t$2.close() : () => c(void 0);
			s$1 = void 0 !== t$2.abort ? (e$3) => t$2.abort(e$3) : () => c(void 0);
			(function(e$3, t$3, r$3, o$3, n$3, a$3, i$2, l$2) {
				t$3._controlledWritableStream = e$3, e$3._writableStreamController = t$3, t$3._queue = void 0, t$3._queueTotalSize = void 0, ce(t$3), t$3._abortReason = void 0, t$3._abortController = function() {
					if (Ue) return new AbortController();
				}(), t$3._started = !1, t$3._strategySizeAlgorithm = l$2, t$3._strategyHWM = i$2, t$3._writeAlgorithm = o$3, t$3._closeAlgorithm = n$3, t$3._abortAlgorithm = a$3;
				const s$2 = bt(t$3);
				nt(e$3, s$2);
				const u$1 = r$3();
				b(c(u$1), () => (t$3._started = !0, dt(t$3), null), (r$4) => (t$3._started = !0, Ze(e$3, r$4), null));
			})(e$2, n$2, a$2, i$1, l$1, s$1, r$2, o$2);
		})(this, o$1, $e(r$1, 1), a$1);
	}
	get locked() {
		if (!Ge(this)) throw _t("locked");
		return Xe(this);
	}
	abort(e$1) {
		return Ge(this) ? Xe(this) ? d(/* @__PURE__ */ new TypeError("Cannot abort a stream that already has a writer")) : Je(this, e$1) : d(_t("abort"));
	}
	close() {
		return Ge(this) ? Xe(this) ? d(/* @__PURE__ */ new TypeError("Cannot close a stream that already has a writer")) : rt(this) ? d(/* @__PURE__ */ new TypeError("Cannot close an already-closing stream")) : Ke(this) : d(_t("close"));
	}
	getWriter() {
		if (!Ge(this)) throw _t("getWriter");
		return new WritableStreamDefaultWriter(this);
	}
};
function Ge(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_writableStreamController") && e$1 instanceof WritableStream;
}
function Xe(e$1) {
	return void 0 !== e$1._writer;
}
function Je(e$1, t$1) {
	var r$1;
	if ("closed" === e$1._state || "errored" === e$1._state) return c(void 0);
	e$1._writableStreamController._abortReason = t$1, null === (r$1 = e$1._writableStreamController._abortController) || void 0 === r$1 || r$1.abort(t$1);
	const o$1 = e$1._state;
	if ("closed" === o$1 || "errored" === o$1) return c(void 0);
	if (void 0 !== e$1._pendingAbortRequest) return e$1._pendingAbortRequest._promise;
	let n$1 = !1;
	"erroring" === o$1 && (n$1 = !0, t$1 = void 0);
	const a$1 = u((r$2, o$2) => {
		e$1._pendingAbortRequest = {
			_promise: void 0,
			_resolve: r$2,
			_reject: o$2,
			_reason: t$1,
			_wasAlreadyErroring: n$1
		};
	});
	return e$1._pendingAbortRequest._promise = a$1, n$1 || et(e$1, t$1), a$1;
}
function Ke(e$1) {
	const t$1 = e$1._state;
	if ("closed" === t$1 || "errored" === t$1) return d(/* @__PURE__ */ new TypeError(`The stream (in ${t$1} state) is not in the writable state and cannot be closed`));
	const r$1 = u((t$2, r$2) => {
		const o$2 = {
			_resolve: t$2,
			_reject: r$2
		};
		e$1._closeRequest = o$2;
	}), o$1 = e$1._writer;
	var n$1;
	return void 0 !== o$1 && e$1._backpressure && "writable" === t$1 && Et(o$1), ue(n$1 = e$1._writableStreamController, lt, 0), dt(n$1), r$1;
}
function Ze(e$1, t$1) {
	"writable" !== e$1._state ? tt(e$1) : et(e$1, t$1);
}
function et(e$1, t$1) {
	const r$1 = e$1._writableStreamController;
	e$1._state = "erroring", e$1._storedError = t$1;
	const o$1 = e$1._writer;
	void 0 !== o$1 && it(o$1, t$1), !function(e$2) {
		if (void 0 === e$2._inFlightWriteRequest && void 0 === e$2._inFlightCloseRequest) return !1;
		return !0;
	}(e$1) && r$1._started && tt(e$1);
}
function tt(e$1) {
	e$1._state = "errored", e$1._writableStreamController[R]();
	const t$1 = e$1._storedError;
	if (e$1._writeRequests.forEach((e$2) => {
		e$2._reject(t$1);
	}), e$1._writeRequests = new S(), void 0 === e$1._pendingAbortRequest) return void ot(e$1);
	const r$1 = e$1._pendingAbortRequest;
	if (e$1._pendingAbortRequest = void 0, r$1._wasAlreadyErroring) return r$1._reject(t$1), void ot(e$1);
	b(e$1._writableStreamController[v](r$1._reason), () => (r$1._resolve(), ot(e$1), null), (t$2) => (r$1._reject(t$2), ot(e$1), null));
}
function rt(e$1) {
	return void 0 !== e$1._closeRequest || void 0 !== e$1._inFlightCloseRequest;
}
function ot(e$1) {
	void 0 !== e$1._closeRequest && (e$1._closeRequest._reject(e$1._storedError), e$1._closeRequest = void 0);
	const t$1 = e$1._writer;
	void 0 !== t$1 && St(t$1, e$1._storedError);
}
function nt(e$1, t$1) {
	const r$1 = e$1._writer;
	void 0 !== r$1 && t$1 !== e$1._backpressure && (t$1 ? function(e$2) {
		Rt(e$2);
	}(r$1) : Et(r$1)), e$1._backpressure = t$1;
}
Object.defineProperties(WritableStream.prototype, {
	abort: { enumerable: !0 },
	close: { enumerable: !0 },
	getWriter: { enumerable: !0 },
	locked: { enumerable: !0 }
}), n(WritableStream.prototype.abort, "abort"), n(WritableStream.prototype.close, "close"), n(WritableStream.prototype.getWriter, "getWriter"), "symbol" == typeof e.toStringTag && Object.defineProperty(WritableStream.prototype, e.toStringTag, {
	value: "WritableStream",
	configurable: !0
});
var WritableStreamDefaultWriter = class {
	constructor(e$1) {
		if ($(e$1, 1, "WritableStreamDefaultWriter"), function(e$2, t$2) {
			if (!Ge(e$2)) throw new TypeError(`${t$2} is not a WritableStream.`);
		}(e$1, "First parameter"), Xe(e$1)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
		this._ownerWritableStream = e$1, e$1._writer = this;
		const t$1 = e$1._state;
		if ("writable" === t$1) !rt(e$1) && e$1._backpressure ? Rt(this) : qt(this), gt(this);
		else if ("erroring" === t$1) Tt(this, e$1._storedError), gt(this);
		else if ("closed" === t$1) qt(this), gt(r$1 = this), vt(r$1);
		else {
			const t$2 = e$1._storedError;
			Tt(this, t$2), wt(this, t$2);
		}
		var r$1;
	}
	get closed() {
		return at(this) ? this._closedPromise : d(mt("closed"));
	}
	get desiredSize() {
		if (!at(this)) throw mt("desiredSize");
		if (void 0 === this._ownerWritableStream) throw yt("desiredSize");
		return function(e$1) {
			const t$1 = e$1._ownerWritableStream, r$1 = t$1._state;
			if ("errored" === r$1 || "erroring" === r$1) return null;
			if ("closed" === r$1) return 0;
			return ct(t$1._writableStreamController);
		}(this);
	}
	get ready() {
		return at(this) ? this._readyPromise : d(mt("ready"));
	}
	abort(e$1) {
		return at(this) ? void 0 === this._ownerWritableStream ? d(yt("abort")) : function(e$2, t$1) {
			return Je(e$2._ownerWritableStream, t$1);
		}(this, e$1) : d(mt("abort"));
	}
	close() {
		if (!at(this)) return d(mt("close"));
		const e$1 = this._ownerWritableStream;
		return void 0 === e$1 ? d(yt("close")) : rt(e$1) ? d(/* @__PURE__ */ new TypeError("Cannot close an already-closing stream")) : Ke(this._ownerWritableStream);
	}
	releaseLock() {
		if (!at(this)) throw mt("releaseLock");
		void 0 !== this._ownerWritableStream && function(e$1) {
			const t$1 = e$1._ownerWritableStream, r$1 = /* @__PURE__ */ new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
			it(e$1, r$1), function(e$2, t$2) {
				"pending" === e$2._closedPromiseState ? St(e$2, t$2) : function(e$3, t$3) {
					wt(e$3, t$3);
				}(e$2, t$2);
			}(e$1, r$1), t$1._writer = void 0, e$1._ownerWritableStream = void 0;
		}(this);
	}
	write(e$1) {
		return at(this) ? void 0 === this._ownerWritableStream ? d(yt("write to")) : function(e$2, t$1) {
			const r$1 = e$2._ownerWritableStream, o$1 = r$1._writableStreamController, n$1 = function(e$3, t$2) {
				try {
					return e$3._strategySizeAlgorithm(t$2);
				} catch (t$3) {
					return ft(e$3, t$3), 1;
				}
			}(o$1, t$1);
			if (r$1 !== e$2._ownerWritableStream) return d(yt("write to"));
			const a$1 = r$1._state;
			if ("errored" === a$1) return d(r$1._storedError);
			if (rt(r$1) || "closed" === a$1) return d(/* @__PURE__ */ new TypeError("The stream is closing or closed and cannot be written to"));
			if ("erroring" === a$1) return d(r$1._storedError);
			const i$1 = function(e$3) {
				return u((t$2, r$2) => {
					const o$2 = {
						_resolve: t$2,
						_reject: r$2
					};
					e$3._writeRequests.push(o$2);
				});
			}(r$1);
			return function(e$3, t$2, r$2) {
				try {
					ue(e$3, t$2, r$2);
				} catch (t$3) {
					return void ft(e$3, t$3);
				}
				const o$2 = e$3._controlledWritableStream;
				if (!rt(o$2) && "writable" === o$2._state) nt(o$2, bt(e$3));
				dt(e$3);
			}(o$1, t$1, n$1), i$1;
		}(this, e$1) : d(mt("write"));
	}
};
function at(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_ownerWritableStream") && e$1 instanceof WritableStreamDefaultWriter;
}
function it(e$1, t$1) {
	"pending" === e$1._readyPromiseState ? Ct(e$1, t$1) : function(e$2, t$2) {
		Tt(e$2, t$2);
	}(e$1, t$1);
}
Object.defineProperties(WritableStreamDefaultWriter.prototype, {
	abort: { enumerable: !0 },
	close: { enumerable: !0 },
	releaseLock: { enumerable: !0 },
	write: { enumerable: !0 },
	closed: { enumerable: !0 },
	desiredSize: { enumerable: !0 },
	ready: { enumerable: !0 }
}), n(WritableStreamDefaultWriter.prototype.abort, "abort"), n(WritableStreamDefaultWriter.prototype.close, "close"), n(WritableStreamDefaultWriter.prototype.releaseLock, "releaseLock"), n(WritableStreamDefaultWriter.prototype.write, "write"), "symbol" == typeof e.toStringTag && Object.defineProperty(WritableStreamDefaultWriter.prototype, e.toStringTag, {
	value: "WritableStreamDefaultWriter",
	configurable: !0
});
const lt = {};
var WritableStreamDefaultController = class {
	constructor() {
		throw new TypeError("Illegal constructor");
	}
	get abortReason() {
		if (!st(this)) throw pt("abortReason");
		return this._abortReason;
	}
	get signal() {
		if (!st(this)) throw pt("signal");
		if (void 0 === this._abortController) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
		return this._abortController.signal;
	}
	error(e$1) {
		if (!st(this)) throw pt("error");
		"writable" === this._controlledWritableStream._state && ht(this, e$1);
	}
	[v](e$1) {
		const t$1 = this._abortAlgorithm(e$1);
		return ut(this), t$1;
	}
	[R]() {
		ce(this);
	}
};
function st(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_controlledWritableStream") && e$1 instanceof WritableStreamDefaultController;
}
function ut(e$1) {
	e$1._writeAlgorithm = void 0, e$1._closeAlgorithm = void 0, e$1._abortAlgorithm = void 0, e$1._strategySizeAlgorithm = void 0;
}
function ct(e$1) {
	return e$1._strategyHWM - e$1._queueTotalSize;
}
function dt(e$1) {
	const t$1 = e$1._controlledWritableStream;
	if (!e$1._started) return;
	if (void 0 !== t$1._inFlightWriteRequest) return;
	if ("erroring" === t$1._state) return void tt(t$1);
	if (0 === e$1._queue.length) return;
	const r$1 = e$1._queue.peek().value;
	r$1 === lt ? function(e$2) {
		const t$2 = e$2._controlledWritableStream;
		(function(e$3) {
			e$3._inFlightCloseRequest = e$3._closeRequest, e$3._closeRequest = void 0;
		})(t$2), se(e$2);
		const r$2 = e$2._closeAlgorithm();
		ut(e$2), b(r$2, () => (function(e$3) {
			e$3._inFlightCloseRequest._resolve(void 0), e$3._inFlightCloseRequest = void 0, "erroring" === e$3._state && (e$3._storedError = void 0, void 0 !== e$3._pendingAbortRequest && (e$3._pendingAbortRequest._resolve(), e$3._pendingAbortRequest = void 0)), e$3._state = "closed";
			const t$3 = e$3._writer;
			void 0 !== t$3 && vt(t$3);
		}(t$2), null), (e$3) => (function(e$4, t$3) {
			e$4._inFlightCloseRequest._reject(t$3), e$4._inFlightCloseRequest = void 0, void 0 !== e$4._pendingAbortRequest && (e$4._pendingAbortRequest._reject(t$3), e$4._pendingAbortRequest = void 0), Ze(e$4, t$3);
		}(t$2, e$3), null));
	}(e$1) : function(e$2, t$2) {
		const r$2 = e$2._controlledWritableStream;
		(function(e$3) {
			e$3._inFlightWriteRequest = e$3._writeRequests.shift();
		})(r$2);
		b(e$2._writeAlgorithm(t$2), () => {
			(function(e$3) {
				e$3._inFlightWriteRequest._resolve(void 0), e$3._inFlightWriteRequest = void 0;
			})(r$2);
			const t$3 = r$2._state;
			if (se(e$2), !rt(r$2) && "writable" === t$3) {
				const t$4 = bt(e$2);
				nt(r$2, t$4);
			}
			return dt(e$2), null;
		}, (t$3) => ("writable" === r$2._state && ut(e$2), function(e$3, t$4) {
			e$3._inFlightWriteRequest._reject(t$4), e$3._inFlightWriteRequest = void 0, Ze(e$3, t$4);
		}(r$2, t$3), null));
	}(e$1, r$1);
}
function ft(e$1, t$1) {
	"writable" === e$1._controlledWritableStream._state && ht(e$1, t$1);
}
function bt(e$1) {
	return ct(e$1) <= 0;
}
function ht(e$1, t$1) {
	const r$1 = e$1._controlledWritableStream;
	ut(e$1), et(r$1, t$1);
}
function _t(e$1) {
	return /* @__PURE__ */ new TypeError(`WritableStream.prototype.${e$1} can only be used on a WritableStream`);
}
function pt(e$1) {
	return /* @__PURE__ */ new TypeError(`WritableStreamDefaultController.prototype.${e$1} can only be used on a WritableStreamDefaultController`);
}
function mt(e$1) {
	return /* @__PURE__ */ new TypeError(`WritableStreamDefaultWriter.prototype.${e$1} can only be used on a WritableStreamDefaultWriter`);
}
function yt(e$1) {
	return /* @__PURE__ */ new TypeError("Cannot " + e$1 + " a stream using a released writer");
}
function gt(e$1) {
	e$1._closedPromise = u((t$1, r$1) => {
		e$1._closedPromise_resolve = t$1, e$1._closedPromise_reject = r$1, e$1._closedPromiseState = "pending";
	});
}
function wt(e$1, t$1) {
	gt(e$1), St(e$1, t$1);
}
function St(e$1, t$1) {
	void 0 !== e$1._closedPromise_reject && (m(e$1._closedPromise), e$1._closedPromise_reject(t$1), e$1._closedPromise_resolve = void 0, e$1._closedPromise_reject = void 0, e$1._closedPromiseState = "rejected");
}
function vt(e$1) {
	void 0 !== e$1._closedPromise_resolve && (e$1._closedPromise_resolve(void 0), e$1._closedPromise_resolve = void 0, e$1._closedPromise_reject = void 0, e$1._closedPromiseState = "resolved");
}
function Rt(e$1) {
	e$1._readyPromise = u((t$1, r$1) => {
		e$1._readyPromise_resolve = t$1, e$1._readyPromise_reject = r$1;
	}), e$1._readyPromiseState = "pending";
}
function Tt(e$1, t$1) {
	Rt(e$1), Ct(e$1, t$1);
}
function qt(e$1) {
	Rt(e$1), Et(e$1);
}
function Ct(e$1, t$1) {
	void 0 !== e$1._readyPromise_reject && (m(e$1._readyPromise), e$1._readyPromise_reject(t$1), e$1._readyPromise_resolve = void 0, e$1._readyPromise_reject = void 0, e$1._readyPromiseState = "rejected");
}
function Et(e$1) {
	void 0 !== e$1._readyPromise_resolve && (e$1._readyPromise_resolve(void 0), e$1._readyPromise_resolve = void 0, e$1._readyPromise_reject = void 0, e$1._readyPromiseState = "fulfilled");
}
Object.defineProperties(WritableStreamDefaultController.prototype, {
	abortReason: { enumerable: !0 },
	signal: { enumerable: !0 },
	error: { enumerable: !0 }
}), "symbol" == typeof e.toStringTag && Object.defineProperty(WritableStreamDefaultController.prototype, e.toStringTag, {
	value: "WritableStreamDefaultController",
	configurable: !0
});
const Pt = "undefined" != typeof DOMException ? DOMException : void 0;
const Wt = function(e$1) {
	if ("function" != typeof e$1 && "object" != typeof e$1) return !1;
	try {
		return new e$1(), !0;
	} catch (e$2) {
		return !1;
	}
}(Pt) ? Pt : function() {
	const e$1 = function(e$2, t$1) {
		this.message = e$2 || "", this.name = t$1 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	};
	return e$1.prototype = Object.create(Error.prototype), Object.defineProperty(e$1.prototype, "constructor", {
		value: e$1,
		writable: !0,
		configurable: !0
	}), e$1;
}();
function kt(e$1, t$1, r$1, o$1, n$1, a$1) {
	const i$1 = e$1.getReader(), l$1 = t$1.getWriter();
	Vt(e$1) && (e$1._disturbed = !0);
	let s$1, _$1, g$1, w$1 = !1, S$1 = !1, v$1 = "readable", R$1 = "writable", T$1 = !1, q$1 = !1;
	const C$1 = u((e$2) => {
		g$1 = e$2;
	});
	let E$1 = Promise.resolve(void 0);
	return u((P$1, W$1) => {
		let k$1;
		function O$1() {
			if (w$1) return;
			const e$2 = u((e$3, t$2) => {
				(function r$2(o$2) {
					o$2 ? e$3() : f(function() {
						if (w$1) return c(!0);
						return f(l$1.ready, () => f(i$1.read(), (e$4) => !!e$4.done || (E$1 = l$1.write(e$4.value), m(E$1), !1)));
					}(), r$2, t$2);
				})(!1);
			});
			m(e$2);
		}
		function B$1() {
			return v$1 = "closed", r$1 ? L$1() : z$1(() => (Ge(t$1) && (T$1 = rt(t$1), R$1 = t$1._state), T$1 || "closed" === R$1 ? c(void 0) : "erroring" === R$1 || "errored" === R$1 ? d(_$1) : (T$1 = !0, l$1.close())), !1, void 0), null;
		}
		function A$1(e$2) {
			return w$1 || (v$1 = "errored", s$1 = e$2, o$1 ? L$1(!0, e$2) : z$1(() => l$1.abort(e$2), !0, e$2)), null;
		}
		function j$1(e$2) {
			return S$1 || (R$1 = "errored", _$1 = e$2, n$1 ? L$1(!0, e$2) : z$1(() => i$1.cancel(e$2), !0, e$2)), null;
		}
		if (void 0 !== a$1 && (k$1 = () => {
			const e$2 = void 0 !== a$1.reason ? a$1.reason : new Wt("Aborted", "AbortError"), t$2 = [];
			o$1 || t$2.push(() => "writable" === R$1 ? l$1.abort(e$2) : c(void 0)), n$1 || t$2.push(() => "readable" === v$1 ? i$1.cancel(e$2) : c(void 0)), z$1(() => Promise.all(t$2.map((e$3) => e$3())), !0, e$2);
		}, a$1.aborted ? k$1() : a$1.addEventListener("abort", k$1)), Vt(e$1) && (v$1 = e$1._state, s$1 = e$1._storedError), Ge(t$1) && (R$1 = t$1._state, _$1 = t$1._storedError, T$1 = rt(t$1)), Vt(e$1) && Ge(t$1) && (q$1 = !0, g$1()), "errored" === v$1) A$1(s$1);
		else if ("erroring" === R$1 || "errored" === R$1) j$1(_$1);
		else if ("closed" === v$1) B$1();
		else if (T$1 || "closed" === R$1) {
			const e$2 = /* @__PURE__ */ new TypeError("the destination writable stream closed before all data could be piped to it");
			n$1 ? L$1(!0, e$2) : z$1(() => i$1.cancel(e$2), !0, e$2);
		}
		function z$1(e$2, t$2, r$2) {
			function o$2() {
				return "writable" !== R$1 || T$1 ? n$2() : h(function() {
					let e$3;
					return c(function t$3() {
						if (e$3 !== E$1) return e$3 = E$1, p(E$1, t$3, t$3);
					}());
				}(), n$2), null;
			}
			function n$2() {
				return e$2 ? b(e$2(), () => F$1(t$2, r$2), (e$3) => F$1(!0, e$3)) : F$1(t$2, r$2), null;
			}
			w$1 || (w$1 = !0, q$1 ? o$2() : h(C$1, o$2));
		}
		function L$1(e$2, t$2) {
			z$1(void 0, e$2, t$2);
		}
		function F$1(e$2, t$2) {
			return S$1 = !0, l$1.releaseLock(), i$1.releaseLock(), void 0 !== a$1 && a$1.removeEventListener("abort", k$1), e$2 ? W$1(t$2) : P$1(void 0), null;
		}
		w$1 || (b(i$1.closed, B$1, A$1), b(l$1.closed, function() {
			return S$1 || (R$1 = "closed"), null;
		}, j$1)), q$1 ? O$1() : y(() => {
			q$1 = !0, g$1(), O$1();
		});
	});
}
function Ot(e$1, t$1) {
	return function(e$2) {
		try {
			return e$2.getReader({ mode: "byob" }).releaseLock(), !0;
		} catch (e$3) {
			return !1;
		}
	}(e$1) ? function(e$2) {
		let t$2, r$1, o$1, n$1, a$1, i$1 = e$2.getReader(), l$1 = !1, s$1 = !1, d$1 = !1, f$1 = !1, h$1 = !1, p$1 = !1;
		const m$1 = u((e$3) => {
			a$1 = e$3;
		});
		function y$1(e$3) {
			_(e$3.closed, (t$3) => (e$3 !== i$1 || (o$1.error(t$3), n$1.error(t$3), h$1 && p$1 || a$1(void 0)), null));
		}
		function g$1() {
			l$1 && (i$1.releaseLock(), i$1 = e$2.getReader(), y$1(i$1), l$1 = !1), b(i$1.read(), (e$3) => {
				var t$3, r$2;
				if (d$1 = !1, f$1 = !1, e$3.done) return h$1 || o$1.close(), p$1 || n$1.close(), null === (t$3 = o$1.byobRequest) || void 0 === t$3 || t$3.respond(0), null === (r$2 = n$1.byobRequest) || void 0 === r$2 || r$2.respond(0), h$1 && p$1 || a$1(void 0), null;
				const l$2 = e$3.value, u$1 = l$2;
				let c$1 = l$2;
				if (!h$1 && !p$1) try {
					c$1 = le(l$2);
				} catch (e$4) {
					return o$1.error(e$4), n$1.error(e$4), a$1(i$1.cancel(e$4)), null;
				}
				return h$1 || o$1.enqueue(u$1), p$1 || n$1.enqueue(c$1), s$1 = !1, d$1 ? S$1() : f$1 && v$1(), null;
			}, () => (s$1 = !1, null));
		}
		function w$1(t$3, r$2) {
			l$1 || (i$1.releaseLock(), i$1 = e$2.getReader({ mode: "byob" }), y$1(i$1), l$1 = !0);
			const u$1 = r$2 ? n$1 : o$1, c$1 = r$2 ? o$1 : n$1;
			b(i$1.read(t$3), (e$3) => {
				var t$4;
				d$1 = !1, f$1 = !1;
				const o$2 = r$2 ? p$1 : h$1, n$2 = r$2 ? h$1 : p$1;
				if (e$3.done) {
					o$2 || u$1.close(), n$2 || c$1.close();
					const r$3 = e$3.value;
					return void 0 !== r$3 && (o$2 || u$1.byobRequest.respondWithNewView(r$3), n$2 || null === (t$4 = c$1.byobRequest) || void 0 === t$4 || t$4.respond(0)), o$2 && n$2 || a$1(void 0), null;
				}
				const l$2 = e$3.value;
				if (n$2) o$2 || u$1.byobRequest.respondWithNewView(l$2);
				else {
					let e$4;
					try {
						e$4 = le(l$2);
					} catch (e$5) {
						return u$1.error(e$5), c$1.error(e$5), a$1(i$1.cancel(e$5)), null;
					}
					o$2 || u$1.byobRequest.respondWithNewView(l$2), c$1.enqueue(e$4);
				}
				return s$1 = !1, d$1 ? S$1() : f$1 && v$1(), null;
			}, () => (s$1 = !1, null));
		}
		function S$1() {
			if (s$1) return d$1 = !0, c(void 0);
			s$1 = !0;
			const e$3 = o$1.byobRequest;
			return null === e$3 ? g$1() : w$1(e$3.view, !1), c(void 0);
		}
		function v$1() {
			if (s$1) return f$1 = !0, c(void 0);
			s$1 = !0;
			const e$3 = n$1.byobRequest;
			return null === e$3 ? g$1() : w$1(e$3.view, !0), c(void 0);
		}
		function R$1(e$3) {
			if (h$1 = !0, t$2 = e$3, p$1) {
				const e$4 = [t$2, r$1], o$2 = i$1.cancel(e$4);
				a$1(o$2);
			}
			return m$1;
		}
		function T$1(e$3) {
			if (p$1 = !0, r$1 = e$3, h$1) {
				const e$4 = [t$2, r$1], o$2 = i$1.cancel(e$4);
				a$1(o$2);
			}
			return m$1;
		}
		const q$1 = new ReadableStream({
			type: "bytes",
			start(e$3) {
				o$1 = e$3;
			},
			pull: S$1,
			cancel: R$1
		}), C$1 = new ReadableStream({
			type: "bytes",
			start(e$3) {
				n$1 = e$3;
			},
			pull: v$1,
			cancel: T$1
		});
		return y$1(i$1), [q$1, C$1];
	}(e$1) : function(e$2, t$2) {
		const r$1 = e$2.getReader();
		let o$1, n$1, a$1, i$1, l$1, s$1 = !1, d$1 = !1, f$1 = !1, h$1 = !1;
		const p$1 = u((e$3) => {
			l$1 = e$3;
		});
		function m$1() {
			return s$1 ? (d$1 = !0, c(void 0)) : (s$1 = !0, b(r$1.read(), (e$3) => {
				if (d$1 = !1, e$3.done) return f$1 || a$1.close(), h$1 || i$1.close(), f$1 && h$1 || l$1(void 0), null;
				const t$3 = e$3.value, r$2 = t$3, o$2 = t$3;
				return f$1 || a$1.enqueue(r$2), h$1 || i$1.enqueue(o$2), s$1 = !1, d$1 && m$1(), null;
			}, () => (s$1 = !1, null)), c(void 0));
		}
		function y$1(e$3) {
			if (f$1 = !0, o$1 = e$3, h$1) {
				const e$4 = [o$1, n$1], t$3 = r$1.cancel(e$4);
				l$1(t$3);
			}
			return p$1;
		}
		function g$1(e$3) {
			if (h$1 = !0, n$1 = e$3, f$1) {
				const e$4 = [o$1, n$1], t$3 = r$1.cancel(e$4);
				l$1(t$3);
			}
			return p$1;
		}
		const w$1 = new ReadableStream({
			start(e$3) {
				a$1 = e$3;
			},
			pull: m$1,
			cancel: y$1
		}), S$1 = new ReadableStream({
			start(e$3) {
				i$1 = e$3;
			},
			pull: m$1,
			cancel: g$1
		});
		return _(r$1.closed, (e$3) => (a$1.error(e$3), i$1.error(e$3), f$1 && h$1 || l$1(void 0), null)), [w$1, S$1];
	}(e$1);
}
var ReadableStreamDefaultController = class {
	constructor() {
		throw new TypeError("Illegal constructor");
	}
	get desiredSize() {
		if (!Bt(this)) throw Dt("desiredSize");
		return Lt(this);
	}
	close() {
		if (!Bt(this)) throw Dt("close");
		if (!Ft(this)) throw new TypeError("The stream is not in a state that permits close");
		(function(e$1) {
			if (!Ft(e$1)) return;
			const t$1 = e$1._controlledReadableStream;
			e$1._closeRequested = !0, 0 === e$1._queue.length && (jt(e$1), Xt(t$1));
		})(this);
	}
	enqueue(e$1) {
		if (!Bt(this)) throw Dt("enqueue");
		if (!Ft(this)) throw new TypeError("The stream is not in a state that permits enqueue");
		return function(e$2, t$1) {
			if (!Ft(e$2)) return;
			const r$1 = e$2._controlledReadableStream;
			if (Ut(r$1) && X(r$1) > 0) G(r$1, t$1, !1);
			else {
				let r$2;
				try {
					r$2 = e$2._strategySizeAlgorithm(t$1);
				} catch (t$2) {
					throw zt(e$2, t$2), t$2;
				}
				try {
					ue(e$2, t$1, r$2);
				} catch (t$2) {
					throw zt(e$2, t$2), t$2;
				}
			}
			At(e$2);
		}(this, e$1);
	}
	error(e$1) {
		if (!Bt(this)) throw Dt("error");
		zt(this, e$1);
	}
	[T](e$1) {
		ce(this);
		const t$1 = this._cancelAlgorithm(e$1);
		return jt(this), t$1;
	}
	[q](e$1) {
		const t$1 = this._controlledReadableStream;
		if (this._queue.length > 0) {
			const r$1 = se(this);
			this._closeRequested && 0 === this._queue.length ? (jt(this), Xt(t$1)) : At(this), e$1._chunkSteps(r$1);
		} else U(t$1, e$1), At(this);
	}
	[C]() {}
};
function Bt(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_controlledReadableStream") && e$1 instanceof ReadableStreamDefaultController;
}
function At(e$1) {
	const t$1 = function(e$2) {
		const t$2 = e$2._controlledReadableStream;
		if (!Ft(e$2)) return !1;
		if (!e$2._started) return !1;
		if (Ut(t$2) && X(t$2) > 0) return !0;
		if (Lt(e$2) > 0) return !0;
		return !1;
	}(e$1);
	if (!t$1) return;
	if (e$1._pulling) return void (e$1._pullAgain = !0);
	e$1._pulling = !0;
	b(e$1._pullAlgorithm(), () => (e$1._pulling = !1, e$1._pullAgain && (e$1._pullAgain = !1, At(e$1)), null), (t$2) => (zt(e$1, t$2), null));
}
function jt(e$1) {
	e$1._pullAlgorithm = void 0, e$1._cancelAlgorithm = void 0, e$1._strategySizeAlgorithm = void 0;
}
function zt(e$1, t$1) {
	const r$1 = e$1._controlledReadableStream;
	"readable" === r$1._state && (ce(e$1), jt(e$1), Jt(r$1, t$1));
}
function Lt(e$1) {
	const t$1 = e$1._controlledReadableStream._state;
	return "errored" === t$1 ? null : "closed" === t$1 ? 0 : e$1._strategyHWM - e$1._queueTotalSize;
}
function Ft(e$1) {
	return !e$1._closeRequested && "readable" === e$1._controlledReadableStream._state;
}
function It(e$1, t$1, r$1, o$1) {
	const n$1 = Object.create(ReadableStreamDefaultController.prototype);
	let a$1, i$1, l$1;
	a$1 = void 0 !== t$1.start ? () => t$1.start(n$1) : () => {}, i$1 = void 0 !== t$1.pull ? () => t$1.pull(n$1) : () => c(void 0), l$1 = void 0 !== t$1.cancel ? (e$2) => t$1.cancel(e$2) : () => c(void 0), function(e$2, t$2, r$2, o$2, n$2, a$2, i$2) {
		t$2._controlledReadableStream = e$2, t$2._queue = void 0, t$2._queueTotalSize = void 0, ce(t$2), t$2._started = !1, t$2._closeRequested = !1, t$2._pullAgain = !1, t$2._pulling = !1, t$2._strategySizeAlgorithm = i$2, t$2._strategyHWM = a$2, t$2._pullAlgorithm = o$2, t$2._cancelAlgorithm = n$2, e$2._readableStreamController = t$2, b(c(r$2()), () => (t$2._started = !0, At(t$2), null), (e$3) => (zt(t$2, e$3), null));
	}(e$1, n$1, a$1, i$1, l$1, r$1, o$1);
}
function Dt(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStreamDefaultController.prototype.${e$1} can only be used on a ReadableStreamDefaultController`);
}
function $t(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => w(e$1, t$1, [r$2]);
}
function Mt(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => w(e$1, t$1, [r$2]);
}
function Yt(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => g(e$1, t$1, [r$2]);
}
function Qt(e$1, t$1) {
	if ("bytes" !== (e$1 = `${e$1}`)) throw new TypeError(`${t$1} '${e$1}' is not a valid enumeration value for ReadableStreamType`);
	return e$1;
}
function Nt(e$1, t$1) {
	if ("byob" !== (e$1 = `${e$1}`)) throw new TypeError(`${t$1} '${e$1}' is not a valid enumeration value for ReadableStreamReaderMode`);
	return e$1;
}
function Ht(e$1, t$1) {
	F(e$1, t$1);
	const r$1 = null == e$1 ? void 0 : e$1.preventAbort, o$1 = null == e$1 ? void 0 : e$1.preventCancel, n$1 = null == e$1 ? void 0 : e$1.preventClose, a$1 = null == e$1 ? void 0 : e$1.signal;
	return void 0 !== a$1 && function(e$2, t$2) {
		if (!function(e$3) {
			if ("object" != typeof e$3 || null === e$3) return !1;
			try {
				return "boolean" == typeof e$3.aborted;
			} catch (e$4) {
				return !1;
			}
		}(e$2)) throw new TypeError(`${t$2} is not an AbortSignal.`);
	}(a$1, `${t$1} has member 'signal' that`), {
		preventAbort: Boolean(r$1),
		preventCancel: Boolean(o$1),
		preventClose: Boolean(n$1),
		signal: a$1
	};
}
function xt(e$1, t$1) {
	F(e$1, t$1);
	const r$1 = null == e$1 ? void 0 : e$1.readable;
	M(r$1, "readable", "ReadableWritablePair"), function(e$2, t$2) {
		if (!H(e$2)) throw new TypeError(`${t$2} is not a ReadableStream.`);
	}(r$1, `${t$1} has member 'readable' that`);
	const o$1 = null == e$1 ? void 0 : e$1.writable;
	return M(o$1, "writable", "ReadableWritablePair"), function(e$2, t$2) {
		if (!x(e$2)) throw new TypeError(`${t$2} is not a WritableStream.`);
	}(o$1, `${t$1} has member 'writable' that`), {
		readable: r$1,
		writable: o$1
	};
}
Object.defineProperties(ReadableStreamDefaultController.prototype, {
	close: { enumerable: !0 },
	enqueue: { enumerable: !0 },
	error: { enumerable: !0 },
	desiredSize: { enumerable: !0 }
}), n(ReadableStreamDefaultController.prototype.close, "close"), n(ReadableStreamDefaultController.prototype.enqueue, "enqueue"), n(ReadableStreamDefaultController.prototype.error, "error"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableStreamDefaultController.prototype, e.toStringTag, {
	value: "ReadableStreamDefaultController",
	configurable: !0
});
var ReadableStream = class {
	constructor(e$1 = {}, t$1 = {}) {
		void 0 === e$1 ? e$1 = null : D(e$1, "First parameter");
		const r$1 = Ye(t$1, "Second parameter"), o$1 = function(e$2, t$2) {
			F(e$2, t$2);
			const r$2 = e$2, o$2 = null == r$2 ? void 0 : r$2.autoAllocateChunkSize, n$2 = null == r$2 ? void 0 : r$2.cancel, a$1 = null == r$2 ? void 0 : r$2.pull, i$1 = null == r$2 ? void 0 : r$2.start, l$1 = null == r$2 ? void 0 : r$2.type;
			return {
				autoAllocateChunkSize: void 0 === o$2 ? void 0 : N(o$2, `${t$2} has member 'autoAllocateChunkSize' that`),
				cancel: void 0 === n$2 ? void 0 : $t(n$2, r$2, `${t$2} has member 'cancel' that`),
				pull: void 0 === a$1 ? void 0 : Mt(a$1, r$2, `${t$2} has member 'pull' that`),
				start: void 0 === i$1 ? void 0 : Yt(i$1, r$2, `${t$2} has member 'start' that`),
				type: void 0 === l$1 ? void 0 : Qt(l$1, `${t$2} has member 'type' that`)
			};
		}(e$1, "First parameter");
		var n$1;
		if ((n$1 = this)._state = "readable", n$1._reader = void 0, n$1._storedError = void 0, n$1._disturbed = !1, "bytes" === o$1.type) {
			if (void 0 !== r$1.size) throw new RangeError("The strategy for a byte stream cannot have a size function");
			Oe(this, o$1, $e(r$1, 0));
		} else {
			const e$2 = Me(r$1);
			It(this, o$1, $e(r$1, 1), e$2);
		}
	}
	get locked() {
		if (!Vt(this)) throw Kt("locked");
		return Ut(this);
	}
	cancel(e$1) {
		return Vt(this) ? Ut(this) ? d(/* @__PURE__ */ new TypeError("Cannot cancel a stream that already has a reader")) : Gt(this, e$1) : d(Kt("cancel"));
	}
	getReader(e$1) {
		if (!Vt(this)) throw Kt("getReader");
		return void 0 === function(e$2, t$1) {
			F(e$2, t$1);
			const r$1 = null == e$2 ? void 0 : e$2.mode;
			return { mode: void 0 === r$1 ? void 0 : Nt(r$1, `${t$1} has member 'mode' that`) };
		}(e$1, "First parameter").mode ? new ReadableStreamDefaultReader(this) : function(e$2) {
			return new ReadableStreamBYOBReader(e$2);
		}(this);
	}
	pipeThrough(e$1, t$1 = {}) {
		if (!H(this)) throw Kt("pipeThrough");
		$(e$1, 1, "pipeThrough");
		const r$1 = xt(e$1, "First parameter"), o$1 = Ht(t$1, "Second parameter");
		if (this.locked) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
		if (r$1.writable.locked) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
		return m(kt(this, r$1.writable, o$1.preventClose, o$1.preventAbort, o$1.preventCancel, o$1.signal)), r$1.readable;
	}
	pipeTo(e$1, t$1 = {}) {
		if (!H(this)) return d(Kt("pipeTo"));
		if (void 0 === e$1) return d("Parameter 1 is required in 'pipeTo'.");
		if (!x(e$1)) return d(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
		let r$1;
		try {
			r$1 = Ht(t$1, "Second parameter");
		} catch (e$2) {
			return d(e$2);
		}
		return this.locked ? d(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : e$1.locked ? d(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : kt(this, e$1, r$1.preventClose, r$1.preventAbort, r$1.preventCancel, r$1.signal);
	}
	tee() {
		if (!H(this)) throw Kt("tee");
		if (this.locked) throw new TypeError("Cannot tee a stream that already has a reader");
		return Ot(this);
	}
	values(e$1) {
		if (!H(this)) throw Kt("values");
		return function(e$2, t$1) {
			const r$1 = e$2.getReader(), o$1 = new te(r$1, t$1), n$1 = Object.create(re);
			return n$1._asyncIteratorImpl = o$1, n$1;
		}(this, function(e$2, t$1) {
			F(e$2, t$1);
			const r$1 = null == e$2 ? void 0 : e$2.preventCancel;
			return { preventCancel: Boolean(r$1) };
		}(e$1, "First parameter").preventCancel);
	}
};
function Vt(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_readableStreamController") && e$1 instanceof ReadableStream;
}
function Ut(e$1) {
	return void 0 !== e$1._reader;
}
function Gt(e$1, r$1) {
	if (e$1._disturbed = !0, "closed" === e$1._state) return c(void 0);
	if ("errored" === e$1._state) return d(e$1._storedError);
	Xt(e$1);
	const o$1 = e$1._reader;
	if (void 0 !== o$1 && Fe(o$1)) {
		const e$2 = o$1._readIntoRequests;
		o$1._readIntoRequests = new S(), e$2.forEach((e$3) => {
			e$3._closeSteps(void 0);
		});
	}
	return p(e$1._readableStreamController[T](r$1), t);
}
function Xt(e$1) {
	e$1._state = "closed";
	const t$1 = e$1._reader;
	if (void 0 !== t$1 && (j(t$1), K(t$1))) {
		const e$2 = t$1._readRequests;
		t$1._readRequests = new S(), e$2.forEach((e$3) => {
			e$3._closeSteps();
		});
	}
}
function Jt(e$1, t$1) {
	e$1._state = "errored", e$1._storedError = t$1;
	const r$1 = e$1._reader;
	void 0 !== r$1 && (A(r$1, t$1), K(r$1) ? Z(r$1, t$1) : Ie(r$1, t$1));
}
function Kt(e$1) {
	return /* @__PURE__ */ new TypeError(`ReadableStream.prototype.${e$1} can only be used on a ReadableStream`);
}
function Zt(e$1, t$1) {
	F(e$1, t$1);
	const r$1 = null == e$1 ? void 0 : e$1.highWaterMark;
	return M(r$1, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: Y(r$1) };
}
Object.defineProperties(ReadableStream.prototype, {
	cancel: { enumerable: !0 },
	getReader: { enumerable: !0 },
	pipeThrough: { enumerable: !0 },
	pipeTo: { enumerable: !0 },
	tee: { enumerable: !0 },
	values: { enumerable: !0 },
	locked: { enumerable: !0 }
}), n(ReadableStream.prototype.cancel, "cancel"), n(ReadableStream.prototype.getReader, "getReader"), n(ReadableStream.prototype.pipeThrough, "pipeThrough"), n(ReadableStream.prototype.pipeTo, "pipeTo"), n(ReadableStream.prototype.tee, "tee"), n(ReadableStream.prototype.values, "values"), "symbol" == typeof e.toStringTag && Object.defineProperty(ReadableStream.prototype, e.toStringTag, {
	value: "ReadableStream",
	configurable: !0
}), "symbol" == typeof e.asyncIterator && Object.defineProperty(ReadableStream.prototype, e.asyncIterator, {
	value: ReadableStream.prototype.values,
	writable: !0,
	configurable: !0
});
const er = (e$1) => e$1.byteLength;
n(er, "size");
var ByteLengthQueuingStrategy = class {
	constructor(e$1) {
		$(e$1, 1, "ByteLengthQueuingStrategy"), e$1 = Zt(e$1, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = e$1.highWaterMark;
	}
	get highWaterMark() {
		if (!rr(this)) throw tr("highWaterMark");
		return this._byteLengthQueuingStrategyHighWaterMark;
	}
	get size() {
		if (!rr(this)) throw tr("size");
		return er;
	}
};
function tr(e$1) {
	return /* @__PURE__ */ new TypeError(`ByteLengthQueuingStrategy.prototype.${e$1} can only be used on a ByteLengthQueuingStrategy`);
}
function rr(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_byteLengthQueuingStrategyHighWaterMark") && e$1 instanceof ByteLengthQueuingStrategy;
}
Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
	highWaterMark: { enumerable: !0 },
	size: { enumerable: !0 }
}), "symbol" == typeof e.toStringTag && Object.defineProperty(ByteLengthQueuingStrategy.prototype, e.toStringTag, {
	value: "ByteLengthQueuingStrategy",
	configurable: !0
});
const or = () => 1;
n(or, "size");
var CountQueuingStrategy = class {
	constructor(e$1) {
		$(e$1, 1, "CountQueuingStrategy"), e$1 = Zt(e$1, "First parameter"), this._countQueuingStrategyHighWaterMark = e$1.highWaterMark;
	}
	get highWaterMark() {
		if (!ar(this)) throw nr("highWaterMark");
		return this._countQueuingStrategyHighWaterMark;
	}
	get size() {
		if (!ar(this)) throw nr("size");
		return or;
	}
};
function nr(e$1) {
	return /* @__PURE__ */ new TypeError(`CountQueuingStrategy.prototype.${e$1} can only be used on a CountQueuingStrategy`);
}
function ar(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_countQueuingStrategyHighWaterMark") && e$1 instanceof CountQueuingStrategy;
}
function ir(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => w(e$1, t$1, [r$2]);
}
function lr(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2) => g(e$1, t$1, [r$2]);
}
function sr(e$1, t$1, r$1) {
	return I(e$1, r$1), (r$2, o$1) => w(e$1, t$1, [r$2, o$1]);
}
Object.defineProperties(CountQueuingStrategy.prototype, {
	highWaterMark: { enumerable: !0 },
	size: { enumerable: !0 }
}), "symbol" == typeof e.toStringTag && Object.defineProperty(CountQueuingStrategy.prototype, e.toStringTag, {
	value: "CountQueuingStrategy",
	configurable: !0
});
var TransformStream = class {
	constructor(e$1 = {}, t$1 = {}, r$1 = {}) {
		void 0 === e$1 && (e$1 = null);
		const o$1 = Ye(t$1, "Second parameter"), n$1 = Ye(r$1, "Third parameter"), a$1 = function(e$2, t$2) {
			F(e$2, t$2);
			const r$2 = null == e$2 ? void 0 : e$2.flush, o$2 = null == e$2 ? void 0 : e$2.readableType, n$2 = null == e$2 ? void 0 : e$2.start, a$2 = null == e$2 ? void 0 : e$2.transform, i$2 = null == e$2 ? void 0 : e$2.writableType;
			return {
				flush: void 0 === r$2 ? void 0 : ir(r$2, e$2, `${t$2} has member 'flush' that`),
				readableType: o$2,
				start: void 0 === n$2 ? void 0 : lr(n$2, e$2, `${t$2} has member 'start' that`),
				transform: void 0 === a$2 ? void 0 : sr(a$2, e$2, `${t$2} has member 'transform' that`),
				writableType: i$2
			};
		}(e$1, "First parameter");
		if (void 0 !== a$1.readableType) throw new RangeError("Invalid readableType specified");
		if (void 0 !== a$1.writableType) throw new RangeError("Invalid writableType specified");
		const i$1 = $e(n$1, 0), l$1 = Me(n$1), s$1 = $e(o$1, 1), f$1 = Me(o$1);
		let b$1;
		(function(e$2, t$2, r$2, o$2, n$2, a$2) {
			function i$2() {
				return t$2;
			}
			function l$2(t$3) {
				return function(e$3, t$4) {
					const r$3 = e$3._transformStreamController;
					if (e$3._backpressure) return p(e$3._backpressureChangePromise, () => {
						if ("erroring" === (Ge(e$3._writable) ? e$3._writable._state : e$3._writableState)) throw Ge(e$3._writable) ? e$3._writable._storedError : e$3._writableStoredError;
						return pr(r$3, t$4);
					});
					return pr(r$3, t$4);
				}(e$2, t$3);
			}
			function s$2(t$3) {
				return function(e$3, t$4) {
					return cr(e$3, t$4), c(void 0);
				}(e$2, t$3);
			}
			function u$1() {
				return function(e$3) {
					const t$3 = e$3._transformStreamController, r$3 = t$3._flushAlgorithm();
					return hr(t$3), p(r$3, () => {
						if ("errored" === e$3._readableState) throw e$3._readableStoredError;
						gr(e$3) && wr(e$3);
					}, (t$4) => {
						throw cr(e$3, t$4), e$3._readableStoredError;
					});
				}(e$2);
			}
			function d$1() {
				return function(e$3) {
					return fr(e$3, !1), e$3._backpressureChangePromise;
				}(e$2);
			}
			function f$2(t$3) {
				return dr(e$2, t$3), c(void 0);
			}
			e$2._writableState = "writable", e$2._writableStoredError = void 0, e$2._writableHasInFlightOperation = !1, e$2._writableStarted = !1, e$2._writable = function(e$3, t$3, r$3, o$3, n$3, a$3, i$3) {
				return new WritableStream({
					start(r$4) {
						e$3._writableController = r$4;
						try {
							const t$4 = r$4.signal;
							void 0 !== t$4 && t$4.addEventListener("abort", () => {
								"writable" === e$3._writableState && (e$3._writableState = "erroring", t$4.reason && (e$3._writableStoredError = t$4.reason));
							});
						} catch (e$4) {}
						return p(t$3(), () => (e$3._writableStarted = !0, Cr(e$3), null), (t$4) => {
							throw e$3._writableStarted = !0, Rr(e$3, t$4), t$4;
						});
					},
					write: (t$4) => (function(e$4) {
						e$4._writableHasInFlightOperation = !0;
					}(e$3), p(r$3(t$4), () => (function(e$4) {
						e$4._writableHasInFlightOperation = !1;
					}(e$3), Cr(e$3), null), (t$5) => {
						throw function(e$4, t$6) {
							e$4._writableHasInFlightOperation = !1, Rr(e$4, t$6);
						}(e$3, t$5), t$5;
					})),
					close: () => (function(e$4) {
						e$4._writableHasInFlightOperation = !0;
					}(e$3), p(o$3(), () => (function(e$4) {
						e$4._writableHasInFlightOperation = !1;
						"erroring" === e$4._writableState && (e$4._writableStoredError = void 0);
						e$4._writableState = "closed";
					}(e$3), null), (t$4) => {
						throw function(e$4, t$5) {
							e$4._writableHasInFlightOperation = !1, e$4._writableState, Rr(e$4, t$5);
						}(e$3, t$4), t$4;
					})),
					abort: (t$4) => (e$3._writableState = "errored", e$3._writableStoredError = t$4, n$3(t$4))
				}, {
					highWaterMark: a$3,
					size: i$3
				});
			}(e$2, i$2, l$2, u$1, s$2, r$2, o$2), e$2._readableState = "readable", e$2._readableStoredError = void 0, e$2._readableCloseRequested = !1, e$2._readablePulling = !1, e$2._readable = function(e$3, t$3, r$3, o$3, n$3, a$3) {
				return new ReadableStream({
					start: (r$4) => (e$3._readableController = r$4, t$3().catch((t$4) => {
						Sr(e$3, t$4);
					})),
					pull: () => (e$3._readablePulling = !0, r$3().catch((t$4) => {
						Sr(e$3, t$4);
					})),
					cancel: (t$4) => (e$3._readableState = "closed", o$3(t$4))
				}, {
					highWaterMark: n$3,
					size: a$3
				});
			}(e$2, i$2, d$1, f$2, n$2, a$2), e$2._backpressure = void 0, e$2._backpressureChangePromise = void 0, e$2._backpressureChangePromise_resolve = void 0, fr(e$2, !0), e$2._transformStreamController = void 0;
		})(this, u((e$2) => {
			b$1 = e$2;
		}), s$1, f$1, i$1, l$1), function(e$2, t$2) {
			const r$2 = Object.create(TransformStreamDefaultController.prototype);
			let o$2, n$2;
			o$2 = void 0 !== t$2.transform ? (e$3) => t$2.transform(e$3, r$2) : (e$3) => {
				try {
					return _r(r$2, e$3), c(void 0);
				} catch (e$4) {
					return d(e$4);
				}
			};
			n$2 = void 0 !== t$2.flush ? () => t$2.flush(r$2) : () => c(void 0);
			(function(e$3, t$3, r$3, o$3) {
				t$3._controlledTransformStream = e$3, e$3._transformStreamController = t$3, t$3._transformAlgorithm = r$3, t$3._flushAlgorithm = o$3;
			})(e$2, r$2, o$2, n$2);
		}(this, a$1), void 0 !== a$1.start ? b$1(a$1.start(this._transformStreamController)) : b$1(void 0);
	}
	get readable() {
		if (!ur(this)) throw yr("readable");
		return this._readable;
	}
	get writable() {
		if (!ur(this)) throw yr("writable");
		return this._writable;
	}
};
function ur(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_transformStreamController") && e$1 instanceof TransformStream;
}
function cr(e$1, t$1) {
	Sr(e$1, t$1), dr(e$1, t$1);
}
function dr(e$1, t$1) {
	hr(e$1._transformStreamController), function(e$2, t$2) {
		e$2._writableController.error(t$2);
		"writable" === e$2._writableState && Tr(e$2, t$2);
	}(e$1, t$1), e$1._backpressure && fr(e$1, !1);
}
function fr(e$1, t$1) {
	void 0 !== e$1._backpressureChangePromise && e$1._backpressureChangePromise_resolve(), e$1._backpressureChangePromise = u((t$2) => {
		e$1._backpressureChangePromise_resolve = t$2;
	}), e$1._backpressure = t$1;
}
Object.defineProperties(TransformStream.prototype, {
	readable: { enumerable: !0 },
	writable: { enumerable: !0 }
}), "symbol" == typeof e.toStringTag && Object.defineProperty(TransformStream.prototype, e.toStringTag, {
	value: "TransformStream",
	configurable: !0
});
var TransformStreamDefaultController = class {
	constructor() {
		throw new TypeError("Illegal constructor");
	}
	get desiredSize() {
		if (!br(this)) throw mr("desiredSize");
		return vr(this._controlledTransformStream);
	}
	enqueue(e$1) {
		if (!br(this)) throw mr("enqueue");
		_r(this, e$1);
	}
	error(e$1) {
		if (!br(this)) throw mr("error");
		var t$1;
		t$1 = e$1, cr(this._controlledTransformStream, t$1);
	}
	terminate() {
		if (!br(this)) throw mr("terminate");
		(function(e$1) {
			const t$1 = e$1._controlledTransformStream;
			gr(t$1) && wr(t$1);
			const r$1 = /* @__PURE__ */ new TypeError("TransformStream terminated");
			dr(t$1, r$1);
		})(this);
	}
};
function br(e$1) {
	return !!r(e$1) && !!Object.prototype.hasOwnProperty.call(e$1, "_controlledTransformStream") && e$1 instanceof TransformStreamDefaultController;
}
function hr(e$1) {
	e$1._transformAlgorithm = void 0, e$1._flushAlgorithm = void 0;
}
function _r(e$1, t$1) {
	const r$1 = e$1._controlledTransformStream;
	if (!gr(r$1)) throw new TypeError("Readable side is not in a state that permits enqueue");
	try {
		(function(e$2, t$2) {
			e$2._readablePulling = !1;
			try {
				e$2._readableController.enqueue(t$2);
			} catch (t$3) {
				throw Sr(e$2, t$3), t$3;
			}
		})(r$1, t$1);
	} catch (e$2) {
		throw dr(r$1, e$2), r$1._readableStoredError;
	}
	const o$1 = function(e$2) {
		return !function(e$3) {
			if (!gr(e$3)) return !1;
			if (e$3._readablePulling) return !0;
			if (vr(e$3) > 0) return !0;
			return !1;
		}(e$2);
	}(r$1);
	o$1 !== r$1._backpressure && fr(r$1, !0);
}
function pr(e$1, t$1) {
	return p(e$1._transformAlgorithm(t$1), void 0, (t$2) => {
		throw cr(e$1._controlledTransformStream, t$2), t$2;
	});
}
function mr(e$1) {
	return /* @__PURE__ */ new TypeError(`TransformStreamDefaultController.prototype.${e$1} can only be used on a TransformStreamDefaultController`);
}
function yr(e$1) {
	return /* @__PURE__ */ new TypeError(`TransformStream.prototype.${e$1} can only be used on a TransformStream`);
}
function gr(e$1) {
	return !e$1._readableCloseRequested && "readable" === e$1._readableState;
}
function wr(e$1) {
	e$1._readableState = "closed", e$1._readableCloseRequested = !0, e$1._readableController.close();
}
function Sr(e$1, t$1) {
	"readable" === e$1._readableState && (e$1._readableState = "errored", e$1._readableStoredError = t$1), e$1._readableController.error(t$1);
}
function vr(e$1) {
	return e$1._readableController.desiredSize;
}
function Rr(e$1, t$1) {
	"writable" !== e$1._writableState ? qr(e$1) : Tr(e$1, t$1);
}
function Tr(e$1, t$1) {
	e$1._writableState = "erroring", e$1._writableStoredError = t$1, !function(e$2) {
		return e$2._writableHasInFlightOperation;
	}(e$1) && e$1._writableStarted && qr(e$1);
}
function qr(e$1) {
	e$1._writableState = "errored";
}
function Cr(e$1) {
	"erroring" === e$1._writableState && qr(e$1);
}
Object.defineProperties(TransformStreamDefaultController.prototype, {
	enqueue: { enumerable: !0 },
	error: { enumerable: !0 },
	terminate: { enumerable: !0 },
	desiredSize: { enumerable: !0 }
}), n(TransformStreamDefaultController.prototype.enqueue, "enqueue"), n(TransformStreamDefaultController.prototype.error, "error"), n(TransformStreamDefaultController.prototype.terminate, "terminate"), "symbol" == typeof e.toStringTag && Object.defineProperty(TransformStreamDefaultController.prototype, e.toStringTag, {
	value: "TransformStreamDefaultController",
	configurable: !0
});

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/isFunction.js
const isFunction = (value) => typeof value === "function";

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/blobHelpers.js
const CHUNK_SIZE = 65536;
async function* clonePart(part) {
	const end = part.byteOffset + part.byteLength;
	let position = part.byteOffset;
	while (position !== end) {
		const size = Math.min(end - position, CHUNK_SIZE);
		const chunk = part.buffer.slice(position, position + size);
		position += chunk.byteLength;
		yield new Uint8Array(chunk);
	}
}
async function* consumeNodeBlob(blob) {
	let position = 0;
	while (position !== blob.size) {
		const chunk = blob.slice(position, Math.min(blob.size, position + CHUNK_SIZE));
		const buffer = await chunk.arrayBuffer();
		position += buffer.byteLength;
		yield new Uint8Array(buffer);
	}
}
async function* consumeBlobParts(parts, clone = false) {
	for (const part of parts) if (ArrayBuffer.isView(part)) if (clone) yield* clonePart(part);
	else yield part;
	else if (isFunction(part.stream)) yield* part.stream();
	else yield* consumeNodeBlob(part);
}
function* sliceBlob(blobParts, blobSize, start = 0, end) {
	end !== null && end !== void 0 || (end = blobSize);
	let relativeStart = start < 0 ? Math.max(blobSize + start, 0) : Math.min(start, blobSize);
	let relativeEnd = end < 0 ? Math.max(blobSize + end, 0) : Math.min(end, blobSize);
	const span = Math.max(relativeEnd - relativeStart, 0);
	let added = 0;
	for (const part of blobParts) {
		if (added >= span) break;
		const partSize = ArrayBuffer.isView(part) ? part.byteLength : part.size;
		if (relativeStart && partSize <= relativeStart) {
			relativeStart -= partSize;
			relativeEnd -= partSize;
		} else {
			let chunk;
			if (ArrayBuffer.isView(part)) {
				chunk = part.subarray(relativeStart, Math.min(partSize, relativeEnd));
				added += chunk.byteLength;
			} else {
				chunk = part.slice(relativeStart, Math.min(partSize, relativeEnd));
				added += chunk.size;
			}
			relativeEnd -= partSize;
			relativeStart = 0;
			yield chunk;
		}
	}
}

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/Blob.js
/*! Based on fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> & David Frank */
var __classPrivateFieldGet$1 = void 0 && (void 0).__classPrivateFieldGet || function(receiver, state, kind, f$1) {
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f$1 : kind === "a" ? f$1.call(receiver) : f$1 ? f$1.value : state.get(receiver);
};
var __classPrivateFieldSet$1 = void 0 && (void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f$1) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f$1.call(receiver, value) : f$1 ? f$1.value = value : state.set(receiver, value), value;
};
var _Blob_parts, _Blob_type, _Blob_size;
var Blob = class Blob {
	constructor(blobParts = [], options = {}) {
		_Blob_parts.set(this, []);
		_Blob_type.set(this, "");
		_Blob_size.set(this, 0);
		options !== null && options !== void 0 || (options = {});
		if (typeof blobParts !== "object" || blobParts === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
		if (!isFunction(blobParts[Symbol.iterator])) throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
		if (typeof options !== "object" && !isFunction(options)) throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
		const encoder = new TextEncoder();
		for (const raw of blobParts) {
			let part;
			if (ArrayBuffer.isView(raw)) part = new Uint8Array(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
			else if (raw instanceof ArrayBuffer) part = new Uint8Array(raw.slice(0));
			else if (raw instanceof Blob) part = raw;
			else part = encoder.encode(String(raw));
			__classPrivateFieldSet$1(this, _Blob_size, __classPrivateFieldGet$1(this, _Blob_size, "f") + (ArrayBuffer.isView(part) ? part.byteLength : part.size), "f");
			__classPrivateFieldGet$1(this, _Blob_parts, "f").push(part);
		}
		const type = options.type === void 0 ? "" : String(options.type);
		__classPrivateFieldSet$1(this, _Blob_type, /^[\x20-\x7E]*$/.test(type) ? type : "", "f");
	}
	static [(_Blob_parts = /* @__PURE__ */ new WeakMap(), _Blob_type = /* @__PURE__ */ new WeakMap(), _Blob_size = /* @__PURE__ */ new WeakMap(), Symbol.hasInstance)](value) {
		return Boolean(value && typeof value === "object" && isFunction(value.constructor) && (isFunction(value.stream) || isFunction(value.arrayBuffer)) && /^(Blob|File)$/.test(value[Symbol.toStringTag]));
	}
	get type() {
		return __classPrivateFieldGet$1(this, _Blob_type, "f");
	}
	get size() {
		return __classPrivateFieldGet$1(this, _Blob_size, "f");
	}
	slice(start, end, contentType) {
		return new Blob(sliceBlob(__classPrivateFieldGet$1(this, _Blob_parts, "f"), this.size, start, end), { type: contentType });
	}
	async text() {
		const decoder = new TextDecoder();
		let result = "";
		for await (const chunk of consumeBlobParts(__classPrivateFieldGet$1(this, _Blob_parts, "f"))) result += decoder.decode(chunk, { stream: true });
		result += decoder.decode();
		return result;
	}
	async arrayBuffer() {
		const view = new Uint8Array(this.size);
		let offset = 0;
		for await (const chunk of consumeBlobParts(__classPrivateFieldGet$1(this, _Blob_parts, "f"))) {
			view.set(chunk, offset);
			offset += chunk.length;
		}
		return view.buffer;
	}
	stream() {
		const iterator = consumeBlobParts(__classPrivateFieldGet$1(this, _Blob_parts, "f"), true);
		return new ReadableStream({
			async pull(controller) {
				const { value, done } = await iterator.next();
				if (done) return queueMicrotask(() => controller.close());
				controller.enqueue(value);
			},
			async cancel() {
				await iterator.return();
			}
		});
	}
	get [Symbol.toStringTag]() {
		return "Blob";
	}
};
Object.defineProperties(Blob.prototype, {
	type: { enumerable: true },
	size: { enumerable: true },
	slice: { enumerable: true },
	stream: { enumerable: true },
	text: { enumerable: true },
	arrayBuffer: { enumerable: true }
});

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/File.js
var __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f$1) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f$1.call(receiver, value) : f$1 ? f$1.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function(receiver, state, kind, f$1) {
	if (kind === "a" && !f$1) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f$1 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f$1 : kind === "a" ? f$1.call(receiver) : f$1 ? f$1.value : state.get(receiver);
};
var _File_name, _File_lastModified;
var File = class extends Blob {
	constructor(fileBits, name, options = {}) {
		super(fileBits, options);
		_File_name.set(this, void 0);
		_File_lastModified.set(this, 0);
		if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
		__classPrivateFieldSet(this, _File_name, String(name), "f");
		const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
		if (!Number.isNaN(lastModified)) __classPrivateFieldSet(this, _File_lastModified, lastModified, "f");
	}
	static [(_File_name = /* @__PURE__ */ new WeakMap(), _File_lastModified = /* @__PURE__ */ new WeakMap(), Symbol.hasInstance)](value) {
		return value instanceof Blob && value[Symbol.toStringTag] === "File" && typeof value.name === "string";
	}
	get name() {
		return __classPrivateFieldGet(this, _File_name, "f");
	}
	get lastModified() {
		return __classPrivateFieldGet(this, _File_lastModified, "f");
	}
	get webkitRelativePath() {
		return "";
	}
	get [Symbol.toStringTag]() {
		return "File";
	}
};

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/isFile.js
const isFile = (value) => value instanceof File;

//#endregion
export { Blob, File, __commonJS, __require, __toESM, isFile, isFunction };