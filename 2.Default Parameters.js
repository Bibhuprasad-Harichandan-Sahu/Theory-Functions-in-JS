function greeting(name="stranger"){
    console.log(`hello,${name}!`)
}
greeting("Berlin");//hello,Berlin!





function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
makeShoppingList();
// output->Remember to buy milk
// Remember to buy bread
// Remember to buy eggs
