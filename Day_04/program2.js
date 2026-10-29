function ChechEven(iNo)
{
    if((iNo % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    var iValue = 126;
    var iRet = 0;

    iRet = ChechEven(iValue);

    if(iRet == true)
    {
        console.log("Number is Even ");
    }

    else
    {
        console.log("Number is Odd ");
    }
}

main();