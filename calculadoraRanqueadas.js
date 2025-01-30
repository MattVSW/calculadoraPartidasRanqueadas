function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

vitorias = [100, 300, 51, 89, 257]
derrotas = [27, 150, 27, 12, 160]

for(let i = 0; i < derrotas.length; i++) {

    let saldo = saldoVitorias(vitorias[i], derrotas[i])
    let nivel

    if (saldo <= 10){
        nivel = "Ferro"}

    else if (saldo > 10 && saldo <= 20){
        nivel = "Bronze"}
            

    else if (saldo > 20 && saldo <= 50){
        nivel = "Prata"}
              

    else if (saldo > 50 && saldo <= 80){
        nivel = "Ouro"}
            

    else if (saldo > 80 && saldo <= 90){
        nivel = "Diamante"}
            

    else if (saldo > 90 && saldo <= 100){
        nivel = "Lendário"}
            

    else if (saldo > 100){
        nivel = "Imortal"}

    console.log(`O Herói tem um de saldo de ${saldo} vitorias e está no nível de ${nivel}`)
}