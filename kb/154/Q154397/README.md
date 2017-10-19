---
layout: page
title: "Q154397: ADT/ODE: How to Modify RefreshTableLinks Module in Solutions.mdb"
permalink: /kb/154/Q154397/
---

## Q154397: ADT/ODE: How to Modify RefreshTableLinks Module in Solutions.mdb

	Article: Q154397
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0; :97
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	The RefreshTableLinks module in the Developer Solutions sample application
	(Solutions.mdb) demonstrates a method of updating the connection information for
	linked (attached) tables in an application that uses multiple databases.
	
	This article describes how you can modify the functions used in the
	modRefreshTableLinks module (or RefreshTableLinks module in Solutions.mdb for
	Microsoft Access 7.0) to work in a run-time environment.
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to your version of the "Building Applications with Microsoft
	Access" manual.
	
	MORE INFORMATION
	================
	
	To modify the functions used in the modRefreshTableLinks module to work in a
	run-time environment, follow these steps while running the retail version of
	Microsoft Access. Each of these steps is described in detail in the following
	sections.
	
	1. Import the modRefreshTableLinks (or RefreshTableLinks in Solutions.mdb for
	  Microsoft Access 7.0) module from Solutions.mdb.
	
	2. Modify the sample CheckLinks() function.
	
	3. Modify the sample FindNorthwind() function.
	
	4. Modify the sample RelinkTables() function.
	
	5. Call the ReLinkTables() function in your application's AutoExec macro.
	
	Step 1
	------
	
	Import the modRefreshTableLinks Module from Solutions.mdb:
	
	1. With your database open, on the File menu, point to Get External Data, and
	  then click Import.
	
	2. In the Look In box, select the Samples folder under your Microsoft Access
	  folder.
	
	3. In the File Name box, select Solutions.mdb, and then click Import.
	
	4. In the Import Objects dialog box, click the Modules tab, select
	  modRefreshTableLinks, and then click OK.
	
	Step 2
	------
	
	Follow these steps to modify the CheckLinks() function to test if the path of
	your current attachments are correct:
	
	1. Search the CheckLinks() function for the following line:
	
	  Set RST=dbs.OpenRecordset("Products")
	
	2. Replace "Products" with the name of a linked table in your application.mdb:
	
	  Set RST=dbs.OpenRecordset("<your table name>")
	
	Step 3
	------
	
	Follow these steps to modify the FindNorthwind() function to display the Open
	File dialog box for the user to locate your back-end database. The function
	returns the full path to the back-end database:
	
	1. Find the following line in the FindNorthwind() function:
	
	  msaof.strDialogTitle = "Where Is Northwind?"
	
	2. Replace "Northwind" with the name of your back-end database:
	
	  msaof.strDialogTitle = "Where Is <your database name>?"
	
	Step 4
	------
	
	Follow these steps to modify the RelinkTables() function to look for a table in
	your linked database and replace references to Northwind.mdb and Solutions.mdb
	with references to your application:
	
	1. Search the RelinkTables() function for one of the following lines:
	
	  Const conAppTitle = "Developer Solutions"
	
	-or-
	
	  Const conAppTitle = "Solutions"
	
	2. Replace "Developer Solutions" or "Solutions" with the name of your
	  application database:
	
	  Const conAppTitle = "<your application database>"
	
	3. Search for and replace all references to Northwind.mdb, Solutions.mdb, and
	  "Developer Solutions or Solutions." Replace these references with your
	  database names.
	
	Step 5
	------
	
	Call the ReLinkTables() Function from your SwitchBoard's Load event or in your
	application's AutoExec Macro.
	
	In the Developer Solutions sample application, the ReLinkTables() function is
	called from the DeveloperSolutions (or Solutions in Microsoft Access 7.0) form's
	Load event. This function determines whether the table attachments are valid. If
	the attachments are not valid, the function prompts the user for the location of
	the linked tables. The ReLinkTables() function could also be called from your
	AutoExec macro. The command you would add to the Switchboard's Load event is:
	
	  If CheckLinks = False Then RelinkTables
	
	The AutoExec macro entries are as follows:
	
	  Condition                         Action
	  -------------------------------------------
	  NOT CheckLinks()                  RunCode
	
	  Action Arguments
	  -----------------------------
	  RunCode
	  Function Name: RelinkTables()
	
	Additional query words: attach adt refresh table
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0; :97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
