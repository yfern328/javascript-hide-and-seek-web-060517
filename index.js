function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let snippet = document.querySelectorAll("div#grand-node")[0]
  let string = "div#grand-node"

  while(snippet.children[0]){
    string += ` ${snippet.localName}`
    snippet = snippet.children[0]
  }

  return document.querySelectorAll(string)[0]

}

function increaseRankBy(n){
  return document.querySelectorAll('ul.ranked-list li').forEach(item => {item.innerText = `${parseInt(item.innerText) + n}`})
}
