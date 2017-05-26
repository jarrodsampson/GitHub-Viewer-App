webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoryDetailComponent = (function () {
    function RepositoryDetailComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.repo = "";
        this.fullRepoName = "";
        this.repoDetails = {
            owner: {}
        };
        this.repoPage = 1;
        this.commits = [];
        this.commitPage = 1;
        this.titleService.setTitle("Git App - Details");
    }
    RepositoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.repo = params['repo'];
            _this.fullRepoName = params['login'] + '/' + params['repo'];
            _this.titleService.setTitle("Git App - " + _this.repo + ' Details');
            console.log(_this.repo);
        });
        /*
         Get repo details
         */
        this.getRepoDetails(this.repo);
        /*
         Get repo commits
         */
        this.getRepoCommits(this.fullRepoName, this.commitPage);
    };
    RepositoryDetailComponent.prototype.getRepoDetails = function (repo) {
        var _this = this;
        /*
         Get repo details
         */
        this._apiService.getSearchRepositories(repo, this.repoPage).subscribe(function (data) {
            _this.repoDetails = data.items[0];
        }, function (err) { return console.error(err); }, function () {
            console.log("Repo data", _this.repoDetails);
        });
    };
    RepositoryDetailComponent.prototype.getRepoCommits = function (repo, page) {
        var _this = this;
        /*
         Get repo commits
         */
        this._apiService.getCommits(repo, page).subscribe(function (data) {
            _this.commits = _this.commits.concat(data);
            _this.commitPage += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Commit data", _this.commits);
        });
    };
    RepositoryDetailComponent.prototype.onLoadMoreCommits = function (repo, page) {
        this.getRepoCommits(repo, page);
    };
    RepositoryDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return RepositoryDetailComponent;
}());
RepositoryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(474),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], RepositoryDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=repositoryDetail.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepositoryListComponent = (function () {
    function RepositoryListComponent(_apiService, titleService, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.router = router;
        this.repos = [];
        this.lastId = 0;
        this.search = {
            repo: ""
        };
        this.isLoading = true;
        this.titleService.setTitle("Git App - Repositories");
    }
    RepositoryListComponent.prototype.ngOnInit = function () {
        /*
         Get all repositories
         */
        this.getRepos(this.lastId);
    };
    RepositoryListComponent.prototype.getRepos = function (lastId) {
        var _this = this;
        /*
         Get all repositories
         */
        this._apiService.getRepositories(lastId).subscribe(function (data) {
            _this.repos = _this.repos.concat(data);
            _this.lastId = _this.repos[_this.repos.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("Repo data", _this.repos);
            _this.isLoading = false;
        });
    };
    RepositoryListComponent.prototype.getMoreRepos = function (lastId) {
        this.getRepos(this.lastId);
    };
    RepositoryListComponent.prototype.repoDetails = function (repo) {
        this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
    };
    RepositoryListComponent.prototype.searchRepo = function (search) {
        if (search.repo.length > 1) {
            this.router.navigate(['./search/repositories/' + encodeURI(search.repo)]);
        }
    };
    return RepositoryListComponent;
}());
RepositoryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(475),
        styles: [__webpack_require__(385)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RepositoryListComponent);

var _a, _b, _c;
//# sourceMappingURL=repositoryList.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRepositoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchRepositoriesComponent = (function () {
    function SearchRepositoriesComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.repo = "";
        this.page = 1;
        this.queryList = [];
        this.titleService.setTitle("Git App - Search");
    }
    SearchRepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.repo = params['repo'];
            _this.titleService.setTitle(_this.repo + " results - Git App");
            console.log(_this.repo);
        });
        /*
         Get repositories from repo and page id
         */
        this.getSearchResults(this.repo, this.page);
    };
    SearchRepositoriesComponent.prototype.getSearchResults = function (repo, page) {
        var _this = this;
        /*
         Get repositories from repo and page id
         */
        this._apiService.getSearchRepositories(repo, page).subscribe(function (data) {
            _this.queryList = _this.queryList.concat(data.items);
            _this.page += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Query data", _this.queryList);
        });
    };
    SearchRepositoriesComponent.prototype.onLoadMore = function (repo, page) {
        this.getSearchResults(repo, page);
    };
    SearchRepositoriesComponent.prototype.repoDetails = function (repo) {
        this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
    };
    SearchRepositoriesComponent.prototype.goBack = function () {
        window.history.back();
    };
    return SearchRepositoriesComponent;
}());
SearchRepositoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(476),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SearchRepositoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchRepositories.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchUserComponent = (function () {
    function SearchUserComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = "";
        this.page = 1;
        this.queryList = [];
        this.titleService.setTitle("Git App - Search");
    }
    SearchUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = params['user'];
            _this.titleService.setTitle(_this.user + " results - Git App");
            console.log(_this.user);
        });
        /*
         Get search results from user with page id
         */
        this.getSearchResults(this.user, this.page);
    };
    SearchUserComponent.prototype.getSearchResults = function (user, page) {
        var _this = this;
        /*
         Get search results from user with page id
         */
        this._apiService.searchUsers(user, page).subscribe(function (data) {
            _this.queryList = _this.queryList.concat(data.items);
            _this.page += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Query data", _this.queryList);
        });
    };
    SearchUserComponent.prototype.onLoadMore = function (userLogin, page) {
        this.getSearchResults(userLogin, page);
    };
    SearchUserComponent.prototype.userDetails = function (user) {
        this.router.navigate(['./user/details/' + encodeURI(user.login)]);
    };
    SearchUserComponent.prototype.goBack = function () {
        window.history.back();
    };
    return SearchUserComponent;
}());
SearchUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(477),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SearchUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchUsers.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailUserComponent = (function () {
    function DetailUserComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userDetail = {};
        this.userLogin = "";
        this.repos = [];
        this.followers = [];
        this.page = 1;
        this.repoPage = 1;
        this.subscriptions = [];
        this.orgs = [];
        this.hideButton = false;
        this.tempArrayLength = 0;
        this.titleService.setTitle("Git App - Details");
    }
    DetailUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userLogin = params['id'];
            _this.titleService.setTitle("Git App - " + _this.userLogin + ' Details');
            console.log(_this.userLogin);
        });
        /*
         Get the local categories list for google places
         */
        this.getUserDetails(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserFollowers(this.userLogin, this.page);
        /*
         Get the local categories list for google places
         */
        this.getUserSubscriptions(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserOrgs(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserRepos(this.userLogin, this.repoPage);
    };
    DetailUserComponent.prototype.getUserDetails = function (userLogin) {
        var _this = this;
        /*
         Get the local categories list for google places
         */
        this._apiService.getUserByLogin(userLogin).subscribe(function (data) {
            _this.userDetail = data;
        }, function (err) { return console.error(err); }, function () {
            console.log("User data", _this.userDetail);
        });
    };
    DetailUserComponent.prototype.getUserRepos = function (userLogin, page) {
        var _this = this;
        /*
         Get the local categories list for google places
         */
        this._apiService.getUserRepos(userLogin, page).subscribe(function (data) {
            _this.repos = _this.repos.concat(data);
            _this.repoPage += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Repo data", _this.repos);
        });
    };
    DetailUserComponent.prototype.getUserFollowers = function (userLogin, page) {
        var _this = this;
        /*
         Get the local categories list for google places
         */
        this._apiService.getUserFollowers(userLogin, page).subscribe(function (data) {
            _this.tempArrayLength = _this.followers.length;
            _this.followers = _this.followers.concat(data);
            _this.page += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Followers data", _this.followers);
            if (_this.tempArrayLength == _this.followers.length) {
                _this.hideButton = true;
            }
        });
    };
    DetailUserComponent.prototype.getUserSubscriptions = function (userLogin) {
        var _this = this;
        /*
         Get the local categories list for google places
         */
        this._apiService.getUserSubscriptions(userLogin).subscribe(function (data) {
            _this.subscriptions = data;
        }, function (err) { return console.error(err); }, function () {
            console.log("Subscriptions data", _this.subscriptions);
        });
    };
    DetailUserComponent.prototype.getUserOrgs = function (userLogin) {
        var _this = this;
        /*
         Get the local categories list for google places
         */
        this._apiService.getUserOrgs(userLogin).subscribe(function (data) {
            _this.orgs = data;
        }, function (err) { return console.error(err); }, function () {
            console.log("Orgs data", _this.orgs);
        });
    };
    DetailUserComponent.prototype.onLoadMore = function (userLogin, page, prevList) {
        this.getUserFollowers(userLogin, page);
    };
    DetailUserComponent.prototype.onLoadMoreRepos = function (userLogin, page) {
        this.getUserRepos(userLogin, page);
    };
    DetailUserComponent.prototype.followerDetails = function (follower) {
        this.userLogin = follower.login;
        this.repoPage = 1;
        this.page = 1;
        this.repos = [];
        this.followers = [];
        this.subscriptions = [];
        this.orgs = [];
        /*
         Get the local categories list for google places
         */
        this.getUserDetails(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserFollowers(this.userLogin, this.page);
        /*
         Get the local categories list for google places
         */
        this.getUserSubscriptions(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserOrgs(this.userLogin);
        /*
         Get the local categories list for google places
         */
        this.getUserRepos(this.userLogin, this.repoPage);
        scrollTo(0, 0);
    };
    DetailUserComponent.prototype.orgDetails = function (org) {
        this.router.navigate(['./organizations/details/' + encodeURI(org.login)]);
    };
    DetailUserComponent.prototype.goBack = function () {
        window.history.back();
    };
    return DetailUserComponent;
}());
DetailUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(478),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], DetailUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=detailUser.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersList = [];
        this.lastId = 0;
        this.search = {
            user: ""
        };
        this.titleService.setTitle("Git App - Users");
    }
    UsersComponent.prototype.ngOnInit = function () {
        /*
         Get more users from last id
         */
        this.getMoreUsers(this.lastId);
    };
    UsersComponent.prototype.getMoreUsers = function (lastUser) {
        var _this = this;
        /*
         Get more users from last id
         */
        this._apiService.getUsers(lastUser).subscribe(function (data) {
            _this.usersList = _this.usersList.concat(data);
            _this.lastId = _this.usersList[_this.usersList.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("User data", _this.usersList);
        });
    };
    UsersComponent.prototype.searchUser = function (search) {
        if (search.user.length > 1) {
            this.router.navigate(['./search/users/' + encodeURI(search.user)]);
        }
    };
    UsersComponent.prototype.userDetails = function (user) {
        this.router.navigate(['./user/details/' + encodeURI(user.login)]);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(479),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.server = "https://api.github.com/";
    }
    APIService.prototype.getUsers = function (start) {
        return this.http.get(this.server + 'users?since=' + start).map(function (res) { return res.json(); });
    };
    APIService.prototype.getUserByLogin = function (login) {
        return this.http.get(this.server + 'users/' + login).map(function (res) { return res.json(); });
    };
    APIService.prototype.getUserRepos = function (login, page) {
        return this.http.get(this.server + 'users/' + login + '/repos?page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getUserFollowers = function (login, page) {
        return this.http.get(this.server + 'users/' + login + '/followers?page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getUserSubscriptions = function (login) {
        return this.http.get(this.server + 'users/' + login + '/subscriptions').map(function (res) { return res.json(); });
    };
    APIService.prototype.getUserOrgs = function (login) {
        return this.http.get(this.server + 'users/' + login + '/orgs').map(function (res) { return res.json(); });
    };
    APIService.prototype.searchUsers = function (query, page) {
        return this.http.get(this.server + 'search/users?q=' + query + '&page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getAllOrgs = function (start) {
        return this.http.get(this.server + 'organizations?since=' + start).map(function (res) { return res.json(); });
    };
    APIService.prototype.getOrgDetails = function (org) {
        return this.http.get(this.server + 'orgs/' + org).map(function (res) { return res.json(); });
    };
    APIService.prototype.getOrgMembers = function (org, page) {
        return this.http.get(this.server + 'orgs/' + org + '/members?page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getOrgRepos = function (org, page) {
        return this.http.get(this.server + 'orgs/' + org + '/repos?page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getRepositories = function (start) {
        return this.http.get(this.server + 'repositories?since=' + start).map(function (res) { return res.json(); });
    };
    APIService.prototype.getSearchRepositories = function (query, page) {
        return this.http.get(this.server + 'search/repositories?q=' + query + '&page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getCommits = function (repo, page) {
        return this.http.get(this.server + 'repos/' + repo + '/commits?page=' + page).map(function (res) { return res.json(); });
    };
    APIService.prototype.getPublicEvents = function () {
        return this.http.get(this.server + 'events').map(function (res) { return res.json(); });
    };
    APIService.prototype.getEmojis = function () {
        return this.http.get(this.server + 'emojis').map(function (res) { return res.json(); });
    };
    return APIService;
}());
APIService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=APIService.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 310;


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(322);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(467)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_truncate__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_owl_carousel__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_parallax_directive__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_materialize__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_ValuesPipe__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__error_error_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_details_detailUser_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_users_searchUsers_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_repositories_searchRepositories_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__organizations_organizationsList_organizationsList_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__organizations_organizationsDetail_organizationsDetail_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__repositories_repositoryList_repositoryList_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__repositories_repositoryDetail_repositoryDetail_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__events_public_eventPublic_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__users_users_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__emojis_emojis_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__routes__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_ValuesPipe__["a" /* ValuesPipe */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_16__users_details_detailUser_component__["a" /* DetailUserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_users_searchUsers_component__["a" /* SearchUserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__search_repositories_searchRepositories_component__["a" /* SearchRepositoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__organizations_organizationsList_organizationsList_component__["a" /* OrganizationListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__organizations_organizationsDetail_organizationsDetail_component__["a" /* OrganizationDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__repositories_repositoryList_repositoryList_component__["a" /* RepositoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__repositories_repositoryDetail_repositoryDetail_component__["a" /* RepositoryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_23__events_public_eventPublic_component__["a" /* EventPublicComponent */],
            __WEBPACK_IMPORTED_MODULE_24__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_25__emojis_emojis_component__["a" /* EmojisComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directives_parallax_directive__["a" /* Parallax */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_27__routes__["a" /* APP_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_owl_carousel__["OwlModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_truncate__["a" /* TruncateModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_materialize__["a" /* MaterializeModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_angular2_moment__["MomentModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_APIService__["a" /* APIService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallax; });
// ng2-parallax
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parallax = (function () {
    function Parallax(element) {
        var _this = this;
        this.name = 'parallaxDirective';
        // the following @Inputs are all part of the config object, which for
        // brevity's sake, you can do a bunch of operations in bulk by passing
        // in the config object; caveat for this is that angular 2 won't permit
        // more than 9 keys being passed in an object via the template
        this.cssKey = 'backgroundPosition';
        this.cssProperty = 'backgroundPositionY';
        this.axis = 'Y';
        this.ratio = -.7;
        this.initialValue = 0;
        this.canMove = true;
        this.cssUnit = 'px';
        this.cb_context = null;
        this.cb_args = [];
        this.parallaxStyles = {};
        this.isSpecialVal = false;
        this.evaluateScroll = function () {
            if (_this.canMove) {
                var resultVal = void 0;
                var calcVal = void 0;
                if (_this.scrollElement instanceof Window)
                    calcVal = _this.scrollElement.scrollY * _this.ratio + _this.initialValue;
                else
                    calcVal = _this.scrollElement.scrollTop * _this.ratio + _this.initialValue;
                if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                    calcVal = _this.maxValue;
                else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                    calcVal = _this.minValue;
                // added after realizing original setup wasn't compatible in Firefox
                // debugger;
                if (_this.cssKey === 'backgroundPosition') {
                    if (_this.axis === 'X') {
                        resultVal = 'calc(50% + ' + calcVal + _this.cssUnit + ') center';
                    }
                    else {
                        resultVal = 'center calc(50% + ' + calcVal + _this.cssUnit + ')';
                    }
                }
                else if (_this.isSpecialVal) {
                    resultVal = _this.cssValue + '(' + calcVal + _this.cssUnit + ')';
                }
                else {
                    resultVal = calcVal + _this.cssUnit;
                }
                if (_this.cb) {
                    // console.log('this should be running')
                    _this.cb.apply(_this.cb_context, _this.cb_args);
                }
                _this.parallaxElement.style[_this.cssKey] = resultVal;
            }
        };
        this.hostElement = element.nativeElement;
    }
    Parallax.prototype.ngOnInit = function () {
        var cssValArray;
        // console.log('%s initialized on element', this.name, this.hostElement);
        // console.log(this);
        for (var prop in this.config) {
            this[prop] = this.config[prop];
        }
        this.cssProperty = this.cssProperty ? this.cssProperty : 'backgroundPositionY';
        if (this.cssProperty.match(/backgroundPosition/i)) {
            if (this.cssProperty.split('backgroundPosition')[1].toUpperCase() === 'X') {
                this.axis = 'X';
            }
            this.cssProperty = 'backgroundPosition';
        }
        cssValArray = this.cssProperty.split(':');
        this.cssKey = cssValArray[0];
        this.cssValue = cssValArray[1];
        this.isSpecialVal = this.cssValue ? true : false;
        if (!this.cssValue)
            this.cssValue = this.cssKey;
        this.ratio = +this.ratio;
        this.initialValue = +this.initialValue;
        this.parallaxElement = this.parallaxElement || this.hostElement;
        if (!this.scrollElement) {
            if (document.getElementById('parallaxScroll'))
                this.scrollElement = document.getElementById('parallaxScroll');
            else if (this.scrollerId) {
                try {
                    this.scrollElement = document.getElementById(this.scrollerId);
                    if (!this.scrollElement)
                        throw ("The ID passed through the parallaxConfig ('" + this.scrollerId + "') object was not found in the document.  Defaulting to tracking the scrolling of the window.");
                }
                catch (e) {
                    console.warn(e);
                    this.scrollElement = window;
                }
            }
            else
                this.scrollElement = window;
        }
        this.evaluateScroll();
        this.scrollElement.addEventListener('scroll', this.evaluateScroll.bind(this));
    };
    return Parallax;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Parallax.prototype, "cssKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Parallax.prototype, "cssProperty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Parallax.prototype, "axis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Parallax.prototype, "ratio", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Parallax.prototype, "initialValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "canMove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Parallax.prototype, "scrollerId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Parallax.prototype, "maxValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Parallax.prototype, "minValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Parallax.prototype, "cssUnit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "cb", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "cb_context", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Parallax.prototype, "cb_args", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "scrollElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Parallax.prototype, "parallaxElement", void 0);
Parallax = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[parallax]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Parallax);

var _a;
//# sourceMappingURL=parallax.directive.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        // create instance vars to store keys and final output
        var keyArr = Object.keys(value), dataArr = [];
        // loop through the object,
        // pushing values to the return array
        keyArr.forEach(function (key) {
            dataArr.push(value[key]);
        });
        // return the resulting array
        return dataArr;
    };
    return ValuesPipe;
}());
ValuesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'values',
        pure: false
    })
], ValuesPipe);

//# sourceMappingURL=ValuesPipe.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_details_detailUser_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_users_searchUsers_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_repositories_searchRepositories_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_organizationsList_organizationsList_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizations_organizationsDetail_organizationsDetail_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__repositories_repositoryList_repositoryList_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__repositories_repositoryDetail_repositoryDetail_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_public_eventPublic_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__emojis_emojis_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_error_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });












var APP_ROUTES = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */],
        pathMatch: 'full'
    },
    {
        path: 'user/details/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__users_details_detailUser_component__["a" /* DetailUserComponent */],
        pathMatch: 'full'
    },
    {
        path: 'search/users/:user',
        component: __WEBPACK_IMPORTED_MODULE_2__search_users_searchUsers_component__["a" /* SearchUserComponent */],
        pathMatch: 'full'
    },
    {
        path: 'search/repositories/:repo',
        component: __WEBPACK_IMPORTED_MODULE_3__search_repositories_searchRepositories_component__["a" /* SearchRepositoriesComponent */],
        pathMatch: 'full'
    },
    {
        path: 'organizations',
        component: __WEBPACK_IMPORTED_MODULE_4__organizations_organizationsList_organizationsList_component__["a" /* OrganizationListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'organizations/details/:org',
        component: __WEBPACK_IMPORTED_MODULE_5__organizations_organizationsDetail_organizationsDetail_component__["a" /* OrganizationDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'repositories',
        component: __WEBPACK_IMPORTED_MODULE_6__repositories_repositoryList_repositoryList_component__["a" /* RepositoryListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'repositories/details/:login/:repo',
        component: __WEBPACK_IMPORTED_MODULE_7__repositories_repositoryDetail_repositoryDetail_component__["a" /* RepositoryDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_8__events_public_eventPublic_component__["a" /* EventPublicComponent */],
        pathMatch: 'full'
    },
    {
        path: 'emojis',
        component: __WEBPACK_IMPORTED_MODULE_10__emojis_emojis_component__["a" /* EmojisComponent */],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'error404',
        component: __WEBPACK_IMPORTED_MODULE_11__error_error_component__["a" /* ErrorComponent */],
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/error404'
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n.emojiImageBox {\n  min-height: 150px;\n}\n\n.emojiImageBox img {\n\n}\n\n\n.emojiContainerBox {\n  min-height:300px;\n}\n\n\n.bannerEmoji {\n  width:100%;\n  height:400px;\n  background:url(" + __webpack_require__(47) + ") top center fixed;\n  background-size:cover;\n  position: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".boxError {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  margin-left: -300px;\n  height: 350px;\n  margin-top: -185px;\n  background: rgba(0,0,0,0.7);\n  border-radius: 10px;\n  color:white;\n}\n\n.boxError p {\n  font-size: 14pt;\n  font-family: helvetica, sans-serif;\n}\n\n.backBg {\n  background: rgba(255,255,255,0.7);\n  width:100%;\n  height:100%;\n  position:fixed;\n  top:0;\n  left:0;\n  z-index:-1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:400px;\n  max-height:400px;\n}\n\n\n.card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n  margin-bottom:1em;\n}\n\n\n.sha {\n  font-size:7pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".bannerDetails {\n  width:100%;\n  height:400px;\n  background:url(" + __webpack_require__(47) + ") top center fixed;\n  background-size:cover;\n  position: relative;\n}\n\n.item {\n  margin:1em;\n}\n.item img {\n  max-width:100%;\n}\n\n.usersListDataC .card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n  margin: auto;\n}\n\n\n.title {\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n\n.organizationsListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.organizationsListData .content {\n  position: absolute;\n  top: 2em;\n  left: 7em;\n}\n\n.organizationsListData .card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.organizationsListData .card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.organizationsListData .card .card-content img {\n  float:left;\n}\n\n.eventsList .card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:400px;\n  max-height:400px;\n}\n\n\n.eventsList .card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n  margin: auto;\n  margin-bottom:1em;\n}\n\n\n.eventsList .sha {\n  font-size:7pt;\n}\n\n.repoListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.repoListData .content {\n  position: absolute;\n  top: 0.3em;\n  left: 6em;\n}\n\n.repoListData .card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.repoListData .card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.repoListData .card .card-content img {\n  float:left;\n}\n\n\n.outGoing {\n  position: absolute;\n  top: .5em;\n  right: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".bannerDetails {\n  width:100%;\n  height:400px;\n  background:url(" + __webpack_require__(47) + ") top center fixed;\n  background-size:cover;\n  position: relative;\n}\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n\n.mainImage {\n  max-width: 100%;\n}\n\n.memberListData .card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:300px;\n  max-height:300px;\n}\n\n\n.memberListData .card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n}\n\n\n.repoListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.repoListData .content {\n  position: absolute;\n  top: 0.3em;\n  left: 6em;\n}\n\n.repoListData .card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.repoListData .card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.repoListData .card .card-content img {\n  float:left;\n}\n\n\n.outGoing {\n  position: absolute;\n  top: .5em;\n  right: 1em;\n}\n\n.tabs {\n  margin-bottom: 2em;\n}\n\n@media(max-width: 600px) {\n  .memberListData .card .card-content img{\n    max-width:150px;\n    min-width:0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n.title {\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n\n.organizationsListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.organizationsListData .content {\n  position: absolute;\n  top: 2em;\n  left: 7em;\n}\n\n.card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.card .card-content img {\n  float:left;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".bannerDetails {\n  width:100%;\n  height:400px;\n  background:url(" + __webpack_require__(47) + ") top center fixed;\n  background-size:cover;\n  position: relative;\n}\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n\n.mainImage {\n  max-width: 100%;\n}\n\n.commitListData .card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:300px;\n  max-height:300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n.repoListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.repoListData .content {\n  position: absolute;\n  top: 0.3em;\n  left: 6em;\n}\n\n.card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.card .card-content img {\n  float:left;\n}\n\n\n.outGoing {\n  position: absolute;\n  top: .5em;\n  right: 1em;\n}\n\n\n.title {\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:400px;\n  max-height:400px;\n}\n\n\n.card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n.card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:300px;\n  max-height:300px;\n}\n\n\n.card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".bannerDetails {\n  width:100%;\n  height:400px;\n  background:url(" + __webpack_require__(47) + ") top center fixed;\n  background-size:cover;\n  position: relative;\n}\n\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n\n\n.followersDataList .card .card-content {\n  padding: 2em;\n  border-radius: 0 0 2px 2px;\n  min-height:300px;\n  max-height:300px;\n}\n\n\n.followersDataList .card .card-content img{\n  max-width:200px;\n  min-width:200px;\n  border-radius: 50%;\n}\n\n\n.repoListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.repoListData .content {\n  position: absolute;\n  top: 0.3em;\n  left: 6em;\n}\n\n.repoListData .card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.repoListData .card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.repoListData .card .card-content img {\n  float:left;\n}\n\n\n.outGoing {\n  position: absolute;\n  top: .5em;\n  right: 1em;\n}\n\n\n.mainImage {\n  max-width: 100%;\n}\n\n.organizationsListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.organizationsListData .content {\n  position: absolute;\n  top: 2em;\n  left: 7em;\n}\n\n.organizationsListData .card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.organizationsListData .card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.organizationsListData .card .card-content img {\n  float:left;\n}\n\n.tabs {\n  margin-bottom: 2em;\n}\n\n.title {\n  font-size: 14pt;\n  font-weight: bold;\n}\n\n@media(max-width: 600px) {\n  .followersDataList .card .card-content img{\n    max-width:150px;\n    min-width:0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n.userListData img {\n  max-width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80px;\n}\n\n.userListData .content {\n  position: absolute;\n  top: 1.5em;\n  left: 6em;\n}\n\n.card {\n  position: relative;\n  margin:1em;\n  cursor:pointer;\n}\n.card .card-content {\n  padding: 0;\n  border-radius: 0 0 2px 2px;\n  min-height:80px;\n}\n\n.card .card-content p {\n  font-size: 18pt;\n}\n\n.card .card-content img {\n  float:left;\n}\n\n\n.max-width {\n  max-width:1000px;\n  margin:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 126,
	"./af.js": 126,
	"./ar": 133,
	"./ar-dz": 127,
	"./ar-dz.js": 127,
	"./ar-kw": 128,
	"./ar-kw.js": 128,
	"./ar-ly": 129,
	"./ar-ly.js": 129,
	"./ar-ma": 130,
	"./ar-ma.js": 130,
	"./ar-sa": 131,
	"./ar-sa.js": 131,
	"./ar-tn": 132,
	"./ar-tn.js": 132,
	"./ar.js": 133,
	"./az": 134,
	"./az.js": 134,
	"./be": 135,
	"./be.js": 135,
	"./bg": 136,
	"./bg.js": 136,
	"./bn": 137,
	"./bn.js": 137,
	"./bo": 138,
	"./bo.js": 138,
	"./br": 139,
	"./br.js": 139,
	"./bs": 140,
	"./bs.js": 140,
	"./ca": 141,
	"./ca.js": 141,
	"./cs": 142,
	"./cs.js": 142,
	"./cv": 143,
	"./cv.js": 143,
	"./cy": 144,
	"./cy.js": 144,
	"./da": 145,
	"./da.js": 145,
	"./de": 148,
	"./de-at": 146,
	"./de-at.js": 146,
	"./de-ch": 147,
	"./de-ch.js": 147,
	"./de.js": 148,
	"./dv": 149,
	"./dv.js": 149,
	"./el": 150,
	"./el.js": 150,
	"./en-au": 151,
	"./en-au.js": 151,
	"./en-ca": 152,
	"./en-ca.js": 152,
	"./en-gb": 153,
	"./en-gb.js": 153,
	"./en-ie": 154,
	"./en-ie.js": 154,
	"./en-nz": 155,
	"./en-nz.js": 155,
	"./eo": 156,
	"./eo.js": 156,
	"./es": 158,
	"./es-do": 157,
	"./es-do.js": 157,
	"./es.js": 158,
	"./et": 159,
	"./et.js": 159,
	"./eu": 160,
	"./eu.js": 160,
	"./fa": 161,
	"./fa.js": 161,
	"./fi": 162,
	"./fi.js": 162,
	"./fo": 163,
	"./fo.js": 163,
	"./fr": 166,
	"./fr-ca": 164,
	"./fr-ca.js": 164,
	"./fr-ch": 165,
	"./fr-ch.js": 165,
	"./fr.js": 166,
	"./fy": 167,
	"./fy.js": 167,
	"./gd": 168,
	"./gd.js": 168,
	"./gl": 169,
	"./gl.js": 169,
	"./gom-latn": 170,
	"./gom-latn.js": 170,
	"./he": 171,
	"./he.js": 171,
	"./hi": 172,
	"./hi.js": 172,
	"./hr": 173,
	"./hr.js": 173,
	"./hu": 174,
	"./hu.js": 174,
	"./hy-am": 175,
	"./hy-am.js": 175,
	"./id": 176,
	"./id.js": 176,
	"./is": 177,
	"./is.js": 177,
	"./it": 178,
	"./it.js": 178,
	"./ja": 179,
	"./ja.js": 179,
	"./jv": 180,
	"./jv.js": 180,
	"./ka": 181,
	"./ka.js": 181,
	"./kk": 182,
	"./kk.js": 182,
	"./km": 183,
	"./km.js": 183,
	"./kn": 184,
	"./kn.js": 184,
	"./ko": 185,
	"./ko.js": 185,
	"./ky": 186,
	"./ky.js": 186,
	"./lb": 187,
	"./lb.js": 187,
	"./lo": 188,
	"./lo.js": 188,
	"./lt": 189,
	"./lt.js": 189,
	"./lv": 190,
	"./lv.js": 190,
	"./me": 191,
	"./me.js": 191,
	"./mi": 192,
	"./mi.js": 192,
	"./mk": 193,
	"./mk.js": 193,
	"./ml": 194,
	"./ml.js": 194,
	"./mr": 195,
	"./mr.js": 195,
	"./ms": 197,
	"./ms-my": 196,
	"./ms-my.js": 196,
	"./ms.js": 197,
	"./my": 198,
	"./my.js": 198,
	"./nb": 199,
	"./nb.js": 199,
	"./ne": 200,
	"./ne.js": 200,
	"./nl": 202,
	"./nl-be": 201,
	"./nl-be.js": 201,
	"./nl.js": 202,
	"./nn": 203,
	"./nn.js": 203,
	"./pa-in": 204,
	"./pa-in.js": 204,
	"./pl": 205,
	"./pl.js": 205,
	"./pt": 207,
	"./pt-br": 206,
	"./pt-br.js": 206,
	"./pt.js": 207,
	"./ro": 208,
	"./ro.js": 208,
	"./ru": 209,
	"./ru.js": 209,
	"./sd": 210,
	"./sd.js": 210,
	"./se": 211,
	"./se.js": 211,
	"./si": 212,
	"./si.js": 212,
	"./sk": 213,
	"./sk.js": 213,
	"./sl": 214,
	"./sl.js": 214,
	"./sq": 215,
	"./sq.js": 215,
	"./sr": 217,
	"./sr-cyrl": 216,
	"./sr-cyrl.js": 216,
	"./sr.js": 217,
	"./ss": 218,
	"./ss.js": 218,
	"./sv": 219,
	"./sv.js": 219,
	"./sw": 220,
	"./sw.js": 220,
	"./ta": 221,
	"./ta.js": 221,
	"./te": 222,
	"./te.js": 222,
	"./tet": 223,
	"./tet.js": 223,
	"./th": 224,
	"./th.js": 224,
	"./tl-ph": 225,
	"./tl-ph.js": 225,
	"./tlh": 226,
	"./tlh.js": 226,
	"./tr": 227,
	"./tr.js": 227,
	"./tzl": 228,
	"./tzl.js": 228,
	"./tzm": 230,
	"./tzm-latn": 229,
	"./tzm-latn.js": 229,
	"./tzm.js": 230,
	"./uk": 231,
	"./uk.js": 231,
	"./ur": 232,
	"./ur.js": 232,
	"./uz": 234,
	"./uz-latn": 233,
	"./uz-latn.js": 233,
	"./uz.js": 234,
	"./vi": 235,
	"./vi.js": 235,
	"./x-pseudo": 236,
	"./x-pseudo.js": 236,
	"./yo": 237,
	"./yo.js": 237,
	"./zh-cn": 238,
	"./zh-cn.js": 238,
	"./zh-hk": 239,
	"./zh-hk.js": 239,
	"./zh-tw": 240,
	"./zh-tw.js": 240
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 390;


/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav id=\"header\">\n    <div class=\"nav-wrapper black\">\n      <mz-navbar>\n        <a routerLink=\"/home\" class=\"brand-logo topScroll\"><img src=\"assets/images/logo2.png\" /> <span class=\"title-text\">Git App</span></a>\n        <a href=\"#\" data-activates=\"sidenav\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n        <mz-navbar-item-container [align]=\"'right'\" class=\"nav-wrapper black\">\n          <mz-navbar-item><a routerLink=\"/users\">Users</a></mz-navbar-item>\n          <mz-navbar-item><a routerLink=\"/repositories\">Repositories</a></mz-navbar-item>\n          <mz-navbar-item><a routerLink=\"/organizations\">Organizations</a></mz-navbar-item>\n          <mz-navbar-item><a routerLink=\"/events\">Events</a></mz-navbar-item>\n          <mz-navbar-item><a routerLink=\"/emojis\">Emojis</a></mz-navbar-item>\n          <mz-navbar-item><a class=\"modal-trigger\" id=\"aboutModalTrigger\"><i class=\"material-icons\">info</i></a></mz-navbar-item>\n          <mz-navbar-item><a class=\"waves-effect waves-light btn amber darken-2\" href=\"//github.com/\" target=\"_blank\">More</a></mz-navbar-item>\n        </mz-navbar-item-container>\n      </mz-navbar>\n    </div>\n\n    <mz-sidenav\n      [id]=\"'sidenav'\"\n      [closeOnClick]=\"'true'\">\n      <mz-sidenav-header>\n        <img src=\"assets/images/emoji.jpg\" alt=\"SideImagine\" />\n      </mz-sidenav-header>\n\n      <mz-sidenav-link><a routerLink=\"/users\">Users</a></mz-sidenav-link>\n      <mz-sidenav-link><a routerLink=\"/repositories\">Repositories</a></mz-sidenav-link>\n      <mz-sidenav-link><a routerLink=\"/organizations\">Organizations</a></mz-sidenav-link>\n      <mz-sidenav-link><a routerLink=\"/events\">Events</a></mz-sidenav-link>\n      <mz-sidenav-link><a routerLink=\"/emojis\">Emojis</a></mz-sidenav-link>\n      <mz-sidenav-link><a class=\"modal-trigger\" id=\"aboutModalTrigger2\">About</a></mz-sidenav-link>\n      <mz-sidenav-link><a href=\"//github.com/\" target=\"_blank\">More</a></mz-sidenav-link>\n\n    </mz-sidenav>\n\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<div parallax [config]=\"{parallaxInitVal: -100, parallaxRatio: -7.3}\" class=\"bannerEmoji\"></div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>\n      Supported Emojis\n    </h3>\n    <p [hidden]=\"isLoading\"><em>{{emojisLength}} Emojis</em></p>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col s12 center-align\">\n    <div class=\"emojiContainerBox\">\n      <div class=\"\" *ngFor=\"let key of emojis | values; let i = index\">\n        <div class=\"col s12 m4 l1 center-align emojiImageBox\" [hidden]=\"i >= numberE\" *ngIf=\"i < numberE\">\n            <img class=\"\" src=\"{{key}}\" />\n        </div>\n      </div>\n      <p>\n        <button [hidden]=\"isLoading\"\n          class=\"waves-effect waves-light btn amber darken-2\"\n          (mouseover)=\"loadMoreEmojis()\"\n          (click)=\"loadMoreEmojis()\">Load More Emojis</button>\n      </p>\n\n      <div [hidden]=\"isLoading\" class=\"col s12 noResults\" *ngIf=\"emojisLength === 0\">\n        <p>No Emojis found.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div class=\"backBg\"></div>\n<div class=\"row center-align boxError\">\n\n  <div class=\"col s12\">\n    <h1>404</h1>\n    <h2>Page Not Found</h2>\n  </div>\n\n\n  <div class=\"col s12\">\n    <p>Opps! The Requested Page that you are looking is currently unavailable or does not exist. Please try again later.</p>\n  </div>\n\n\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "emoji.ae912928c0a1ae45db9f.jpg";

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Events</h3>\n    <p><em>30 Most Recent Status and Updates</em></p>\n  </div>\n</div>\n\n\n<div class=\"max-width\">\n\n  <div class=\"row center-align\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"eventsList\">\n\n        <div class=\"col s12 m6 l4\" *ngFor=\"let event of events; let i = index\">\n\n          <div class=\"card hoverable\">\n            <div class=\"card-content\">\n\n              <p><img src=\"{{event.actor.avatar_url}}\" /></p>\n              <div class=\"content\">\n                <p>Repo: <span [innerHTML]=\"(event.repo.name) | truncate : 30\"></span></p>\n\n                <div *ngIf=\"event.payload.action\">\n                  <p>Action: {{event.payload.action}}</p>\n                  <div *ngIf=\"event.payload.pull_request\">\n                    <p>Pull Request #{{event.payload.pull_request.number}}</p>\n                    <p [innerHTML]=\"(event.payload.pull_request.body || 'No Message') | truncate : 50\"></p>\n                  </div>\n\n                  <div *ngIf=\"event.payload.issue\">\n                    <p>Issue #{{event.payload.issue.number}}</p>\n                    <p [innerHTML]=\"(event.payload.issue.body || 'No Message') | truncate : 50\"></p>\n                  </div>\n                </div>\n\n                <div *ngIf=\"event.payload.before\">\n                  <p>Action: Commit</p>\n                  <div *ngFor=\"let commit of event.payload.commits; let i = index\">\n                    <div *ngIf=\"i < 1\">\n                      <p class=\"sha\">SHA: {{commit.sha}}</p>\n                      <p [innerHTML]=\"(commit.message || 'No Message') | truncate : 50\"></p>\n                    </div>\n                  </div>\n                  <div *ngIf=\"event.payload.commits.length > 1\">\n                    <p>\n                      <a (click)=\"commitsModal.open(); getCommits(event.payload.commits)\">More Commits Available.</a>\n                    </p>\n                  </div>\n                </div>\n\n                <div *ngIf=\"event.payload.forkee\">\n                  <p>Action: Forked</p>\n                </div>\n\n                <div *ngIf=\"event.payload.master_branch\">\n                  <p>Action: Created An Event</p>\n                </div>\n\n\n                <p>{{event.created_at | amTimeAgo}}</p>\n              </div>\n\n\n            </div>\n          </div>\n\n        </div>\n\n\n        <div [hidden]=\"isLoading\" class=\"col s12 noResults\" *ngIf=\"events.length === 0\">\n          <p>No Events found.</p>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n<mz-modal #commitsModal [fixedFooter]=\"false\">\n  <mz-modal-header>\n    {{modalCommits.length}} Commits in this Event\n  </mz-modal-header>\n  <mz-modal-content>\n\n    <div class=\"commitItem\" *ngFor=\"let commit of modalCommits; let i = index\">\n      <p><strong>SHA: {{commit.sha}}</strong></p>\n      <p [innerHTML]=\"(commit.message || 'No Message')\"></p>\n    </div>\n\n  </mz-modal-content>\n  <mz-modal-footer>\n    <button mz-button [flat]=\"true\" mz-modal-close>Close</button>\n  </mz-modal-footer>\n</mz-modal>\n\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div parallax [config]=\"{parallaxInitVal: -100, parallaxRatio: -7.3}\" class=\"bannerDetails\"></div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Top Users</h3>\n  </div>\n</div>\n\n<div class=\"usersListDataC\">\n  <owl-carousel\n    [options]=\"{items: 6, dots: true, navigation: false, autoplay: true, loop:true, responsive:{'1300':{items:6},'1000':{items:3},'500':{items:3},'0':{items:2}}}\"\n    [items]=\"usersList\"\n    [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n    <div class=\"item center-align\" *ngFor=\"let user of usersList; let i = index\">\n\n      <div class=\"card hoverable\">\n        <div class=\"card-content\">\n\n          <div class=\"center-align\">\n            <a routerLink=\"/user/details/{{user.login}}\">\n\n              <h4 class=\"truncate\">{{user.login}}</h4>\n              <span><img src=\"{{user.avatar_url}}\" /></span>\n            </a>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </owl-carousel>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Top Organizations</h3>\n  </div>\n</div>\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"organizationsListData\">\n\n        <div class=\"col s12 center-align\">\n          <pagination-controls id=\"orgs\" (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n\n        <div class=\"col s12 m6 l4\" *ngFor=\"let org of organizations | paginate: { id: 'orgs', itemsPerPage: 12, currentPage: p }; let i = index\">\n          <div class=\"card hoverable\">\n            <div class=\"card-content\" (click)=\"orgDetails(org)\">\n\n              <p><img src=\"{{org.avatar_url}}\" /></p>\n              <div class=\"content\">\n                <p class=\"title\" [innerHTML]=\"org.login | truncate : 9\" ></p>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col s12 center-align\">\n          <pagination-controls id=\"orgs\" (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n\n\n        <div [hidden]=\"isLoading\" class=\"col s12 noResults\" *ngIf=\"organizations.length === 0\">\n          <p>No Organizations found.</p>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Latest Events</h3>\n  </div>\n</div>\n\n\n<owl-carousel\n  [options]=\"{items: 6, dots: true, navigation: false, autoplay: true, loop:true, responsive:{'1300':{items:4},'1000':{items:2},'500':{items:2},'0':{items:1}}}\"\n  [items]=\"events\"\n  [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n  <div class=\"item center-align eventsList\" *ngFor=\"let event of events; let i = index\">\n\n\n        <div class=\"card hoverable\">\n          <div class=\"card-content\">\n\n            <p><img src=\"{{event.actor.avatar_url}}\" /></p>\n            <div class=\"content\">\n              <p>Repo: <span [innerHTML]=\"(event.repo.name) | truncate : 30\"></span></p>\n\n              <div *ngIf=\"event.payload.action\">\n                <p>Action: {{event.payload.action}}</p>\n                <div *ngIf=\"event.payload.pull_request\">\n                  <p>Pull Request #{{event.payload.pull_request.number}}</p>\n                  <p [innerHTML]=\"(event.payload.pull_request.body || 'No Message') | truncate : 50\"></p>\n                </div>\n\n                <div *ngIf=\"event.payload.issue\">\n                  <p>Issue #{{event.payload.issue.number}}</p>\n                  <p [innerHTML]=\"(event.payload.issue.body || 'No Message') | truncate : 50\"></p>\n                </div>\n              </div>\n\n              <div *ngIf=\"event.payload.before\">\n                <p>Action: Commit</p>\n                <div *ngFor=\"let commit of event.payload.commits; let i = index\">\n                  <div *ngIf=\"i < 1\">\n                    <p class=\"sha\">SHA: {{commit.sha}}</p>\n                    <p [innerHTML]=\"(commit.message || 'No Message') | truncate : 50\"></p>\n                  </div>\n                </div>\n                <div *ngIf=\"event.payload.commits.length > 1\">\n                  <p>\n                    <a (click)=\"commitsModal.open(); getCommits(event.payload.commits)\">More Commits Available.</a>\n                  </p>\n                </div>\n              </div>\n\n              <div *ngIf=\"event.payload.forkee\">\n                <p>Action: Forked</p>\n              </div>\n\n              <div *ngIf=\"event.payload.master_branch\">\n                <p>Action: Created An Event</p>\n              </div>\n\n\n              <p>{{event.created_at | amTimeAgo}}</p>\n            </div>\n\n\n          </div>\n        </div>\n\n\n  </div>\n</owl-carousel>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Popular Repositories</h3>\n  </div>\n</div>\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"repoListData\">\n\n        <div class=\"col s12 center-align\">\n          <pagination-controls id=\"reeps\" (pageChange)=\"pRepo = $event\"></pagination-controls>\n        </div>\n\n\n        <div class=\"col s12 m12 l6\" *ngFor=\"let repo of repos | paginate: { id: 'reeps', itemsPerPage: 12, currentPage: pRepo }; let i = index\">\n          <div class=\"card hoverable\">\n            <div class=\"card-content\" (click)=\"repoDetails(repo)\">\n\n              <p><img src=\"{{repo.owner.avatar_url}}\" /></p>\n              <div class=\"content truncate\">\n                <p class=\"title\">{{repo.name}}</p>\n                <p [innerHTML]=\"(repo.description || 'None') | truncate : 40\" ></p>\n                <p>Owner: {{repo.owner.login}}</p>\n              </div>\n\n            </div>\n\n            <div class=\"outGoing\">\n              <a href=\"{{repo.html_url}}\" target=\"_blank\">\n                <i class=\"material-icons\">info</i>\n              </a>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"col s12 center-align\">\n          <pagination-controls id=\"reeps\" (pageChange)=\"pRepo = $event\"></pagination-controls>\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n\n<mz-modal #commitsModal [fixedFooter]=\"false\">\n  <mz-modal-header>\n    {{modalCommits.length}} Commits in this Event\n  </mz-modal-header>\n  <mz-modal-content>\n\n    <div class=\"commitItem\" *ngFor=\"let commit of modalCommits; let i = index\">\n      <p><strong>SHA: {{commit.sha}}</strong></p>\n      <p [innerHTML]=\"(commit.message || 'No Message')\"></p>\n    </div>\n\n  </mz-modal-content>\n  <mz-modal-footer>\n    <button mz-button [flat]=\"true\" mz-modal-close>Close</button>\n  </mz-modal-footer>\n</mz-modal>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div parallax [config]=\"{parallaxInitVal: -100, parallaxRatio: -7.3}\" class=\"bannerDetails\"></div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n</div>\n\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <div class=\"col s12\">\n        <h2>{{orgDetails.name}}</h2>\n      </div>\n\n      <div class=\"col s12 m6\">\n        <p><img class=\"mainImage\" src=\"{{orgDetails.avatar_url}}\" /></p>\n      </div>\n      <div class=\"col s12 m6\">\n\n        <p>{{orgDetails.description || \"No Bio\"}}</p>\n        <p>Hometown:&nbsp;{{orgDetails.location || \"No Hometown\"}}</p>\n        <p>Repos:&nbsp;{{orgDetails.public_repos}}</p>\n\n        <p>Company:&nbsp;{{orgDetails.company || \"No Company\"}}</p>\n        <p>Blog:&nbsp;<a href=\"{{orgDetails.blog}}\" target=\"_blank\">{{orgDetails.blog}}</a></p>\n        <p>Email:&nbsp;{{orgDetails.email || \"No E-Mail Address\"}}</p>\n        <p>Created:&nbsp;{{orgDetails.created_at | amTimeAgo}}</p>\n\n        <p><a href=\"{{orgDetails.html_url}}\" target=\"_blank\">Full Profile</a></p>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n\n    <div class=\"col s12\">\n      <ul class=\"tabs\">\n        <li class=\"tab col s6\"><a class=\"active\" href=\"#members\">Members</a></li>\n        <li class=\"tab col s6\"><a href=\"#repos\">Repositories</a></li>\n      </ul>\n    </div>\n\n    <div id=\"members\" class=\"col s12\">\n      <div class=\"memberListData center-align\">\n        <div class=\"col s12 m6 l4\" *ngFor=\"let member of members; let i = index\" (click)=\"memberDetails(member)\">\n\n          <div class=\"card hoverable\">\n            <div class=\"card-content\">\n\n              <p>\n                <img src=\"{{member.avatar_url}}\" />\n              </p>\n              <div class=\"content\">\n                <h4>{{member.login}}</h4>\n              </div>\n\n\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"col s12 noResults\" *ngIf=\"members.length === 0\">\n          <p>No Members found.</p>\n        </div>\n\n        <div [hidden]=\"hideButton\" class=\"col s12 center-align\" *ngIf=\"members.length > 0\">\n          <p>\n            <button\n              class=\"waves-effect waves-light btn amber darken-2\"\n              (mouseover)=\"onLoadMoreMembers(organization, memberPage, members)\"\n              (click)=\"onLoadMoreMembers(organization, memberPage, members)\">Load More Members\n            </button>\n          </p>\n\n        </div>\n\n      </div>\n    </div>\n\n    <div id=\"repos\" class=\"col s12\">\n      <div class=\"repoListData\">\n        <div class=\"col s12 m12 l6\" *ngFor=\"let repo of repos; let i = index\">\n\n          <div class=\"card hoverable\">\n            <div class=\"card-content\" (click)=\"repoDetails(repo)\">\n\n              <p><img src=\"{{repo.owner.avatar_url}}\" /></p>\n              <div class=\"content truncate\">\n                <p class=\"title\">{{repo.name}}</p>\n                <p class=\"truncate\" [innerHTML]=\"(repo.description || 'None') | truncate : 40\" ></p>\n                <p>Created: {{repo.created_at | amTimeAgo}}</p>\n              </div>\n\n            </div>\n\n            <div class=\"outGoing\">\n              <a href=\"{{repo.html_url}}\" target=\"_blank\">\n                <i class=\"material-icons\">menu</i>\n              </a>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col s12 noResults\" *ngIf=\"repos.length === 0\">\n          <p>No Repos found.</p>\n        </div>\n\n        <div [hidden]=\"hideButton\" class=\"col s12 center-align\" *ngIf=\"repos.length > 0\">\n          <p>\n            <button\n              class=\"waves-effect waves-light btn amber darken-2\"\n              (mouseover)=\"onLoadMoreRepos(organization, repoPage, repos)\"\n              (click)=\"onLoadMoreRepos(organization, repoPage, repos)\">Load More Repos\n            </button>\n          </p>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Organizations</h3>\n  </div>\n</div>\n\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"organizationsListData\">\n\n        <div class=\"col s12 m6 l4\" *ngFor=\"let org of organizations; let i = index\">\n          <div class=\"card hoverable\">\n              <div class=\"card-content\" (click)=\"orgDetails(org)\">\n\n                <p><img src=\"{{org.avatar_url}}\" /></p>\n                <div class=\"content\">\n                  <p class=\"title\" [innerHTML]=\"org.login | truncate : 9\" ></p>\n                </div>\n\n              </div>\n\n          </div>\n        </div>\n\n        <div [hidden]=\"isLoading\" class=\"col s12 noResults\" *ngIf=\"organizations.length === 0\">\n          <p>No Organizations found.</p>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n\n\n\n<div class=\"search-results\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"300\"\n     (scrolled)=\"getMoreOrgs(lastId)\">\n</div>\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<div parallax [config]=\"{parallaxInitVal: -100, parallaxRatio: -7.3}\" class=\"bannerDetails\"></div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n</div>\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <div class=\"col s12\">\n        <h2>{{repoDetails.name}}</h2>\n      </div>\n\n      <div class=\"col s12 m6\">\n        <p><img class=\"mainImage\" src=\"{{repoDetails.owner.avatar_url}}\" /></p>\n      </div>\n      <div class=\"col s12 m6\">\n\n        <p>{{repoDetails.description || \"No Description\"}}</p>\n        <p>Owner: {{repoDetails.owner.login}}</p>\n\n        <p>\n          <a href=\"{{repoDetails.html_url}}\" target=\"_blank\">Download</a>\n        </p>\n\n        <p>\n          <a href=\"{{repoDetails.homepage}}\" target=\"_blank\">View Website</a>\n        </p>\n\n        <p>\n          Created: {{repoDetails.created_at | amTimeAgo}}\n        </p>\n\n        <p>\n          Last Update: {{repoDetails.updated_at | amTimeAgo}}\n        </p>\n\n        <p>\n          <em>Last Push: {{repoDetails.pushed_at}}</em>\n        </p>\n\n        <p>Main Language: {{repoDetails.language}}</p>\n\n        <p>\n          <a href=\"{{repoDetails.owner.html_url}}\" target=\"_blank\">View Profile</a>\n        </p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <table class=\"striped responsive-table\">\n        <thead>\n        <tr>\n          <th>Stars</th>\n          <th>Watching</th>\n          <th>Forks</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>{{repoDetails.stargazers_count}}</td>\n          <td>{{repoDetails.watchers_count}}</td>\n          <td>{{repoDetails.forks_count}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Commits</h3>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"commitListData\">\n    <div class=\"col s12 m4 l4\" *ngFor=\"let com of commits; let i = index\">\n\n\n      <div class=\"card hoverable\">\n        <div class=\"card-content\">\n\n          <h4 class=\"truncate\">{{com.sha}}</h4>\n          <p>{{com.commit.author.name}}</p>\n          <p>{{com.commit.author.date}}</p>\n          <p [innerHTML]=\"(com.commit.message || 'No Commit Message') | truncate : 150\"></p>\n          <p>\n            <a href=\"{{com.html_url}}\" target=\"_blank\">More About This Commit</a>\n          </p>\n\n        </div>\n      </div>\n\n\n    </div>\n\n    <div class=\"col s12 noResults\" *ngIf=\"commits.length === 0\">\n      <p>No Commits found.</p>\n    </div>\n\n    <div [hidden]=\"hideButton\" class=\"col s12 center-align\" *ngIf=\"commits .length > 0\">\n      <p>\n        <button\n          class=\"waves-effect waves-light btn amber darken-2\"\n          (mouseover)=\"onLoadMoreCommits(fullRepoName, commitPage, commits)\"\n          (click)=\"onLoadMoreCommits(fullRepoName, commitPage, commits)\">Load More Commits\n        </button>\n      </p>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Repositories</h3>\n  </div>\n</div>\n\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <h3>Search:</h3>\n      <p>\n        <input type=\"text\" placeholder=\"Search Repositories\" maxlength=\"20\" [(ngModel)]=\"search.repo\" (keyup.enter)=\"searchRepo(search)\" (blur)=\"searchRepo(search)\" />\n      </p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"repoListData\">\n\n        <div class=\"col s12 m12 l6\" *ngFor=\"let repo of repos; let i = index\">\n          <div class=\"card hoverable\">\n            <div class=\"card-content\" (click)=\"repoDetails(repo)\">\n\n              <p><img src=\"{{repo.owner.avatar_url}}\" /></p>\n              <div class=\"content truncate\">\n                <p class=\"title\">{{repo.name}}</p>\n                <p [innerHTML]=\"(repo.description || 'None') | truncate : 40\" ></p>\n                <p>Owner: {{repo.owner.login}}</p>\n              </div>\n\n            </div>\n\n            <div class=\"outGoing\">\n              <a href=\"{{repo.html_url}}\" target=\"_blank\">\n                <i class=\"material-icons\">info</i>\n              </a>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div [hidden]=\"isLoading\" class=\"col s12 noResults\" *ngIf=\"repos.length === 0\">\n          <p>No Repositories found.</p>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n\n\n<div class=\"search-results\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"300\"\n     (scrolled)=\"getMoreRepos(lastId)\">\n</div>\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Search Results for: {{repo}}</h3>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n</div>\n\n<div class=\"row center-align\">\n  <div class=\"col s12 m12 l12 center-align\">\n    <div class=\"col s12 m6 l4\" *ngFor=\"let item of queryList; let i = index\" (click)=\"repoDetails(item)\">\n\n      <div class=\"card hoverable\">\n        <div class=\"card-content\">\n\n          <p><img src=\"{{item.owner.avatar_url}}\" /></p>\n          <div class=\"content\">\n            <p><a href=\"{{item.html_url}}\" target=\"_blank\">{{item.name}}</a></p>\n            <p>Owner: {{item.owner.login}}</p>\n            <p>{{item.description || \"No Description\"}}</p>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"search-results\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"300\"\n     (scrolled)=\"onLoadMore(repo, page)\">\n</div>\n"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Search Results for: {{user}}</h3>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n</div>\n\n\n<div class=\"row center-align\">\n  <div class=\"col s12 m12 l12 center-align\">\n    <div class=\"col s12 m6 l4\" *ngFor=\"let item of queryList; let i = index\" (click)=\"userDetails(item)\">\n\n      <div class=\"card hoverable\">\n        <div class=\"card-content\">\n\n          <p><img src=\"{{item.avatar_url}}\" /></p>\n          <div class=\"content\">\n            <p>{{item.login}}</p>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"search-results\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"300\"\n     (scrolled)=\"onLoadMore(user, page)\">\n</div>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<div parallax [config]=\"{parallaxInitVal: -100, parallaxRatio: -7.3}\" class=\"bannerDetails\"></div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"goBack()\" class=\"waves-effect waves-light btn black\">Go Back</button>\n  </div>\n</div>\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <div class=\"col s12\">\n        <h2>{{userDetail.name}}</h2>\n      </div>\n\n      <div class=\"col s12 m6\">\n        <p><img class=\"mainImage\" src=\"{{userDetail.avatar_url}}\" /></p>\n      </div>\n      <div class=\"col s12 m6\">\n        <p>{{userDetail.bio || \"No Bio\"}}</p>\n        <p>Followers:&nbsp;{{userDetail.followers}}</p>\n        <p>Following:&nbsp;{{userDetail.following}}</p>\n        <p>Hometown:&nbsp;{{userDetail.location || \"No Hometown\"}}</p>\n        <p>Repos:&nbsp;{{userDetail.public_repos}}</p>\n        <p>Company:&nbsp;{{userDetail.company || \"No Company\"}}</p>\n        <p>Blog:&nbsp;<a href=\"{{userDetail.blog}}\" target=\"_blank\">{{userDetail.blog}}</a></p>\n        <p>Email:&nbsp;{{userDetail.email || \"No E-Mail Address\"}}</p>\n        <p>Created:&nbsp;{{userDetail.created_at | amTimeAgo}}</p>\n\n        <p><a href=\"{{userDetail.html_url}}\" target=\"_blank\">Full Profile</a></p>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <div class=\"col s12\">\n        <ul class=\"tabs\">\n          <li class=\"tab col s3\"><a href=\"#repos\">Repos</a></li>\n          <li class=\"tab col s3\"><a href=\"#followers\">Followers</a></li>\n          <li class=\"tab col s3\"><a class=\"active\" href=\"#subscriptions\">Subscriptions</a></li>\n          <li class=\"tab col s3\"><a href=\"#organizations\">Organizations</a></li>\n        </ul>\n      </div>\n\n      <div id=\"repos\" class=\"col s12\">\n\n        <div class=\"repoListData\">\n          <div class=\"col s12 m12 l6\" *ngFor=\"let repo of repos; let i = index\">\n\n\n            <div class=\"card hoverable\">\n              <div class=\"card-content\" (click)=\"repoDetails(repo)\">\n\n                <p><img src=\"{{repo.owner.avatar_url}}\" /></p>\n                <div class=\"content truncate\">\n                  <p class=\"title\">{{repo.name}}</p>\n                  <p class=\"truncate\" [innerHTML]=\"(repo.description || 'None') | truncate : 40\" ></p>\n                  <p>Created: {{repo.created_at | amTimeAgo}}</p>\n                </div>\n\n              </div>\n\n              <div class=\"outGoing\">\n                <a href=\"{{repo.html_url}}\" target=\"_blank\">\n                  <i class=\"material-icons\">info</i>\n                </a>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"col s12 noResults\" *ngIf=\"repos.length === 0\">\n            <p>No Repos found.</p>\n          </div>\n\n          <div [hidden]=\"hideButton\" class=\"col s12 center-align\" *ngIf=\"repos.length > 0\">\n            <p>\n              <button\n                class=\"waves-effect waves-light btn amber darken-2\"\n                (mouseover)=\"onLoadMoreRepos(userDetail.login, repoPage, repos)\"\n                (click)=\"onLoadMoreRepos(userDetail.login, repoPage, repos)\">Load More Repositories\n              </button>\n            </p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"followers\" class=\"col s12 followersDataList\">\n\n        <div class=\"row center-align\">\n          <div class=\"col s12 m12 l12 center-align\">\n            <div class=\"col s12 m6 l4\" *ngFor=\"let follower of followers\" (click)=\"followerDetails(follower)\">\n\n              <div class=\"card hoverable\">\n                <div class=\"card-content\">\n\n                  <p>\n                    <img src=\"{{follower.avatar_url}}\" />\n                  </p>\n                  <div class=\"content\">\n                    <h4 class=\"truncate\">{{follower.login}}</h4>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div [hidden]=\"hideButton\" class=\"col s12 center-align\" *ngIf=\"followers.length > 0\">\n          <p>\n            <button\n                    class=\"waves-effect waves-light btn amber darken-2\"\n                    (mouseover)=\"onLoadMore(userDetail.login, page, followers)\"\n                    (click)=\"onLoadMore(userDetail.login, page, followers)\">Load More Followers\n            </button>\n          </p>\n\n        </div>\n\n        <div class=\"col s12 noResults\" *ngIf=\"followers.length === 0\">\n          <p>No Followers found.</p>\n        </div>\n\n      </div>\n\n      <div id=\"subscriptions\" class=\"col s12 subscriptionsDataList\">\n\n        <div class=\"row\">\n          <div class=\"col s12 m12 l12\">\n\n            <div class=\"col s12 m6 l4\" *ngFor=\"let subscription of subscriptions\">\n\n              <div class=\"card hoverable\">\n                <div class=\"card-content\">\n\n\n                  <p class=\"title truncate\">{{subscription.name}}</p>\n                  <p class=\"truncate\" [innerHTML]=\"(subscription.description || 'None') | truncate : 40\" ></p>\n\n                </div>\n\n                <div class=\"outGoing\">\n                  <a href=\"{{subscription.html_url}}\" target=\"_blank\">\n                    <i class=\"material-icons\">info</i>\n                  </a>\n                </div>\n\n              </div>\n\n            </div>\n\n            <div class=\"col s12 noResults\" *ngIf=\"subscriptions.length === 0\">\n              <p>No Subscriptions found.</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"organizations\" class=\"col s12 organizationsListData\">\n\n        <div class=\"row\">\n          <div class=\"col s12 m12 l12\">\n\n            <div class=\"col s12 m6 l4\" *ngFor=\"let org of orgs\">\n\n              <div class=\"card hoverable\">\n                <div class=\"card-content\" (click)=\"orgDetails(org)\">\n\n                  <p><img src=\"{{org.avatar_url}}\" /></p>\n                  <div class=\"content\">\n                    <p class=\"title\" [innerHTML]=\"org.login | truncate : 9\" ></p>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col s12 noResults\" *ngIf=\"orgs.length === 0\">\n              <p>No Organizations found.</p>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h3>Users</h3>\n  </div>\n</div>\n\n<div class=\"max-width\">\n\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <h3>Search:</h3>\n      <p>\n        <input type=\"text\" placeholder=\"Search Users\" maxlength=\"20\" [(ngModel)]=\"search.user\" (keyup.enter)=\"searchUser(search)\" (blur)=\"searchUser(search)\" />\n      </p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n\n      <div class=\"col userListData\">\n\n        <div class=\"col s12 m6 l6\" *ngFor=\"let user of usersList; let i = index\" (click)=\"userDetails(user)\">\n          <div class=\"card hoverable\">\n            <div class=\"card-content\">\n\n              <p><img src=\"{{user.avatar_url}}\" /></p>\n              <div class=\"content\">\n                <p>{{user.login}}</p>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s12 noResults\" *ngIf=\"usersList.length === 0\">\n          <p>No Users found.</p>\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n\n\n</div>\n\n\n<div class=\"search-results\"\n     infiniteScroll\n     [infiniteScrollDistance]=\"2\"\n     [infiniteScrollThrottle]=\"300\"\n     (scrolled)=\"getMoreUsers(lastId)\">\n</div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(311);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojisComponent = (function () {
    function EmojisComponent(_apiService, titleService) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.emojis = [];
        this.numberE = 24;
        this.emojisLength = 0;
        this.isLoading = true;
        this.titleService.setTitle("Git App - Emojis");
    }
    EmojisComponent.prototype.ngOnInit = function () {
        /*
         Get all emojis
         */
        this.fetchEmojis();
    };
    EmojisComponent.prototype.fetchEmojis = function () {
        var _this = this;
        /*
         API service for emojis
         */
        this._apiService.getEmojis().subscribe(function (data) {
            _this.emojis = data;
            _this.emojisLength = Object.keys(_this.emojis).length;
        }, function (err) { return console.error(err); }, function () {
            console.log("Emoji data", _this.emojis);
            _this.isLoading = false;
        });
    };
    /*
      Load More emojis in increments
     */
    EmojisComponent.prototype.loadMoreEmojis = function () {
        this.numberE += 24;
    };
    return EmojisComponent;
}());
EmojisComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(468),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], EmojisComponent);

var _a, _b;
//# sourceMappingURL=emojis.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Git App - 404 Page Not Found");
    }
    ErrorComponent.prototype.goBack = function () {
        window.history.back();
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(469),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventPublicComponent = (function () {
    function EventPublicComponent(_apiService, titleService) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.events = [];
        this.serviceRequest = {};
        this.isLoading = true;
        this.modalCommits = [];
        this.titleService.setTitle("Git App - Public Events");
    }
    EventPublicComponent.prototype.ngOnInit = function () {
        /*
         Get all public events
         */
        this.fetchPublicEvents();
    };
    EventPublicComponent.prototype.fetchPublicEvents = function () {
        var _this = this;
        /*
         Get all public events
         */
        this.serviceRequest = this._apiService.getPublicEvents().subscribe(function (data) {
            _this.events = _this.events.concat(data);
        }, function (err) { return console.error(err); }, function () {
            console.log("Events data", _this.events);
            //this.subscribeToData();
            _this.isLoading = false;
        });
    };
    EventPublicComponent.prototype.goBack = function () {
        window.history.back();
    };
    EventPublicComponent.prototype.getCommits = function (commits) {
        console.log(commits);
        this.modalCommits = commits;
    };
    return EventPublicComponent;
}());
EventPublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(470),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], EventPublicComponent);

