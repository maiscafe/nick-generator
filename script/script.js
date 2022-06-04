const result = document.getElementById('resultado')
const btnGerar = document.getElementById('btnGerar')
const numberWord = document.getElementById('numberWord')
const btnCopy = document.getElementById('btnCopy')
const tagsDiv = document.getElementsByName('tagsRadio')
const consoante = "b c d f g h j k l m n p r s t v w x y z".split(' ')
const vogal = "a e i o u y".split(' ')
const blacklist =[]
const suffx = ["Mr", "Sir", "Psy", "Lord", "Killer-", "xX", "x-", "$$", "X*", "X-x", "¨¨", "LORD-"];
const prefix = ["xX", "-x", "$$", "*X", "x-X", "¨¨", "Killer", "Psy"];
var letras = 4
var nickname

blacklist.push('cufoxo', 'curoxo', 'curoxo', 'pica', 'picanela', 'ecudocu', 'xerecuda', 'nazi', 'nazixe', 'cunapica', 'buceta', 'xota', 'bucetona', 'feminazi', 'furico', 'culo' )


btnGerar.addEventListener("click", showNick)
btnCopy.addEventListener("click", copy)

function showNick() {
    let nickname =  createNick()
    while (hasOnBlackList(nickname)) {
        nickname = createNick()
    }

    result.textContent = nickname;

}

function createNick() {
    nickname = '';
    let dice = Math.ceil(Math.random()* 2 ) //1 para vogal 2 para consoante
    if (dice == 1) {
        for(let i = 0; i<=numberWord.value/2; i++ ){
            let conso = (consoante[Math.floor(Math.random() * consoante.length)]);
            let vog = (vogal[Math.floor(Math.random() * vogal.length)]);
            nickname += conso
            nickname += vog
        }
        return nickname
    } else {
        nickname+= (vogal[Math.floor(Math.random() * vogal.length)]); 
        
        for (let i = 0; i<=numberWord.value/2; i++ ){ 

            let conso = (consoante[Math.floor(Math.random() * consoante.length)]);
            let vog = (vogal[Math.floor(Math.random() * vogal.length)]);
            nickname += conso
            if (i !==numberWord.value/2-1) {
                nickname += vog
            }
            
        }

        return nickname
    }

}

function hasOnBlackList (nick) {
    return blacklist.includes(nick)
}

function copy() {
    console.log(nickname);
    navigator.clipboard.writeText(nickname)
    btnCopy.innerHTML = 'Copiado!'
    setTimeout(()=> {
        btnCopy.innerHTML = 'Copiar nickname 🗎';
    }, 2000)
}