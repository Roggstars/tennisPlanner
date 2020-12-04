Array.prototype.removeElement = function(element) {
    const index = this.indexOf(element);
    if (index > -1) {
        this.splice(index, 1);
    }
}