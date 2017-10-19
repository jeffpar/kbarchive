---
layout: page
title: "Q169500: HOWTO: Call Driver Specific Functions in a Remote View"
permalink: /kb/169/Q169500/
---

## Q169500: HOWTO: Call Driver Specific Functions in a Remote View

	Article: Q169500
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp300 kbvfp500
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Calling driver-specific functions in a remote view requires special syntax when
	used in the filter expression of a remote view.
	
	MORE INFORMATION
	================
	
	When calling any driver-specific functions in the filter of a remote view, you
	must use the following syntax:
	
	     {fn FUNCTIONNAME()}
	
	If the correct syntax is not used, then the following error is produced when
	returning from the expression builder and the expression is not returned:
	
	  Invalid Subscript Reference
	
	NOTE: In Microsoft Visual FoxPro 5.0(a), driver-specific functions are included
	in the Functions drop-downs and the correct syntax is pasted into the Expression
	edit box (for example, '{fn FUNCTIONNAME()}').
	
	In Microsoft Visual FoxPro 3.0b, the driver-specific functions return the
	incorrect syntax. The Expression Builder omits "{fn }" from the driver
	specific-functions.
	
	Example
	-------
	
	This example requires access to the Microsoft SQL Server sample database called
	"Pubs."
	
	Modify the following code to point to your Microsoft SQL Server, with appropriate
	user ID (UID) and password (PWD) specified:
	
	     CREATE DATABASE TESTSQL
	     CREATE CONNECTION TESTCONN CONNSTRING ;
	        "Driver=SQL Server;Server=MySQLServer;UID=sa;PWD=;DATABASE=PUBS"
	     CREATE SQL VIEW TESTVIEW REMOTE CONNECTION TESTCONN
	
	Running the above code will do the following:
	
	1. Create the database "TestSQL."
	
	2. Create a connection "TestConn."
	
	3. Create a View using the connection TestConn and display the Remote View
	  Designer.
	
	After running the above program perform the following steps:
	
	1. Add the Authors table and close the Add Table dialog box.
	
	2. On the Fields tab, include several fields from the table.
	
	3. Select the Filter tab.
	
	4. Drop down the list under Fields and select <Expression>.
	
	5. In the Expression edit box enter the following:
	
	        {fn SUBSTRING(AUTHORS.PHONE,1,1)}
	
	6. Click Verify and ensure that the expression is valid.
	
	7. Click OK.
	
	8. In the Criteria column, select "=" (without the quotation marks).
	
	9. In the Example column, type "9" (with the quotes).
	
	10. Run the view. One record will be returned from the Authors table in the Pubs
	  database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
