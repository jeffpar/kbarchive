---
layout: page
title: "Q132131: INF: ODBC Database Drivers 2.0 Supported Platforms"
permalink: /kb/132/Q132131/
---

## Q132131: INF: ODBC Database Drivers 2.0 Supported Platforms

{% raw %}

	Article: Q132131
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft ODBC 16-bit Database Driver Pack version 2.0 is supported on two
	platforms:
	
	- Windows versions 3.1 and 3.11 (including Windows For Workgroups 3.11)
	
	- Windows NT versions 3.50 and 3.51
	
	Microsoft ODBC 32-bit Database Driver Pack version 2.0 is supported on two
	platforms:
	
	- Windows NT versions 3.50 and 3.51
	
	- Windows 95
	
	MORE INFORMATION
	================
	
	The Microsoft 16-bit Database Drivers include: Microsoft Access, Microsoft
	Excel, Paradox, Btrieve, dBase, FoxPro, and text drivers. The Microsoft 32- bit
	Database Drivers include: Microsoft Access, Microsoft Excel, Paradox, dBase,
	FoxPro, and text drivers.
	
	Information in the Release Notes and the ODBCJET.HLP file that ship with the
	Database Driver Pack 2.0 states that the 16-bit drivers are supported on Win32s;
	however, that information is incorrect. On Win32s, only the ODBC 2.10 core
	components (Driver manager and Thunking DLLs) are supported.
	
	The bug mentioned in Knowledge Base article number Q129772, "BUG:Attempt to load
	required component ODBC32.DLL failed," has been fixed in ODBC SDK 2.1b, which
	will be released with the Microsoft Developer Network (MSDN). You can contact
	third-party vendors to get 16-bit ODBC drivers tested on Win32s.
	
	
	
	
	Additional query words: 2.00.2317 Win32s Windows NT
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
