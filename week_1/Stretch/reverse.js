function reverse(args)
{


  for(var a = 0; a < args.length; a ++)
  {

   var reversed = "";

    for(var i = args[a].length - 1; i >= 0; i--)

    {

     reversed += args[a][i];

    }
      console.log(reversed);



  }
  console.log('');

}

const args = process.argv;
args.splice(0,2);
reverse(args);

