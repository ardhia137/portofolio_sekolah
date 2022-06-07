$(document).ready(function () {
    $('.filter').show("1000");
    var a = $('.filter').length;
    $('.filter').slice(12, a).hide();
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.next').show("1000");
            $('.filter').show("1000");
            var a = $('.filter').length;
            $('.filter').slice(12, a).hide();
        } else {
            $('.next').hide();
            $(".filter").not('.' + value).hide('');
            $('.filter').filter('.' + value).show('');
        }
    });
    $(".next").click(function(){
        $(".filter").show("1000");
        $(".next").hide("1000");
    })
    $(".filtering").on("click", "button", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

});