---
layout: page
title: "Q248636: Error When Executing a Query from ODBC Client in Windows NT 4.0"
permalink: /kb/248/Q248636/
---

## Q248636: Error When Executing a Query from ODBC Client in Windows NT 4.0

	Article: Q248636
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are executing a query from an Open Database Connectivity (ODBC) client
	running on Microsoft Windows NT 4.0 Workstation, the following error message may
	appear:
	
	  The ODBC resource DLL (c:\windows\system32\odbcint.dll) is a different
	  version than the ODBC driver manager (c:\windows\system\odbc32.dll)
	
	CAUSE
	=====
	
	This behavior can occur when there are two different versions of the Odbcint.dll
	file.
	
	RESOLUTION
	==========
	
	To resolve this behavior, check for duplicates of the file Odbcint.dll. If there
	are two versions, keep the correct file (the one that is the same version as the
	Odbc32.dll file) in the Winnt\System32 folder, and then rename the other file.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q170769 PRB: "ODBC Resource DLL Is a Different Version Than ..." Error
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
