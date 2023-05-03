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
            function header() {
                function title() {
                    const elem = lst.querySelector("h4");
                    return { elem };
                }

                // ANNOYINGLY, the header is not part of the list, so we
                // use parent.
                const elem = parent.querySelector("#private_messages_section_header");
                return { elem, title };
            }

            const elem = parent.querySelector("#private_messages_list");
            const lst = elem;
            return { elem, header };
        }

        function streams_list() {
            function header() {
                function title() {
                    const elem = lst.querySelector("h4");
                    return { elem };
                }

                const elem = lst.querySelector("#streams_header");
                return { elem, title };
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
        function message_list() {
            const elem = parent.querySelector("#zfilt");
            
            return { elem };
        }

        function compose_box() {
            const elem = parent.querySelector("#compose-content");

            return { elem };
        }

        const elem = app().querySelector(".column-middle-inner");

        const parent = elem;
        return { elem, message_list, compose_box };
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

    style(left_sidebar().shortcuts().elem, "background", "blanchedalmond");

    style(left_sidebar().dm_list().header().elem, "background", "cadetblue");
    style(left_sidebar().dm_list().header().title().elem, "color", "red");
    style(left_sidebar().dm_list().elem, "background", "khaki");

    style(left_sidebar().streams_list().header().elem, "background", "cadetblue");
    style(left_sidebar().streams_list().header().title().elem, "color", "red");
    style(left_sidebar().streams_list().elem, "background", "khaki");

    style(middle_panel().elem, "background", "khaki");
    style(middle_panel().message_list().elem, "background", "cadetblue");
    style(middle_panel().compose_box().elem, "background", "cadetblue");

    style(right_sidebar().elem, "background", "darkseagreen");
}

tamper();
