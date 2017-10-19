---
layout: page
title: "Q171870: FIX: SQL_CUR_USE_IF_NEEDED Does Not Work with 2.0 Drivers"
permalink: /kb/171/Q171870/
---

## Q171870: FIX: SQL_CUR_USE_IF_NEEDED Does Not Work with 2.0 Drivers

	Article: Q171870
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4538 (odbc30)
	
	SYMPTOMS
	========
	
	If SQLSetConnectOption(SQL_ODBC_CURSORS, SQL_CUR_USE_IF_NEEDED) is set and you
	are using an ODBC 3.0 Driver Manager with a 2.X driver, the ODBC Cursor Library
	is not loaded. This causes applications that rely on the Cursor Library
	implementation of ExtendedFetch to fail.
	
	WORKAROUND
	==========
	
	To work around this problem, use SQLSetConnectOption(SQL_ODBC_CURSORS,
	SQL_CUR_USE_ODBC) to load the ODBC Cursor Library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity version 3.0. This problem has been corrected in U.S. Service Pack 1
	for Microsoft Open Database Connectivity, version 3.0. For more information,
	contact your primary support provider.
	
	Additional query words: SQLExtendedFetch Static
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
