


let n= 1000
for(let i=1;i<=n;i++) { 
    let sum=0;
    for(let j=1;j<i;j++) { 
        if(i%j==0) { 
            sum+=j;
        }
    }
    if(i==sum) { console.log(i)}
}