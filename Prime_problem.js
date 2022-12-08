function Check_prime(n) {
    let factor=0;
    for(i=1;i<=n;i++){
        if(n%i==0){
            factor++
        }
    }
    if(factor==2){
        return true;
    }else{

        return false;
    }
}
let result=Check_prime(13);
console.log(result)