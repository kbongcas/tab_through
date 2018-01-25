/**
 * Sets tabindex(HTML5) priority to google search results.
 *
 * @module tab-through.js
 * @author kbongcas
 */

// results are found using class name "r"
let result_set = document.getElementsByClassName("r");

// Adds tab index priority to search results
for (let i = 1; i <= result_set.length; i++) {
    result_set[i-1].getElementsByTagName("a")[0].setAttribute("tabindex", i.toString());
}
