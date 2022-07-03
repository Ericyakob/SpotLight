package com.SpotLight.steps;

import com.SpotLight.pages.DashboardPage;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class VerifySportListFilter {
    DashboardPage dashboardPage=new DashboardPage();
    int global_NumberOfEachSportsList;
    @Then("i should see all the {string}")
    public void i_should_see_all_the(String sportCategory) {
        global_NumberOfEachSportsList=dashboardPage.returnNumberOfEachSportsList(sportCategory);
    }

    @When("i select {string}")
    public void i_select(String sportCategory) {
         dashboardPage.selectEachSportCategory(sportCategory);

    }

    @Then("i should only see  Sport List for the selected {string}")
    public void i_should_only_see_Sport_List_for_the_selected(String sportCategory) {
        int ActualNumberOfSelectedSportCategory=dashboardPage.returnNumberOfEachSportsList(sportCategory);
        Assert.assertEquals(global_NumberOfEachSportsList,ActualNumberOfSelectedSportCategory);
    }

}
