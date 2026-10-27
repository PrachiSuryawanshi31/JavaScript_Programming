function CheckEven(iNo)
{
    
    if(iNo % 2 == 0 )
    {
        console.log("It is even Number");
    }

    else
    {
        console.log("It is odd number ")
    }
}

function main()
{
    let iValue = 10;

    CheckEven(iValue);
}

main();