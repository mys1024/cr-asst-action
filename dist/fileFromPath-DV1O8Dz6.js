import { File, __commonJS, __require, __toESM, isFile } from "./isFile-BS595NCG.js";
import { createReadStream, promises } from "fs";
import { basename } from "path";

//#region node_modules/.pnpm/node-domexception@1.0.0/node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({ "node_modules/.pnpm/node-domexception@1.0.0/node_modules/node-domexception/index.js"(exports, module) {
	/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
	if (!globalThis.DOMException) try {
		const { MessageChannel } = __require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
		port.postMessage(ab, [ab, ab]);
	} catch (err) {
		err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
	}
	module.exports = globalThis.DOMException;
} });
var import_node_domexception = __toESM(require_node_domexception(), 1);

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/isPlainObject.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
function isPlainObject(value) {
	if (getType(value) !== "object") return false;
	const pp = Object.getPrototypeOf(value);
	if (pp === null || pp === void 0) return true;
	const Ctor = pp.constructor && pp.constructor.toString();
	return Ctor === Object.toString();
}
var isPlainObject_default = isPlainObject;

//#endregion
//#region node_modules/.pnpm/formdata-node@4.4.1/node_modules/formdata-node/lib/esm/fileFromPath.js
var __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FileFromPath_path, _FileFromPath_start;
const MESSAGE = "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.";
var FileFromPath = class FileFromPath {
	constructor(input) {
		_FileFromPath_path.set(this, void 0);
		_FileFromPath_start.set(this, void 0);
		__classPrivateFieldSet(this, _FileFromPath_path, input.path, "f");
		__classPrivateFieldSet(this, _FileFromPath_start, input.start || 0, "f");
		this.name = basename(__classPrivateFieldGet(this, _FileFromPath_path, "f"));
		this.size = input.size;
		this.lastModified = input.lastModified;
	}
	slice(start, end) {
		return new FileFromPath({
			path: __classPrivateFieldGet(this, _FileFromPath_path, "f"),
			lastModified: this.lastModified,
			size: end - start,
			start
		});
	}
	async *stream() {
		const { mtimeMs } = await promises.stat(__classPrivateFieldGet(this, _FileFromPath_path, "f"));
		if (mtimeMs > this.lastModified) throw new import_node_domexception.default(MESSAGE, "NotReadableError");
		if (this.size) yield* createReadStream(__classPrivateFieldGet(this, _FileFromPath_path, "f"), {
			start: __classPrivateFieldGet(this, _FileFromPath_start, "f"),
			end: __classPrivateFieldGet(this, _FileFromPath_start, "f") + this.size - 1
		});
	}
	get [(_FileFromPath_path = new WeakMap(), _FileFromPath_start = new WeakMap(), Symbol.toStringTag)]() {
		return "File";
	}
};
function createFileFromPath(path, { mtimeMs, size }, filenameOrOptions, options = {}) {
	let filename;
	if (isPlainObject_default(filenameOrOptions)) [options, filename] = [filenameOrOptions, void 0];
	else filename = filenameOrOptions;
	const file = new FileFromPath({
		path,
		size,
		lastModified: mtimeMs
	});
	if (!filename) filename = file.name;
	return new File([file], filename, {
		...options,
		lastModified: file.lastModified
	});
}
async function fileFromPath(path, filenameOrOptions, options) {
	const stats = await promises.stat(path);
	return createFileFromPath(path, stats, filenameOrOptions, options);
}

//#endregion
export { fileFromPath };