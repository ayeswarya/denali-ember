'use strict';

define("dummy/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn.apply(void 0, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/helpers/setup-router", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /* eslint-disable ember/no-private-routing-service */
  function _default(hooks) {
    hooks.beforeEach(function () {
      var router = this.owner.lookup('router:main');
      router.startRouting(true);
    });
  }
});
define("dummy/tests/integration/components/denali-alert-inline-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert-inline', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline>
                      </DenaliAlertInline>
                    
                */
                {
                  "id": "iGU8aS0X",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.alert.is-inline').exists('Inline alert renders in block form correctly');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders in non-block form', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(1);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline/>
                    
                */
                {
                  "id": "TrJiSKXm",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.alert.is-inline').exists('Inline alert renders in non-block form correctly');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a title sub component in block form', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(1);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline as |Alert|>
                        <Alert.Title>Test Title</Alert.Title>
                      </DenaliAlertInline>
                    
                */
                {
                  "id": "7vyjIzzT",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Test Title\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline yields a title sub component');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a title in non-block form', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlertInline @title="Test Title"/>
                    
                */
                {
                  "id": "Yd+EvxkX",
                  "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\"],[\"Test Title\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title', 'DenaliAlertInline renders a title');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a context sub component in block form', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(2);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline as |Alert|>
                        <Alert.Title>Test Title:</Alert.Title>
                        <Alert.Context>Alert Context Details</Alert.Context>
                      </DenaliAlertInline>
                    
                */
                {
                  "id": "Ii1GuciO",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Test Title:\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Context\"]],null,null,[[\"default\"],[[[[1,\"Alert Context Details\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
                assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a context block in non-block form', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline @title="Test Title:" @context="Alert Context Details"/>
                    
                */
                {
                  "id": "W7ssMx8r",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\"],[\"Test Title:\",\"Alert Context Details\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert span.is-bold').hasText('Test Title:', 'Only the title is bold');
                assert.dom('.alert p').hasText('Test Title: Alert Context Details', 'DenaliAlertInline renders both the title and context inside the p element');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render different alert styles', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                assert.expect(5);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlertInline @title="Alert Title:" @context="Hello World!" @style={{this.style}}/>
                    
                */
                {
                  "id": "Vsewn/YA",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\",\"@style\"],[\"Alert Title:\",\"Hello World!\",[30,0,[\"style\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert-inline\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert.is-inline').hasNoClass('No class is added when style is not set');
                this.set('style', 'info');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-info', 'DenaliAlertInline has info styles when `@style` arg is set to info');
                this.set('style', 'warning');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-warning', 'DenaliAlertInline has warning styles when `@style` arg is set to warning');
                this.set('style', 'success');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-success', 'DenaliAlertInline has success styles when `@style` arg is set to success');
                this.set('style', 'danger');
                assert.dom('.alert.is-inline').hasClass('has-bg-status-danger', 'DenaliAlertInline has danger styles when `@style` arg is set to danger');

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders in block form', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert>
                      </DenaliAlert>
                    
                */
                {
                  "id": "xXN4AfTv",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders in non-block form', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert/>
                    
                */
                {
                  "id": "7Uua+AjI",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.alert').exists('DenaliAlert exists and renders a div with alert class');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a title sub component in block form', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert as |Alert|>
                        <Alert.Title>Alert Title!!1</Alert.Title>
                      </DenaliAlert>
                    
                */
                {
                  "id": "x/zyV6Cn",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Alert Title!!1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert yields a title sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a title in non-block form', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1"/>
                    
                */
                {
                  "id": "3Z7MHQH6",
                  "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\"],[\"Alert Title!!1\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert h5').hasText('Alert Title!!1', 'DenaliAlert renders a title');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a context sub component in block form', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert as |Alert|>
                        <Alert.Title>Alert Title!!1</Alert.Title>
                        <Alert.Context>Alert Context Details</Alert.Context>
                      </DenaliAlert>
                    
                */
                {
                  "id": "AnftINnQ",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Title\"]],null,null,[[\"default\"],[[[[1,\"Alert Title!!1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Context\"]],null,null,[[\"default\"],[[[[1,\"Alert Context Details\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Alert\"],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a context block in non-block form', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert @title="Alert Title!!1" @context="Alert Context Details"/>
                    
                */
                {
                  "id": "N+850ug+",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@context\"],[\"Alert Title!!1\",\"Alert Context Details\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert p').hasText('Alert Context Details', 'DenaliAlert renders a context block');

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports block styles', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @isBlock={{this.isBlock}}/>
                    
                */
                {
                  "id": "HYM35jUW",
                  "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@isBlock\"],[\"Alert Title!!1\",[30,0,[\"isBlock\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert').doesNotHaveClass('is-block', 'DenaliAlert does not have block styles by default');
                this.set('isBlock', true);
                assert.dom('.alert').hasClass('is-block', 'DenaliAlert has block styles when `@isBlock` arg is set to true');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render different alert styles', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @style={{this.style}}/>
                    
                */
                {
                  "id": "trRFX9Vu",
                  "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@style\"],[\"Alert Title!!1\",[30,0,[\"style\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('style', 'info');
                assert.dom('.alert').hasClass('is-info', 'DenaliAlert has info styles when `@style` arg is set to info');
                this.set('style', 'warning');
                assert.dom('.alert').hasClass('is-warning', 'DenaliAlert has warning styles when `@style` arg is set to warning');
                this.set('style', 'success');
                assert.dom('.alert').hasClass('is-success', 'DenaliAlert has success styles when `@style` arg is set to success');
                this.set('style', 'danger');
                assert.dom('.alert').hasClass('is-danger', 'DenaliAlert has danger styles when `@style` arg is set to danger');

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it icons when provided with `icon` arg', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert
                        @title="Alert Title!!1"
                        @icon={{this.icon}}
                      />
                    
                */
                {
                  "id": "Qp2fuCJL",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@icon\"],[\"Alert Title!!1\",[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert .d-icon').doesNotHaveClass('d-check-circle', 'DenaliAlert does not render an icon by default');
                this.set('icon', 'check-circle');
                assert.dom('.alert .d-icon').hasClass('d-check-circle', 'DenaliAlert renders the specified `@icon` arg');

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders solid icons when `@isBlock` arg is true', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert
                        @title="Alert Title!!1"
                        @style={{this.style}}
                        @isBlock={{true}}
                        @icon="check-circle"
                      />
                    
                */
                {
                  "id": "fCKIEcvp",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@title\",\"@style\",\"@isBlock\",\"@icon\"],[\"Alert Title!!1\",[30,0,[\"style\"]],true,\"check-circle\"]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.alert .d-icon').hasClass('d-check-circle-solid', 'DenaliAlert renders the solid notification icon by default when `@isBlock` is set to true');

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can render a close button', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                assert.expect(3);
                _context11.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                        <DenaliAlert @title="Alert Title!!1" @onClose={{this.onClose}}/>
                    
                */
                {
                  "id": "q4G+LNCs",
                  "block": "[[[1,\"\\n        \"],[8,[39,0],null,[[\"@title\",\"@onClose\"],[\"Alert Title!!1\",[30,0,[\"onClose\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-alert\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.alert span.close').doesNotExist('DenaliAlert does not render a close button by default');
                this.set('onClose', function (e) {
                  assert.equal(e.type, 'click', 'DenaliAlert will call `@onClose` action when close button is clicked');
                });
                assert.dom('.alert span.close').exists('DenaliAlert renders a close button when `@onClose` arg is provided');
                _context11.next = 8;
                return (0, _testHelpers.click)('.close');

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert/context-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert/context', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert::Context class="my-context">
                        Inner Content
                      </DenaliAlert::Context>
                    
                */
                {
                  "id": "Zsrl7xmj",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"my-context\"]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert/context\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('p.my-context').hasText('Inner Content', 'DenaliAlert::Context exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-alert/title-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-alert/title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliAlert::Title class="my-title">
                        Inner Content
                      </DenaliAlert::Title>
                    
                */
                {
                  "id": "UmFrGa3u",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"my-title\"]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-alert/title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('h5.my-title').hasText('Inner Content', 'DenaliAlert::Title exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-box-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox>
                        Inner Content
                      </DenaliBox>
                    
                */
                {
                  "id": "P9hBuvc+",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-box\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.box').hasText('Inner Content', 'DenaliBox exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a header component', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.Header>Header</Box.Header>
                      </DenaliBox>
                    
                */
                {
                  "id": "kZ5Fx8Uk",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Header\"]],null,null,[[\"default\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.box h3').hasText('Header', 'DenaliBox can yield a header component');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a sub header component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.SubHeader>Sub Header</Box.SubHeader>
                      </DenaliBox>
                    
                */
                {
                  "id": "qfWw+8Mb",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"SubHeader\"]],null,null,[[\"default\"],[[[[1,\"Sub Header\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.box h5').hasText('Sub Header', 'DenaliBox can yield a sub header component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a footer component', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBox as |Box|>
                        <Box.Footer>Footer</Box.Footer>
                      </DenaliBox>
                    
                */
                {
                  "id": "HPzV2ygM",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Footer\"]],null,null,[[\"default\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Box\"],false,[\"denali-box\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.box footer').hasText('Footer', 'DenaliBox can yield a footer component');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-breadcrumb-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-breadcrumb', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(3);
                this.set('items', [1, 2, 3, 4]);
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliBreadcrumb
                        @items={{this.items}}
                        as | item |
                      >
                        <span class="link">{{item}}</span>
                      </DenaliBreadcrumb>
                    
                */
                {
                  "id": "oLB4T8q6",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@items\"],[[30,0,[\"items\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[10,1],[14,0,\"link\"],[12],[1,[30,1]],[13],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"item\"],false,[\"denali-breadcrumb\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                assert.dom('ul.breadcrumb').exists('A ul with class breadcrumb is rendered');
                assert.dom('.breadcrumb li').exists({
                  count: this.items.length
                }, 'The number of li rendered equal the number of items passed through');
                assert.dom('.breadcrumb .link').exists({
                  count: this.items.length
                }, 'Each item is wrapped in a span as specified');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "L8cfc1JR",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('button.button').hasText('Inner Content', 'DenaliButton exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be disabled', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton disabled={{this.isDisabled}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "e8oWlN+z",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[16,\"disabled\",[30,0,[\"isDisabled\"]]]],null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').isNotDisabled('DenaliButton is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('.button').isDisabled('DenaliButton can be disabled by setting the `disabled` attribute to true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports types', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @type={{this.type}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "T0if+q21",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@type\"],[[30,0,[\"type\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').hasAttribute('type', 'button', 'DenaliButton has a type of `button` by default');
                this.set('type', 'submit');
                assert.dom('.button').hasAttribute('type', 'submit', 'DenaliButton has a submit type when `type` arg is set to submit');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it an be set active ', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @isActive={{this.isActive}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "hvAwi6hk",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').doesNotHaveClass('is-active', 'DenaliButton is not active by default');
                this.set('isActive', true);
                assert.dom('.button').hasClass('is-active', 'DenaliButton can be set active by setting the `@isActive` arg to true');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports styles', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @style={{this.style}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "EbM+AmB8",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\"],[[30,0,[\"style\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style by default');
                this.set('style', 'solid');
                assert.dom('.button').hasClass('is-solid', 'DenaliButton has a solid style when `@style` arg is set to solid');
                this.set('style', 'outline');
                assert.dom('.button').hasClass('is-outline', 'DenaliButton has a outline style when `@style` arg is set to outline');
                this.set('style', 'ghost');
                assert.dom('.button').hasClass('is-ghost', 'DenaliButton has a ghost style when `@style` arg is set to ghost');
                this.set('style', 'text');
                assert.dom('.button').hasClass('is-text', 'DenaliButton has a text style when `@style` arg is set to text');
                this.set('style', 'danger');
                assert.dom('.button').hasClass('is-danger', 'DenaliButton has a danger style when `@style` arg is set to danger');

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @isInverse={{this.isInverse}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "YQiLdA3w",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').doesNotHaveClass('is-inverse', 'DenaliButton does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.button').hasClass('is-inverse', 'DenaliButton has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @size={{this.size}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "MfTTp6C/",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').exists('DenaliButton can render without a size set');
                this.set('size', 'small');
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.button').hasClass('is-medium', 'DenaliButton has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.button').hasClass('is-large', 'DenaliButton has a large size when `@size` arg is set to large');

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports isFull', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @size={{this.size}} @isFull={{this.isFull}}>
                        Inner Content
                      </DenaliButton>
                    
                */
                {
                  "id": "IbP8rvhI",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\",\"@isFull\"],[[30,0,[\"size\"]],[30,0,[\"isFull\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').exists('DenaliButton can render without a size set');
                assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is undefined');
                this.set('isFull', true);
                assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true');
                this.set('size', 'small');
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                assert.dom('.button').hasClass('is-full', 'DenaliButton has a full size when `@isFull` arg is set to true and size is set to small');
                this.set('isFull', false);
                assert.dom('.button').hasClass('is-small', 'DenaliButton has a small size when `@size` arg is set to small');
                assert.dom('.button').doesNotHaveClass('is-full', 'DenaliButton does not have a full size when `@isFull` arg is set to false');

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports icons', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton @style="solid" @icon={{this.icon}} @iconOnly={{this.iconOnly}}>
                        Share
                      </DenaliButton>
                    
                */
                {
                  "id": "4Bae1BB7",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\",\"@icon\",\"@iconOnly\"],[\"solid\",[30,0,[\"icon\"]],[30,0,[\"iconOnly\"]]]],[[\"default\"],[[[[1,\"\\n        Share\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button .d-icon').doesNotExist('No icon is rendered when none is specified');
                assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class by default');
                this.set('icon', 'share');
                assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
                assert.dom('.button .d-icon').hasClass('d-share', 'DenaliButton renders the specified icon');
                assert.dom('.button').doesNotHaveClass('has-icon', 'DenaliButton does not have a `has-icon` class');
                this.set('iconOnly', true);
                assert.dom('.button').hasClass('has-icon', 'DenaliButton has a `has-icon` class when iconOnly arg is set to true');

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports loading', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliButton 
                        @isLoading={{this.isLoading}} 
                        @icon="save"
                      >
                        Save
                      </DenaliButton>
                    
                */
                {
                  "id": "U2UoUGYo",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isLoading\",\"@icon\"],[[30,0,[\"isLoading\"]],\"save\"]],[[\"default\"],[[[[1,\"\\n        Save\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-button\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.button').doesNotHaveClass('has-loader', 'DenaliButton does not have a `has-loader` class by default');
                assert.dom('.button').hasText('Save', 'DenaliButton renders inner text by default');
                assert.dom('.button .d-icon').exists('DenaliButton renders an icon when specified');
                assert.dom('.button div.loader').doesNotExist('DenaliButton does render a loader by default');
                this.set('isLoading', true);
                assert.dom('.button').hasClass('has-loader', 'DenaliButton has `has-loader` class when `@isLoading` arg is true');
                assert.dom('.button').hasNoText('DenaliButton does not render inner text when `@isLoading` arg is true');
                assert.dom('.button .d-icon').doesNotExist('DenaliButton does not render an icon when `@isLoading` arg is true');
                assert.dom('.button div.loader').exists('DenaliButton renders a loader when `@isLoading` arg is true');
                assert.dom('.button div.loader--button').exists('DenaliButton renders a loader--button when `@isLoading` arg is true');

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-checkbox-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(7);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliCheckbox
                        checked={{this.checked}}
                        disabled={{this.disabled}}
                        data-partial={{this.partialData}}
                      >
                        Test
                      </DenaliCheckbox>
                    
                */
                {
                  "id": "avWehxcq",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[16,\"checked\",[30,0,[\"checked\"]]],[16,\"disabled\",[30,0,[\"disabled\"]]],[16,\"data-partial\",[30,0,[\"partialData\"]]]],null,[[\"default\"],[[[[1,\"\\n        Test\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.denali-checkbox').hasText('Test', 'A denali checkbox is rendered with the specified text');
                assert.dom('.denali-checkbox input').isNotDisabled('The checkbox is not disabled by default');
                assert.dom('.denali-checkbox input').isNotChecked('The checkbox is not checked by default');
                assert.dom('.denali-checkbox input').doesNotHaveAttribute('data-partial', 'The checkbox does not have the data-partial attribute set by default');
                this.set('partialData', true);
                assert.dom('.denali-checkbox input').hasAttribute('data-partial', '', 'The checkbox has the data-partial attribute when set to true');
                this.set('checked', true);
                assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when the checked attribute is set to true');
                this.set('disabled', true);
                assert.dom('.denali-checkbox input').isDisabled('The checkbox is disabled when the disabled attribute is set to true');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('action', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                this.set('clickHandler', function () {
                  assert.ok('The click handler is called when checkbox is clicked');
                });
                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliCheckbox
                        {{on 'click' (action this.clickHandler)}}
                      >
                        Test
                      </DenaliCheckbox>
                    
                */
                {
                  "id": "jFrkQny/",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[4,[38,1],[\"click\",[28,[37,2],[[30,0],[30,0,[\"clickHandler\"]]],null]],null]],null,[[\"default\"],[[[[1,\"\\n        Test\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-checkbox\",\"on\",\"action\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context2.next = 6;
                return (0, _testHelpers.click)('.denali-checkbox input');

              case 6:
                assert.dom('.denali-checkbox input').isChecked('The checkbox is checked when clicked on');
                _context2.next = 9;
                return (0, _testHelpers.click)('.denali-checkbox label');

              case 9:
                assert.dom('.denali-checkbox input').isNotChecked('The checkbox is unchecked when clicked again');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-chip-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-chip-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChipGroup as | Group |>
                        <Group.Chip>Grouped</Group.Chip> <Group.Chip>Chips</Group.Chip>
                      </DenaliChipGroup>
                    
                */
                {
                  "id": "PMMywOoS",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Chip\"]],null,null,[[\"default\"],[[[[1,\"Grouped\"]],[]]]]],[1,\" \"],[8,[30,1,[\"Chip\"]],null,null,[[\"default\"],[[[[1,\"Chips\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Group\"],false,[\"denali-chip-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.chip-group span.chips').exists({
                  count: 2
                }, 'Chips are rendered inside group');
                assert.dom('span.chip-group').hasText('Grouped Chips', 'Group has correct text');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-chip-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-chip', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip>
                        Chip Text
                      </DenaliChip>
                    
                */
                {
                  "id": "JYq0fiAz",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Chip Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.chips').exists({
                  count: 1
                }, 'A chip is rendered');
                assert.dom('span.chips').hasText('Chip Text', 'Chip has yielded text');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip @size={{this.size}}>
                        Inner Content
                      </DenaliChip>
                    
                */
                {
                  "id": "C4OfM6IL",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.chips').exists({
                  count: 1
                }, 'DenaliChip can render without a size set');
                assert.dom('.chips').lacksClass(/is-[^\s]*/, 'Ensure that when no size class is not rendered');
                this.set('size', 'small');
                assert.dom('.chips').hasClass('is-small', 'DenaliChip has a small size when `@size` arg is set to small');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports color', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliChip @textColor={{this.textColor}} @textShade={{this.textShade}} @backgroundColor={{this.backgroundColor}} @backgroundShade={{this.backgroundShade}}>
                        Inner Content
                      </DenaliChip>
                    
                */
                {
                  "id": "3uzLL2s1",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@textColor\",\"@textShade\",\"@backgroundColor\",\"@backgroundShade\"],[[30,0,[\"textColor\"]],[30,0,[\"textShade\"]],[30,0,[\"backgroundColor\"]],[30,0,[\"backgroundShade\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-chip\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.chips').exists({
                  count: 1
                }, 'DenaliChip can render without set colors');
                assert.dom('.chips').lacksClass(/is-[^\s]*-[^\s]*/, 'Ensure that when no textColor class is not rendered');
                assert.dom('.chips').lacksClass(/has-bg-[^\s]*-[^\s]*/, 'Ensure that when no backgroundColor class is not rendered');
                this.set('textShade', '300');
                assert.dom('.chips').lacksClass(/is-[^\s]*-300/, 'Ensure that when no textColor class is not rendered with shade');
                this.set('backgroundShade', '300');
                assert.dom('.chips').lacksClass(/has-bg-[^\s]*-300/, 'Ensure that when no backgroundColor class is not rendered with shade');
                this.set('textShade', undefined);
                this.set('backgroundShade', undefined);
                this.set('textColor', 'green');
                assert.dom('.chips').hasClass('is-green-500', 'with text color class is attached and shade is default 500');
                this.set('backgroundColor', 'orange');
                assert.dom('.chips').hasClass('has-bg-orange-500', 'with bg color class is attached and shade is default 500');
                this.set('textShade', '200');
                assert.dom('.chips').hasClass('is-green-200', 'with text shade class is attached and shade is updated');
                this.set('backgroundShade', '100');
                assert.dom('.chips').hasClass('has-bg-orange-100', 'with bg shade class is attached and shade is updated');

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-icon-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('icon', 'code');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliIcon
                        @icon={{this.icon}}
                      />
                    
                */
                {
                  "id": "VCMAhw/J",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\"],[[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('i.d-icon.d-code').exists('DenaliIcon exists and has the correct icon class');
                this.set('icon', 'bug');
                assert.dom('i.d-icon.d-bug').exists('DenaliIcon exists and has the correct icon class');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliIcon
                        @icon="code"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliIcon>
                    
                */
                {
                  "id": "P2zX9Go/",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@size\"],[\"code\",[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('size', 'extrasmall');
                assert.dom('.d-icon').hasClass('is-extrasmall', 'DenaliIcon has a small size when `@size` arg is set to extrasmall');
                this.set('size', 'small');
                assert.dom('.d-icon').hasClass('is-small', 'DenaliIcon has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.d-icon').hasClass('is-medium', 'DenaliIcon has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.d-icon').hasClass('is-large', 'DenaliIcon has a large size when `@size` arg is set to large');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-input-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-input-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInputGroup />
                */
                {
                  "id": "OoasQhuk",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.input-group').exists('An input group is rendered');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders a label', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(1);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInputGroup @label={{this.label}}/>
                */
                {
                  "id": "GMSIX71K",
                  "block": "[[[8,[39,0],null,[[\"@label\"],[[30,0,[\"label\"]]]],null]],[],false,[\"denali-input-group\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('label', 'My Label');
                assert.dom('div.input-group label').hasTextContaining('My Label', 'An input group is rendered with a label');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it yields', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(1);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label">
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {
                  "id": "5V+py056",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\"],[\"My Label\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.input-group div.input input').exists('`DenaliInputGroup` yields inner content');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders stacked', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @isStacked={{true}}>
                        <DenaliCheckbox>
                          Test
                        </DenaliCheckbox>
                      </DenaliInputGroup>
                    
                */
                {
                  "id": "Lb8A0U4o",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@isStacked\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n          Test\\n        \"]],[]]]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-checkbox\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.is-stacked').exists('An input group is rendered stacked');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders responsively', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(1);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @isResponsive={{true}}>
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {
                  "id": "p15Mt0vn",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@isResponsive\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.responsive').exists('An input group is rendered responsively');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it adjusts the label width automatically', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(1);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInputGroup @label="My Label" @hasAutoWidth={{true}}>
                        <DenaliInput type="text" placeholder="Text Field" />
                      </DenaliInputGroup>
                    
                */
                {
                  "id": "BSK0U056",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@label\",\"@hasAutoWidth\"],[\"My Label\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,1],[[24,\"placeholder\",\"Text Field\"],[24,4,\"text\"]],null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-input-group\",\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.auto').exists('An input group is rendered with label width adjusted automatically');

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-input-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput value="My Input" />
                */
                {
                  "id": "veACe/TR",
                  "block": "[[[8,[39,0],[[24,2,\"My Input\"]],null,null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input input').exists('An input is rendered within a wrapper div with class `.input`');
                assert.dom('.input input').isNotDisabled('The input is not disabled by default');
                assert.dom('.input input').hasValue('My Input', 'The input has the specified value');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('input types', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput type={{this.type}}/>
                */
                {
                  "id": "yj6Rtikp",
                  "block": "[[[8,[39,0],[[16,4,[30,0,[\"type\"]]]],null,null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('type', 'text');
                assert.dom('.input input').hasAttribute('type', 'text', 'The input has the default type attribute text');
                this.set('type', 'email');
                assert.dom('.input input').hasAttribute('type', 'email', 'The input type attribute has the value email');
                this.set('type', 'password');
                assert.dom('.input input').hasAttribute('type', 'password', 'The input type attribute has the value password');
                this.set('type', 'number');
                assert.dom('.input input').hasAttribute('type', 'number', 'The input type attribute has the value number');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('input size', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @size={{this.size}} />
                */
                {
                  "id": "I+jvJpDX",
                  "block": "[[[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('size', 'small');
                assert.dom('.input').hasClass('is-small', 'The input wrapper has the appropriate class for small');
                this.set('size', 'medium');
                assert.dom('.input').hasClass('is-medium', 'The input wrapper has the appropriate class for medium');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @state={{this.state}} />
                */
                {
                  "id": "zBkcpNiW",
                  "block": "[[[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('state', 'active');
                assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
                this.set('state', 'error');
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput disabled={{true}}/>
                */
                {
                  "id": "5AoTu44Y",
                  "block": "[[[8,[39,0],[[16,\"disabled\",true]],null,null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input input').isDisabled('The input is disabled when specified');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('placeholder', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput type="email" placeholder="Email field"/>
                */
                {
                  "id": "N9QjI+8l",
                  "block": "[[[8,[39,0],[[24,\"placeholder\",\"Email field\"],[24,4,\"email\"]],null,null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input input').hasAttribute('placeholder', 'Email field', 'The input is has the specified placeholder');

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('is inverse', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @isInverse={{this.isInverse}} />
                */
                {
                  "id": "bSg7/bgy",
                  "block": "[[[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input').doesNotHaveClass('is-inverse', 'The input wrapper by default does not have the inverse class');
                this.set('isInverse', 'true');
                assert.dom('.input').hasClass('is-inverse', 'The input wrapper has the inverse class when specified');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('error message', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput @state="error" @errorMsg={{this.errorMsg}} />
                */
                {
                  "id": "8CauGpzG",
                  "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[\"error\",[30,0,[\"errorMsg\"]]]],null]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input.is-error .message').doesNotExist();
                this.set('errorMsg', 'Email Invalid');
                assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInput
                        @iconFront={{this.iconFront}}
                        @iconFrontClass="front-icon"
                        @iconBack={{this.iconBack}}
                        @iconBackClass="back-icon"
                      />
                    
                */
                {
                  "id": "JQN+3yhA",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[30,0,[\"iconFront\"]],\"front-icon\",[30,0,[\"iconBack\"]],\"back-icon\"]],null],[1,\"\\n    \"]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input.has-icon-front').doesNotExist('The icon-front class is not applied to the input when no front icon is specified');
                assert.dom('.input.has-icon-back').doesNotExist('The icon-back class is not applied to the input when no back icon is specified');
                this.set('iconFront', 'share');
                assert.dom('.input.has-icon-front').exists('The icon-front class is applied to the input when front icon is specified');
                assert.dom('.input.has-icon-front .front-icon').hasClass('d-share', 'The correct denali icon is rendered as the front icon');
                this.set('iconBack', 'close-circle-solid');
                assert.dom('.input.has-icon-back').exists('The icon-back class is applied to the input when back icon is specified');
                assert.dom('.input.has-icon-back .back-icon').hasClass('d-close-circle-solid', 'The correct denali icon is rendered as the back icon');

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('wrapperClass', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        var wrapperClass;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliInput
                        @wrapperClass={{this.wrapperClass}}
                      />
                    
                */
                {
                  "id": "TF0foEOZ",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@wrapperClass\"],[[30,0,[\"wrapperClass\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-input\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                wrapperClass = 'wrapperClass';
                assert.dom('.input').doesNotHaveClass(wrapperClass, '`DenaliInput` does not have custom wrapper class by default');
                this.set('wrapperClass', wrapperClass);
                assert.dom('.input').hasClass(wrapperClass, '`DenaliInput` has custom specified wrapper class');

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('actions', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                assert.expect(2);
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
                });
                _context11.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliInput
                      {{on 'input' (action this.handleInput)}}
                    />
                */
                {
                  "id": "Mfw/GyU2",
                  "block": "[[[8,[39,0],[[4,[38,1],[\"input\",[28,[37,2],[[30,0],[30,0,[\"handleInput\"]]],null]],null]],null,null]],[],false,[\"denali-input\",\"on\",\"action\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context11.next = 6;
                return (0, _testHelpers.fillIn)('.input input', 'Random Text');

              case 6:
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
                });
                this.element.querySelector('.input input').value = 'More Random Text';
                this.element.querySelector('.input input').dispatchEvent(new Event('input'));

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-link-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        href="https://denali.design/"
                        target="_blank"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {
                  "id": "equzRIM9",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,6,\"https://denali.design/\"],[24,\"target\",\"_blank\"]],[[\"@size\"],[[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').hasText('Link Text', 'DenaliLink renders an anchor element');
                assert.dom('a.denali-link').hasAttribute('href', 'https://denali.design/', 'DenaliLink has the specified href');
                assert.dom('a.denali-link').hasAttribute('target', '_blank', 'DenaliLink has the specified target');
                assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLink does not have the is-small class by default');
                this.set('size', 'small');
                assert.dom('a.denali-link').hasClass('is-small', 'DenaliLink has the is-small class when the size is set to small');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('secondary and sub links', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @isSub={{this.sub}}
                        @isSecondary={{this.secondary}}
                      >
                        Link Text
                      </DenaliLink>
                */
                {
                  "id": "EdZFp13o",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSub\",\"@isSecondary\"],[[30,0,[\"sub\"]],[30,0,[\"secondary\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]]],[],false,[\"denali-link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLink by default is not a sub link');
                assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLink by default is not a secondary link');
                this.set('sub', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink is a sub link when isSub arg is set to true');
                this.set('secondary', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLink retains the is-sub class');
                assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLink is a secondary link when secondary arg is set to true');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @state={{this.state}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {
                  "id": "rNkfNNzJ",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLink by default is not active');
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLink by default is not disabled');
                this.set('state', 'active');
                assert.dom('a.denali-link').hasClass('is-active', 'DenaliLink is active when state is set to active');
                this.set('state', 'disabled');
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLink is disabled when state is set to disabled');

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLink
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                      >
                        Link Text
                      </DenaliLink>
                    
                */
                {
                  "id": "t5guv4HN",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLink does not have the `has-icon-front` class by default');
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLink does not have the `has-icon-back` class by default');
                this.set('iconFront', 'add-circle');
                this.set('iconFrontClass', 'link-icon-front');
                assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLink has the `has-icon-front` class when iconFront is specified');
                assert.dom('a.denali-link .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLink has the specified icon in the front');
                this.set('iconBack', 'external');
                this.set('iconBackClass', 'link-icon-back');
                assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLink has the `has-icon-back` class when iconBack is specified');
                assert.dom('a.denali-link .d-icon.link-icon-back').hasClass('d-external', 'DenaliLink has the specified icon in the back');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-link-to-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-link-to', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo @route="index" @query={{hash user="jkusa"}}>
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "KkAYKDDN",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@query\"],[\"index\",[28,[37,1],null,[[\"user\"],[\"jkusa\"]]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\",\"hash\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.ember-view').hasText('Link Text', 'DenaliLinkTo exists and renders inner content');
                assert.dom('a.denali-link').hasAttribute('href', '/?user=jkusa', 'DenaliLinkTo renders an href based on a route & query');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it is set as active when on current route', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('route', 'four-oh-four');
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo @route={{this.route}}>
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "ex/ejVbx",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[[30,0,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('a.denali-link').doesNotHaveClass('is-active', 'DenaliLinkTo is not active when not on the current route');
                this.set('route', 'index');
                assert.dom('a.denali-link').hasClass('is-active', 'DenaliLinkTo is active when on the current route');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('size', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @size={{this.size}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "l0DRmbZv",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@size\"],[\"four-oh-four\",[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-small', 'DenaliLinkTo does not have the is-small class by default');
                this.set('size', 'small');
                assert.dom('a.denali-link').hasClass('is-small', 'DenaliLinkTo has the is-small class when the size is set to small');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('secondary and sub links', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @isSub={{this.sub}}
                        @isSecondary={{this.secondary}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "YTxucL7C",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@isSub\",\"@isSecondary\"],[\"four-oh-four\",[30,0,[\"sub\"]],[30,0,[\"secondary\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-sub', 'DenaliLinkTo by default is not a sub link');
                assert.dom('a.denali-link').doesNotHaveClass('is-secondary', 'DenaliLinkTo by default is not a secondary link');
                this.set('sub', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo is a sub link when isSub arg is set to true');
                this.set('secondary', true);
                assert.dom('a.denali-link').hasClass('is-sub', 'DenaliLinkTo retains the is-sub class');
                assert.dom('a.denali-link').hasClass('is-secondary', 'DenaliLinkTo is a secondary link when secondary arg is set to true');

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('state', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @state={{this.state}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "RMxvYI6M",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@state\"],[\"four-oh-four\",[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
                this.set('state', 'disabled');
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when state is set to disabled');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @disabled={{this.disabled}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "ruXY1jBl",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@disabled\"],[\"four-oh-four\",[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('is-disabled', 'DenaliLinkTo is not disabled by default');
                this.set('disabled', true);
                assert.dom('a.denali-link').hasClass('is-disabled', 'DenaliLinkTo is disabled when disabled is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLinkTo
                        @route="four-oh-four"
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                      >
                        Link Text
                      </DenaliLinkTo>
                    
                */
                {
                  "id": "gLfktXFk",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@iconFront\",\"@iconFrontClass\",\"@iconBack\",\"@iconBackClass\"],[\"four-oh-four\",[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]]]],[[\"default\"],[[[[1,\"\\n        Link Text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-link-to\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-front', 'DenaliLinkTo does not have the `has-icon-front` class by default');
                assert.dom('a.denali-link').doesNotHaveClass('has-icon-back', 'DenaliLinkTo does not have the `has-icon-back` class by default');
                this.set('iconFront', 'add-circle');
                this.set('iconFrontClass', 'link-icon-front');
                assert.dom('a.denali-link').hasClass('has-icon-front', 'DenaliLinkTo has the `has-icon-front` class when iconFront is specified');
                assert.dom('a .d-icon.link-icon-front').hasClass('d-add-circle', 'DenaliLinkTo has the specified icon in the front');
                this.set('iconBack', 'external');
                this.set('iconBackClass', 'link-icon-back');
                assert.dom('a.denali-link').hasClass('has-icon-back', 'DenaliLinkTo has the `has-icon-back` class when iconBack is specified');
                assert.dom('a .d-icon.link-icon-back').hasClass('d-external', 'DenaliLinkTo has the specified icon in the back');

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-loader-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliLoader />
                */
                {
                  "id": "OqJgs8fX",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-loader\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.loader').exists('DenaliLoader can render.');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLoader @size={{this.size}} />
                    
                */
                {
                  "id": "mCowQjcr",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-loader\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('size', 'extrasmall');
                assert.dom('.loader').hasClass('is-extrasmall', 'DenaliLoader has an extrasmall size when `@size` arg is set to extrasmall');
                this.set('size', 'small');
                assert.dom('.loader').hasClass('is-small', 'DenaliLoader has a small size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('.loader').hasClass('is-medium', 'DenaliLoader has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('.loader').hasClass('is-large', 'DenaliLoader has a large size when `@size` arg is set to large');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliLoader @isInverse={{this.isInverse}} />
                    
                */
                {
                  "id": "E56FNYW1",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-loader\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.loader').doesNotHaveClass('is-inverse', 'DenaliLoader does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.loader').hasClass('is-inverse', 'DenaliLoader has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(4);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu class="test-menu" as |Menu|>
                        <Menu.Trigger>Hover</Menu.Trigger>
                        <Menu.Content>
                          <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                          </ul>
                        </Menu.Content>
                      </DenaliMenu>
                    
                */
                {
                  "id": "4CeZ2/fY",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-menu\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Hover\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,\"ul\"],[12],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"One\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Two\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Three\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Menu\"],false,[\"denali-menu\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.test-menu').exists('The test menu is rendered');
                assert.dom('.test-menu .menu-trigger').hasText('Hover', 'The trigger has the appropriate text');
                assert.dom('.test-menu .menu-content li').exists({
                  count: 3
                }, 'Three li elements are rendered in the menu content');
                assert.dom('.test-menu .menu-content').hasStyle({
                  visibility: 'hidden'
                }, 'The menu content is not visible by default');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('alignment', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu class="test-menu" @alignContent={{this.alignContent}} as |Menu|>
                        <Menu.Trigger>Hover</Menu.Trigger>
                        <Menu.Content>
                          <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                          </ul>
                        </Menu.Content>
                      </DenaliMenu>
                    
                */
                {
                  "id": "uV+LXWQQ",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-menu\"]],[[\"@alignContent\"],[[30,0,[\"alignContent\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Trigger\"]],null,null,[[\"default\"],[[[[1,\"Hover\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,\"ul\"],[12],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"One\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Two\"],[13],[1,\"\\n            \"],[10,\"li\"],[12],[1,\"Three\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Menu\"],false,[\"denali-menu\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.test-menu').doesNotHaveClass('is-left', 'The menu does not have the `is-left` class by default');
                assert.dom('.test-menu').doesNotHaveClass('is-right', 'The menu does not have the `is-right` class by default');
                this.set('alignContent', 'left');
                assert.dom('.test-menu').hasClass('is-left', 'The menu has the `is-left` class when alignContent is set to left');
                this.set('alignContent', 'right');
                assert.dom('.test-menu').hasClass('is-right', 'The menu has the `is-right` class when alignContent is set to right');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu/content-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu/content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu::Content>
                        Inner Content
                      </DenaliMenu::Content>
                    
                */
                {
                  "id": "wVtEckUp",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-menu/content\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.menu-content').hasText('Inner Content', 'Menu content div is rendered');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-menu/trigger-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-menu/trigger', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliMenu::Trigger>
                        Trigger
                      </DenaliMenu::Trigger>
                    
                */
                {
                  "id": "CO7/o5E8",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Trigger\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-menu/trigger\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('a.menu-trigger').hasText('Trigger', 'The trigger renders the text within an anchor tag');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(6);
                this.set('isOpen', false);
                this.set('onClose', function () {
                  return _this.set('isOpen', false);
                });
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{this.isOpen}}
                        @onClose={{this.onClose}}
                        as | Modal |
                      >
                        <Modal.Content class="denali-modal__content">Content</Modal.Content>
                      </DenaliModal>
                    
                */
                {
                  "id": "FWzrkLJY",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@onClose\"],[[30,0,[\"isOpen\"]],[30,0,[\"onClose\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Content\"]],[[24,0,\"denali-modal__content\"]],null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 5:
                assert.dom('.denali-modal.modal').doesNotExist('Denali Modal is hidden by default');
                assert.dom('.denali-modal .modal').doesNotExist('Denali Modal is not rendered by default');
                this.set('isOpen', true);
                assert.dom('.denali-modal.modal').exists('Denali Modal is rendered only when isActive is set to true');
                assert.dom('.modal-content.denali-modal__content').hasText('Content', 'Denali Modal Content is rendered in the modal');
                assert.dom('.denali-modal.modal .close').exists('Denali Modal renders a close icon in the modal');
                _context.next = 13;
                return (0, _testHelpers.click)('.denali-modal.modal .close');

              case 13:
                assert.dom('.denali-modal.modal').doesNotExist('The Denali Modal is hidden when close is clicked');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('Full screen', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(2);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{true}}
                        @isFullScreen={{this.fullScreen}}
                        as | Modal |
                      >
                        <Modal.Content>Content</Modal.Content>
                      </DenaliModal>
                    
                */
                {
                  "id": "Vl3ZtbZL",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\",\"@isFullScreen\"],[true,[30,0,[\"fullScreen\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.denali-modal .modal-container').doesNotHaveClass('.is-full', 'The modal container does not have the `is-full` class by default');
                this.set('fullScreen', true);
                assert.dom('.denali-modal .modal-container').hasClass('is-full', 'The modal container has the `is-full` when fullScreen arg is set to true');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('header and footer', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(2);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliModal
                        class="denali-modal"
                        @isOpen={{true}}
                        as | Modal |
                      >
                        <Modal.Header class="denali-modal__header">Header</Modal.Header>
                        <Modal.Content>Content</Modal.Content>
                        <Modal.Footer class="denali-modal__footer">Footer</Modal.Footer>
                      </DenaliModal>
                    
                */
                {
                  "id": "bNxe/P6o",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"denali-modal\"]],[[\"@isOpen\"],[true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Header\"]],[[24,0,\"denali-modal__header\"]],null,[[\"default\"],[[[[1,\"Header\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Content\"]],null,null,[[\"default\"],[[[[1,\"Content\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Footer\"]],[[24,0,\"denali-modal__footer\"]],null,[[\"default\"],[[[[1,\"Footer\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Modal\"],false,[\"denali-modal\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.modal-header.denali-modal__header').hasText('Header', 'Denali Modal header is rendered');
                assert.dom('.modal-footer.denali-modal__footer').hasText('Footer', 'Denali Modal footer is rendered');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                      >
                      </DenaliNavbar>
                    
                */
                {
                  "id": "pLiOaJyt",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('nav.nav.test-nav').exists('DenaliNavbar exists and renders a nav element');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can support responsive', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        @isResponsive={{this.isResponsive}}
                        as |Nav|
                      >
                        <Nav.Left></Nav.Left>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "q2pZoUFE",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[[30,0,[\"isResponsive\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav .nav-left .nav-responsive-menu').doesNotExist('DenaliNavbar does not render a responsive menu button by default');
                assert.dom('.test-nav.nav .nav-responsive').doesNotExist('DenaliNavbar does not render a responsive div by default');
                this.set('isResponsive', true);
                assert.dom('.test-nav .nav-left .nav-responsive-menu').exists('DenaliNavbar renders a responsive menu button when `@isResponsive` arg is true');
                assert.dom('.test-nav.nav .nav-responsive').exists('DenaliNavbar renders a responsive div when `@isResponsive` arg is true');
                assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is not active default');
                _context2.next = 10;
                return (0, _testHelpers.click)('.test-nav .nav-responsive-menu');

              case 10:
                assert.dom('.test-nav.nav .nav-responsive.is-active').exists('DenaliNavbar responsive div is toggled active when clicking the responsive menu');
                _context2.next = 13;
                return (0, _testHelpers.click)('.test-nav .nav-responsive-menu');

              case 13:
                assert.dom('.test-nav.nav .nav-responsive.is-active').doesNotExist('DenaliNavbar responsive div is toggled inactive when clicking the responsive menu');

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield left, center, & right section components', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Left></Nav.Left>
                        <Nav.Center></Nav.Center>
                        <Nav.Right></Nav.Right>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "OBWCQeXn",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Center\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Right\"]],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav.nav .nav-left').exists('DenaliNavbar can yield a left section component');
                assert.dom('.test-nav.nav .nav-center').exists('DenaliNavbar can yield a center section component');
                assert.dom('.test-nav.nav .nav-right').exists('DenaliNavbar can yield a right section component');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('left can yield sub components', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Left as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Left>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "dEnbtY5C",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Item\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],null,[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Control\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
                assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
                assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
                assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
                assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
                assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('left can yield sub components when `@isResponsive` is true', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        @isResponsive={{true}}
                        as |Nav|
                      >
                        <Nav.Left as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Left>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "8bsxKDof",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],[[\"@isResponsive\"],[true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Left\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Item\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],null,[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Control\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav .nav-left .nav-brand').hasAttribute('src', 'img.png', 'Left can yield a nav logo component');
                assert.dom('.test-nav .nav-left .nav-item').hasText('Nav Item', 'Left can yield a nav item component');
                assert.dom('.test-nav .nav-left .nav-icon .d-icon').hasClass('d-code', 'Left can yield a nav icon component');
                assert.dom('.test-nav .nav-left .nav-control').hasText('Nav Control', 'Left can yield a nav control component');
                assert.dom('.test-nav .nav-left a.nav-item').hasAttribute('href', 'http://denali.design', 'Left can yield a nav link component');
                assert.dom('.test-nav .nav-left a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Left can yield a nav link-to component');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('center can yield sub components', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Center as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Center>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "vRc2FaEQ",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Center\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Item\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],null,[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Control\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav .nav-center .nav-brand').hasAttribute('src', 'img.png', 'Center can yield a nav logo component');
                assert.dom('.test-nav .nav-center .nav-item').hasText('Nav Item', 'Center can yield a nav item component');
                assert.dom('.test-nav .nav-center .nav-icon .d-icon').hasClass('d-code', 'Center can yield a nav icon component');
                assert.dom('.test-nav .nav-center .nav-control').hasText('Nav Control', 'Center can yield a nav control component');
                assert.dom('.test-nav .nav-center a.nav-item').hasAttribute('href', 'http://denali.design', 'Center can yield a nav link component');
                assert.dom('.test-nav .nav-center a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Center can yield a nav link-to component');

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('right can yield sub components', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar
                        class="test-nav"
                        as |Nav|
                      >
                        <Nav.Right as |Section|>
                          <Section.Logo src="img.png"/>
                          <Section.Item>
                            Nav Item
                          </Section.Item>
                          <Section.Icon @icon="code" />
                          <Section.Control>
                            Nav Control
                          </Section.Control>
                          <Section.Link href="http://denali.design" />
                          <Section.LinkTo @route="four-oh-four" />
                        </Nav.Right>
                      </DenaliNavbar>
                    
                */
                {
                  "id": "Qu9hqTTM",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,0,\"test-nav\"]],null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Right\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[8,[30,2,[\"Logo\"]],[[24,\"src\",\"img.png\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"Item\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Item\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Icon\"]],null,[[\"@icon\"],[\"code\"]],null],[1,\"\\n          \"],[8,[30,2,[\"Control\"]],null,null,[[\"default\"],[[[[1,\"\\n            Nav Control\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[30,2,[\"Link\"]],[[24,6,\"http://denali.design\"]],null,null],[1,\"\\n          \"],[8,[30,2,[\"LinkTo\"]],null,[[\"@route\"],[\"four-oh-four\"]],null],[1,\"\\n        \"]],[2]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Nav\",\"Section\"],false,[\"denali-navbar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.test-nav .nav-right .nav-brand').hasAttribute('src', 'img.png', 'Right can yield a nav logo component');
                assert.dom('.test-nav .nav-right .nav-item').hasText('Nav Item', 'Right can yield a nav item component');
                assert.dom('.test-nav .nav-right .nav-icon .d-icon').hasClass('d-code', 'Right can yield a nav icon component');
                assert.dom('.test-nav .nav-right .nav-control').hasText('Nav Control', 'Right can yield a nav control component');
                assert.dom('.test-nav .nav-right a.nav-item').hasAttribute('href', 'http://denali.design', 'Right can yield a nav link component');
                assert.dom('.test-nav .nav-right a.ember-view.nav-item').hasAttribute('href', '/four-oh-four', 'Right can yield a nav link-to component');

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/control-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/control', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Control>
                        Inner Content
                      </DenaliNavbar::Control>
                    
                */
                {
                  "id": "qY5zTApT",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/control\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.nav-control').hasText('Inner Content', 'DenaliNavbar::Control exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/icon-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('icon', 'code');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Icon
                        @icon={{this.icon}}
                      />
                    
                */
                {
                  "id": "cpNZbH05",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\"],[[30,0,[\"icon\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-navbar/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
                this.set('icon', 'bug');
                assert.dom('.nav-icon .d-icon.d-bug').exists('DenaliNavbar::Icon exists and has the correct icon class');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('name renders', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Icon
                        @icon="code"
                        @name={{this.name}}
                      />
                    
                */
                {
                  "id": "0sQauIU9",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@icon\",\"@name\"],[\"code\",[30,0,[\"name\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-navbar/icon\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.nav-icon .d-icon.d-code').exists('DenaliNavbar::Icon exists and has the correct icon class');
                assert.dom('.icon-name').doesNotExist('DenaliNavbar::Icon exists and does not have a name.');
                this.set('name', 'My Icon');
                assert.dom('.icon-name').hasText('My Icon', 'DenaliNavbar::Icon exists and has a name.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Item>
                        Inner Content
                      </DenaliNavbar::Item>
                    
                */
                {
                  "id": "PbEW1jlY",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/item\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.nav-item').hasText('Inner Content', 'DenaliNavbar::Item exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it an be set active ', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliNavbar::Item
                        @isActive={{this.isActive}}
                      >
                        Inner Content
                      </DenaliNavbar::Item>
                    
                */
                {
                  "id": "ttBEfc0o",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-navbar/item\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.nav-item').doesNotHaveClass('is-active', 'DenaliNavbar::Item is not active by default');
                this.set('isActive', true);
                assert.dom('span.nav-item').hasClass('is-active', 'DenaliNavbar::Item is active when `@isActive` arg is true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-navbar/logo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-navbar/logo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliNavbar::Logo @src="logo.png"/>
                */
                {
                  "id": "15Na06+F",
                  "block": "[[[8,[39,0],null,[[\"@src\"],[\"logo.png\"]],null]],[],false,[\"denali-navbar/logo\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('img').hasClass('nav-brand', 'DenaliNavbar::Logo renders an img with the correct class');
                assert.dom('img.nav-brand').hasAttribute('src', 'logo.png', 'DenaliNavbar::Logo renders src attr with the correct value');
                assert.dom('img.nav-brand').hasAttribute('alt', 'logo', 'DenaliNavbar::Logo renders alt attr with the default value');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-progress-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-progress', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliProgress />
                    
                */
                {
                  "id": "cYJacUM5",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
                assert.dom('.d-progress div').hasClass('d-progress--bar', 'A div with class ``d-progress--bar is rendered within a wrapper div');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports value', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliProgress @value={{this.value}}/>
                    
                */
                {
                  "id": "t+4ddFq0",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@value\"],[[30,0,[\"value\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.d-progress div').exists('A div is rendered within a wrapper div with class `.d-progress`');
                assert.dom('.d-progress div').hasClass('d-progress--bar', 'A div is rendered within a wrapper div with class `.d-progress`');
                assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent default value should be `0`');
                this.set('value', 30);
                assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress percent should be updated to 30');
                this.set('value', 100);
                assert.dom('.d-progress div').hasAttribute('aria-valuenow', '100', 'DenaliProgress percent should be updated to 100');
                this.set('value', 0);
                assert.dom('.d-progress div').hasAttribute('aria-valuenow', '0', 'DenaliProgress percent should be updated to 0');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports color and shade', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliProgress @value={{this.value}} @color={{this.color}} @shade={{this.shade}} />
                    
                */
                {
                  "id": "4vcDFoOb",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@value\",\"@color\",\"@shade\"],[[30,0,[\"value\"]],[30,0,[\"color\"]],[30,0,[\"shade\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('value', 30);
                assert.dom('.d-progress div').hasAttribute('aria-valuenow', '30', 'DenaliProgress with default color should be displayed');
                this.set('color', 'red');
                assert.dom('div.d-progress--bar').hasClass('has-bg-red-500', 'DenaliProgress displayed with red color when `@color` arg is set to red and default shade value 500');
                this.set('shade', '100');
                assert.dom('div.d-progress--bar').hasClass('has-bg-red-100', 'DenaliProgress displayed with red color and shade 100 when `@color` arg is set to red and `@shade` is set to 100');
                this.set('color', 'green');
                this.set('shade', '300');
                assert.dom('div.d-progress--bar').hasClass('has-bg-green-300', 'DenaliProgress displayed with green color and shade 300 when `@color` arg is set to green and `@shade` is set to 300');

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports isLoading', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliProgress @isLoading={{this.isLoading}} @size={{this.size}}/>
                    
                */
                {
                  "id": "Gf/KOgtC",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isLoading\",\"@size\"],[[30,0,[\"isLoading\"]],[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.d-progress').exists('DenaliProgress can render with default `@isLoading` arg set to false ');
                this.set('isLoading', true);
                assert.dom('div.d-progress').hasClass('d-progress__loading', 'DenaliProgress has a loading class when `@isLoading` arg is set to true');
                this.set('size', 'small');
                assert.dom('div.d-progress').hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliProgress @size={{this.size}}/>
                    
                */
                {
                  "id": "6Qzl0/Ou",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@size\"],[[30,0,[\"size\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-progress\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.d-progress').exists('DenaliProgress can render with default size');
                this.set('size', 'small');
                assert.dom('div.d-progress').hasClass('d-progress__sm', 'DenaliProgress has a smaill size when `@size` arg is set to small');
                this.set('size', 'medium');
                assert.dom('div.d-progress').hasClass('d-progress__md', 'DenaliProgress has a medium size when `@size` arg is set to medium');
                this.set('size', 'large');
                assert.dom('div.d-progress').hasClass('d-progress__lg', 'DenaliProgress has a large size when `@size` arg is set to large');

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports multi level progress with colors', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var nestedEle;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                    <DenaliProgress
                      @size={{size}}
                      @isLoading={{isLoading}}
                      as |Progress|
                      >
                      <Progress.Bar @color="red" @value={{10}} @shade="100" />
                      <Progress.Bar @color="green" @value={{20}} @shade="200" />
                      <Progress.Bar @color="blue" @value={{30}} @shade="300" />
                    </DenaliProgress>
                    
                */
                {
                  "id": "RZ+Ft/Ff",
                  "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\"],[[36,1],[36,2]]],[[\"default\"],[[[[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"red\",10,\"100\"]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"green\",20,\"200\"]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"blue\",30,\"300\"]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\",\"size\",\"isLoading\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                nestedEle = (0, _testHelpers.findAll)('.d-progress div');
                assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
                assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100');
                assert.dom(nestedEle[1]).hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
                assert.dom(nestedEle[1]).hasClass('has-bg-green-200', 'DenaliProgress displayed with green color when `@color` arg is set to green and `@shade` arg is set to 200');
                assert.dom(nestedEle[2]).hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
                assert.dom(nestedEle[2]).hasClass('has-bg-blue-300', 'DenaliProgress displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300');

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports multi level progress with top level values as defaults', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        var nestedEle;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                    <DenaliProgress
                      @size={{size}}
                      @isLoading={{isLoading}}
                      @color="red" 
                      @shade="100"
                      as |Progress|
                      >
                      <Progress.Bar @value={{10}} />
                    </DenaliProgress>
                    
                */
                {
                  "id": "RahtWp02",
                  "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\",\"@color\",\"@shade\"],[[36,1],[36,2],\"red\",\"100\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[10]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\",\"size\",\"isLoading\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                nestedEle = (0, _testHelpers.findAll)('.d-progress div');
                assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
                assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports multi level progress with top level values as defaults', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        var nestedEle;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                    <DenaliProgress
                      @size={{size}}
                      @isLoading={{isLoading}}
                      @color="red" 
                      @shade="100"
                      as |Progress|
                      >
                      <Progress.Bar @value={{10}} />
                      <Progress.Bar @value={{20}} />
                      <Progress.Bar @color="blue" @value={{30}} @shade="300" />
                    </DenaliProgress>
                    
                */
                {
                  "id": "otiPSgtf",
                  "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@size\",\"@isLoading\",\"@color\",\"@shade\"],[[36,1],[36,2],\"red\",\"100\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[10]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@value\"],[20]],null],[1,\"\\n      \"],[8,[30,1,[\"Bar\"]],null,[[\"@color\",\"@value\",\"@shade\"],[\"blue\",30,\"300\"]],null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n    \"]],[\"Progress\"],false,[\"denali-progress\",\"size\",\"isLoading\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                nestedEle = (0, _testHelpers.findAll)('.d-progress div');
                assert.dom(nestedEle[0]).hasAttribute('aria-valuenow', '10', 'DenaliProgress with 1st bar with value 10 should be displayed');
                assert.dom(nestedEle[0]).hasClass('has-bg-red-100', 'DenaliProgress 1st bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');
                assert.dom(nestedEle[1]).hasAttribute('aria-valuenow', '20', 'DenaliProgress with 2nd bar with value 20 should be displayed');
                assert.dom(nestedEle[1]).hasClass('has-bg-red-100', 'DenaliProgress 2nd bar displayed with red color when `@color` arg is set to red and `@shade` arg is set to 100 at top level');
                assert.dom(nestedEle[2]).hasAttribute('aria-valuenow', '30', 'DenaliProgress with 3rd bar with value 30 should be displayed');
                assert.dom(nestedEle[2]).hasClass('has-bg-blue-300', 'DenaliProgress 3rd bar displayed with blue color when `@color` arg is set to blue and `@shade` arg is set to 300');

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-progress/bar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-progress/bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders denali progress bar', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliProgress::Bar @value={{50}} @color="green" @shade="500"/>
                */
                {
                  "id": "Nap2d9HY",
                  "block": "[[[8,[39,0],null,[[\"@value\",\"@color\",\"@shade\"],[50,\"green\",\"500\"]],null]],[],false,[\"denali-progress/bar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.d-progress--bar').hasClass('has-bg-green-500', 'DenaliProgress Bar displayed with green color when `@color` arg is set to green and `@shade` arg is set to 600');
                assert.dom('.d-progress--bar').hasAttribute('aria-valuenow', '50', 'DenaliProgress Bar with value 50 should be displayed');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-radio-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(2);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio as |Radio|>
                        <Radio.Option @value="">Inner Content</Radio.Option>
                      </DenaliRadio>
                    
                */
                {
                  "id": "NKHZ5v1W",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"\"]],[[\"default\"],[[[[1,\"Inner Content\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.radio').exists({
                  count: 1
                }, 'DenaliRadio Option exists');
                assert.dom('div.radio').hasText('Inner Content', 'DenaliRadio Option renders inner content');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('handles change events', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(6);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value="surprise">2</Radio.Option>
                        <Radio.Option @value={{3}}>3</Radio.Option>
                      </DenaliRadio>
                    
                */
                {
                  "id": "UWPit6+V",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"surprise\"]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[3]],[[\"default\"],[[[[1,\"3\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 3, 'the last value is clicked');
                });
                _context2.next = 6;
                return (0, _testHelpers.click)('.radio input[value="3"]');

              case 6:
                assert.dom('.radio input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the first value is clicked');
                });
                _context2.next = 10;
                return (0, _testHelpers.click)('.radio input[value="1"]');

              case 10:
                assert.dom('.radio input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 'surprise', 'the middle value is clicked');
                });
                _context2.next = 14;
                return (0, _testHelpers.click)('.radio input[value="surprise"]');

              case 14:
                assert.dom('.radio input[value="surprise"]').isChecked('The element is marked as checked after being clicked');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled elements', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
                      </DenaliRadio>
                    
                */
                {
                  "id": "dqfkDRki",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.radio input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('checked elements', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(6);
                this.checked = false;
                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                        <Radio.Option @value={{2}} @checked={{this.checked}}>2</Radio.Option>
                        <Radio.Option @value="surprise" @disabled={{true}}>2</Radio.Option>
                      </DenaliRadio>
                    
                */
                {
                  "id": "fzG5s2lG",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@checked\"],[2,[30,0,[\"checked\"]]]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                assert.dom('.radio input[value="1"]').isNotChecked('The option is not marked as checked');
                assert.dom('.radio input[value="2"]').isNotChecked('The option is not marked as checked');
                assert.dom('.radio input[value="surprise"]').isNotChecked('The option is not marked as checked');
                this.set('checked', true);
                assert.dom('.radio input[value="1"]').isNotChecked('The option is still not marked as checked');
                assert.dom('.radio input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
                assert.dom('.radio input[value="surprise"]').isNotChecked('The option is still not marked as checked');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('clicking label', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(3);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadio @onChanged={{this.onChanged}} as |Radio|>
                        <Radio.Option @value={{1}}>1</Radio.Option>
                      </DenaliRadio>
                    
                */
                {
                  "id": "9Xe1uK4/",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Radio\"],false,[\"denali-radio\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the event is triggered when clicking a label');
                });
                assert.dom('.radio input').isNotChecked('The option is not marked as checked');
                _context5.next = 7;
                return (0, _testHelpers.click)('.radio label');

              case 7:
                assert.dom('.radio input').isChecked('The option is marked as checked after clicking the label');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-radio-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-radio-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle as |Toggle|>
                        <Toggle.Option @value="1">Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                */
                {
                  "id": "0+0PGq7z",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"1\"]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('label').hasText('Item 1', 'DenaliRadioToggle.Option exists and renders inner content');
                assert.dom('input').hasAttribute('value', '1', 'DenaliRadioToggle.Option exists and has a value');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events for radio options', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(6);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value="surprise">2</Toggle.Option>
                        <Toggle.Option @value={{3}}>3</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "mNfbi+jG",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[\"surprise\"]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[3]],[[\"default\"],[[[[1,\"3\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 3, 'the last value is clicked');
                });
                _context2.next = 6;
                return (0, _testHelpers.click)('.toggle input[value="3"]');

              case 6:
                assert.dom('.toggle input[value="3"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the first value is clicked');
                });
                _context2.next = 10;
                return (0, _testHelpers.click)('.toggle input[value="1"]');

              case 10:
                assert.dom('.toggle input[value="1"]').isChecked('true', 'The element is marked as checked after being clicked');
                this.set('onChanged', function (value) {
                  return assert.equal(value, 'surprise', 'the middle value is clicked');
                });
                _context2.next = 14;
                return (0, _testHelpers.click)('.toggle input[value="surprise"]');

              case 14:
                assert.dom('.toggle input[value="surprise"]').isChecked('The element is marked as checked after being clicked');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles disabled elements for radio options', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "qlsu8JPR",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.toggle input[value="surprise"]').hasAttribute('disabled', '', 'The element is marked as disabled');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles checked elements for radio options', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(6);
                this.checked = false;
                _context4.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                        <Toggle.Option @value={{2}} @checked={{this.checked}}>2</Toggle.Option>
                        <Toggle.Option @value="surprise" @disabled={{true}}>2</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "nq/HfCr2",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@checked\"],[2,[30,0,[\"checked\"]]]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\",\"@disabled\"],[\"surprise\",true]],[[\"default\"],[[[[1,\"2\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                assert.dom('.toggle input[value="1"]').isNotChecked('The option is not marked as checked');
                assert.dom('.toggle input[value="2"]').isNotChecked('The option is not marked as checked');
                assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is not marked as checked');
                this.set('checked', true);
                assert.dom('.toggle input[value="1"]').isNotChecked('The option is still not marked as checked');
                assert.dom('.toggle input[value="2"]').isChecked('The option is marked as checked after being set by attribute');
                assert.dom('.toggle input[value="surprise"]').isNotChecked('The option is still not marked as checked');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles clicking labels for radio options', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(3);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @onChanged={{this.onChanged}} as |Toggle|>
                        <Toggle.Option @value={{1}}>1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "h950Un67",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@onChanged\"],[[30,0,[\"onChanged\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('onChanged', function (value) {
                  return assert.equal(value, 1, 'the event is triggered when clicking a label');
                });
                assert.dom('.toggle input').isNotChecked('The option is not marked as checked');
                _context5.next = 7;
                return (0, _testHelpers.click)('.toggle label');

              case 7:
                assert.dom('.toggle input').isChecked('The option is marked as checked after clicking the label');

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports small size', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @isSmall={{this.isSmall}} as |Toggle|>
                        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "bm6oPT2y",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSmall\"],[[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
                this.set('isSmall', 'true');
                assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliRadioToggle @isInverse={{this.isInverse}} as |Toggle|>
                        <Toggle.Option @value={{1}}>Item 1</Toggle.Option>
                      </DenaliRadioToggle>
                    
                */
                {
                  "id": "IcWgpIjl",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isInverse\"],[[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Option\"]],null,[[\"@value\"],[1]],[[\"default\"],[[[[1,\"Item 1\"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Toggle\"],false,[\"denali-radio-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var opts = [{
    text: 'Item 1'
  }, {
    text: 'Item 2'
  }, {
    text: 'Item 3'
  }];
  (0, _qunit.module)('Integration | Component | denali-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                (0, _testHelpers.setupOnerror)(function (_ref3) {
                  var message = _ref3.message;
                  assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliSelectComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
                });
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSelect />
                */
                {
                  "id": "weYLhmv3",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option string', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(3);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{array "Item 1"}} @onChange={{this.onChange}} as |option|>
                        {{option}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "2nr/LyPw",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@onChange\"],[[28,[37,1],[\"Item 1\"],null],[30,0,[\"onChange\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\",\"array\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
                assert.dom('div.input select').exists('DenaliSelect renders a select element.');
                assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders text.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option object', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(3);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{array (hash text="Item 1")}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "OnHR7BUU",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[[28,[37,2],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\",\"array\",\"hash\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('div.input.has-arrow').exists('DenaliSelect renders an wrapper div');
                assert.dom('div.input select').exists('DenaliSelect renders a select element.');
                assert.dom('div.input option').hasText('Item 1', 'DenaliSelect option exists and renders an object.');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is active', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(1);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @selectedOption={{this.selectedOption}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "hXd0n0qP",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@selectedOption\"],[[30,0,[\"options\"]],[30,0,[\"selectedOption\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', opts);
                this.set('selectedOption', opts[1]);
                assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 1, 'DenaliSelect selects the object given by the `@selectedOption` arg');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(1);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "9Mk0OiN+",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@disabledOptions\"],[[30,0,[\"options\"]],[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', opts);
                this.set('disabled', [opts[1]]);
                assert.deepEqual((0, _testHelpers.findAll)('div.input option').map(function (e) {
                  return e.disabled;
                }), [false, true, false], 'DenaliSelect options are enabled and disabled as specified.');

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports wrapperClass', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var wrapperClass;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.set('options', opts);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @wrapperClass={{this.wrapperClass}}
                        as |option|
                      >
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "iNrwbpsR",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@wrapperClass\"],[[30,0,[\"options\"]],[30,0,[\"wrapperClass\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                wrapperClass = 'wrapperClass';
                assert.dom('.input').doesNotHaveClass(wrapperClass, 'DenaliSelect wrapper does not have a size class by default');
                this.set('wrapperClass', wrapperClass);
                assert.dom('.input').hasClass(wrapperClass, 'DenaliSelect wrapper has the provided wrapper class');

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports sizes', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.set('options', opts);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @size={{this.size}}
                        as |option|
                      >
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "KluOz6Iv",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@size\"],[[30,0,[\"options\"]],[30,0,[\"size\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.input').doesNotHaveClass(/is-small|is-medium|is-large/, 'DenaliSelect wrapper does not have a size class by default');
                this.set('size', 'small');
                assert.dom('.input').hasClass('is-small', 'DenaliSelect wrapper has the appropriate class for small');
                this.set('size', 'medium');
                assert.dom('.input').hasClass('is-medium', 'DenaliSelect wrapper has the appropriate class for medium');
                this.set('size', 'large');
                assert.dom('.input').hasClass('is-large', 'DenaliSelect wrapper has the appropriate class for large');

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                assert.expect(2);
                _context8.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "+BpzK+ZI",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isInverse\"],[[30,0,[\"options\"]],[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', opts);
                assert.dom('div.input').doesNotHaveClass('is-inverse', 'DenaliSelect does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('div.input').hasClass('is-inverse', 'DenaliSelect has inverse styling when `@isInverse` arg is set to true');

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                assert.expect(2);
                _context9.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSelect
                        @options={{this.options}}
                        @selectedOption={{this.selectedOption}}
                        @disabledOptions={{this.disabled}}
                        @onChange={{this.onChange}} as |option|>
                        {{option.text}}
                      </DenaliSelect>
                    
                */
                {
                  "id": "/GZim44j",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@selectedOption\",\"@disabledOptions\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"selectedOption\"]],[30,0,[\"disabled\"]],[30,0,[\"onChange\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-select\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [{
                  text: 'Item 1'
                }, {
                  text: 'Item 2'
                }, {
                  text: 'Item 3'
                }]);
                this.set('selectedOption', this.options[2]);
                assert.equal((0, _testHelpers.find)('div.input select').selectedIndex, 2);
                this.set('onChange', function (option) {
                  _this.set('selectedOption', option);

                  assert.equal(option, _this.options[1], 'DenaliSelect @onChange action provides the object selected');
                });
                _context9.next = 9;
                return (0, _testHelpers.fillIn)('div.input select', 'Item 2');

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x9) {
        return _ref11.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar>
                        The Greatest Sidebar
                      </DenaliSidebar>
                    
                */
                {
                  "id": "OnWjf5Wb",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        The Greatest Sidebar\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-sidebar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs').hasClass('is-primary', 'DenaliSidebar renders a primary style by default');
                assert.dom('.tabs').hasClass('is-vertical', 'DenaliSidebar renders a vertical style by default');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `Tab` sub component', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar as |Sidebar|>
                        <Sidebar.Tab>
                          The Greatest Tab
                        </Sidebar.Tab>
                      </DenaliSidebar>
                    
                */
                {
                  "id": "OAyP4EVm",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Tab\"]],null,null,[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Sidebar\"],false,[\"denali-sidebar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliSidebar can yield a `Tab` sub component');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliSidebar as |Sidebar|>
                        <Sidebar.LinkToTab
                          @route="index"
                        >
                          The Greatest Tab
                        </Sidebar.LinkToTab>
                      </DenaliSidebar>
                    
                */
                {
                  "id": "pEP3Yd8Y",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"LinkToTab\"]],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Sidebar\"],false,[\"denali-sidebar\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliSidebar can yield a `LinkToTab` sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(4);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch @offLabel="Lights Off" @onLabel="Lights On" />
                */
                {
                  "id": "3JUQ5BtF",
                  "block": "[[[8,[39,0],null,[[\"@offLabel\",\"@onLabel\"],[\"Lights Off\",\"Lights On\"]],null]],[],false,[\"denali-switch\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.denali-switch.switch').exists('A denali switch component is rendered');
                assert.dom('.denali-switch.switch .label.off').hasText('Lights Off', 'A denali switch renders an off label');
                assert.dom('.denali-switch.switch .label.on').hasText('Lights On', 'A denali switch renders an on label');
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('checked and disabled', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(4);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      checked={{this.checked}}
                      disabled={{this.disabled}}
                    />
                */
                {
                  "id": "ditibPwG",
                  "block": "[[[8,[39,0],[[16,\"checked\",[30,0,[\"checked\"]]],[16,\"disabled\",[30,0,[\"disabled\"]]]],[[\"@offLabel\",\"@onLabel\"],[\"Off\",\"On\"]],null]],[],false,[\"denali-switch\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                this.set('checked', true);
                assert.dom('.denali-switch.switch input').isChecked('The switch is on when checked is set to true');
                assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
                this.set('disabled', true);
                assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when disabled is set to true');

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('isEnabled and isDisabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(4);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      @isEnabled={{this.isEnabled}}
                      @isDisabled={{this.isDisabled}}
                    />
                */
                {
                  "id": "9Ztyxv48",
                  "block": "[[[8,[39,0],null,[[\"@offLabel\",\"@onLabel\",\"@isEnabled\",\"@isDisabled\"],[\"Off\",\"On\",[30,0,[\"isEnabled\"]],[30,0,[\"isDisabled\"]]]],null]],[],false,[\"denali-switch\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                this.set('isEnabled', true);
                assert.dom('.denali-switch.switch input').isChecked('The switch is on when isEnabled is set to true');
                assert.dom('.denali-switch.switch input').isNotDisabled('The switch is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('.denali-switch.switch input').isDisabled('The switch is disabled when isDisabled is set to true');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('click and onChange action', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(7);
                this.set('clickHandler', function () {
                  assert.ok('Click handler is called on click');
                });
                this.set('changeHandler', function () {
                  assert.ok('Change handler is called on click');
                });
                _context4.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliSwitch
                      @offLabel="Off"
                      @onLabel="On"
                      @onChange={{action this.changeHandler}}
                      {{on "click" (action this.clickHandler)}}
                    />
                */
                {
                  "id": "ilzJcZPk",
                  "block": "[[[8,[39,0],[[4,[38,2],[\"click\",[28,[37,1],[[30,0],[30,0,[\"clickHandler\"]]],null]],null]],[[\"@offLabel\",\"@onLabel\",\"@onChange\"],[\"Off\",\"On\",[28,[37,1],[[30,0],[30,0,[\"changeHandler\"]]],null]]],null]],[],false,[\"denali-switch\",\"action\",\"on\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 5:
                assert.dom('.denali-switch.switch input').isNotChecked('The switch is off by default');
                _context4.next = 8;
                return (0, _testHelpers.click)('.denali-switch input');

              case 8:
                assert.dom('.denali-switch.switch input').isChecked('The switch is on after click');
                _context4.next = 11;
                return (0, _testHelpers.click)('.denali-switch input');

              case 11:
                assert.dom('.denali-switch.switch input').isNotChecked('Clicking again turns the switch off');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs>
                        Inner Content
                      </DenaliTabs>
                    
                */
                {
                  "id": "5tMaQKBS",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.tabs ul').hasText('Inner Content', 'DenaliTabs exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports styles', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs
                        @style={{this.style}}
                      >
                        Inner Content
                      </DenaliTabs>
                    
                */
                {
                  "id": "RqUnY9rE",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@style\"],[[30,0,[\"style\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs').hasClass('is-primary', 'DenaliTabs renders a primary style by default');
                assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by default');
                this.set('style', 'secondary');
                assert.dom('.tabs').hasClass('is-secondary', 'DenaliTabs renders a secondary style by setting `@style` arg to secondary');
                assert.dom('.tabs').hasClass('is-horizontal', 'DenaliTabs renders a horizontal style by setting `@style` arg to secondary');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `Tab` sub component', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs as |Tabs|>
                        <Tabs.Tab>
                          The Greatest Tab
                        </Tabs.Tab>
                      </DenaliTabs>
                    
                */
                {
                  "id": "fMd3sMnL",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"Tab\"]],null,null,[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Tabs\"],false,[\"denali-tabs\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs li span').hasText('The Greatest Tab', 'DenaliTabs can yield a `Tab` sub component');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can yield a `LinkToTab` sub component', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs as |Tabs|>
                        <Tabs.LinkToTab
                          @route="index"
                        >
                          The Greatest Tab
                        </Tabs.LinkToTab>
                      </DenaliTabs>
                    
                */
                {
                  "id": "543OPy8S",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"LinkToTab\"]],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n          The Greatest Tab\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Tabs\"],false,[\"denali-tabs\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.tabs li.ember-view a').hasText('The Greatest Tab', 'DenaliTabs can yield a `LinkToTab` sub component');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs/link-to-tab-test", ["qunit", "ember-qunit", "@ember/test-helpers", "dummy/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs/link-to-tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route="four-oh-four"
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {
                  "id": "oPH81ZNd",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"four-oh-four\"]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('li a').hasText('Inner Content', 'DenaliTabs::LinkToTab exists and renders Inner Content');
                assert.dom('li a').hasAttribute('href', '/four-oh-four', 'DenaliTabs::LinkToTab has correct href attribute for given LinkTo arg');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set active', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('route', 'four-oh-four');
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route={{this.route}}
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {
                  "id": "mgP1lqgH",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[[30,0,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::LinkToTab is not active when not on the current route');
                this.set('route', 'index');
                assert.dom('li').hasClass('is-active', 'DenaliTabs::LinkToTab is active when on the current route');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::LinkToTab
                        @route="four-oh-four"
                        @disabled={{this.disabled}}
                      >
                        Inner Content
                      </DenaliTabs::LinkToTab>
                    
                */
                {
                  "id": "o/iuwusK",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@route\",\"@disabled\"],[\"four-oh-four\",[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/link-to-tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::LinkToTab is not disabled by default');
                this.set('disabled', true);
                assert.dom('li').hasClass('is-disabled', 'DenaliTabs::LinkToTab is disabled when disabled is set to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tabs/tab-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tabs/tab', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab>
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {
                  "id": "ZxEq3zAC",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('li span').hasText('Inner Content', 'DenaliTabs::Tab exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set active', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab
                        @isActive={{this.isActive}}
                      >
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {
                  "id": "4vTwXDag",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isActive\"],[[30,0,[\"isActive\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliTabs::Tab is not active by default');
                this.set('isActive', true);
                assert.dom('li').hasClass('is-active', 'DenaliTabs::Tab is active when setting `@isActive` arg to true');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can be set disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTabs::Tab
                        @isDisabled={{this.isDisabled}}
                      >
                        Inner Content
                      </DenaliTabs::Tab>
                    
                */
                {
                  "id": "RKIDy4dY",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isDisabled\"],[[30,0,[\"isDisabled\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tabs/tab\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliTabs::Tab is not disabled by default');
                this.set('isDisabled', true);
                assert.dom('li').hasClass('is-disabled', 'DenaliTabs::Tab is active when setting `@isDisabled` arg to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-tag-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-tag', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag>
                        Inner Content
                      </DenaliTag>
                    
                */
                {
                  "id": "dzZm8S2u",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.tag').hasText('Inner Content', 'DenaliTag exists and renders inner content');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @state={{this.state}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {
                  "id": "u0Fe3h7m",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@state\"],[[30,0,[\"state\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.tag').exists('DenaliTag can render without a state set');
                this.set('state', 'disabled');
                assert.dom('span.tag').hasClass('is-disabled', 'DenaliTag can be set disabled by setting the `@state` arg to `disabled`');
                this.set('state', 'active');
                assert.dom('span.tag').hasClass('is-active', 'DenaliTag can be set active by setting the `@state` arg to `active`');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('outlined', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @isOutlined={{this.outlined}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {
                  "id": "zje0dV4q",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isOutlined\"],[[30,0,[\"outlined\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.tag').doesNotHaveClass('outlined', 'DenaliTag is not outlined by default');
                this.set('outlined', true);
                assert.dom('span.tag').hasClass('outlined', 'DenaliTag can be outlined by setting the `@isOutlined` arg to true');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('small', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag @isSmall={{this.isSmall}}>
                        Inner Content
                      </DenaliTag>
                    
                */
                {
                  "id": "qk4UBbGD",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@isSmall\"],[[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        Inner Content\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.tag').doesNotHaveClass('is-small', 'DenaliTag is not small by default');
                this.set('isSmall', true);
                assert.dom('span.tag').hasClass('is-small', 'DenaliTag can be made smaller by setting the `@isSmall` arg to true');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('icons', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var iconFrontClass, iconBackClass;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(12);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTag
                        @iconFront={{this.iconFront}}
                        @iconFrontClass={{this.iconFrontClass}}
                        @onIconFrontClick={{this.onIconFrontClick}}
                        @iconBack={{this.iconBack}}
                        @iconBackClass={{this.iconBackClass}}
                        @onIconBackClick={{this.onIconBackClick}}
                      >Tag Content</DenaliTag>
                    
                */
                {
                  "id": "eA9gaKkh",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@iconFront\",\"@iconFrontClass\",\"@onIconFrontClick\",\"@iconBack\",\"@iconBackClass\",\"@onIconBackClick\"],[[30,0,[\"iconFront\"]],[30,0,[\"iconFrontClass\"]],[30,0,[\"onIconFrontClick\"]],[30,0,[\"iconBack\"]],[30,0,[\"iconBackClass\"]],[30,0,[\"onIconBackClick\"]]]],[[\"default\"],[[[[1,\"Tag Content\"]],[]]]]],[1,\"\\n    \"]],[],false,[\"denali-tag\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('span.tag').doesNotHaveClass('has-icon-front', 'DenaliTag does not have the `has-icon-front` class by default');
                assert.dom('span.tag').doesNotHaveClass('has-icon-back', 'DenaliTag does not have the `has-icon-back` class by default');
                this.set('iconFront', 'check');
                assert.dom('span.tag').hasClass('has-icon-front', 'DenaliTag has the `has-icon-front` class when iconFront is specified');
                assert.dom('span.tag .d-icon').hasClass('d-check', 'DenaliTag has the specified icon in the front');
                iconFrontClass = 'iconFrontClass';
                assert.dom('span.tag .d-icon').doesNotHaveClass(iconFrontClass, 'DenaliTag does not have `iconFrontClass` class by default');
                this.set('iconFrontClass', iconFrontClass);
                assert.dom('span.tag .d-check').hasClass(iconFrontClass, 'DenaliTag has the specified `iconFrontClass`');
                this.set('onIconFrontClick', function () {
                  return assert.ok(true, '`onIconFrontClick` fires on click');
                });
                _context5.next = 15;
                return (0, _testHelpers.click)('.d-check');

              case 15:
                // unset the front icon to check the back icon
                this.set('iconFront', undefined);
                this.set('onIconFrontClick', undefined);
                this.set('iconBack', 'close');
                assert.dom('span.tag').hasClass('has-icon-back', 'DenaliTag has the `has-icon-back` class when iconBack is specified');
                assert.dom('span.tag .d-icon').hasClass('d-close', 'DenaliTag has the specified icon in the back');
                iconBackClass = 'iconBackClass';
                assert.dom('span.tag .d-close').doesNotHaveClass(iconBackClass, 'DenaliTag does not have `iconBackClass` class by default');
                this.set('iconBackClass', iconBackClass);
                assert.dom('span.tag .d-icon').hasClass(iconBackClass, 'DenaliTag has the specified `iconBackClass`');
                this.set('onIconBackClick', function () {
                  return assert.ok(true, '`onIconBackClick` fires on click');
                });
                _context5.next = 27;
                return (0, _testHelpers.click)('.d-close');

              case 27:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-text-area-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-text-area', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea>My Input</ DenaliTextArea>
                */
                {
                  "id": "/PDipRzc",
                  "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"My Input\"]],[]]]]]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input textarea').exists('An textarea is rendered within a wrapper div with class `.input`');
                assert.dom('.input textarea').isNotDisabled('The textarea is not disabled by default');
                assert.dom('.input textarea').hasValue('My Input', 'The textarea has the specified value');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('states', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea @state={{this.state}} @errorMsg="error"/>
                */
                {
                  "id": "O9YBFDVq",
                  "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[[30,0,[\"state\"]],\"error\"]],null]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('state', 'active');
                assert.dom('.input').hasClass('is-active', 'The input wrapper has the appropriate class for active');
                this.set('state', 'error');
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class for error');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('disabled', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea disabled={{true}}/>
                */
                {
                  "id": "mwj7g8Hd",
                  "block": "[[[8,[39,0],[[16,\"disabled\",true]],null,null]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input textarea').isDisabled('The textarea is disabled when specified');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('placeholder', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea placeholder="Text field"/>
                */
                {
                  "id": "QYhBdofU",
                  "block": "[[[8,[39,0],[[24,\"placeholder\",\"Text field\"]],null,null]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input textarea').hasAttribute('placeholder', 'Text field', 'The textarea is has the specified placeholder');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('error message', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea @state="error" @errorMsg={{this.errorMsg}} />
                */
                {
                  "id": "0sxWqABf",
                  "block": "[[[8,[39,0],null,[[\"@state\",\"@errorMsg\"],[\"error\",[30,0,[\"errorMsg\"]]]],null]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('.input').hasClass('is-error', 'The input wrapper has the appropriate class.');
                this.set('errorMsg', 'Email Invalid');
                assert.dom('.input.is-error .message').hasText('Email Invalid', 'The specified error message is rendered');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('actions', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'Random Text', 'the action passed in configured correctly');
                });
                _context6.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTextArea {{on 'input' this.handleInput}} />
                */
                {
                  "id": "iHyDU+C2",
                  "block": "[[[8,[39,0],[[4,[38,1],[\"input\",[30,0,[\"handleInput\"]]],null]],null,null]],[],false,[\"denali-text-area\",\"on\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
                _context6.next = 6;
                return (0, _testHelpers.fillIn)('.input textarea', 'Random Text');

              case 6:
                this.set('handleInput', function (event) {
                  assert.equal(event.target.value, 'More Random Text', 'the action is configured correctly');
                });
                this.element.querySelector('.input textarea').value = 'More Random Text';
                this.element.querySelector('.input textarea').dispatchEvent(new Event('input'));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('wrapperClass', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        var wrapperClass;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTextArea
                        @wrapperClass={{this.wrapperClass}}
                      />
                    
                */
                {
                  "id": "/+PBTDHn",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@wrapperClass\"],[[30,0,[\"wrapperClass\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-text-area\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                wrapperClass = 'wrapperClass';
                assert.dom('.input').doesNotHaveClass(wrapperClass, '`DenaliTextArea` does not have custom wrapper class by default');
                this.set('wrapperClass', wrapperClass);
                assert.dom('.input').hasClass(wrapperClass, '`DenaliTextArea` has custom specified wrapper class');

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-title-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | denali-title', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle />
                */
                {
                  "id": "QUyuR3N/",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('div.title').exists('DenaliTitle can render.');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a title argument', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle @title={{this.title}} />
                */
                {
                  "id": "rc8kZr7I",
                  "block": "[[[8,[39,0],null,[[\"@title\"],[[30,0,[\"title\"]]]],null]],[],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('title', 'My Title');
                assert.dom('span').hasClass('bar', 'DenaliTitle has a bar.');
                assert.dom('div.title-text').exists('DenaliTitle has a title-text class.');
                assert.dom('h3').hasTextContaining('My Title', 'DenaliTitle renders a title using an argument.');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with a caption argument', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliTitle @title={{this.title}} @caption={{this.caption}} />
                */
                {
                  "id": "EJObRvn7",
                  "block": "[[[8,[39,0],null,[[\"@title\",\"@caption\"],[[30,0,[\"title\"]],[30,0,[\"caption\"]]]],null]],[],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('caption', 'My Caption');
                assert.dom('h6').doesNotExist('DenaliTitle does not render a caption without a title.');
                this.set('title', 'My Title');
                assert.dom('h6').hasTextContaining('My Caption', 'DenaliTitle renders a caption using an argument.');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders with block components', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle as |Title|>
                        <Title.h1>
                          {{this.h1}}
                        </Title.h1>
                        <Title.h2>
                          {{this.h2}}
                        </Title.h2>
                        <Title.h3>
                          {{this.h3}}
                        </Title.h3>
                        <Title.h4>
                          {{this.h4}}
                        </Title.h4>
                        <Title.h5>
                          {{this.h5}}
                        </Title.h5>
                        <Title.h6>
                          {{this.h6}}
                        </Title.h6>
                      </DenaliTitle>
                    
                */
                {
                  "id": "6IyFpR54",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"h1\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h1\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h2\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h2\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h3\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h3\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h4\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h4\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h5\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h5\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"h6\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"h6\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Title\"],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('h1', 'My H1');
                assert.dom('h1').hasText('My H1', 'DenaliTitle renders block content for h1.');
                this.set('h2', 'My H2');
                assert.dom('h2').hasText('My H2', 'DenaliTitle renders block content for h2.');
                this.set('h3', 'My H3');
                assert.dom('h3').hasText('My H3', 'DenaliTitle renders block content for h3.');
                this.set('h4', 'My H4');
                assert.dom('h4').hasText('My H4', 'DenaliTitle renders block content for h4.');
                this.set('h5', 'My H5');
                assert.dom('h5').hasText('My H5', 'DenaliTitle renders block content for h5.');
                this.set('h6', 'My H6');
                assert.dom('h6').hasText('My H6', 'DenaliTitle renders block content for h6.');

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports a wide bar', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle @hasWideBar={{this.hasWideBar}} as |Title|>
                        <Title.h1>
                          {{this.title}}
                        </Title.h1>
                        <Title.Caption>
                          {{this.caption}}
                        </Title.Caption>
                      </DenaliTitle>
                    
                */
                {
                  "id": "2iQw984M",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@hasWideBar\"],[[30,0,[\"hasWideBar\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"h1\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"title\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"Caption\"]],null,null,[[\"default\"],[[[[1,\"\\n          \"],[1,[30,0,[\"caption\"]]],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"Title\"],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                this.set('hasWideBar', true);
                assert.dom('span.bar').hasClass('is-wide', 'DenaliTitle has a wide bar.');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports statuses for bar', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliTitle @backgroundStatus={{this.backgroundStatus}} />
                    
                */
                {
                  "id": "rTRAAcwh",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@backgroundStatus\"],[[30,0,[\"backgroundStatus\"]]]],null],[1,\"\\n    \"]],[],false,[\"denali-title\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 2:
                assert.dom('span.bar').exists('DenaliTitle can render without a backgroundStatus set');
                this.set('backgroundStatus', 'danger');
                assert.dom('span.bar').hasClass('has-bg-status-danger', 'DenaliTitle has background status of danger when `@backgroundStatus` arg is set to danger');
                this.set('backgroundStatus', 'warning');
                assert.dom('span.bar').hasClass('has-bg-status-warning', 'DenaliTitle has background status of warning when `@backgroundStatus` arg is set to warning');
                this.set('backgroundStatus', 'success');
                assert.dom('span.bar').hasClass('has-bg-status-success', 'DenaliTitle has background status of success when `@backgroundStatus` arg is set to success');
                this.set('backgroundStatus', 'info');
                assert.dom('span.bar').hasClass('has-bg-status-info', 'DenaliTitle has background status of info when `@backgroundStatus` arg is set to info');

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-title/heading-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var templates = Object.entries({
    h1: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H1 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H1>
      
    */
    {
      "id": "+m3KZQkU",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h1\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h2: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H2 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H2>
      
    */
    {
      "id": "5LNu5Sli",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h2\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h3: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H3 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H3>, 
      
    */
    {
      "id": "HvivPuIv",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\", \\n  \"]],[],false,[\"denali-title/h3\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h4: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H4 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H4>
      
    */
    {
      "id": "Op9Ptf+6",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h4\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h5: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H5 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H5>
      
    */
    {
      "id": "UO0N1QVQ",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h5\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    }),
    h6: Ember.HTMLBars.template(
    /*
      
        <DenaliTitle::H6 @isRegular={{this.isRegular}} @isUpperCase={{this.isUpperCase}} @status={{this.status}}>
          {{this.title}}
        </DenaliTitle::H6>
      
    */
    {
      "id": "sXwqXgms",
      "block": "[[[1,\"\\n    \"],[8,[39,0],null,[[\"@isRegular\",\"@isUpperCase\",\"@status\"],[[30,0,[\"isRegular\"]],[30,0,[\"isUpperCase\"]],[30,0,[\"status\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[],false,[\"denali-title/h6\"]]",
      "moduleName": "(unknown template module)",
      "isStrictMode": false
    })
  });
  (0, _qunit.module)('Integration | Component | denali-title/headings', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _iterator, _step, _step$value, heading, template;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(templates);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                _step$value = _slicedToArray(_step.value, 2), heading = _step$value[0], template = _step$value[1];
                _context.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                assert.dom(heading).hasText('My Title', "DenaliTitle::".concat(heading.toUpperCase(), " can render."));

              case 9:
                _context.next = 3;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13, 16, 19]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports regular style', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _iterator2, _step2, _step2$value, heading, template;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(templates);
                _context2.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 14;
                  break;
                }

                _step2$value = _slicedToArray(_step2.value, 2), heading = _step2$value[0], template = _step2$value[1];
                _context2.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('isRegular', undefined);
                assert.dom(heading).doesNotHaveClass('is-regular', "Denali::".concat(heading.toUpperCase(), " does not have regular styling by default"));
                this.set('isRegular', 'true');
                assert.dom(heading).hasClass('is-regular', "Denali::".concat(heading.toUpperCase(), " has regular styling when @isRegular arg is set to true"));

              case 12:
                _context2.next = 3;
                break;

              case 14:
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](1);

                _iterator2.e(_context2.t0);

              case 19:
                _context2.prev = 19;

                _iterator2.f();

                return _context2.finish(19);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 16, 19, 22]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports upper casing', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var _iterator3, _step3, _step3$value, heading, template;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(templates);
                _context3.prev = 1;

                _iterator3.s();

              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 14;
                  break;
                }

                _step3$value = _slicedToArray(_step3.value, 2), heading = _step3$value[0], template = _step3$value[1];
                _context3.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('isUpperCase', undefined);
                assert.dom(heading).doesNotHaveClass('upper', "Denali::".concat(heading.toUpperCase(), " does not have upper case styling by default"));
                this.set('isUpperCase', 'true');
                assert.dom(heading).hasClass('upper', "Denali::".concat(heading.toUpperCase(), " has upper case styling when @isUpperCase arg is set to true"));

              case 12:
                _context3.next = 3;
                break;

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](1);

                _iterator3.e(_context3.t0);

              case 19:
                _context3.prev = 19;

                _iterator3.f();

                return _context3.finish(19);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 16, 19, 22]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports statuses', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var _iterator4, _step4, _step4$value, heading, template;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper(templates);
                _context4.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context4.next = 20;
                  break;
                }

                _step4$value = _slicedToArray(_step4.value, 2), heading = _step4$value[0], template = _step4$value[1];
                _context4.next = 7;
                return (0, _testHelpers.render)(template);

              case 7:
                this.set('title', 'My Title');
                this.set('status', undefined);
                assert.dom(heading).exists("DenaliTitle::".concat(heading.toUpperCase(), " can render without a status set"));
                this.set('status', 'danger');
                assert.dom(heading).hasClass('is-status-danger', "DenaliTitle::".concat(heading.toUpperCase(), " has status of danger when @status arg is set to danger"));
                this.set('status', 'warning');
                assert.dom(heading).hasClass('is-status-warning', "DenaliTitle::".concat(heading.toUpperCase(), " has status of warning when @status arg is set to warning"));
                this.set('status', 'success');
                assert.dom(heading).hasClass('is-status-success', "DenaliTitle::".concat(heading.toUpperCase(), " has status of success when @status arg is set to success"));
                this.set('status', 'info');
                assert.dom(heading).hasClass('is-status-info', "DenaliTitle::".concat(heading.toUpperCase(), " has status of info when @status arg is set to info"));

              case 18:
                _context4.next = 3;
                break;

              case 20:
                _context4.next = 25;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](1);

                _iterator4.e(_context4.t0);

              case 25:
                _context4.prev = 25;

                _iterator4.f();

                return _context4.finish(25);

              case 28:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 22, 25, 28]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/integration/components/denali-toggle-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var option = {
    text: 'Item 1'
  };
  (0, _qunit.module)('Integration | Component | denali-toggle', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it requires options', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                (0, _testHelpers.setupOnerror)(function (_ref3) {
                  var message = _ref3.message;
                  assert.equal(message, 'Failed prop type: The prop `options` is marked as required in `DenaliToggleComponent`, but its value is `undefined`.', 'If @args() contains a PropType validator, an error will be thrown if the value is incorrect');
                });
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <DenaliToggle />
                */
                {
                  "id": "A54dpGA5",
                  "block": "[[[8,[39,0],null,null,null]],[],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option string', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                assert.expect(2);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{array "Item 1"}} as |option|>
                        {{option}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "0b/UUDmu",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[\"Item 1\"],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\",\"array\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('ul').exists('DenaliToggle renders a list.');
                assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders text.');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it renders an option object', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                assert.expect(2);
                _context3.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{array (hash text="Item 1")}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "hodVppQt",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\"],[[28,[37,1],[[28,[37,2],null,[[\"text\"],[\"Item 1\"]]]],null]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\",\"array\",\"hash\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                assert.dom('ul').exists('DenaliToggle renders a list.');
                assert.dom('li').hasText('Item 1', 'DenaliToggle option exists and renders an object.');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is active', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                assert.expect(2);
                _context4.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @activeOption={{this.activeOption}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "SG5imNmd",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@activeOption\"],[[30,0,[\"options\"]],[30,0,[\"activeOption\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [option]);
                assert.dom('li').doesNotHaveClass('is-active', 'DenaliToggle options are not active by default');
                this.set('activeOption', option);
                assert.dom('li').hasClass('is-active', 'DenaliToggle option is active when `@activeOption` arg is set');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('an option is disabled', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert.expect(2);
                _context5.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @disabledOptions={{this.disabled}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "Eunmap2H",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@disabledOptions\"],[[30,0,[\"options\"]],[30,0,[\"disabled\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [option]);
                assert.dom('li').doesNotHaveClass('is-disabled', 'DenaliToggle options are not disabled by default');
                this.set('disabled', [option]);
                assert.dom('li').hasClass('is-disabled', 'DenaliToggle option is disabled when `@isDisabled` arg is set to true');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports small size', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(2);
                _context6.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @isSmall={{this.isSmall}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "1B06n7Bh",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isSmall\"],[[30,0,[\"options\"]],[30,0,[\"isSmall\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [option]);
                assert.dom('.toggle').doesNotHaveClass('is-small', 'DenaliToggle does not have small styling by default');
                this.set('isSmall', 'true');
                assert.dom('.toggle').hasClass('is-small', 'DenaliToggle has a small size when `@isSmall` arg is set to true');

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it supports inverse colors', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                assert.expect(2);
                _context7.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle @options={{this.options}} @isInverse={{this.isInverse}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "ELc2rqlj",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@isInverse\"],[[30,0,[\"options\"]],[30,0,[\"isInverse\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [option]);
                assert.dom('.toggle').doesNotHaveClass('is-inverse', 'DenaliToggle does not have inverse styling by default');
                this.set('isInverse', 'true');
                assert.dom('.toggle').hasClass('is-inverse', 'DenaliToggle has inverse styling when `@isInverse` arg is set to true');

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it handles change events', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                assert.expect(4);
                _context8.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <DenaliToggle
                        @options={{this.options}}
                        @activeOption={{this.activeOption}}
                        @disabledOptions={{this.disabled}}
                        @onChange={{this.changeActive}} as |option|>
                        {{option.text}}
                      </DenaliToggle>
                    
                */
                {
                  "id": "fnTdyd2a",
                  "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@options\",\"@activeOption\",\"@disabledOptions\",\"@onChange\"],[[30,0,[\"options\"]],[30,0,[\"activeOption\"]],[30,0,[\"disabled\"]],[30,0,[\"changeActive\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1,[\"text\"]]],[1,\"\\n      \"]],[1]]]]],[1,\"\\n    \"]],[\"option\"],false,[\"denali-toggle\"]]",
                  "moduleName": "(unknown template module)",
                  "isStrictMode": false
                }));

              case 3:
                this.set('options', [{
                  text: 'Item 1'
                }, {
                  text: 'Item 2'
                }, {
                  text: 'Item 3'
                }]);
                this.set('activeOption', this.options[2]);
                assert.dom('li:nth-child(3)').hasClass('is-active', 'The third option is active');
                this.set('changeActive', function (option) {
                  _this.set('activeOption', option);

                  assert.equal(option.text, 'Item 2', 'the second option is clicked');
                });
                _context8.next = 9;
                return (0, _testHelpers.click)('li:nth-child(2)');

              case 9:
                assert.dom('li:nth-child(2)').hasClass('is-active', 'The element is active after being clicked');
                this.set('disabled', [this.options[0]]);
                this.set('changeActive', function () {
                  assert.notOk(true, '`@onChange` should not be called when option is disabled');
                });
                _context8.next = 14;
                return (0, _testHelpers.click)('li:nth-child(1)');

              case 14:
                assert.dom('li:nth-child(2)').hasClass('is-active', 'The original element is still active after being clicked');

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x8) {
        return _ref10.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
