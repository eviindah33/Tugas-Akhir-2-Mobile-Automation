/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`//android.widget.FrameLayout[@resource-id="com.fghilmany.dietmealapp:id/nav_host_fragment_activity_home"]/android.view.ViewGroup${path}`);
  }
}
