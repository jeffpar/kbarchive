---
layout: page
title: "Q161155: FP97: How to Make a Web Page Display Data from a Database"
permalink: /kb/161/Q161155/
---

## Q161155: FP97: How to Make a Web Page Display Data from a Database

	Article: Q161155
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FrontPage 97 has a built-in Internet Database Connector Wizard which, when used
	with the Database Results Page template, can create database queries that will
	function with the Microsoft Personal Web Server, Microsoft Peer Web Services, or
	Microsoft Internet Information Server. This article describes how to get started
	using the Internet Database Connector and where to get more information about
	it.
	
	NOTE: FrontPage 97 will not record Structured Query Language (SQL) or show you
	the table structure of the database you are querying. The Internet Database
	Connector Wizard will write the proper file for you, but you will need to know
	the SQL and the table structure needed to reach your data.
	
	MORE INFORMATION
	================
	
	To start using the Internet Database Connector, use the following steps:
	
	1. Make sure you have all of the following components:
	   - Microsoft Personal Web Server, Microsoft Peer Web Services, or Microsoft
	     Internet Information Server.
	
	   - An ODBC Driver for your database management system.
	
	   - A database.
	
	2. Create a system data source name using your ODBC Driver. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q161172 ACC97: How to Use IDC Files to Query a Secure MS Access Database
	
	
	1. Do the following:
	  a. On the File menu, click New.
	
	  b. In the Template Or Wizard list, select the Database Results template and
	     then click OK.
	
	     -or-
	
	     On the Edit menu, point to Database, and then click the command you want.
	
	2. On the File menu, click New.
	
	3. In the Template Or Wizard list, select the Database Connector Wizard, and
	  then click OK.
	
	4. In the ODBC Data Source box, type the name of your data source. Type a user
	  name and password, if desired. In the Query Results Template box, type the
	  file name of the file you created in step 3. Click Next.
	
	5. Enter the SQL statement you want, and then click next.
	
	6. In the Default Parameters box, specify the parameters and values you want,
	  and then click Finish.
	
	7. In the Current Web dialog box, in the Save As box, type they file name you
	  want, using an .idc file extension. Select a folder in your Web where
	  executable files can be stored. Click OK.
	
	To open the IDC file from a form, specify the Internet Database Connector as the
	form handler and the .idc file you created in step 9. You can also create a
	hyperlink on a Web page that links to the .idc file.
	
	For a full step-by-step, Web-based tutorial on creating Internet Database
	Connector files, see the Internet Database Connector Example Web at the
	following Microsoft World Wide Web site:
	
	  http://support.microsoft.com/support/Frontpage/idc/idcwiz.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
