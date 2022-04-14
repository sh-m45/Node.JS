function geeter()
{
    this.person = function(name, age)
    {
        if(age >= 2020)
        {
            console.log('year not accepted');
        }
        else
        {
            console.log(`hello ${name} your birth-date is ${age}`);
        }

    }
}
module.exports = geeter ;