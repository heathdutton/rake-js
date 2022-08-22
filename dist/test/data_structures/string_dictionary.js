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
const string_dictionary_1 = __importDefault(require("../../lib/data_structures/string_dictionary"));
let StringDictionaryTest = class StringDictionaryTest {
    addsNewWords() {
        const sd = new string_dictionary_1.default();
        sd.add('lorem', 'ipsum');
        const result = sd.get('lorem');
        const expected = 'ipsum';
        (0, chai_1.expect)(result).to.be.equal(expected);
    }
};
__decorate([
    mocha_1.test
], StringDictionaryTest.prototype, "addsNewWords", null);
StringDictionaryTest = __decorate([
    (0, mocha_1.suite)((0, mocha_1.timeout)(100), (0, mocha_1.slow)(10))
], StringDictionaryTest);
//# sourceMappingURL=string_dictionary.js.map