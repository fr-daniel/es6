function sum(a, b) {
    return a + b;
}

//named export
//ter vários exports em um mesmo arquivo
//só pode chamar com o mesmo nome
//import precisa das chaves
export function sub(a, b) {
    return a - b;
}

/*
    método principal
    apenas default por arquivo
    import com qualquer nome 
    não precisa das {}
*/
export default sum;