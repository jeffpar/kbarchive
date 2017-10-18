---
layout: page
title: "Q164250: PRB: FoxPro and Mac Lock with ODBC"
permalink: kb/164/Q164250/
---

## Q164250: PRB: FoxPro and Mac Lock with ODBC

	Article: Q164250
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When returning a result set of more than four records from SQL Server running on
	Windows NT 4.0 with an ODBC data source using the AppleTalk protocol, FoxPro for
	the Macintosh locks up.
	
	RESOLUTION
	==========
	
	Use the TCP/IP protocol for the data source if possible. It should be faster
	also.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The same code that locks up FoxPro when querying SQL Server when SQL Server is
	on a Windows NT 4.0 Server runs fine against SQL Server on a Windows NT 3.51
	Server.
	
	The following steps to reproduce the problem assume working knowledge of Visual
	FoxPro for Macintosh, setting up ODBC data sources on the Macintosh, and SQL
	Server running on Windows NT. Security considerations are ignored. See the
	administrator of the Windows NT computer for security information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up an ODBC data source on the Macintosh using the ODBC Setup PPC control
	  panel. Make sure the Network Library is set to AppleTalk and the default
	  Database Name is pubs(in the Options button).
	
	2. SQL Server should be set up on a Windows NT 4.0 Server. It should have the
	  Apple Talk ADSP network protocol installed. The SQL Server's setup will also
	  likely have the Named Pipes and TCP/IP Sockets network protocols installed
	  also.
	
	3. In the Visual FoxPro Command window, issue the following commands:
	
	        ? SQLCONNECT()    && choose the ODBC data source from step #1
	        *           the number 1 should appear on the FoxPro desktop
	        ? SQLEXEC(1,"SELECT * FROM Authors")  && this should lockup the Mac
	
	4. Try the above using an ODBC data source set to use the TCP/IP Network Library
	  (if your network supports this protocol). If SQL Server is available on a
	  Windows NT 3.51 Server, try the above steps with that. In both cases, 23
	  records should be returned assuming the sample Pubs!Authors table in SQL
	  Server has not been modified.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
