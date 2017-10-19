---
layout: page
title: "Q323803: BUG: Issues Related to Using ODBC Driver for DB2 with File DSNs"
permalink: /kb/323/Q323803/
---

## Q323803: BUG: Issues Related to Using ODBC Driver for DB2 with File DSNs

	Article: Q323803
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following issues have been identified when using the Microsoft ODBC Driver
	for DB2 with file data source names (DSNs):
	
	- An ODBC file DSN that is configured to use the Microsoft ODBC Driver for DB2
	  does not retain the DSN that is specified when the DSN is created. The Data
	  Source Name value is blank when you use the ODBC Data Source Administrator to
	  configure the file DSN.
	
	- The Connect button that is available in the ODBC Driver for DB2
	  Authentication dialog box when you configure the file DSN does not try to
	  make an ODBC connection to the target database that is specified in the DSN.
	
	CAUSE
	=====
	
	- The ODBC Driver for DB2 does not correctly parse the file DSN path, which
	  results in the failure to retain the Data Source Name.
	
	- The ODBC Driver for DB2 was not designed to try to make an ODBC connection
	  when you click Connect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
