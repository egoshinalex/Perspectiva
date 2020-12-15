$(document).ready(function() {
    var current_class_name = $('body').attr('class');
    console.log(current_class_name);
    var current_class_name_bg = $('body').attr('class');
    var current_class_name_font = $('body').attr('class');
    $('body').removeClass();
    $("span").click(function() { // задаем функцию при нажатиии на элемент <button>
        $(this).removeClass("active");
        console.log($(this).attr('class'));
        var class_name;
        switch ($(this).attr('class')) {
            case 'black_white':
                class_name = 'black_white';
                break
            case 'white_black':
                class_name = 'white_black';
                break
            case 'blue_blue_light':
                class_name = 'blue_blue_light';
                break
            case 'font_20':
                class_name = 'font_20';
                break
            case 'font_28':
                class_name = 'font_28';
                break
            case 'font_36':
                class_name = 'font_36';
                break
            default:
                class_name = 'font_20';
        }

        var color_bg = 'off';
        switch (class_name) {
            case 'black_white':
                color_bg = 'on';
                break
            case 'white_black':
                color_bg = 'on';
                break
            case 'blue_blue_light':
                color_bg = 'on';
                break
        }

        if (color_bg == 'on') {
            $('body').removeClass(current_class_name_bg).addClass(class_name);
            current_class_name_bg = class_name;
        } else {
            $('body').removeClass(current_class_name_font).addClass(class_name);
            current_class_name_font = class_name;
        }
    });
});