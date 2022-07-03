package com.SpotLight.steps;

import com.SpotLight.pages.DashboardPage;
import com.SpotLight.utilities.BrowserUtils;
import com.SpotLight.utilities.ContextReader;
import com.SpotLight.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.Collections;
import java.util.List;

public class NextUpFilter {
    DashboardPage dashboardPage=new DashboardPage();
    @Given("i am on home page")
    public void i_am_on_home_page() {
        Driver.get().get(ContextReader.get("base_url"));
        BrowserUtils.waitFor(1);
        dashboardPage.clickAcceptCookiesButtonIfPresent();
        dashboardPage.verifyBasePage();
    }
    @When("i select the Next Up Sports Filter")
    public void i_select_the_Next_Up_Sports_Filter() {
    dashboardPage.NextUpFilterDropDown.click();
    }

    @Then("i can see an available list of valid Sports to filter by")
    public void i_can_see_an_available_list_of_valid_Sports_to_filter_by(List<String> ExpectedSportsList) {
        List<String> ActualSportsList=BrowserUtils.getElementsText(dashboardPage.returnAvailableSportsList());
        Collections.sort(ActualSportsList);
        System.out.println(ActualSportsList);
        System.out.println("Expected Sports List: " + ExpectedSportsList);
        System.out.println("Actual Sports List: " + ActualSportsList);
        Assert.assertTrue(ExpectedSportsList.contains(ActualSportsList));
    }

}
