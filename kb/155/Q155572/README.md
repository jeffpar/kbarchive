---
layout: page
title: "Q155572: REM Does Not Prevent Parsing of FOR Statement in Batch File"
permalink: /kb/155/Q155572/
---

## Q155572: REM Does Not Prevent Parsing of FOR Statement in Batch File

	Article: Q155572
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there is a syntax error in a line that uses the FOR command, that error is
	displayed, even if the line is preceded with the REM statement. For example, the
	following command line
	
	  rem FOR /R %z in (*.txt) do d:\test %~nxz
	
	results in an error message being displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	If you do not want the error to appear, make sure the syntax is correct, even if
	the line is preceded with the REM statement. Using the example above, change the
	line to:
	
	  rem FOR /R %z in (*.txt) do d:\test %%~nxz
	
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
