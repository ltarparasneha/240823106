const name="sneha"
console.log("hello "+name)

console.log("1st program")
const n=5
if(n%2)
{
    console.log("odd number")
}
else
{
    console.log("even number")
}


console.log("2nd program")
const a=5
const b=9
if(a>b)
{
    console.log("a is max number")
}
else
{
    console.log("b is max number")
}

console.log("3rd program")
const n1=2024
if(n%4)
{
    console.log("non leap year")
}
else
{
    console.log("leap year")
}

console.log("4th program")
const n2=5
let sum=0
for(i=1;i<=n;i++)
{
    sum+=i
}
console.log(sum)

console.log("5th program")
const n3=5
let fact=1
for(i=1;i<=n;i++)
{
    fact*=i
}
console.log(fact)

console.log("6th program")
const n4=5

for(i=1;i<=10;i++)
{
    console.log(`${n} x ${i} = ${n*i}`)
}

console.log("7th program")
const num=5467
let result=num.toString().split('').reverse().join('')
console.log(result)

console.log("8th program")
const num1=121
let result1=num.toString().split('').reverse().join('')
if(num==result)
{
    console.log("number is palindrome")
}
else
{
    console.log("number is not palindrome")
}

console.log("9th program")
const num2=11
let prime=1
for(i=2;i<=num/2;i++)
{
    if(num%2==0)
        prime=false
        break;
}
if(prime&&num)
{
    console.log("number is prime")
}
else
{
    console.log("number is not prime")
}