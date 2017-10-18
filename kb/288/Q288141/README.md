---
layout: page
title: "Q288141: PRB: Access Driver Window Doesn't Appear for System or User DSN"
permalink: kb/288/Q288141/
---

## Q288141: PRB: Access Driver Window Doesn't Appear for System or User DSN

	Article: Q288141
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0, used with:
	   - Microsoft Windows versions 2000, 2000 SP1 Professional 
	   - Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	   - Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a system or user data source name (DSN) to a Microsoft
	Access database, the ODBC Microsoft Access Setup window may not appear after you
	select Microsoft Access driver from the drivers listed in the Create New Data
	Source window.
	
	CAUSE
	=====
	
	This problem is caused by the following invalid registry entries:
	
	  HKEY_LOCAL_MACHINE\Software\ODBC\ODBC.INI\Engines\Jet
	  HKEY_CURRENT_USER\Software\ODBC\ODBC.INI\Engines\Jet
	
	
	RESOLUTION
	==========
	
	To resolve this issue, delete these registry keys if they are found on your
	system.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Registry Editor (RegEdit.exe or RegEdt32.exe).
	
	2. Locate one of the following keys:
	
	   - HKEY_LOCAL_MACHINE\Software\ODBC\ODBC.INI
	
	   - HKEY_CURRENT_USER\Software\ODBC\ODBC.INI
	
	3. Add a new key Engines underneath the above selected key.
	
	4. Add a new key Jet underneath the newly created key Engines.
	
	5. Start ODBC Administrator.
	
	6. Click either the User DSN or System DSN tab and then click Add to create a
	  new DSN for an Access database.
	
	7. Select Microsoft Access driver from the Create New Data Source window, and
	  then click Finish. You are returned to the original ODBC Administrator
	  window, instead of to a new ODBC Microsoft Access Setup window.
	
	Additional query words: access dsn setup
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch
	Version           : :2.5,2.6,2000,2000 SP1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
