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
const string_counter_1 = __importDefault(require("../../lib/data_structures/string_counter"));
let StringCounterTest = class StringCounterTest {
    countsNewWords() {
        const sc = new string_counter_1.default();
        sc.count('lorem');
        sc.count('ipsum');
        const result = sc.strings();
        const expected = ['lorem', 'ipsum'];
        (0, chai_1.expect)(result).to.have.same.members(expected);
    }
    countsExistingWords() {
        const sc = new string_counter_1.default();
        sc.count('lorem');
        sc.count('lorem');
        const result = sc.strings();
        const expected = ['lorem'];
        (0, chai_1.expect)(result).to.have.same.members(expected);
    }
    ignoresEmptyInput() {
        const sc = new string_counter_1.default();
        sc.count('');
        sc.count(null);
        const result = sc.strings();
        const expected = [];
        (0, chai_1.expect)(result).to.have.same.members(expected);
    }
};
__decorate([
    mocha_1.test
], StringCounterTest.prototype, "countsNewWords", null);
__decorate([
    mocha_1.test
], StringCounterTest.prototype, "countsExistingWords", null);
__decorate([
    mocha_1.test
], StringCounterTest.prototype, "ignoresEmptyInput", null);
StringCounterTest = __decorate([
    (0, mocha_1.suite)((0, mocha_1.timeout)(100), (0, mocha_1.slow)(10))
], StringCounterTest);
//# sourceMappingURL=string_counter.js.map