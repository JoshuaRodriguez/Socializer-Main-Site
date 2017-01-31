(function() {
    var settingsDropdown = $(".settings-dropdown");
    var dropDownContent = $(".dropdown-content");
    var browserWindow = $(window);

    settingsDropdown.toggled = 0;

    settingsDropdown.click(function() {
        if (!settingsDropdown.toggled) {
            dropDownContent.addClass("show");
            settingsDropdown.toggled = 1;
        } else {
            dropDownContent.removeClass("show");
            settingsDropdown.toggled = 0;
        }
    });

    browserWindow.click(function(event) {
        if (!event.target.matches("a.settings-dropdown")) {
            dropDownContent.removeClass("show");
            settingsDropdown.toggled = 0;
        }
    });
})();