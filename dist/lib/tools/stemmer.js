"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snowball_1 = __importDefault(require("snowball"));
const string_counter_1 = __importDefault(require("../data_structures/string_counter"));
const string_dictionary_1 = __importDefault(require("../data_structures/string_dictionary"));
class Stemmer {
    constructor(language = 'english') {
        this.language = language;
        this.wordStems = new string_dictionary_1.default();
        this.stemCounts = new string_counter_1.default();
        this.stemmer = new snowball_1.default(language);
    }
    stem(word) {
        let stem = this.wordStems.get(word);
        if (!stem) {
            this.stemmer.setCurrent(word);
            this.stemmer.stem();
            stem = this.stemmer.getCurrent();
            this.wordStems.add(word, stem);
        }
        this.stemCounts.count(stem);
        return stem;
    }
    getStems() {
        return this.stemCounts.strings();
    }
}
exports.default = Stemmer;
//# sourceMappingURL=stemmer.js.map