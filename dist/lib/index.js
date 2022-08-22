"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const rake_1 = require("./rake");
const guess_language_1 = __importDefault(require("./tools/guess_language"));
const defaults = {
    delimiters: ['\\s+'],
    language: 'english',
    optimalPercentage: 66.6,
    stopwords: [],
};
function process(text, opts) {
    const options = (0, lodash_1.merge)({}, defaults, opts);
    if (!opts || !opts.language) {
        options.language = (0, guess_language_1.default)(text);
    }
    const params = (0, lodash_1.merge)(options, { corpus: text });
    const keywords = (0, rake_1.rake)(params);
    return keywords;
}
exports.default = process;
//# sourceMappingURL=index.js.map