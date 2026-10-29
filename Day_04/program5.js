function MaxNumber(iNo1, iNo2, iNo3)
{
    if((iNo1 > iNo2) && (iNo1 > iNo3))
    {
        return iNo1;
    }
    
    else if((iNo2 > iNo1) && (iNo2 > iNo3))
    {
        return iNo2;
    }

    else if((iNo3 > iNo1) && (iNo3 > iNo2))
    {
        return iNo3;
    }
}


function main()
{
    var iValue1 = 100;
    var iValue2 = 200;
    var iValue3 = 50;
    var iRet = 0;

    iRet = MaxNumber(iValue1, iValue2, iValue3);

    console.log("Maximum Number is : "+iRet);
}

main();