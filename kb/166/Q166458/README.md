---
layout: page
title: "Q166458: BUG: &quot;One-time Only&quot; Tracing Option Does Not Stop Automatically"
permalink: /kb/166/Q166458/
---

## Q166458: BUG: &quot;One-time Only&quot; Tracing Option Does Not Stop Automatically

	Article: Q166458
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming kbusage
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4559 (odbc3)
	
	SYMPTOMS
	========
	
	One of the ODBC Driver Manager 3.0 tracing options, One-time Only, does not
	automatically stop tracing after the first traced ODBC application is
	disconnected from the database or shut down. The ODBC tracing utility keeps
	tracing for any subsequent ODBC applications.
	
	WORKAROUND
	==========
	
	After the traced ODBC application stops, the button in the ODBC Administrator
	changes from Stop Tracing Now to Start Tracing Now, and the option changes from
	One-time Only to Don't Trace under the When to Trace group.
	
	You need to click Start Tracing Now and click the Stop Tracing Now button again
	to actually stop the tracing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Open Database
	Connectivity version 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: viper
	
	======================================================================
	Keywords          : kbprogramming kbusage 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
