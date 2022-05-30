const result = document.getElementById('resultado')
const btnTeste = document.getElementById('btnTeste')
const numberWord = document.getElementById('numberWord')
const btnCopy = document.getElementById('btnCopy')
const consoante = "b c d f g h j k l m n p r s t v w x y z".split(' ')
const vogal = "a e i o u y".split(' ')
const blacklist =[]
const suffx = ["Mr", "Sir", "Psy", "Lord", "Killer-", "xX", "x-", "$$", "X*", "X-x", "¨¨", "LORD-"];
const prefix = ["xX", "-x", "$$", "*X", "x-X", "¨¨", "Killer", "Psy"];
var letras = 4
var nickname

blacklist.push('cufoxo', 'curoxo', 'curoxo', 'pica', 'picanela', 'ecudocu', 'xerecuda', 'nazi', 'nazixe', 'cunapica', 'buceta', 'xota', 'bucetona', 'feminazi', 'furico', 'culo' )


btnTeste.addEventListener("click", showNick)
btnCopy.addEventListener("click", copy)

function showNick() {
    
    let nickname =  createNick()
    while (hasOnBlackList(nickname)) {
        nickname = createNick()
    }
    nickname = nickname.toUpperCase()
    let dice = Math.floor(Math.random()* 20 )
    let dice1 = Math.floor(Math.random()* suffx.length )
    let dice2 = Math.floor(Math.random()* prefix.length )
    if (dice > 17 && dice <= 20) {
        nickname = prefix[dice2] + nickname + suffx[dice1]
    } else if (dice <= 14) {
        switch (dice) {
            case 1: nickname = 'xX' + nickname + 'Xx';
                break;
            case 2: nickname = 'x-' + nickname + '-x';
                break;
            case 3: nickname = 'Sir-' + nickname;
                break;
            case 4: nickname = 'Mr-' + nickname;
                break;
            case 5: nickname = 'Psy-' + nickname;
                break;
            case 6: nickname = '$$' + nickname + '$$';
                break;
            case 7: nickname = 'X*' + nickname + '*X';
                break;
            case 8: nickname = 'X-x' + nickname + 'x-X';
                break;
            case 9: nickname = '¨¨' + nickname + '¨¨';
                break;
            case 10: nickname = 'LORD-' + nickname;
                break;
            case 11: nickname = nickname + 'Killer';
                break;
            case 12: nickname = nickname + '-Killer';
                break;
            case 13: nickname = nickname.replace(/[Aa]/g, '4');
                break;
            case 14: nickname = nickname.replace(/[Ee]/g, '3');
                break;
        }
    }
    

    result.textContent = nickname;

}

function createNick() {
    nickname = '';
    let dice = Math.ceil(Math.random()* 2 )
    if (dice == 1) {
        for(let i = 0; i<=numberWord.value/2; i++ ){ // NÃO MEXA NESTA LINHA
            let conso = (consoante[Math.floor(Math.random() * consoante.length)]);
            let vog = (vogal[Math.floor(Math.random() * vogal.length)]);
            nickname += conso
            nickname += vog
        }
        return nickname
    } else {
        nickname+= (vogal[Math.floor(Math.random() * vogal.length)]); 
        for (let i = 0; i<=numberWord.value/2; i++ ){ // NÃO MEXA NESTA LINHA

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