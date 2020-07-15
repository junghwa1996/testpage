$(function(){
    tab();
});


function tab(){
    $('.tab-Name li').click(function(){
        var activeTab = $(this).attr('data-Nember');
        $('.tab-Name li').removeClass('active');
        $(this).addClass('active');

        $('.tab-panel').removeClass('active');
        $('#'+ activeTab).addClass('active');

    });
};
