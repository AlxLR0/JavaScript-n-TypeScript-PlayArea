
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // gimi ma money!!!
        resolve(100);
        reject('No money for you');
    },2000)
})

myPromise.then((myMoney)=>{
    console.log(`I got my money: ${myMoney}`);
}).catch((reason)=>{
    console.warn(`I didn't get my money: ${reason}`);
}).finally(()=>{console.log('lol')});

