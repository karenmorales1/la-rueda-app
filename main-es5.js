(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Usuario\Downloads\la-rueda-app-full\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "BQel":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function BQel(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>📋 Lista de Contactos</h2>\n\n<!-- Mensaje de estado -->\n<p [style.color]=\"messageColor\" style=\"font-weight: bold\">\n  {{ message }}\n</p>\n\n<!-- Tabla de contactos -->\n<table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" width=\"100%\">\n  <thead style=\"background: #eee\">\n    <tr>\n      <th>Nombre</th>\n      <th>Celular</th>\n      <th>Placa</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let c of contacts\">\n      <td>{{ c.nombre }}</td>\n      <td>{{ c.celular }}</td>\n      <td>{{ c.placa }}</td>\n    </tr>\n  </tbody>\n</table>\n\n<hr />\n\n<!-- Crear nuevo contacto -->\n<h3>➕ Crear nuevo contacto</h3>\n\n<input\n  type=\"text\"\n  placeholder=\"Nombre\"\n  [(ngModel)]=\"newName\"\n/>\n<input\n  type=\"text\"\n  placeholder=\"Celular\"\n  [(ngModel)]=\"newPhone\"\n/>\n<input\n  type=\"text\"\n  placeholder=\"Placa\"\n  [(ngModel)]=\"newPlate\"\n/>\n\n<button (click)=\"createContact()\">Crear contacto</button>\n\n<hr />\n\n<!-- Carga masiva -->\n<h3>⬆️ Carga Masiva (JSON)</h3>\n<textarea\n  rows=\"6\"\n  cols=\"60\"\n  [(ngModel)]=\"bulkText\"\n  placeholder='Ejemplo: { \"rows\": [ { \"nombre\": \"Luis\", \"celular\": \"3001234567\", \"placa\": \"AAA111\" } ] }'\n></textarea>\n<br />\n<button (click)=\"uploadBulk()\">Cargar</button>\n\n\n";
      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "ywSW");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.css */
      "pG9d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(api, router) {
          _classCallCheck(this, LoginComponent);

          this.api = api;
          this.router = router;
          this.email = '';
          this.password = '';
          this.message = '';
          this.messageColor = '';
        }

        return _createClass(LoginComponent, [{
          key: "login",
          value: function login() {
            var _this = this;

            console.log('👉 Ejecutando login con:', this.email, this.password);
            this.api.login(this.email, this.password).subscribe({
              next: function next(res) {
                console.log('✅ Login exitoso:', res);

                _this.api.setToken(res.token);

                _this.message = '✅ Login exitoso. Redirigiendo...';
                _this.messageColor = 'green'; // redirige después de 1 segundo

                setTimeout(function () {
                  return _this.router.navigate(['/contacts']);
                }, 1000);
              },
              error: function error(err) {
                console.error('❌ Error en login:', err);
                _this.message = '❌ Credenciales incorrectas';
                _this.messageColor = 'red';
              }
            });
          }
        }]);
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
      /***/
    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.baseUrl = 'https://api.larueda.com.co/api/testingreso';
          this.candidateCode = 'CAND_0011';
          this.token = '';
        }

        return _createClass(ApiService, [{
          key: "setToken",
          value: function setToken(token) {
            this.token = token;
          } // ====================================================
          // MÉTODO DE LOGIN SIMULADO
          // ====================================================

        }, {
          key: "login",
          value: function login(email, password) {
            var _this2 = this;

            console.log('Intentando login con:', email, password); // 👈 para debug

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (email.trim() === 'cand_0011@larueda.com' && password.trim() === 'Password123') {
                console.log('✅ Credenciales correctas');
                observer.next({
                  token: 'token_simulado_123',
                  user: {
                    email: email,
                    candidate_code: _this2.candidateCode
                  }
                });
              } else {
                console.log('❌ Credenciales incorrectas');
                observer.error({
                  status: 'error',
                  code: 400,
                  message: 'Login incorrecto'
                });
              }

              observer.complete();
            });
          } // ====================================================
          // MÉTODOS SIMULADOS PARA CONTACTOS
          // ====================================================

        }, {
          key: "getContacts",
          value: function getContacts() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              observer.next([{
                nombre: 'Juan Pérez',
                celular: '3001112233',
                placa: 'ABC123'
              }, {
                nombre: 'Ana Ruiz',
                celular: '3002223344',
                placa: 'XYZ987'
              }]);
              observer.complete();
            });
          }
        }, {
          key: "createContact",
          value: function createContact(data) {
            console.log('Simulado: creando contacto', data);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              observer.next({
                status: 'ok'
              });
              observer.complete();
            });
          }
        }, {
          key: "bulkContacts",
          value: function bulkContacts(rows) {
            console.log('Simulado: carga masiva', rows);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              observer.next({
                status: 'ok'
              });
              observer.complete();
            });
          }
        }]);
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ApiService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);
      });

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: "\n    <router-outlet></router-outlet>\n  "
      })], AppComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/contacts/contacts.component */
      "ZuGw");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZuGw":
    /*!******************************************************!*\
      !*** ./src/app/pages/contacts/contacts.component.ts ***!
      \******************************************************/

    /*! exports provided: ContactsComponent */

    /***/
    function ZuGw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
      });
      /* harmony import */


      var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "BQel");
      /* harmony import */


      var _contacts_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.component.css */
      "rhmd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent(api) {
          _classCallCheck(this, ContactsComponent);

          this.api = api;
          this.contacts = [];
          this.newName = '';
          this.newPhone = '';
          this.newPlate = '';
          this.bulkText = '';
          this.message = '';
          this.messageColor = '';
        }

        return _createClass(ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadContacts();
          }
        }, {
          key: "loadContacts",
          value: function loadContacts() {
            var _this3 = this;

            this.api.getContacts().subscribe({
              next: function next(res) {
                return _this3.contacts = res;
              },
              error: function error() {
                return _this3.showMessage('❌ Error al cargar contactos', 'red');
              }
            });
          }
        }, {
          key: "createContact",
          value: function createContact() {
            var _this4 = this;

            var nuevo = {
              nombre: this.newName,
              celular: this.newPhone,
              placa: this.newPlate
            };

            if (!nuevo.nombre || !nuevo.celular || !nuevo.placa) {
              this.showMessage('⚠️ Completa todos los campos', 'orange');
              return;
            }

            this.api.createContact(nuevo).subscribe({
              next: function next() {
                _this4.contacts.push(nuevo); // 👈 agrega el nuevo contacto a la lista


                _this4.newName = '';
                _this4.newPhone = '';
                _this4.newPlate = '';

                _this4.showMessage('✅ Contacto creado correctamente', 'green');
              },
              error: function error() {
                _this4.showMessage('❌ Error al crear el contacto', 'red');
              }
            });
          }
        }, {
          key: "uploadBulk",
          value: function uploadBulk() {
            var _this5 = this;

            try {
              var data = JSON.parse(this.bulkText);
              var rows = data.rows || data.filas || [];

              if (rows.length === 0) {
                this.showMessage('⚠️ No se encontraron filas', 'orange');
                return;
              }

              this.api.bulkContacts(rows).subscribe({
                next: function next() {
                  // 👇 Agrega los nuevos contactos visualmente
                  _this5.contacts = [].concat(_toConsumableArray(_this5.contacts), _toConsumableArray(rows));

                  _this5.showMessage('✅ Carga masiva exitosa', 'green');
                },
                error: function error() {
                  return _this5.showMessage('❌ Error en la carga masiva', 'red');
                }
              });
            } catch (_a) {
              this.showMessage('❌ JSON inválido', 'red');
            }
          }
        }, {
          key: "showMessage",
          value: function showMessage(msg, color) {
            var _this6 = this;

            this.message = msg;
            this.messageColor = color;
            setTimeout(function () {
              _this6.message = '';
            }, 3000);
          }
        }]);
      }();

      ContactsComponent.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      ContactsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contacts_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ContactsComponent);
      /***/
    },

    /***/
    "pG9d":
    /*!*************************************************!*\
      !*** ./src/app/pages/login/login.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function pG9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-container {\r\n  max-width: 300px;\r\n  margin: 50px auto;\r\n  padding: 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  padding: 8px;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 8px;\r\n  background: #1976d2;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background: #0d47a1;\r\n}\r\n\r\n.message {\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzBkNDdhMTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "rhmd":
    /*!*******************************************************!*\
      !*** ./src/app/pages/contacts/contacts.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function rhmd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\r\n  max-width: 700px;\r\n  margin: 40px auto;\r\n  padding: 20px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n  background-color: #fafafa;\r\n}\r\n\r\nh2, h3 {\r\n  text-align: center;\r\n  color: #333;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nth, td {\r\n  border: 1px solid #ccc;\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\nth {\r\n  background-color: #1976d2;\r\n  color: white;\r\n}\r\n\r\ninput, textarea {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin: 5px 0 10px 0;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #0d47a1;\r\n}\r\n\r\n.message {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/contacts/contacts.component */
      "ZuGw");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'contacts',
        component: _pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ywSW":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ywSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Iniciar sesión</h2>\n\n<input\n  type=\"email\"\n  [(ngModel)]=\"email\"\n  placeholder=\"Correo electrónico\"\n/>\n\n<input\n  type=\"password\"\n  [(ngModel)]=\"password\"\n  placeholder=\"Contraseña\"\n/>\n\n<button (click)=\"login()\">Login</button>\n\n<p [style.color]=\"messageColor\">{{ message }}</p>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map