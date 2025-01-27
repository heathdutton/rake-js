"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const franc_1 = require("franc");
const languageNameMapping = {
    deu: 'german',
    eng: 'english',
    ita: 'italian',
    nld: 'dutch',
    por: 'portuguese',
    spa: 'spanish',
    swh: 'swedish',
};
function guessLanguage(text) {
    return languageNameMapping[(0, franc_1.franc)(text)] || 'english';
}
exports.default = guessLanguage;
//# sourceMappingURL=guess_language.js.map