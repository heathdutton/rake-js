"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rake = void 0;
const word_matrix_1 = __importDefault(require("./data_structures/word_matrix"));
const parser_1 = __importDefault(require("./tools/parser"));
const preprocessor_1 = __importDefault(require("./tools/preprocessor"));
const stemmer_1 = __importDefault(require("./tools/stemmer"));
const stoplist_1 = __importDefault(require("./tools/stoplist"));
function rake(params) {
    const preprocessor = new preprocessor_1.default(params.delimiters);
    const wordArray = preprocessor.process(params.corpus);
    const stemmer = new stemmer_1.default(params.language);
    const stopwords = (0, stoplist_1.default)(params.language, params.stopwords);
    const parser = new parser_1.default(stemmer, stopwords).process(wordArray);
    const stemList = stemmer.getStems();
    const matrix = new word_matrix_1.default(stemList);
    for (const phrase of parser.phrases) {
        matrix.process(phrase.stems);
    }
    const stemScores = matrix.calculateScores();
    for (const phrase of parser.phrases) {
        phrase.calculateScore(stemScores);
    }
    parser.joinDuplicates();
    return parser.bestPhrases(params.optimalPercentage);
}
exports.rake = rake;
//# sourceMappingURL=rake.js.map