function checkOpe(char) {
    let ope = '+-/*^()'
    return ope.includes(char)
}

function usepop(last, cur) {
    let level = '(  )  +- /* ^'
    return level.indexOf(last) - level.indexOf(cur) > -2
}

function createLi(text, add) {
    let li = document.createElement('li')
    li.innerText = text
    document.getElementById(`${add}`).appendChild(li)
}

function Convert() {
    document.getElementById('postfixBox').innerHTML = ''
    let postfix = []
    let sym = []
    let infix = document.getElementById('input').value;
    for (let i of infix) {
        if (checkOpe(i)) {
            if (i == ')') {
                while (sym[sym.length - 1] != '(') {
                    postfix.push(sym.pop())
                }
                sym.pop()
                continue
            }

            while (usepop(sym[sym.length - 1], i) && i != '(') {
                postfix.push(sym.pop())
            }
            sym.push(i)

        } else {
            postfix.push(i)
        }

        createLi(postfix.join(''), 'postfixBox')

    }
    while (sym.length != 0) {
        postfix.push(sym.pop())
    }
    createLi(postfix.join(''), 'postfixBox')
}