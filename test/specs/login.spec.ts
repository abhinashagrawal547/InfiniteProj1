import {expect} from 'chai'
import LoginPage from '../pageobjects/LoginPage'

describe('Login Flow', () => {
    it('should login successfully with valid credentials', async() => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        const flashMessage = await $('#flash').getText();
        expect(flashMessage).to.include('You logged into a secure are')
    })
})