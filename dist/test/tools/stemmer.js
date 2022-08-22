"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("@testdeck/mocha");
const stemmer_1 = __importDefault(require("../../lib/tools/stemmer"));
let StemmerTest = class StemmerTest {
    worksWithEnglishDefaults() {
        const stemmer = new stemmer_1.default();
        stemmer.stem('working');
        const result = stemmer.getStems();
        const expected = ['work'];
        (0, chai_1.expect)(result).to.have.same.members(expected);
    }
};
__decorate([
    mocha_1.test
], StemmerTest.prototype, "worksWithEnglishDefaults", null);
StemmerTest = __decorate([
    (0, mocha_1.suite)((0, mocha_1.timeout)(100), (0, mocha_1.slow)(10))
], StemmerTest);
//# sourceMappingURL=stemmer.js.map