let nums=[10,20,30,40];

let ans=nums.every((el)=>
{
    return el%10==0;
})
console.log(ans);

//2)
function getMin(nums2)
{
    let min=nums.reduce((min,el)=>{
        if(min<el)
        {
            return min;
        }
        else{
            return el;
        }
    });
    return min;
}
let nums2=[10,20,30,40];
console.log(getMin(nums2));