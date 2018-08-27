package Selenium;

import java.io.File;

public class ClassGlobals extends WebDriverSetup{

    //This is where we are going to be running our tests
    public static String testEnvironment = "http://www.facebook.com"; //Change the Test Environment Here

    //This is where the selenium hub is located.
    public static String hubUrl = "http://192.168.0.60:4445/wd/hub";      //Brad

    //Enter the DEV NO. here
    public static String devNo = "DEV-1111";

    //Enter the results file location here
    public static String fileLocation = "D:\\My Document\\Test Results\\" + devNo + "\\";

    //This is the time that test started
    public static long startTime = System.nanoTime();

}
