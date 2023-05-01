function tamper() {
    function style(elem, f, v) {
        elem.style[f] = v;
    }

    function get_app() {
        function app() {
            return document.querySelector(".app");
        }

        function left_sidebar() {
            function shortcuts() {
                const elem = parent.querySelector("#global_filters");
                return {elem};
            }
 
            function streams_list() {
                const elem = parent.querySelector("#streams_list");
                return {elem};
            }

            const elem = app().querySelector("#left-sidebar");
            const parent = elem;
            return {elem, shortcuts, streams_list};
        }

        function middle_panel() {
            const elem = app().querySelector(".column-middle-inner");
            return {elem};
        }

        function right_sidebar() {
            const elem = app().querySelector("#right-sidebar");
            return {elem};
        }

        return {left_sidebar, middle_panel, right_sidebar};
    }

    const {left_sidebar, middle_panel, right_sidebar} = get_app();

    style(left_sidebar().elem, "background", "aliceblue");
    style(left_sidebar().shortcuts().elem, "background", "cadetblue");
    style(left_sidebar().streams_list().elem, "background", "blanchedalmond");

    style(middle_panel().elem, "background", "khaki");
    style(right_sidebar().elem, "background", "darkseagreen");

}
    
tamper();