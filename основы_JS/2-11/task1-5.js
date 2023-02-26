alert( null || 2 || undefined ); // выдаст 2

alert( alert(1) || 2 || alert(3) ); // выдаст сначала 1, потом 2

alert( 1 && null && 2 ); // выдаст null

alert( alert(1) && alert(2) ); // выдаст сначала 1, потом undefined

alert( null || 2 && 3 || 4 ); // выдаст 3