if (-1 || 0) alert( 'first' ); // работает. Результат -1
if (-1 && 0) alert( 'second' ); // не работает. Результат 0
if (null || -1 && 1) alert( 'third' ); // работает. Резальтат 1