---
layout: page
title: "Q278613: FP: Querying a Database Using Multiple Criteria, Drop-Down Menu"
permalink: /kb/278/Q278613/
---

## Q278613: FP: Querying a Database Using Multiple Criteria, Drop-Down Menu

{% raw %}

	Article: Q278613
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a database results page in Microsoft
	FrontPage that queries a database by using multiple criteria.
	
	MORE INFORMATION
	================
	
	Before you can use the ASP features in FrontPage, you must install the
	components listed in the following Microsoft Knowledge Base article:
	
	  Q312638 What You Need to Use Active Server Pages (ASP) in FrontPage
	
	Getting started
	---------------
	
	Create a new Web using the appropriate steps for your version of FrontPage:
	
	- In FrontPage 2000:
	
	  1. On the File menu, point to New, and then click Web.
	
	  2. In the New dialog box, click Empty Web.
	
	  3. In the "Specify the location of the new Web" box, type
	     "http://localhost/aspMultiSample" (without the quotation marks). Or, type
	     the address of the server that has the FrontPage Server Extensions
	     installed and supports Active Server Pages (ASP).
	
	  4. Click OK.
	
	- In FrontPage 2002:
	
	  1. On the File menu, point to New, and then click Page or Web.
	
	  2. In the New Page or Web task pane, click Web Site Templates.
	
	  3. In the Web Site Templates dialog box, click Empty Web.
	
	  4. In the "Specify the location of the new Web" box, type
	     "http://localhost/aspMultiSample" (without the quotation marks). Or, type
	     the address of the server that has the FrontPage Server Extensions
	     installed and supports ASP.
	
	  5. Click OK.
	
	Creating the Database Results Page
	----------------------------------
	
	1. Insert a new page by clicking the New Page button on the Standard toolbar.
	
	2. On the Insert menu, point to Database, and then click Results.
	
	3. In the first step of the Database Results Wizard, click "Use a sample
	  database connection (Northwind)" and click Next.
	
	4. In the Record Source list, click Employees. Click Next.
	
	5. Click Edit List.
	
	6. In the Displayed Fields dialog box, remove all fields except City and
	  Country. Click OK.
	
	7. Click More Options.
	
	8. In the More Options dialog box, click Criteria.
	
	9. In the Criteria dialog box, click Add. In the Field Name list, click City. In
	  the Comparison list, click Equals. In the Value box, type "City" (without the
	  quotation marks). In the And/Or list, click And. Click OK.
	
	10. Click Add. In the Field Name list, click Country. In the Comparison list,
	  click Equals. In the Value box, type "Country" (without the quotation
	  marks). In the And/Or list, click And. Click OK.
	
	11. In the Criteria dialog box, click OK.
	
	12. In the More Options dialog box, click OK.
	
	13. Click Next.
	
	14. In the "Choose formatting options for the records returned by the query"
	  list, click "Table - one record per row". Click to select all of the check
	  boxes and then click Next.
	
	15. In step five of the wizard, click "Split records into groups", click to
	  select the Add search form check box, and then click Finish.
	
	16. Save the page by clicking Save on the File menu. Name the file
	  Dataresults.asp.
	
	Adding Drop-Down Menus
	----------------------
	
	1. Add a drop-down menu for the City:
	
	  a. In the search form, click the City text box and press DELETE.
	
	  b. With your cursor in the table cell next to City, point to Database on the
	     Insert menu and then click Results.
	
	  c. In the "Use an existing database connection" list, click Sample, and then
	     click Next.
	
	  d. In the Record Source list, click Employees, and then click Next.
	
	  e. Click Edit List.
	
	  f. In the list of fields, remove all of the fields except City and click OK.
	
	  g. Click Next.
	
	  h. In the "Choose formatting options for the records return by the query"
	     list, click Drop-Down List - one record per item.
	
	     City should appear in both the "Display values from this field" and the
	     "Submit values from this field" boxes.
	
	  i. Click Next.
	
	  j. Click "Display all records together" and click Finish.
	
	2. Add the drop-down menu for the Country:
	
	  a. In the search form, click the Country text box and press DELETE.
	
	  b. With your cursor in the table cell next to Country, point to Database on
	     the Insert menu and then click Results.
	
	  c. In the "Use an existing database connection" list, click Sample, and then
	     click Next.
	
	  d. In the Record Source list, click Employees, and then click Next.
	
	  e. Click Edit List.
	
	  f. In the list of fields, remove all of the fields except Country and click
	     OK.
	
	  g. Click Next.
	
	  h. In the "Choose formatting options for the records returned by the query"
	     list, click Drop-Down List - one record per item.
	
	     Country should appear in both the "Display values from this field" and the
	     "Submit values from this field" boxes.
	
	  i. Click Next.
	
	  j. Click "Display all records together" and click Finish.
	
	3. Save your page.
	
	Eliminate Duplicate Entries
	---------------------------
	
	1. Viewing the duplicates:
	
	  a. On the File menu, click Preview in Browser.
	
	  b. If you are prompted to select a browser, select your browser and then
	     click Preview.
	
	  c. When your browser opens, click the City or Country drop-down list.
	
	     Notice that duplicate entries appear in the City and Country drop-down
	     lists.
	
	  d. Close the browser and switch back to FrontPage.
	
	2. Filter out duplicates for the City:
	
	  a. Double-click the Database Results region for the City drop-down list.
	
	     The Database Results Wizard starts.
	
	  b. In the "Use existing database connection" list, click Sample, and then
	     click Next.
	
	  c. Click Next.
	
	  d. In the Record Source list, click Employees.
	
	  e. Select the Custom Query option.
	
	  f. Click Edit.
	
	  g. In the SQL statement, delete the asterisk (*) and then type "DISTINCT
	     CITY" (without the quotation marks). Click OK.
	
	  h. Click Next until you reach the end of the wizard and then click Finish.
	
	3. Filter out duplicates for the Country:
	
	  a. Double-click the Database Results region for the Country drop-down list to
	     start the Database Results Wizard.
	
	  b. In the "Use existing database connection" list, click Sample, and click
	     Next.
	
	  c. Click Next.
	
	  d. In the Record Source list, click Employees.
	
	  e. Select the Custom Query option.
	
	  f. Click Edit.
	
	  g. In the SQL statement, delete the asterisk (*) and then type "DISTINCT
	     COUNTRY" (without the quotation marks). Click OK.
	
	  h. Click Next until you reach the end of the wizard and then click Finish.
	
	4. Save your page and preview it in your browser.
	
	  Notice that the duplicate entries no longer appear in the City and Country
	  drop down lists.
	
	REFERENCES
	==========
	
	For additional information about Windows Millennium (Me) and Personal Web
	Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q266456 Personal Web Server Is Not Included with Windows Me
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
