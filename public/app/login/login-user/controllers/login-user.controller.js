class LoginUser {
  constructor($state, $log, $location, $localStorage, $http, AuthenticationService, ROUTER) {
    'ngInject';
    this.ROUTER = ROUTER;
    this.$log = $log;
    this.username = null;
    this.password = null;
    this.$state = $state;
    this.$location = $location;
    this.$localStorage = $localStorage;
    this.$http = $http;
    this.AuthenticationService = AuthenticationService;
  }

  $onInit() {
    delete this.$localStorage.user;
    this.$http.defaults.headers.common.Authorization = '';
  }
  
  async login() {
    try {
      const resp = await this.AuthenticationService.login(this.username, this.password);
      if (resp.status === 200) {
        this.$state.go(this.ROUTER.DASHBOARD.NAME, {boardID: this.ROUTER.HOME.NAME});
      } else {
        await this.AuthenticationService.logout();
      }
    } catch (err) {
      this.$log.error(['LoginUser'], ['login'], err);
    }
  }
}

export default LoginUser;
