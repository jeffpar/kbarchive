---
layout: page
title: "Q148865: PRB: Can't Access Stored Procedures in Visual FoxPro Database"
permalink: /kb/148/Q148865/
---

## Q148865: PRB: Can't Access Stored Procedures in Visual FoxPro Database

{% raw %}

	Article: Q148865
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
	
	From MSQuery version 2.0, if you connect to a Visual FoxPro database that
	contains stored procedures, the Procedures button of the Execute SQL dialog box
	is disabled. In particular, if you set up a data source to the Tastrade
	database, the Procedures button is disabled although the Tastrade database
	contains stored procedures. You were expecting this button to be enabled because
	the database contains stored procedures.
	
	CAUSE
	=====
	
	The Procedure button in the Execute SQL dialog of MSQuery calls the
	SQLprocedures function. This function is not supported by the Visual FoxPro ODBC
	driver because Visual FoxPro stored procedures cannot be executed outside of a
	trigger. Therefore, the Procedures button in the Execute SQL dialog box is
	disabled.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a data source to the Tastrade database by following these steps:
	
	  a. Start the ODBC Driver Manager.
	
	  b. Click the Add button to add a driver.
	
	  c. In the list of drivers, select the Microsoft Visual FoxPro Driver.
	
	  d. In the data source dialog box, click the Visual FoxPro Database (.dbc) as
	     the database type.
	
	  e. Select Tastrade.dbc that is located in the Samples\Mainsamp\Data
	     directory.
	
	2. Start MSQuery 2.0.
	
	3. On the File menu, click Execute SQL.
	
	4. Click the Data Source button, and select the Tastrade data source.
	
	The Procedures button in the Execute SQL dialog box is disabled.
	
	Additional query words: 1.00 VFoxWin 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
