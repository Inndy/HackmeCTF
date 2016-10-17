import { WeakPRNG } from 'utils/PRNG'

var I = 0
var prng = new WeakPRNG()

const CATEGORIES = 'Misc,Web,Forensic,Reverse,Pwn,Crypto,PPC'.split(/,/g)
const PREFIXES = 'Baby,Easy,Trivial,Hard,Hell,Very'.split(/,/g)
const NAMES = 'Web,Guestbook,Homework,SQLi,Overflow,BoF,ROP,Heap,Calc,Math,RSA,DES,AES'.split(/,/g)
const SUFFIX = '-ng,Rev,,,'.split(/,/g)

function generate_categories() {
  return prng.shuffle(Array.from(CATEGORIES)).slice(0, prng.rand(3) + 1)
}

function generate_challenge() {
  var id = ++I
  var name = `${prng.choice(PREFIXES)} ${prng.choice(NAMES)}${prng.choice(SUFFIX)}`
  var categories = generate_categories()
  var solved = prng.next() % 3 == 1
  var description = `This is challenge ${name} with categories: <code>${categories.join(", ")}</code>`
  if(id == 1) {
    name = 'Flag'
    categories = ['Flag']
  }
  return { id, name, categories, solved, description }
}

export default {
  generate_challenge, CATEGORIES
}
