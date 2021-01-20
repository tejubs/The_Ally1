<script>
(function() {
        "use strict";
        var className = "active";
        var info = ".info";
        var tabs = ".tabs";

        function init() {
            if (document.getElementById && document.createTextNode) {
                var tabtrigger = document.getElementById('tabs').getElementsByTagName('a');
                for (var i = 0; i < tabtrigger.length; i++) {
                    addClicks(tabtrigger, i);
                }
            }
        }

        function addClicks(tabtrigger, i) {
            tabtrigger[i].onclick = function() {
                show(tabtrigger[i]);
                return false;
            };
        }

        function show(l) {
            hideTabs(info);
            hideTabs(tabs);
            var id = l.href.match(/#(\w.+)/)[1];
            var el = document.getElementById(id);
            addClassname(el, className);
            addClassname(l, className);
        }

        function hideTabs(info) {
            var info = document.querySelectorAll(info);
            for (var i = 0; i < info.length; i++) {
                removeClassname(info[i], className);
            }
        }

        function addClassname(el, className) {
            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        }

        function removeClassname(el, className) {
            if (el.classList) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        init();
    })();
</script>
