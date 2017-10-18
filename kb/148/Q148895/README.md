---
layout: page
title: "Q148895: PRB: Cannot Access VFP Parameterized Views Remotely"
permalink: kb/148/Q148895/
---

## Q148895: PRB: Cannot Access VFP Parameterized Views Remotely

	Article: Q148895
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Visual FoxPro database (.DBC) using the Visual FoxPro ODBC
	driver, it does not display remote or parameterized views. In particular, if you
	open a Visual FoxPro .DBC from Microsoft Access 7.0, some views that belong to
	the database are not listed in the Link Tables dialog.
	
	CAUSE
	=====
	
	The data sets that are not listed are parameterized views and remote views. The
	SQLTables() ODBC function of the Visual FoxPro ODBC driver returns the list of
	table names stored in a specific data source. The result set returned by this
	funcion does not include remote or parameterized views contained in a .DBC.
	
	Visual FoxPro local parameterized views require that a variable be initialized
	and passed to the view before it is opened. If this variable is not initialized,
	an error occurs. The ODBC driver does not display a dialog that would allow you
	to make a variable assignment to initialize the parameter. Therefore, to prevent
	an error, parameterized views are not accessible through native SQL Pass Through
	functions and the interface. You can, however, open a parameterized view from a
	trigger by initializing the parameter in the trigger code before opening the
	view.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information about the SQLTables() ODBC function, refer to the Microsoft
	"ODBC 2.0 Programmer's Reference and SDK Guide," pages 511-515.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the Visual FoxPro ODBC Driver, create a data source to the Visual
	  FoxPro tastrade database, located in the Samples\Mainsamp\Data directory.
	
	  a. Start the ODBC Driver Manager.
	
	  b. Click the Add button to add a driver.
	
	  c. In the list of drivers, select the Microsoft Visual FoxPro Driver.
	
	  d. In the data source dialog, click the Visual FoxPro Database (.DBC) as the
	     database type.
	
	  e. Select Tastrade.dbc, located in the Samples\Mainsamp\Data directory.
	
	2. Start Microsoft Access version 7.0 and create a new database.
	
	3. Right click and select "Link Tables" from the shortcut menu.
	
	4. Select ODBC Databases in the "Files of type" dropdown.
	
	5. Click the Data source to Tastrade.dbc.
	
	The employee listing view is not listed in the Link Tables dialog box because it
	is a parameterized view and is not accessible via the interface. When you open
	and modify the tastrade database in Visual FoxPro, the Employee listing view is
	available.
	
	Additional query words: 1.00 vFoxwin 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
