package com.SpotLight.pages;
import com.SpotLight.utilities.BrowserUtils;
import com.SpotLight.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import java.util.List;

public abstract class BasePage {
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }
    @FindBy(xpath = "//*[@class='SliderNavDesktop_nextUpText__1vSKU']")
    public WebElement NextUpLabel;
    @FindBy(xpath = "(//*[@class='Select_select__24c5n'])[2]")
    public WebElement NextUpFilterDropDown;
    @FindBy(xpath = "//*[@id='truste-consent-button']")
    public WebElement AcceptCookiesButton;
    @FindBy(xpath = "//*[@class='CardHeader_sportName__zWD_4']")
    public List<WebElement> AllSportsList;

    public void verifyBasePage() {
        String expectedPageTitle = "Free Sports Picks, News & Experts Best Bets For Today's Games";
        String ActualPageTitle = Driver.get().getTitle();
        Assert.assertEquals(expectedPageTitle, ActualPageTitle);
        BrowserUtils.waitForVisibility(NextUpLabel,3);
/*
 verify the NextUpLabel
 */
        String ExpectedNextUpLabelText = "Next Up";
        String ActualNextUpLabelText = NextUpLabel.getText();
        Assert.assertEquals(ExpectedNextUpLabelText, ActualNextUpLabelText);
    }
    public void clickAcceptCookiesButtonIfPresent() {
        if (AcceptCookiesButton.isDisplayed()) {
            AcceptCookiesButton.click();
        }
    }
    public List<WebElement> returnAvailableSportsList() {
        Select SportListDropDown = new Select(NextUpFilterDropDown);
        List<WebElement> AvailableSportsList = SportListDropDown.getOptions();
        System.out.println(AvailableSportsList.size());
        return AvailableSportsList;
    }
    public int returnNumberOfEachSportsList(String SportCategory) {
        List<WebElement> EachSportCategory = Driver.get().findElements(By.xpath("//*[@class='CardHeader_sportName__zWD_4'][text()='" + SportCategory + "']"));
        int NumberOfEachSportCategory = EachSportCategory.size();
        return NumberOfEachSportCategory;
    }
    public void selectEachSportCategory(String SportCategory) {
        Select SportListDropDown = new Select(NextUpFilterDropDown);
        SportListDropDown.selectByVisibleText(SportCategory);
        BrowserUtils.waitFor(3);
    }
}


