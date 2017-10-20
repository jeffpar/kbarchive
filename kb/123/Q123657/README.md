---
layout: page
title: "Q123657: BUG: 16-bit ODBC Driver Setup Fails Due to Missing ODBC32.DLL"
permalink: /kb/123/Q123657/
---

## Q123657: BUG: 16-bit ODBC Driver Setup Fails Due to Missing ODBC32.DLL

{% raw %}

	Article: Q123657
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	2.00.1912
	
	WINDOWS
	
	kbbug2.00.1912 kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# ADDON_BUGS: 10688 (2.00.1912)
	
	SYMPTOMS
	========
	
	On a machine with the components from Microsoft Windows 32-bit Software
	Development Kit (WIN32S) installed, the version 4.21a ODBC/SQL Server 16- bit
	driver installation will fail because the 32-bit Thunking Driver Manager is not
	present on the installation diskette but is indicated as one of the files to be
	installed in ODBC.INF. This needs to be included on the installation diskette
	for ODBC setup to properly complete.
	
	CAUSE
	=====
	
	The 32-bit Thunking Driver Manager needs to be included on the 4.21a ODBC
	installation diskette for ODBC setup to complete properly.
	
	WORKAROUND
	==========
	
	Obtain the 32-bit Thunking Driver Manager (ODBC32.DLL) from the ODBC Software
	Development Kit (SDK) version 2.01a available from the MSDN Level 2 CD and in
	the \ODBCSDK\REDIST6 directory of the installed SDK. Copy this ODBC32.DLL on to
	your installation diskette, and then run the ODBC installation again. This
	should allow the ODBC installation to complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC SQL Server driver
	version 2.00.1912, included with SQL Server version 4.21a. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: 4.21a 2.00.1912
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
