angular
    .module("app")
    .factory("userService", function ($http, globalConfig, $q) {
        var url;
        return {
            GetUsers: function () {
                url = globalConfig.apiAddress + "/userapi";
                //return $http.get(url);
                var promise = $http.get(url);
                var deferred = deferred || $q.defer();
                promise.then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                return deferred.promise;
            },
            GetUser: function (id) {
                url = globalConfig.apiAddress + "/userapi/" + id;
                return $http.get(url);
            },
            AddUser: function (user) {
                url = globalConfig.apiAddress + "/userapi";
                return $http.post(url, user);
            },
            UpdateUser: function (user) {
                url = globalConfig.apiAddress + "/userapi/" + user._id;
                return $http.put(url, user);
            },
            DeleteUser: function (id) {
                url = globalConfig.apiAddress + "/userapi/" + id;
                return $http.delete(url);
            }
        }
    });
