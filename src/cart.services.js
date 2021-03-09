export const carts = [];

export let bookmarksCarts =[];


//ADD FAVORITE ITEM IN BOOKMARKSCARTS
export const addBookmarks = (cart)=>{
    bookmarksCarts.push(cart);

}
//REMOVE ITEM FROM BOOKMARKSCARTS 

export const removeFavorite =(cart)=>{
    const exist = bookmarksCarts.find(x =>x.title === cart.title);
    const indexOfItemToRemove = bookmarksCarts.indexOf(cart);
    console.log('index to remove', indexOfItemToRemove);
    console.log('exist',exist);
    bookmarksCarts.splice(indexOfItemToRemove, 1)
}
export const getsBookmarks =()=>{
    return bookmarksCarts
}

//ADD ITEM IN CART ( BASKET )
export const addCart =(cart)=>{
    carts.push(cart)
}

//OVO MI JE FUNKCIJA KOJU SAM POKUSAO DA NAPRAVIM DA MI NE DODAJE ISTI 
//ELEMENT U KORPU,NEGO DA PUNI QUANTITY...RADI FUNKCIJA,NE DODAJE ISTI ELEMENT,
//ALI MI NE PUNI QUANTITI 

// export const addCart= (cart)=>{
// const exist = carts.find(x =>x.title === cart.title);
// if(exist){
//     carts.map(x => x.title === cart.title ? {...exist, qty:exist.qty + 1} :x ) 
// }else{
    
//          carts.push({...cart, qty: 1});
// }
// }


//REMOVE ITEM FORM CART ( BASKET )
export const removeCart =(cart)=>{
    const exist = carts.find(x =>x.title === cart.title);
    const indexOfItemToRemove = carts.indexOf(cart);
    console.log('index to remove', indexOfItemToRemove);
    console.log('exist',exist);
    carts.splice(indexOfItemToRemove, 1)
}


export const getCarts=()=>{
    return carts;
}