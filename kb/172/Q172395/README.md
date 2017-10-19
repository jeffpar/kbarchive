---
layout: page
title: "Q172395: PRB: Intl Number Settings Cause Upsizing Wizard Failure"
permalink: /kb/172/Q172395/
---

## Q172395: PRB: Intl Number Settings Cause Upsizing Wizard Failure

	Article: Q172395
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	International settings in SET POINT TO and SET SEPARATOR TO cause the following
	error to occur in the SQL Server Upsizing Wizard:
	
	  To upsize to SQL Server 6.x, please install a SQL Server ODBC driver version
	  2.05 or later
	
	This error does not occur with the Upsizing wizard that shipped with Visual
	FoxPro 5.0.
	
	RESOLUTION
	==========
	
	Before running the SQL Server Upsizing Wizard, change the number settings using
	the following commands:
	
	     SET POINT TO "."
	     SET SEPARATOR TO ","
	
	-Or-
	
	If the Regional Settings of Microsoft Visual FoxPro are set to "Use System
	Settings," change the settings in the Number tab of the Microsoft Windows 95 or
	Windows NT Regional Settings Control Panel to match (without the quotes) the
	following:
	
	     Decimal symbol: "."
	     Digit grouping symbol: ","
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following program from a program file or the Command window:
	
	        OPEN DATABASE HOME() + "SAMPLES\DATA\TESTDATA"
	        SET POINT TO ","
	        SET SEPARATOR TO "."
	        DO HOME() + "Wizards\WZUpsize.app"
	
	  The Upsizing Wizard for SQL Server appears.
	
	2. Click the database to upsize, then click Next.
	
	3. Click the appropriate data source and click Next. The SQL Server Login \
	  dialog box appears.
	
	4. Enter the appropriate User ID and Password then click OK. The following error
	  appears:
	
	  To upsize to SQL Server 6.x, please install a SQL Server ODBC driver version
	  2.05 or later
	
	This also happens if the Regional Settings in the Control Panel have the same
	settings for Point and Separator as listed above in Step 1.
	
	If using the system Regional Settings, as in the second part of the Resolution
	Section above, the [Tools][Options][Regional] settings of Microsoft Visual
	FoxPro should have the "Use System Settings" option checked.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Developer's Guide, Chapter 20, "Upsizing Visual FoxPro
	Databases"
	
	Additional query words: ODBC SQL upsize wizard
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500a
	Version           : WINDOWS:2.5,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
