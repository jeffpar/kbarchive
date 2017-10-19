---
layout: page
title: "Q246485: STOP 0xC0000142 in User32.dll After Upgrading"
permalink: /kb/246/Q246485/
---

## Q246485: STOP 0xC0000142 in User32.dll After Upgrading

	Article: Q246485
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a Microsoft Windows NT 4.0-based computer or restart a computer
	after it has been upgraded to Windows NT 4.0, you may receive the following
	error message:
	
	  STOP c0000142 (DLL Initialization Failed) initialization of the dynamic link
	  library C:\winnt\system32\user32.dll failed the process is terminating
	  abnormally.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. If this error message appears after an upgrade to Windows NT 4.0, copy the
	  following files from Windows NT 4.0 Service Pack 3 to the
	  %SystemRoot%\System32 folder:
	
	  Kernel32.dll
	  Ntdll.dll
	  Win32k.sys
	  User32.dll
	  Winsrv.dll
	
	2. If this error message appears while restarting a computer after it has been
	  upgraded to Windows NT 4.0, copy the following files from Windows NT 4.0
	  Service Pack 3 to the %SystemRoot%\System32 folder:
	
	  User32.dll
	  Gdi32.dll
	
	Additional query words: User32.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
