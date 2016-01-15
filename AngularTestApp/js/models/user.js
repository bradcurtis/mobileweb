var starter;
(function (starter) {
    var domain;
    (function (domain) {
        var User = (function () {
            function User(username, userpassword, tokenName, token) {
                this.username = username;
                this.userpassword = userpassword;
                this.tokenName = tokenName;
                this.token = token;
            }
            return User;
        })();
        domain.User = User;
    })(domain = starter.domain || (starter.domain = {}));
})(starter || (starter = {}));
//# sourceMappingURL=user.js.map