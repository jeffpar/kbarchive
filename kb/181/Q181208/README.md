---
layout: page
title: "Q181208: FP98: How to Return Records From a Query as a Hyperlink"
permalink: /kb/181/Q181208/
---

## Q181208: FP98: How to Return Records From a Query as a Hyperlink

	Article: Q181208
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to return the results from a query as a hyperlink
	using FrontPage 98 and Active Server Pages (ASP).
	
	MORE INFORMATION
	================
	
	Before you can use the ASP features in FrontPage, you must install the
	components listed in the following Microsoft Knowledge Base article:
	
	  Q312638 What You Need to Use Active Server Pages (ASP) in FrontPage
	
	Querying Information from Microsoft Access Database Using ASP
	-------------------------------------------------------------
	
	To format results of a query as a hyperlink, follow these steps:
	
	1. Start Microsoft Access 97 and follow these steps:
	
	  a. In the Microsoft Access dialog box, click Blank Database and click OK.
	
	  b. In the File name box, type Asplink.mdb and click Create.
	
	  c. Click the Tables tab. Click New.
	
	  d. Click Design View and click OK.
	
	  e. In the Field Name box, type Hyperlink.
	
	  f. On the View menu, click Datasheet View.
	
	  g. Click Yes, name the table Hyperlink, and then click OK.
	
	  h. If you are asked to create a primary key, click Yes.
	
	  i. In the Hyperlink box, type the following record into the database
	
	  <a href="hyperlink">TextToDisplay</a>
	
	     where "hyperlink" is the URL this record will link to and TextToDisplay is
	     the display text for the record. For example, if you are want to link to
	     the Microsoft Home Page, you can type the following:
	
	  <a href="http://www.microsoft.com">Microsoft</a>
	
	  j. On the File menu, click Exit.
	
	2. Start FrontPage Explorer and create a new Web.
	
	  a. On the File menu, point to New, and click FrontPage Web.
	
	  b. In Step 1, click One Page Web.
	
	  c. In Step 2, click Change.
	
	  d. In the "Please specify a location of the New FrontPage Web" box, type the
	     following:
	
	  http://localhost/ASPLink
	
	  e. In the "Choose a title for your FrontPage Web" box, type "ASPLinks"
	     (without the quotation marks) .
	
	  f. Click OK twice.
	
	3. On the View menu, click Folders.
	
	4. Import the Microsoft Access 97 database file into the current FrontPage web.
	
	  a. On the File menu, click Import.
	
	  b. Click Add file.
	
	  c. Click Browse, select the file you created in step 1, and click Open.
	
	  d. Click OK.
	
	5. Create an executable folder by following these steps:
	
	  a. On the File Menu, point to New, and click Folder.
	
	  b. Name the folder "ASP" (without the quotation marks) and press ENTER.
	
	  c. Right-click the ASP folder and click Properties on the menu that appears.
	
	  d. Click to select the "Allow scripts or programs to be run" check box and
	     click OK.
	
	6. Create a system Data Source Name (DSN).
	
	  a. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  b. Double-click the 32-bit ODBC icon (Windows 95) or the ODBC icon (Windows
	     NT).
	
	  c. Click the System DSN tab.
	
	  d. Click Add.
	
	  e. Click "Microsoft Access Driver (*.mdb)" and click Finish.
	
	  f. In the Data Source Name box, type "Asplink" (without the quotation marks).
	     Note that the DSN name should not include any spaces.
	
	  g. Click Select.
	
	  h. Select the database file you created in step 1. By default, the file will
	     be located in one of the following IIS Web server locations:
	
	      - Microsoft Personal Web Server for Windows 95:
	
	  C:\Webshare\Wwwroot\Asplinks\Asplink.mdb
	
	      - Microsoft Internet Information Server for Windows NT Server:
	
	  C:\InetPub\Wwwroot\Asplinks\Asplink.mdb
	
	      - Microsoft Peer Web Services for Windows NT Workstation:
	
	  C:\InetPub\Wwwroot\Asplinks\Asplink.mdb
	
	      - Microsoft Windows NT 4.0 Option Pack
	
	  C:\InetPub\Wwwroot\Asplinks\Asplink.mdb
	
	  i. Click OK three times.
	
	7. In FrontPage Editor, create the ASP page.
	
	  a. On the File menu, click New, and then click the Page tab.
	
	  b. Double-click Normal Page.
	
	  c. On the Insert menu, point to Database, and click Database Region Wizard.
	
	  d. In the ODBC Data Source Name (DSN) box, type "ASPlink" (without the
	     quotation marks) and click Next.
	
	  e. In the "Enter the SQL string for the query" box, type the following SQL
	     statement:
	
	  SELECT * FROM Hyperlink
	
	  f. Click Next.
	
	  g. Click Add Field.
	
	  h. In the Add Field dialog box, type "Hyperlink" (without the quotation
	     marks) and click OK.
	
	  i. Click Finish.
	
	  j. Click OK.
	
	  k. On the File menu, click Save.
	
	  l. In the Save As dialog box, select the ASP folder. In the File name box,
	     type "hyperlink.asp" (without the quotation marks) and click Save.
	
	8. Start your Web browser, type the following URL in the address box and then
	  press ENTER:
	
	  http://localhost/asplink/asp/hyperlink.asp
	
	
	For more information about Active Server Pages and FrontPage, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q174015 FP98: How to Create Active Server Pages in FrontPage 98
	
	  Q175770 FP98: How to Post Information to a Database Using ASP
	
	  Q175771 FP98: How to Display Contents of a Database Using ASP
	
	Additional query words: 98 asp iis fpodbc
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
