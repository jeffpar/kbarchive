---
layout: page
title: "Q162623: Error 87 and Dr. Watson"
permalink: /kb/162/Q162623/
---

## Q162623: Error 87 and Dr. Watson

	Article: Q162623
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application may abruptly stop running and one of the following Dr. Watson
	messages may appear:
	
	  Could not attach to the application.
	  Windows NT error code = 87
	
	-or-
	
	  Windows NT Error Code 87
	
	A log file is then created and when the user opens the log file, there is no
	special entry except:
	
	  The Error reported is
	
	  Could not Attach to the application
	  Windows NT Error Code 87
	
	CAUSE
	=====
	
	This error occurs when an application abnormally terminates itself or is
	unexpectedly terminated by another application, thus causing an access
	violation. Windows NT Error Code 87 occurs when Dr. Watson loads to log the
	error, but the process is shut down before Dr. Watson can access it to gather
	debug information.
	
	Because Dr. Watson does not attach itself to the application, no debugging
	information is available in the log file.
	
	This error is not the result of Windows NT closing down the application.
	
	
	Additional query words: fail
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
