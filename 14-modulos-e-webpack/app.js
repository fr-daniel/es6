import { union, uniq } from 'ramda';
import soma, {sub} from './utils';

/*
    import * from 'biblioteca';
    * => tudo
    import * as NOME from biblioteca
    as => alias para o método
    import método from 'ramda';
    => funciona apenas quando é retornado apenas um método
    import { método1, método2 } from 'ramda';
    import { método as NovoNome } from biblioteca
*/

const arr1 = [1, 3, 4, 2, 3, 5, 6, 1, 5, 5, 6];
const arr2 = [2, 4, 2, 9, 8, 8, 10, 0, 1, 3, 7];

const arr3 = union(arr1, arr2);
const arr4 = uniq(arr1);

console.log( arr3 );
console.log( arr4 );

console.log( soma(3, 2) );
console.log( sub(3, 2) );