var Book = function() {
    this.author = "";
    this.title = "";
};

var HashEntry = function() {
    this.key = "";
    this.obj = {};
    this.next = null;
};

HashEntry.prototype.get = function(key) {
    var current = this;
    do {
        if (current.key === key) {
            return current;
        }
        current = current.next;
    } while(current);
    return null;
};

HashEntry.prototype.delete = function(key) {
    var current = this;
    var previous = null;
    do {
        if (current.key === key) {
            if (previous) {
                previous.next = current.next;
            }
            return current;
        }
        previous = current;
        current = current.next;
    } while(current);
    return null;
}
