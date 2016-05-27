// getElementById
    function $id(id) {
        return document.getElementById(id);
    }

    //
    // output information
    function Output(msg) {
        var m = $id("messages");
        m.innerHTML = msg + m.innerHTML;
    }
