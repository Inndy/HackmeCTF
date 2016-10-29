import { WeakPRNG } from 'utils/PRNG'

var I = 0
var prng = new WeakPRNG()

const CATEGORIES = 'Misc,Web,Forensic,Reverse,Pwn,Crypto,PPC'.split(/,/g)
const PREFIXES = 'Baby,Easy,Trivial,Hard,Hell,Very'.split(/,/g)
const NAMES = 'Web,Guestbook,Homework,SQLi,Overflow,BoF,ROP,Heap,Calc,Math,RSA,DES,AES'.split(/,/g)
const SUFFIX = '-ng,Rev,,,'.split(/,/g)
const PROTOCOL = 'http://,https://'.split(/,/g)
const DOMAIN = 'hackme.inndy.tw,security.ntu.st'.split(/,/g)
const URL = '/data,/static,/flag,,'.split(/,/g)

function generate_categories() {
  return prng.shuffle(Array.from(CATEGORIES)).slice(0, prng.rand(3) + 1)
}

function generate_challenge() {
  var id = ++I
  var name = `${prng.choice(PREFIXES)} ${prng.choice(NAMES)}${prng.choice(SUFFIX)}`
  var categories = generate_categories()
  var solved = prng.next() % 3 == 1
  var url = `${prng.choice(PROTOCOL)}${prng.choice(DOMAIN)}${prng.choice(URL)}`
  var solved_count = prng.rand(17)
  var points = prng.rand(6) * 50 + 50

  for(var i = 0; i < prng.rand(2); i++)
    url += prng.choice(URL)


  if(id == 1) {
    name = 'Flag'
    categories = ['Flag']
    points = 50
  }

  var description = `This is challenge ${name} with categories: <code>${categories.join(", ")}</code>`
  return { id, name, categories, solved, description, url, solved_count }
}

export default {
  generate_challenge, CATEGORIES
}
