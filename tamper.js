function get_header() {
    function header() {
        return document.querySelector("#top_navbar");
    }

    function logo() {
        const elem = header().querySelector(".column-left");

        return { elem };
    }

    function search_bar() {
        const elem = header().querySelector(".top-navbar-container");

        return { elem };
    }

    const elem = header();

    return { logo, search_bar };
}

function get_app() {
    function app() {
        return document.querySelector(".app");
    }

    function left_sidebar() {
        function shortcuts() {
            const elem = parent.querySelector("#global_filters");
            return { elem };
        }

        function dm_list() {
            const elem = parent.querySelector(".private_messages_container");
            return { elem };
        }

        function streams_list() {
            function header() {
                const elem = parent.querySelector("#streams_header");
                return { elem };
            }

            const elem = parent.querySelector("#streams_list");
            const lst = elem;
            return { elem, header };
        }

        const elem = app().querySelector("#left-sidebar");
        const parent = elem;
        return { elem, shortcuts, dm_list, streams_list };
    }

    function middle_panel() {
        const elem = app().querySelector(".column-middle-inner");
        return { elem };
    }

    function right_sidebar() {
        const elem = app().querySelector("#right-sidebar");
        return { elem };
    }

    return { left_sidebar, middle_panel, right_sidebar };
}

function tamper() {
    function style(elem, f, v) {
        elem.style[f] = v;
    }

    const { logo, search_bar } = get_header();
    style(logo().elem, "background", "khaki");
    style(search_bar().elem, "background", "darkseagreen");

    const { left_sidebar, middle_panel, right_sidebar } = get_app();

    style(left_sidebar().shortcuts().elem, "background", "cadetblue");
    style(left_sidebar().dm_list().elem, "background", "blanchedalmond");
    style(left_sidebar().streams_list().header().elem, "background", "cadetblue");
    style(left_sidebar().streams_list().elem, "background", "blanchedalmond");

    style(middle_panel().elem, "background", "khaki");
    style(right_sidebar().elem, "background", "darkseagreen");
}

tamper();
