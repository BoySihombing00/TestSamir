import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get inputUsername () {
        return $('input[id="username"]');
    }

    get inputPassword () {
        return $('input[id="password"]');
    }

    get btnSubmit () {
        return $('button[onclick="login()"]');
    }
    
    async input (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    get Login_successful () {
        return $('div[id="successMessage"]');
    }
    get Invalid_credentials () {
        return $('div[id="message"]');
    }

    open () {
        return super.open('samir_test/qa_test_samir.html');
    }
}

export default new LoginPage();
