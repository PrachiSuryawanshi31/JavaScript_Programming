function CheckMaxNo(iNo1, iNo2)
{
    if(iNo1 < iNo2)
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
    var iValue1 = 126;
    var iValue2 = 500;
    var iRet = 0;

    iRet = CheckMaxNo(iValue1 , iValue2);

    if(iRet == true)
    {
        console.log("It is Max Number");
    }

    else
    {
        console.log("It is Min Number ");
    }
}

main();