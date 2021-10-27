/**
 * Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

//alert Un alert() espone 5 numeri generati casualmente.
//5 variabili che danno numeri casuali
submitform() 
  function submitform() {
     let x = Math.floor((Math.random() *100) + 1);
     let y = Math.floor((Math.random() *100) + 1);
     let g = Math.floor((Math.random() *100) + 1);
     let f = Math.floor((Math.random() *100) + 1);
     let n = Math.floor((Math.random() *100) + 1);

      alert(`The request number is ${x} ${y} ${g} ${f} ${n}`); 
  }


  //Da li parte un timer di 30 secondi.
  