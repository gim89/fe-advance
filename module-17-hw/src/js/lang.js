const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("")
};

const kbLang = {
  kbTop: lang.en.slice(0, 12),
  kbMiddle: lang.en.slice(12, 23),
  kbBottom: lang.en.slice(23, lang.en.length-1)
}

export {lang, kbLang};
