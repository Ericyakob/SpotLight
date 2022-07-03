package com.SpotLight.steps;

import com.SpotLight.pages.DashboardPage;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class VerifySportListFilter {
    DashboardPage dashboardPage=new DashboardPage();
    int global_NumberOfEachSportsList;
    @When("i count each {string}")
    public void i_count_each(String sportCategory) {
        global_NumberOfEachSportsList=dashboardPage.returnNumberOfEachSportsList(sportCategory);
    }
    @When("i select each {string} on dropdown list")
    public void i_select_each_on_dropdown_list(String sportCategory) {
        dashboardPage.selectEachSportCategory(sportCategory);
    }
    @Then("i compare sorted {string} with counted in previous step")
    public void i_compare_sorted_with_counted_in_previous_step(String sportCategory) {
        int ActualNumberOfSelectedSportCategory=dashboardPage.returnNumberOfEachSportsList(sportCategory);
        Assert.assertEquals(global_NumberOfEachSportsList,ActualNumberOfSelectedSportCategory);
    }

}
