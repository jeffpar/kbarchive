---
layout: page
title: "Q139374: BUG: Incorrect Error Message: [ODBC Driver pack 2.0]..."
permalink: kb/139/Q139374/
---

## Q139374: BUG: Incorrect Error Message: [ODBC Driver pack 2.0]...

	Article: Q139374
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	QJET BUG#: 2388 (3.00)
	
	SYMPTOMS
	========
	
	When a Visual C++ (VC++) version 2.x/4.x Microsoft Foundation Class (MFC)
	application runs in debug mode with "Database Tracing" on, the following
	messages appear in the output window:
	
	  Warning: ODBC Success With Info, Driver's SQLSetConnectOption failed
	  State:IM006,Native:0,Origin:[Microsoft][ODBC Driver Manager]
	
	  Driver not capable
	  State:S1C00,Native:84,Origin:[Microsoft][ODBC Driver pack 2.0 Driver]
	
	CAUSE
	=====
	
	There is a bug in the Microsoft Desktop Database Drivers Pack 3.0. The driver
	generates a message with "ODBC Driver Pack 2.0 Driver" in it rather than "ODBC
	Driver pack 3.0 Driver."
	
	WORKAROUND
	==========
	
	There is no workaround. You can simply ignore it. Use the 32-bit ODBC
	Administrator to make sure you are using the version 3.x desktop database
	drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Database Driver Pack 3.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00.2127 Visual C++ TRACE DEBUG MODE MFC
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	
	=============================================================================
	
