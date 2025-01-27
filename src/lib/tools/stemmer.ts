/**
 * This Stemmer is a class and not a function because it must be able to track
 * all processed words and stems for later usage. You can initialize one for
 * a given language and then use its `stem` method repeatedly. It keeps track
 * of both: words and their stems, simultaneously.
 */

import Snowball from 'snowball'
import StringCounter from '../data_structures/string_counter'
import StringDictionary from '../data_structures/string_dictionary'

export default class Stemmer {
  private wordStems = new StringDictionary()
  private stemCounts = new StringCounter()
  private stemmer: any

  // for a list of available languages, see
  // https://github.com/fortnightlabs/snowball-js/tree/master/stemmer/src/ext
  constructor(private language: string = 'english') {
    this.stemmer = new Snowball(language)
  }

  // process a given word, return the stem, and track metrics
  public stem(word: string): string {
    let stem = this.wordStems.get(word)
    if (!stem) {
      this.stemmer.setCurrent(word)
      this.stemmer.stem()
      stem = this.stemmer.getCurrent()
      this.wordStems.add(word, stem)
    }
    this.stemCounts.count(stem)
    return stem
  }

  public getStems(): string[] {
    return this.stemCounts.strings()
  }
}
