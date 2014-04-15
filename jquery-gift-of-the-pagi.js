(function($) {
  $.fn.giftOfThePagi = function(options) {

    // Some defaults
    var defaults = {
    };

    // Merge runtime options with defaults
    options = $.extend({}, defaults, options);

    $.fn.giftOfThePagi.goToPreviousItem = function()
    {
    };

    $.fn.giftOfThePagi.goToNextItem = function()
    {
    };

    var paginationControls = '<ul class="pagi-pagination-controls">' +
        '<li class="prev-paginate"><a class="btn btn-default" href="#">Prev</a></li>' +
        '<li class="next-paginate"><a class="btn btn-default" href="#">Next</a></li>' +
      '</ul>';

    return this.each(function() {
      var $element    = $(this);
      var $items      = $element.children('li');
      var $activeItem = $items.first();

      $element.addClass('pagi-paginated-prev-next');

      $element.next('.pagi-pagination-controls').remove();
      $element.after(paginationControls);
      $activeItem.addClass('pagi-active-paginated-item');

      $('.prev-paginate a').on('click', function(e) {
        e.preventDefault();
        paginateToPreviousItem();
      });

      $('.next-paginate a').on('click', function(e) {
        e.preventDefault();
        paginateToNextItem();
      });

      function paginateToPreviousItem()
      {
        $activeItem.removeClass('pagi-active-paginated-item');

        if ($activeItem.prev().length)
          $activeItem = $activeItem.prev();
        else
          $activeItem = $items.last();

        $activeItem.addClass('pagi-active-paginated-item');
      }

      function paginateToNextItem()
      {
        $activeItem.removeClass('pagi-active-paginated-item');

        if ($activeItem.next().length)
          $activeItem = $activeItem.next();
        else
          $activeItem = $items.first();
        
        $activeItem.addClass('pagi-active-paginated-item');
      }

    });
  };

})(jQuery);



