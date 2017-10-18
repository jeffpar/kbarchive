---
layout: page
title: "Q173513: BUG: Open/Close CRecordset Repeatedly Results in AV"
permalink: kb/173/Q173513/
---

## Q173513: BUG: Open/Close CRecordset Repeatedly Results in AV

	Article: Q173513
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4797 (NT: ODBC30)
	
	SYMPTOMS
	========
	
	An ODBC application may get an access violation (AV) using the ODBC cursor
	library (Odbccr32.dll) if both of the following conditions are true:
	
	- It creates more than one CRecordset objects.
	
	  -and-
	
	- The following operations are done repeatedly on the CRecordset objects:
	  Open, MoveLast or Requery and Close.
	
	The access violation error happens when the application tries to use the Close
	method of CRecordset or invoke the SQLFreeStmt ODBC function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Open Database Connectivity
	version 3.0. This problem has been corrected in Open Database Connectivity
	version 3.5.
	
	
	Additional query words: gpf general protection fault
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
