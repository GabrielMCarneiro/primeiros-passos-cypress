import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM - User Update Tests', () => {

  it("User Info Update - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), "Barabim", "Barabum", "Mister", "2025-10-03")
    myInfoPage.saveInformations()
  })

})