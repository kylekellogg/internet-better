$( document ).ready( function onReady() {
  
  var viewportWidth = window.innerWidth,
    viewportHeight = window.innerHeight,
    slides = $( '.slide' );
  
  slides.each( function setXForSlide( index, element ) {
    $( element ).attr( 'data-x', index * viewportWidth );
    
    if ( index === 1 ) {
      $( '#optimizations, #limit, #no, #chaining' ).attr( 'data-x', index * viewportWidth ).attr( 'data-y', 0 );
    }
  } );
  
  impress().init();
  
  $( '#optimizations, #limit, #no, #chaining' ).removeAttr( 'style' );
  
} );