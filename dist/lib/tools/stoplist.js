"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function load(language, stopwords) {
    const list = stopwords || require('../stopwords/' + language).default;
    return new Set(list);
}
exports.default = load;
//# sourceMappingURL=stoplist.js.map