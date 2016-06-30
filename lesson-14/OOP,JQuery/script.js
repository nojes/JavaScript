function User(id) {
    var u = this;
    u.form = $(id);
    u.name = u.form.find('.name');
    u.btn = u.form.find('.btn');
    u.showUserData = function() {
        console.log(u.name.val());
    };
    u.btn.click(u.showUserData);
}