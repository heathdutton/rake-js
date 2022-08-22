"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs_1 = require("fs");
const mocha_1 = require("@testdeck/mocha");
const path_1 = require("path");
const rake_1 = require("../lib/rake");
let RAKE = class RAKE {
    worksWithSimpleTexts() {
        const input = {
            corpus: `For decades, video games have been criticized for
                purportedly wasting time, stifling creativity, and even
                influencing violent behaviors. Now, it seems that video games
                have become an unlikely tool for AI researchers to improve
                their systems.`,
            delimiters: ['\\s+'],
            language: 'english',
            optimalPercentage: 66.6,
            stopwords: [],
        };
        const expected = [
            'video games',
            'purportedly wasting time',
            'influencing violent behaviors',
            'stifling creativity',
        ];
        const result = (0, rake_1.rake)(input);
        (0, chai_1.expect)(result).to.have.same.members(expected);
    }
    worksWithNewsContent() {
        const file = (0, path_1.join)(__dirname, '..', '..', 'examples', 'venturebeat.txt');
        const input = {
            corpus: (0, fs_1.readFileSync)(file, 'utf-8'),
            delimiters: ['\\s+'],
            language: 'english',
            optimalPercentage: 66.6,
            stopwords: [],
        };
        const result = (0, rake_1.rake)(input);
        (0, chai_1.expect)(result).to.include('latest game dev tools');
        (0, chai_1.expect)(result).to.include('video games');
        (0, chai_1.expect)(result).to.include('machine learning');
    }
    worksWithGermanNewsContent() {
        const file = (0, path_1.join)(__dirname, '..', '..', 'examples', 'spiegel.txt');
        const input = {
            corpus: (0, fs_1.readFileSync)(file, 'utf-8'),
            delimiters: ['\\s+'],
            language: 'german',
            optimalPercentage: 66.6,
            stopwords: [],
        };
        const result = (0, rake_1.rake)(input);
        (0, chai_1.expect)(result).to.include('mietpreisbremse');
        (0, chai_1.expect)(result).to.include('vermieter');
        (0, chai_1.expect)(result).to.include('deutschland');
    }
    worksWithGermanPressContent() {
        const file = (0, path_1.join)(__dirname, '..', '..', 'examples', 'ntv.txt');
        const input = {
            corpus: (0, fs_1.readFileSync)(file, 'utf-8'),
            delimiters: ['\\s+'],
            language: 'german',
            optimalPercentage: 66.6,
            stopwords: [],
        };
        const result = (0, rake_1.rake)(input);
        (0, chai_1.expect)(result).to.include('teleskop');
        (0, chai_1.expect)(result).to.include('california institute of technology caltech');
        (0, chai_1.expect)(result).to.include('de zeeuw');
    }
    worksWithLongFormContent() {
        const file = (0, path_1.join)(__dirname, '..', '..', 'examples', 'waitbutwhy.txt');
        const input = {
            corpus: (0, fs_1.readFileSync)(file, 'utf-8'),
            delimiters: ['\\s+'],
            language: 'english',
            optimalPercentage: 66.6,
            stopwords: [],
        };
        const result = (0, rake_1.rake)(input);
        (0, chai_1.expect)(result).to.include('artificial intelligence');
        (0, chai_1.expect)(result).to.include('brain emulation');
        (0, chai_1.expect)(result).to.include('computers');
        (0, chai_1.expect)(result).to.include('evolution');
    }
};
__decorate([
    mocha_1.test
], RAKE.prototype, "worksWithSimpleTexts", null);
__decorate([
    mocha_1.test
], RAKE.prototype, "worksWithNewsContent", null);
__decorate([
    mocha_1.test
], RAKE.prototype, "worksWithGermanNewsContent", null);
__decorate([
    mocha_1.test
], RAKE.prototype, "worksWithGermanPressContent", null);
__decorate([
    mocha_1.test
], RAKE.prototype, "worksWithLongFormContent", null);
RAKE = __decorate([
    (0, mocha_1.suite)((0, mocha_1.timeout)(1000), (0, mocha_1.slow)(100))
], RAKE);
//# sourceMappingURL=rake.js.map