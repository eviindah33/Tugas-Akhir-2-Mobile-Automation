import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputName() {
    return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]');
  }

  get inputWeight() {
    return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]');
  }

  get inputHeight() {
    return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]');
  }

  get genderFemale() {
    return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_female"]');
  }
  get btnNext() {
    return $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(name, weight, height, isFemale) {
    await this.inputName.setValue(name);
    await this.inputWeight.setValue(weight);
    await this.inputHeight.setValue(height);
    await this.genderFemale.setValue(isFemale);
    await this.btnNext.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new HomePage();
