---
layout: page
title: "Q126615: BUG: MSDN CD#4: MSJETINT.DLL Missed in ODBC16.INF"
permalink: /kb/126/Q126615/
---

## Q126615: BUG: MSDN CD#4: MSJETINT.DLL Missed in ODBC16.INF

	Article: Q126615
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.10
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.10 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK3: 333 (2.10)
	
	SYMPTOMS
	========
	
	If you only install the 16-bit Btrieve/Access/Paradox/Fox/Text/Excel Driver from
	the January 1995 Microsoft Developer's Network (MSDN) CD#4 (\ODBC\X86), and you
	try to add data source on that driver immediately after it is installed, an
	error message will appear:
	
	  The setup routines for the [*** Driver Name ***] ODBC driver could not be
	  loaded. You may be low on memory and need to quit a few applications.
	
	CAUSE
	=====
	
	In ODBC16.INF, a line that appears only in the dBase Driver Section,
	
	  "Internat" = 1, msjetint.dll,,,, 1994-12-07,  ,, OLDER,  ,,,,,......
	
	should appear in all the desktop database driver sections.
	
	WORKAROUND
	==========
	
	Manually copy the file MSJETINT.DLL into %SystemRoot%\system\msjetint.dll:
	
	  expand \\CD#4\ODBC\X86\msjetint.dl_ %SystemRoot%\system\msjetint.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC SDK version 2.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.10.0000 ODBC SDK INSTALL 16-bit Desktop ACCESS BTRIEVE EXCEL FOX PARADOX TEXT Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.10
	Issue type        : kbbug
	
	=============================================================================
	
