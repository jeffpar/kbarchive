---
layout: page
title: "Q133015: BUG: Use of Apostrophes in DSN Setup Not Allowed"
permalink: /kb/133/Q133015/
---

## Q133015: BUG: Use of Apostrophes in DSN Setup Not Allowed

	Article: Q133015
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 2242 (2.00.2317)
	
	SYMPTOMS
	========
	
	When you use an apostrophe in the data source name (DSN) for a DSN definition
	with an ODBC Desktop Database Driver version 2.0 driver, that DSN cannot be
	accessed later using the Setup button of the ODBC Administrator. This type of
	DSN also causes the ODBC Administrator to return an incorrect error message when
	you try to delete the DSN with the Delete button in the ODBC Administrator.
	
	The ODBC Administrator returns the message:
	
	  The ODBC driver could not entirely delete the data source. Do you want to
	  remove the entry anyway?
	
	WORKAROUND
	==========
	
	Do not use apostrophes in data source names for the ODBC Desktop Database
	Drivers version 2.0. If you want to use apostrophes in a DSN, you can do so and
	use the DSN with ODBC, but it cannot be modified later using the Setup button of
	the ODBC Administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Desktop Database Drivers
	version 2.00.2317. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
