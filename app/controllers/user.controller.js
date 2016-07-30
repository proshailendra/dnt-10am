angular
    .module("app")
    .controller("userController", function ($scope, $rootScope, $state, $stateParams, userService) {
        if ($state.current.name == "user") {
            $rootScope.Title = "Users Listing";
            //userService.GetUsers().success(function (data) {
            //    $scope.users = data;
            //}).error(function(err){console.log(err)});

            userService.GetUsers().then(
                //success
                function (res) {
                    $scope.users = res.data;
                },
                //error
                function (err) {
                    console.log(err);
                }
            );
        }

        if ($state.current.name == "create") {
            $rootScope.Title = "Create User";
            $scope.IsSubmit = false;
            $scope.saveData = function (user) {
                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {
                    userService.AddUser(user).success(function (data) {
                        if (data == "created") {
                            $state.go("user");
                        }
                    });
                }
            }
        }

        if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;

            userService.GetUser(id).success(function (data) {
                $scope.user = data;
            });

            $scope.IsSubmit = false;
            $scope.saveData = function (user) {
                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {
                    userService.UpdateUser(user).success(function (data) {
                        if (data == "updated") {
                            $state.go("user");
                        }
                    });
                }
            }
        }

        $scope.delete = function (id) {
            if (confirm('Are you sure to delete?')) {
                userService.DeleteUser(id).success(function (data) {
                    if (data == "deleted") {
                        $state.go("user", {}, {reload: true});
                    }
                });
            }
        }
    });
