
var $$ = $.fn;

$$.extend({
  SplitID : function()
  {
    return this.attr('id').split('-').pop();
  },

  Slideshow : {
    Ready : function()
    {
      $('div.tmpSlideshowControl')
        .hover(
          function() {
            $(this).addClass('tmpSlideshowControlOn');
          },
          function() {
            $(this).removeClass('tmpSlideshowControlOn');
          }
        )
        .click(
          function() {
            $$.Slideshow.Interrupted = true;

            $('div.tmpSlide').hide();
            $('div.tmpSlideshowControl').removeClass('tmpSlideshowControlActive');

            $('div#tmpSlide-' + $(this).SplitID()).show();
            $(this).addClass('tmpSlideshowControlActive');
          }
        );

      this.Counter = 1;
      this.Interrupted = false;

      this.Transition();
    },

    Transition : function()
    {
      if (this.Interrupted) {
        return;
      }
      if (this.Counter > 3) {
      	return;
      }

      this.Last = this.Counter - 1;

      if (this.Last < 1) {
        this.Last = 3;
      }

        if ($$.Slideshow.Counter === 3) {
            Interrupted = true;
          }
	$('div#tmpSlide-' + $$.Slideshow.Last).fadeOut(3000);
	$('div#tmpSlideCopy-' + this.Counter).fadeIn(5000);
       $('div#tmpSlide-' + this.Counter).fadeIn(3000,
        function() {
          $('div#tmpSlideshowControl-' + $$.Slideshow.Last).removeClass('tmpSlideshowControlActive');
          $('div#tmpSlideshowControl-' + $$.Slideshow.Counter).addClass('tmpSlideshowControlActive');

           
          $$.Slideshow.Counter++;

          setTimeout('$$.Slideshow.Transition();', 5000);
        }
      );
    }
  }
});

$(document).ready(
  function() {
    $$.Slideshow.Ready();
  }
);
