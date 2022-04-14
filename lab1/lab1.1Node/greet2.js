function operation()
{
    this.greet = function selectOperation(x,y,char)
    {
        if(char == '+')
        {
            console.log(x+y);
        }
        else if(char == '*')
        {
            console.log(x*y);
        }
        else if(char == '/')
        {
            console.log(x/y);
        }
        else if(char == '-')
        {
            console.log(x-y);
        }
    }
}

module.exports = operation ;
