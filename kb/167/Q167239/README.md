---
layout: page
title: "Q167239: PRB: Failing SQLExec() Breaks Connection with Oracle Server"
permalink: /kb/167/Q167239/
---

## Q167239: PRB: Failing SQLExec() Breaks Connection with Oracle Server

	Article: Q167239
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbinterop kbvfp kbvfp300 kbvfp300b kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Oracle 7.3 ODBC Driver (version 1.15.0301) provided by Oracle
	Corporation to connect to an Oracle server, if an SQLExec() call encounters an
	error, the connection to the server is no longer valid. Issuing subsequent
	SQLExec() calls after a previous command has failed results in the following
	error:
	
	  Connectivity error. [Oracle][ODBC Oracle Driver]Operation cancelled.
	
	RESOLUTION
	==========
	
	This problem occurs only with the Oracle 7.3 ODBC driver provided by Oracle
	Corporation. Using the Visigenic Oracle ODBC Driver (version 2.00.0000) or the
	Microsoft Oracle ODBC Driver (version 2.00.006325) works correctly. This problem
	does not occur in Visual FoxPro version 5.0 or 5.0a.
	
	NOTE: As of 12/9/98, Visigenic has been acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, Inc., query in the Microsoft
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ODBC data source using the Oracle 7.3 ODBC driver.
	
	2. Connect to this data source using the SQLConnect() function:
	
	        Handle=SQLConnect(<Oracle DSN>,<user id>,<password>)
	
	3. Send an invalid SQL statement to the Oracle server:
	
	        =SQLExec(Handle,"This is an invalid SQL command")
	
	4. Send a valid SQL statement to the Oracle server.
	
	  The SQLExec function returns a -1 indicating an error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp kbvfp300 kbvfp300b kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