var _a, _b;
//# sourceMappingURL=eventPublic.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_apiService, titleService, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.router = router;
        this.usersList = [];
        this.lastId = 0;
        this.search = {
            user: ""
        };
        this.organizations = [];
        this.events = [];
        this.repos = [];
        this.isLoading = true;
        this.p = 1;
        this.pRepo = 1;
        this.modalCommits = [];
        this.titleService.setTitle("Git App - Home");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        /*
         Get users from last id collected
         */
        this.getMoreUsers(this.lastId);
        /*
         Get get all organizations
         */
        this.getOrganizations(this.lastId);
        /*
         Get get all public events
         */
        this.fetchPublicEvents();
        /*
         Get get all repos by last id
         */
        this.getRepos(this.lastId);
    };
    HomeComponent.prototype.getMoreUsers = function (lastUser) {
        var _this = this;
        /*
         Get users from last id collected
         */
        this._apiService.getUsers(lastUser).subscribe(function (data) {
            _this.usersList = _this.usersList.concat(data);
            _this.lastId = _this.usersList[_this.usersList.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("User data", _this.usersList);
        });
    };
    HomeComponent.prototype.searchUser = function (search) {
        this.router.navigate(['./search/users/' + encodeURI(search.user)]);
    };
    HomeComponent.prototype.getOrganizations = function (lastId) {
        var _this = this;
        /*
         Get get all organizations
         */
        this._apiService.getAllOrgs(lastId).subscribe(function (data) {
            _this.organizations = _this.organizations.concat(data);
            _this.lastId = _this.organizations[_this.organizations.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("Organizations data", _this.organizations);
        });
    };
    HomeComponent.prototype.orgDetails = function (org) {
        this.router.navigate(['./organizations/details/' + encodeURI(org.login)]);
    };
    HomeComponent.prototype.fetchPublicEvents = function () {
        var _this = this;
        /*
         Get get all public events
         */
        this._apiService.getPublicEvents().subscribe(function (data) {
            _this.events = _this.events.concat(data);
        }, function (err) { return console.error(err); }, function () {
            console.log("Events data", _this.events);
        });
    };
    HomeComponent.prototype.getRepos = function (lastId) {
        var _this = this;
        /*
         Get get all repos by last id
         */
        this._apiService.getRepositories(lastId).subscribe(function (data) {
            _this.repos = _this.repos.concat(data);
            _this.lastId = _this.repos[_this.repos.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("Repo data", _this.repos);
        });
    };
    HomeComponent.prototype.repoDetails = function (repo) {
        this.router.navigate(['./repositories/details/' + encodeURI(repo.full_name)]);
    };
    HomeComponent.prototype.getCommits = function (commits) {
        console.log(commits);
        this.modalCommits = commits;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(471),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationDetailComponent = (function () {
    function OrganizationDetailComponent(_apiService, titleService, activatedRoute, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.organization = "";
        this.orgDetails = {};
        this.members = [];
        this.memberPage = 1;
        this.repos = [];
        this.repoPage = 1;
        this.titleService.setTitle("Git App - Details");
    }
    OrganizationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.organization = params['org'];
            _this.titleService.setTitle("Git App - " + _this.organization + ' Details');
            console.log(_this.organization);
        });
        /*
         Get Organization Details
         */
        this.getOrgDetails(this.organization);
        /*
         Get Organization members
         */
        this.getOrgMembers(this.organization, this.memberPage);
        /*
         Get Organization Repos
         */
        this.getOrgRepos(this.organization, this.memberPage);
    };
    OrganizationDetailComponent.prototype.getOrgDetails = function (org) {
        var _this = this;
        /*
         Get Organization Details
         */
        this._apiService.getOrgDetails(org).subscribe(function (data) {
            _this.orgDetails = data;
        }, function (err) { return console.error(err); }, function () {
            console.log("Organization data", _this.orgDetails);
        });
    };
    OrganizationDetailComponent.prototype.getOrgMembers = function (org, page) {
        var _this = this;
        /*
         Get Organization members
         */
        this._apiService.getOrgMembers(org, page).subscribe(function (data) {
            _this.members = _this.members.concat(data);
            _this.memberPage += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Member data", _this.members);
        });
    };
    OrganizationDetailComponent.prototype.getOrgRepos = function (org, page) {
        var _this = this;
        /*
         Get Organization Repos
         */
        this._apiService.getOrgRepos(org, page).subscribe(function (data) {
            _this.repos = _this.repos.concat(data);
            _this.repoPage += 1;
        }, function (err) { return console.error(err); }, function () {
            console.log("Repo data", _this.repos);
        });
    };
    OrganizationDetailComponent.prototype.onLoadMoreMembers = function (org, page) {
        this.getOrgMembers(org, page);
    };
    OrganizationDetailComponent.prototype.onLoadMoreRepos = function (org, page) {
        this.getOrgRepos(org, page);
    };
    OrganizationDetailComponent.prototype.memberDetails = function (member) {
        this.router.navigate(['./user/details/' + encodeURI(member.login)]);
    };
    OrganizationDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return OrganizationDetailComponent;
}());
OrganizationDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(472),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], OrganizationDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=organizationsDetail.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganizationListComponent = (function () {
    function OrganizationListComponent(_apiService, titleService, router) {
        this._apiService = _apiService;
        this.titleService = titleService;
        this.router = router;
        this.organizations = [];
        this.lastId = 0;
        this.isLoading = true;
        this.titleService.setTitle("Git App - Organizations");
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        /*
         Get all public organizations
         */
        this.getOrganizations(this.lastId);
    };
    OrganizationListComponent.prototype.getOrganizations = function (lastId) {
        var _this = this;
        /*
         Get all public organizations
         */
        this._apiService.getAllOrgs(lastId).subscribe(function (data) {
            _this.organizations = _this.organizations.concat(data);
            _this.lastId = _this.organizations[_this.organizations.length - 1].id;
        }, function (err) { return console.error(err); }, function () {
            console.log("Organizations data", _this.organizations);
            _this.isLoading = false;
        });
    };
    OrganizationListComponent.prototype.getMoreOrgs = function (lastId) {
        this.getOrganizations(this.lastId);
    };
    OrganizationListComponent.prototype.orgDetails = function (org) {
        this.router.navigate(['./organizations/details/' + encodeURI(org.login)]);
    };
    return OrganizationListComponent;
}());
OrganizationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(473),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], OrganizationListComponent);

var _a, _b, _c;
//# sourceMappingURL=organizationsList.component.js.map

/***/ })

},[739]);
//# sourceMappingURL=main.bundle.js.map