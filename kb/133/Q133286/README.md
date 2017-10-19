---
layout: page
title: "Q133286: HOWTO: Use Microsoft Access Data in Visual FoxPro"
permalink: /kb/133/Q133286/
---

## Q133286: HOWTO: Use Microsoft Access Data in Visual FoxPro

	Article: Q133286
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDatabase kbvfp300 kbvfp500 kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Data from a Microsoft Access database can be used in Visual FoxPro by creating
	an ODBC data source and a remote view. The ODBC data source must be created
	using the ODBC Administrator, and the remote view can be created interactively
	using the View Designer or programmatically using the CREATE SQL VIEW command.
	
	MORE INFORMATION
	================
	
	Steps to Create ODBC Data Source
	--------------------------------
	
	To use data from a Microsoft Access database, an ODBC data source must first be
	created in the ODBC manager. Depending on the operating system being used, the
	ODBC manager is located in either the Control Panel or the Microsoft Visual
	FoxPro Program Manager group.
	
	1. Open the ODBC Administrator.
	
	2. Click Add in the Data Sources dialog box.
	
	3. Select 'Microsoft Access Driver (*.mdb)' from the list of installed ODBC
	  drivers.
	
	4. Enter AccessTest for the Data Source Name.
	
	5. Click the Select button, and locate the Access database to be used.
	
	6. Click OK, and close the ODBC Administrator.
	
	Steps to Create a Remote View of the Data Interactively
	-------------------------------------------------------
	
	Once a data source has been created for the Microsoft Access database, a remote
	view can be created using the View Designer. Make sure a Visual FoxPro database
	is open, and follow these steps:
	
	1. On the File menu, click New.
	
	2. Choose Remote View, and click the New File button.
	
	3. Click the Available Datasources button, and then choose the AccessTest data
	  source from the list. The View Designer display a list of the available
	  tables in the Microsoft Access database.
	
	4. Choose the desired table, and click OK.
	
	5. Set up the view as desired.
	
	6. On the Query menu, click Run Query.
	
	The results should be displayed in a Browse window.
	
	Steps to Create a Remote View of the Data Programmatically
	----------------------------------------------------------
	
	Alternatively, the remote view can be created programmatically by using the
	CREATE SQL VIEW command. It is assumed that there is an ODBC data source named
	AccessTest and a table in the Microsoft Access database named Customers.
	
	Type the following commands in the Command window or in a new program:
	
	     CREATE SQL VIEW Access_View REMOTE ;
	        CONNECTION AccessTest ;
	        AS SELECT * FROM Customers
	     BROWSE
	
	The results should be displayed in a Browse window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDatabase kbvfp300 kbvfp500 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
