import LocalizedStrings, { LocalizedStringsMethods } from "localized-strings";
import en from "./en.json";
import fi from "./fi.json";

/**
 * Interface describing localized strings
 */
export interface IStrings extends LocalizedStringsMethods {

  /**
   * Translations related to generic words
   */
  generic: {
    notImplemented: string;
  };

  /**
   * Translations related to error handling
   */
  errorHandling: {
    title: string;
  };

}

const strings: IStrings = new LocalizedStrings({ en: en, fi: fi });

export default strings;