"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const condense_whitespace_1 = __importDefault(require("condense-whitespace"));
function strip(text) {
    const txt = text
        .replace(/[^a-zäöüß']/gi, ' ')
        .replace(/(^|\s)+\w($|\s)+/g, ' ');
    return (0, condense_whitespace_1.default)(txt);
}
exports.default = strip;
//# sourceMappingURL=strip.js.map