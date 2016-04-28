/* FlashlightTest Plain Javascript functionality */

var LightOff, LightOn;  // sections containing on or off buttons

function setLight( bState ) 
{
   /* If conditional elements not set yet, set them now
      Couldn't do this outside of function because if
      called from <head>, they wouldn't exist yet. */
   if( LightOff === undefined )
   {
      LightOff = document.getElementById('LightOff');
      LightOn = document.getElementById('LightOn');
   }
   
   //alert( 'Turning ' + ( bState ? 'on' : 'off' ));
   LightOff.style.display = ( bState ? 'none' : 'block' );
   LightOn.style.display = ( bState ? 'block' : 'none' );
}
