---
layout: page
title: "Q181386: Error Message Deleting File Using Setupapi.dll and INF Script"
permalink: /kb/181/Q181386/
---

## Q181386: Error Message Deleting File Using Setupapi.dll and INF Script

	Article: Q181386
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to delete a file that is currently in use using the Setupapi.dll file
	and an INF script, you may receive the following error message even though the
	DELFLG_IN_USE or DELFLG_IN_USE1 flag was specified in the Delete File section of
	the INF script:
	
	  An error occurred deleting file <name>. The process cannot access the
	  file because it is being used by another process. (error #32).
	
	CAUSE
	=====
	
	This problem is caused by versions of the Setupapi.dll file earlier than version
	4.0.1381.10 because these versions do not properly handle the deletion of files
	that are currently in use.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Setupapi.dll in the Winnt\System32 folder
	with Setupapi.dll version 4.0.1381.10 or later. Note that installing Microsoft
	Internet Explorer 4.0 or later installs the correct version of the Setupapi.dll
	file.
	
	For information about obtaining and installing Internet Explorer, please visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/ie/
	
	Additional query words: delfiles
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
