exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.book_store_link = page.locator('h5', { hasText: 'Book Store Application' });
    this.login_sidebar = page.getByText('Login'); // Login in sidebar
    this.username_textbox = page.getByRole('textbox', { name: 'UserName' });
    this.password_textbox = page.getByRole('textbox', { name: 'Password' });
    this.login_button = page.getByRole('button', { name: 'Login' });
    this.user_profile = page.locator('#userName-value'); // Element visible after login
  }

  // Navigate to DemoQA home page
  async gotoqademopage() {
    await this.page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  }

  // Open Book Store application page
  async openBookStore() {
    await this.book_store_link.scrollIntoViewIfNeeded();
    await this.book_store_link.click();
    // Wait for search box to appear
    await this.page.locator('#searchBox')
  }

  // Open Login form in Book Store
  async openLoginForm() {
    await this.page.locator("#login").click();
 
    // Wait for login form to appear
    await this.username_textbox
  }

  // Login with username and password
  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
};
