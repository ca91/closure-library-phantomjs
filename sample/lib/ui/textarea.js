goog.provide('ui.Textarea');

goog.require('goog.ui.Component');

/**
 * @param {string=} opt_value The value string.
 * @constructor
 * @extends {goog.ui.Component}
 */
ui.Textarea = function(opt_value) {
  goog.ui.Component.call(this);
  this.value_ = opt_value || '';
};
goog.inherits(ui.Textarea, goog.ui.Component);

/**
 * @override
 */
ui.Textarea.prototype.createDom = function() {
  var dom = this.getDomHelper();
  var el = dom.createDom('textarea', {
    'className': 'ui-textarea'
  });
  this.setElementInternal(el);
};

/**
 * @override
 */
ui.Textarea.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  var el = this.getElement();
  el.value = this.value_;
};

/**
 * @param {string} value The value string.
 */
ui.Textarea.prototype.setValue = function(value) {
  if (this.isInDocument()) {
    var el = this.getElement();
    el.value = value;
  }
  this.value_ = value;
};

/**
 * @return {string}
 */
ui.Textarea.prototype.getValue = function() {
  return this.value_;
};
