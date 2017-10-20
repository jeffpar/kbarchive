---
layout: page
title: "Q120045: BUG: Value of cbDSN in SQLConnect is Not Mapped Correctly"
permalink: /kb/120/Q120045/
---

## Q120045: BUG: Value of cbDSN in SQLConnect is Not Mapped Correctly

{% raw %}

	Article: Q120045
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK2: 2693 (2.0)
	
	SYMPTOMS
	========
	
	When connecting from a 16-bit application to a certain 32-bit driver in a
	Microsoft Windows NT environment, you may receive an error from the driver about
	incorrect parameter or argument value. This does not happen when SQLConnect is
	called from a 32-bit application to a 32-bit driver or from a 16-bit application
	to a 16-bit driver.
	
	For example, assume that the datasource name is "DsnName" with cbDSN=8. Then, the
	following calls show the behavior:
	
	     //Allocate environment handle
	        SQLAllocEnv(phenv);
	     //Allocate connection handle
	        SQLAllocConnect(henv,phdbc);
	     //Specify szDSN="DsnName" and cbDSN= length of ("DsnName")=8
	        SQLConnect(hdbc,"DsnName",8,szUID,cbUID,szAuthStr,cbAuthStr);
	
	In looking at the ODBC trace using 32-bit ODBC Spy, you will find that the value
	of cbDSN passed is not 8, but a large number (0x3a43).
	
	CAUSE
	=====
	
	When connecting from a 16-bit application to a 32-bit driver, the value of cbDSN
	in SQLConnect is not correctly passed and is mapped to a large value. However,
	the values of cbUID and cbAuthStr are passed correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Driver Manager version 2.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ODBC MSVC DM invalid 14915
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
