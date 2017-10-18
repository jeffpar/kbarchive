---
layout: page
title: "Q172805: Access Violations in Rasphone.exe When Attempting RAS Connection"
permalink: kb/172/Q172805/
---

## Q172805: Access Violations in Rasphone.exe When Attempting RAS Connection

	Article: Q172805
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 4.0 and Routing and Remote Access Service
	(RRAS) may fail when starting Rasphone.exe. The following error message
	appears:
	
	  An application error has occurred
	  and an application log is being generated.
	  RASPHONE.EXE
	  Exception: access violation (0xC0000005, Address 0x0100342c)
	
	In addition, if Drwtsn32.exe is set up to create a Drwtsn32.log, the following
	text will appear in the log:
	
	  Application exception occurred:
	  App: exe\rasphone.dbg (pid=169)
	  When: 8/15/1997 @ 9:10:9.725
	  Exception number: c0000005 (access violation)
	
	NOTE: The address and PID you have may differ from those in the example.
	
	
	CAUSE
	=====
	
	The GetCallbackList function checks the registry for keys named Callback. It
	then reads the callback device name, callback port, and callback number from
	that key. If the key is not in the proper format, Rasphone.exe may fail with an
	access violation.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and locate the following Registry subkey in the
	  HKEY_CURRENT_USER subtree:
	
	     \Software\Microsoft\RAS Phonebook\Callback
	
	2. Remove any keys that are not in the form of DEVICE_NAME (PORT).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
