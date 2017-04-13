jQuery(document).ready(function ($) {
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function () {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });
});

function downloadPDF() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  source = $('body')[0];


  specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '#pdfbypass': function (element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true
    }
  };
  margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522
  };
  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
  pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
      },

      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save('resume.pdf');
      }, margins
  );
}