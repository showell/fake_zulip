build_zulip();

function build_zulip() {
    build_header();
    build_app();
}

function style(elem, f, v) {
    elem.style[f] = v;
}

function style_panel(elem) {
    style(elem, "height", "100%");
    style(elem, "width", "33%");
    style(elem, "border", "1px black solid");
    style(elem, "display", "flex");
    style(elem, "flexDirection", "column");
}

function style_sub_panel(elem) {
    style(elem, "width", "100%");
    style(elem, "border", "1px blue solid");
}

function build_header() {
    const elem = document.querySelector("#top_navbar");
    style(elem, "height", "5vh");
    style(elem, "display", "flex");
    style(elem, "flexDirection", "row");
    style(elem, "border", "1px red solid");

    function build_logo({ parent }) {
        const elem = document.createElement("div");
        elem.className = "column-left";
        style_panel(elem);

        parent.append(elem);
    }

    function build_search_bar({ parent }) {
        const elem = document.createElement("div");
        elem.className = "top-navbar-container";
        style_panel(elem);

        parent.append(elem);
    }

    const parent = elem;
    build_logo({ parent });
    build_search_bar({ parent });
}

function build_app() {
    const app = document.querySelector(".app");
    style(app, "height", "90vh");
    style(app, "display", "flex");
    style(app, "flexDirection", "row");

    function build_left_sidebar() {
        function build_shortcuts({ parent }) {
            const elem = document.createElement("div");
            elem.id = "global_filters";
            elem.innerText = "All messages + friends";
            style(elem, "height", "25%");
            style_sub_panel(elem);
            parent.append(elem);
        }

        function build_dm_list({ parent }) {
            function build_dm_list_header({dm_list}) {
                const elem = document.createElement("div");
                elem.id = "private_messages_section_header";

                const h4 = document.createElement("h4");
                h4.innerText = "DIRECT MESSAGES";
                elem.append(h4);

                dm_list.prepend(elem);
            }
            const elem = document.createElement("div");
            elem.id = "private_messages_list";
            elem.innerText = "dm list";
            style(elem, "height", "35%");
            style_sub_panel(elem);

            build_dm_list_header({dm_list: elem});
            parent.append(elem);
        }

        function build_streams_list({ parent }) {
            function build_streams_list_header({streams_list}) {
                const elem = document.createElement("div");
                elem.id = "streams_header";

                const h4 = document.createElement("h4");
                h4.innerText = "STREAMS";
                elem.append(h4);

                streams_list.prepend(elem);
            }

            const elem = document.createElement("div");
            elem.id = "streams_list";
            elem.innerText = "streams list";
            style(elem, "height", "35%");
            style_sub_panel(elem);

            build_streams_list_header({streams_list: elem});
            parent.append(elem);
        }

        const elem = document.createElement("div");
        elem.id = "left-sidebar";
        elem.title = "LEFT SIDEBAR";
        style_panel(elem);
        app.append(elem);

        build_shortcuts({ parent: elem });
        build_dm_list({ parent: elem });
        build_streams_list({ parent: elem });
    }

    function build_middle_panel() {
        function build_message_list() {
            const message_list = document.createElement("div");
            message_list.id = "zfilt";
            message_list.innerText = "MESSAGE LIST";
            style_sub_panel(message_list);
            middle_panel.append(message_list);
        }

        function build_compose_box() {
            const compose_box = document.createElement("div");
            compose_box.id = "compose-content";
            compose_box.innerText = "compose";
            style_sub_panel(compose_box);
            middle_panel.append(compose_box);
        }

        const middle_panel = document.createElement("div");
        middle_panel.className = "column-middle-inner";
        middle_panel.title = "MIDDLE PANEL";
        style_panel(middle_panel);
        app.append(middle_panel);

        build_message_list();
        build_compose_box();
    }

    function build_right_sidebar() {
        const right_sidebar = document.createElement("div");
        right_sidebar.id = "right-sidebar";
        right_sidebar.title = "RIGHT SIDEBAR";
        style_panel(right_sidebar);
        app.append(right_sidebar);
    }

    build_left_sidebar();
    build_middle_panel();
    build_right_sidebar();
}
