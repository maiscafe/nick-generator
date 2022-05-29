const result = document.getElementById('resultado')
const btnTeste = document.getElementById('btnTeste')
const numberWord = document.getElementById('numberWord')
const consoante = "b c d f g h j k l m n p r s t v w x y z".split(' ')
const vogal = "a e i o u y".split(' ')
const blacklist =[]
var letras = 4

blacklist.push('cufoxo', 'curoxo', 'curoxo', 'pica', 'picanela', 'ecudocu')


btnTeste.addEventListener("click", showNick)

function showNick() {
    
    let nickname =  createNick()
    while (hasOnBlackList(nickname)) {
        nickname = createNick()
        console.log(nickname);
    }
    result.textContent = nickname.toUpperCase();
}

function createNick() {
    let nickname = '';
    let dice = Math.ceil(Math.random()* 2 )
    console.log(dice);
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