
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

      this.Counter = Math.floor(Math.random()*11);
      this.Interrupted = false;

      this.Transition();
    },

    Transition : function()
    {
		if (this.Interrupted) {
		return;
      }

      this.Last = this.Counter - 1;

		if (this.Last < 1) {
        this.Last = 10;
      }

      $('div#tmpSlide-' + $$.Slideshow.Last).fadeOut(3000);
      $('div#tmpSlide-' + this.Counter).fadeIn(
        3000,
        function() {
          $('div#tmpSlideshowControl-' + $$.Slideshow.Last).removeClass('tmpSlideshowControlActive');
          $('div#tmpSlideshowControl-' + $$.Slideshow.Counter).addClass('tmpSlideshowControlActive');

          $$.Slideshow.Counter++;

          if ($$.Slideshow.Counter > 10) {
            $$.Slideshow.Counter = 1;
          }

          setTimeout('$$.Slideshow.Transition();', 6000);
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
