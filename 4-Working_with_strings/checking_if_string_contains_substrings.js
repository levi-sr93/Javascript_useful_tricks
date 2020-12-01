const URL = 'https://api.github.com.br/levi-sr93'

const containsWord = URL.includes('github'); // -> true
console.log(containsWord)

const containsWordIndexInfo = URL.indexOf('github'); // -> 12
console.log(containsWordIndexInfo)

const startsWithWord = URL.startsWith('https'); //-> true
console.log(startsWithWord);

const endsWithWord = URL.endsWith('levi-sr93') // -> true
console.log(endsWithWord);