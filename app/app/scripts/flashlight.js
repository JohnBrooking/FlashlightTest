/* FlashlightTest Plain Javascript functionality */

// sections to conditionally display
var LightOff = document.getElementById('LightOff');
var LightOn = document.getElementById('LightOn');
var ErrorMsg = document.getElementById('ErrorMsg');

function setError( msg )         // On error, set the message, display it, and hide other sections
{
   ErrorMsg.innerHTML = '<p>' + msg + '</p>';
   ErrorMsg.style.display = 'block';
   LightOff.style.display = LightOn.style.display = 'none';
}

function checkAvail()            // Check for light availability
{
   if (typeof cordova === 'undefined')
      setError( 'Flashlight plugin is not available.' );
   else
      window.plugins.flashlight.available( 
         function( isAvailable ) { if( !isAvailable ) setError( 'No light is available.' ); }
      )
}

function setLight( bTurnOn)      // Turn light on (true) or off (false)
{
   if( ErrorMsg.style.display == 'none' ) // if not in an error state
   {
      if( bTurnOn )
      {
         window.plugins.flashlight.switchOn(
            function() // success
            {
               LightOn.style.display = 'block';
               LightOff.style.display = 'none';
            },
            function() // failure
            { setError( 'An error occurred turning the flashlight on.' ); }
         );
      } else 
      {
         window.plugins.flashlight.switchOff(
            function() // success
            {
               LightOn.style.display = 'none';
               LightOff.style.display = 'block';
            },
            function() // failure
            { setError( 'An error occurred turning the flashlight off.' ); }
         );
      }
   }
}
