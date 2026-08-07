/* Copyright (c) 2026 asaeppel4231, forgejo_admin (same identity)
 * Licensed under the GNU GPLv3.
 * https://www.gnu.org/licenses/gpl-3.0.html
 * ... or look at the LICENSE.md file in this repository for more information.
 */

(function() {
    var html = document.documentElement;

    // gespeichertes Theme laden
    var saved = localStorage.getItem("theme");
    if (saved === "dark") {
        html.className = html.className + " dark";
    }

    // Toggle-Funktion global verfügbar machen
    window.toggleTheme = function() {
        if (html.className.indexOf("dark") === -1) {
            html.className = html.className + " dark";
            localStorage.setItem("theme", "dark");
            console.log("Theme switched to dark!");
        } else {
            html.className = html.className.replace(" dark", "");
            localStorage.setItem("theme", "light");
            console.log("Theme switched to light!");
        }
        console.log(html.className);
    };
})();
