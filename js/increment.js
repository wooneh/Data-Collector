document.getElementById("inc").addEventListener("click", function(e) {
    t = e.target;
    if (!t.id) t = t.parentNode;
    if (t != e.currentTarget) {
        var counter = t.children[1];
        var count = counter.innerHTML;
        count++;
        counter.innerHTML = count;
    }
});