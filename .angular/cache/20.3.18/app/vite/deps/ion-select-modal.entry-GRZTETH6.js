import {
  safeCall
} from "./chunk-KGTTSWAE.js";
import "./chunk-GDBTK6GF.js";
import {
  getClassMap
} from "./chunk-YHTFT7Q3.js";
import {
  getIonMode
} from "./chunk-6XAJRQTJ.js";
import "./chunk-WEYH3URY.js";
import "./chunk-QA2SYHF5.js";
import "./chunk-NAN5JSOG.js";
import "./chunk-LCMILTBF.js";
import {
  Host,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-OJD7SPD7.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js
var ionicSelectModalMdCss = '.sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container),ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic [part~="container"]{display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label),ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic [part~="label"]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}';
var selectModalIosCss = '.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}';
var selectModalMdCss = '.sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container),ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md [part~="container"]{display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label),ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md [part~="label"]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}';
var SelectModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest("ion-modal");
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const { options } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  getValues(ev) {
    const { multiple, options } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : void 0;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
    }
  }
  setChecked(ev) {
    const { multiple } = this;
    const option = this.findOptionFromEvent(ev);
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  renderRadioOptions() {
    const checked = this.options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", { value: checked, onIonChange: (ev) => this.callOptionHandler(ev) }, this.options.map((option) => h("ion-item", { lines: "none", class: Object.assign({
      // TODO FW-4784
      "item-radio-checked": option.value === checked
    }, getClassMap(option.cssClass)) }, h("ion-radio", { value: option.value, disabled: option.disabled, justify: "start", labelPlacement: "end", onClick: () => this.closeModal(), onKeyUp: (ev) => {
      if (ev.key === " ") {
        this.closeModal();
      }
    } }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map((option) => h("ion-item", { class: Object.assign({
      // TODO FW-4784
      "item-checkbox-checked": option.checked
    }, getClassMap(option.cssClass)) }, h("ion-checkbox", { value: option.value, disabled: option.disabled, checked: option.checked, justify: "start", labelPlacement: "end", onIonChange: (ev) => {
      this.setChecked(ev);
      this.callOptionHandler(ev);
      forceUpdate(this);
    } }, option.text)));
  }
  render() {
    return h(Host, { key: "5bffdb106e6f628dae2e2aeb9ee8008b5c547b3a", class: getIonMode(this) }, h("ion-header", { key: "4de1c33b0504372f8a0a26123e4e086080ee1ecb" }, h("ion-toolbar", { key: "5d55a67d1db4352c260e9e0457d5dac6110b6598" }, this.header !== void 0 && h("ion-title", { key: "4f07fe8a9af8c9bd0852af2a9b95517d16356e50" }, this.header), h("ion-buttons", { key: "ca676a34f7cd3dd6b465b0d803434c2e2c8536c5", slot: "end" }, h("ion-button", { key: "801ed63a357c7c9d354668851db65e5c1b0e1abe", onClick: () => this.closeModal() }, "Close")))), h("ion-content", { key: "f3c239ec9d84b8ed7413ea9db6efa18e29aca285" }, h("ion-list", { key: "40c157e9abe477171a39ae7e6e1cd4ed08735cb4" }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return getElement(this);
  }
};
SelectModal.style = {
  ionic: ionicSelectModalMdCss,
  ios: selectModalIosCss,
  md: selectModalMdCss
};
export {
  SelectModal as ion_select_modal
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-select-modal.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=ion-select-modal.entry-GRZTETH6.js.map
