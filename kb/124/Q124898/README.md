---
layout: page
title: "Q124898: FIX: SQLAllocConnect in Console App. Causes Access Violation"
permalink: /kb/124/Q124898/
---

## Q124898: FIX: SQLAllocConnect in Console App. Causes Access Violation

{% raw %}

	Article: Q124898
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK: 2833 (2.00.1512)
	
	SYMPTOMS
	========
	
	An access violation occurs in NTDLL when an ODBC console application calls
	SQLAllocConnect() for the second time in the program. The call stack shows
	NTDLL, KERNEL32.DLL, and ODBC32.DLL. The access violations will not occur with a
	non-console application.
	
	NOTE: This bug is limited only to Microsoft Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Driver Manager version
	2.00.1512. This problem has been corrected in ODBC Driver Manager version 2.1.
	For more information, contact your primary support provider.
	
	Additional query words: 2.00.1512 ODBC Driver Manager Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
