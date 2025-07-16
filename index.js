// const name="sneha"
// console.log("hello "+name)



// console.log("1st program")
// const n=5
// if(n%2)
// {
//     console.log("odd number")
// }
// else
// {
//     console.log("even number")
// }



// console.log("2nd program")
// const a=5
// const b=9
// if(a>b)
// {
//     console.log("a is max number")
// }
// else
// {
//     console.log("b is max number")
// }



// console.log("3rd program")
// const n1=2024
// if(n%4)
// {
//     console.log("non leap year")
// }
// else
// {
//     console.log("leap year")
// }



// console.log("4th program")
// const n2=5
// let sum=0
// for(i=1;i<=n;i++)
// {
//     sum+=i
// }
// console.log(sum)



// console.log("5th program")
// const n3=5
// let fact=1
// for(i=1;i<=n;i++)
// {
//     fact*=i
// }
// console.log(fact)



// console.log("6th program")
// const n4=5

// for(i=1;i<=10;i++)
// {
//     console.log(`${n} x ${i} = ${n*i}`)
// }



// console.log("7th program")
// const num=5467
// let result=num.toString().split('').reverse().join('')
// console.log(result)



// console.log("8th program")
// const num1=121
// let result1=num.toString().split('').reverse().join('')
// if(num==result)
// {
//     console.log("number is palindrome")
// }
// else
// {
//     console.log("number is not palindrome")
// }



// console.log("9th program")
// const num2=11
// let prime=1
// for(i=2;i<=num/2;i++)
// {
//     if(num%2==0)
//         prime=false
//         break;
// }
// if(prime&&num)
// {
//     console.log("number is prime")
// }
// else
// {
//     console.log("number is not prime")
// }




// console.log("10th program")

// function digit(dnum)
// {
//     return String(dnum).length;
// }
// let dnum1=12344
// console.log(digit(dnum1))




// console.log("11th program")

// function sumdigit(num5)
// {
//     const numstr=num5.toString()
//     let sum=0;
//     for(const char of numstr)
//     {
//       if(!isNaN(char))
//       {
//           sum+=Number(char)
//       }  
//     }
    
//     return sum
// }
// console.log(sumdigit(123))




// console.log("12th program")
// let n=153
// let num=n.toString()
// let count=num.length
// let sum=0;
// for(let digit of num)
// {
//     sum+=Math.pow(Number(digit),count)
// }
// if(sum==n)
// {
//      console.log(" number is armstrong")
// }
// else
// {
//       console.log(" number is not armstrong") 
// }
 




// console.log("13th program")
// let number2=5
// let a=0
// let b=1
// let c=0
// for(let i=0;i<number2;i++)
// {
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
// }



// console.log("14th program")
// let char=prompt("enter a character: ")
let char="a"
if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U")
{
    console.log("it's a vowel.")
}
else
{
    console.log("it's a consonant.")   
}



// console.log("15th program")
// let x=10
// let y=5

// let sum1=x+y
// console.log("sum:",sum1)

// let difference=x-y
// console.log("difference:",difference)

// let product=x*y
// console.log("product:",product)

// let quotient=x/y
// console.log("quotient:",quotient)



// console.log("16th program")
// function gcd(p,q)
// {
//     if(q==0)
//     {
//         return p;
//     }
//     return gcd(q,p%q) 
// }
// const a1=20
// const b1=28
// console.log(`gcd of ${a1} and ${b1} is: ${gcd(a1,b1)}`)



// console.log("17th program")
// let nm=28
// var sm=0
// for(i=1;i<nm;i++)
// {
//     if(nm%i==0)
//     {
//         sm+=i
//     }
// }
// if(sm=nm)
// {
//     console.log("number is perfect")
// }
// else
// {
//     console.log("number is not perfect")
// }
 


// console.log("18th program")
// var nm1=10
// for(i=1;i<=nm1;i++)
// {
//     if(nm1%i==0)
//     {
//         console.log(i)
//     }
// }



// console.log("19th program")
// const nm2=-10
// if(nm2>0)
// {
//     console.log("number is positive")
// }
// else if(nm2==0)
// {
//     console.log("number is zero")
// }
// else
// {
//     console.log("number is nagative")
// }



// console.log("20th program")
// var a4=2
// var b4=3
// var ans=1
// for(i=0;i<b4;i++)
// {
//     ans*=a4
// }
// console.log("power:",ans)