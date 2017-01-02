$( document ).foundation();

(function() {
  'use strict';

  // the current class applied to the header
  var current;

  // get the starting class
  $( document ).ready( function() {
    var startId = $( this ).find( '.is-active a' ).attr( 'id' );

    current = getClassFromId( startId );
  } );


  // get the classname from the id of the link
  function getClassFromId( startId ) {
    console.log( '...startId', startId );
    var arr = startId.split( '-' );
    arr.pop();
    var startClass = arr.join( '-' );
    console.log( '...startClass', startClass );

    return startClass;
  }

  // listen for change events on the tab and change the class accordingly
  $( '#main-tabs' ).on( 'change.zf.tabs', function() {
    console.log( '...changed!' );

    var elem = $( this ).find( '.is-active a' );

    var id   = elem.attr( 'id' );

    var newClass = getClassFromId( id );
    console.log( '...current', current );
    console.log( '...newClass', newClass );

    var headerElem = $( '#nav-background' );
    headerElem.removeClass(current);
    headerElem.addClass(newClass);
    console.log( '...headerElem', headerElem );

    current = newClass;
    console.log( '...current', current );
  } );


})();
