---
layout: page
title: "Q120425: Err Msg: &quot;Unable to Find Windows&quot; Installing C/C++ 7.0a SDK"
permalink: /kb/120/Q120425/
---

## Q120425: Err Msg: &quot;Unable to Find Windows&quot; Installing C/C++ 7.0a SDK

	Article: Q120425
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbsetup kbinterop kbbug3.50 kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft C/C++ 7.0a Windows SDK, this message appears:
	
	  Unable to find Windows in the specified directory.
	
	when you choose the Windows NT directory or any directory under it. The
	installation proceeds if you press Enter to continue.
	
	CAUSE
	=====
	
	The SDK installation utility needs to locate all of these files:
	
	    \windows\system.ini
	    \windows\progman.ini
	    \windows\winver.exe
	    \windows\system\gdi.exe
	    \windows\system\user.exe
	
	Windows NT places three of these in \SYSTEM32 instead of \SYSTEM and does not
	have a PROGMAN.INI file. Because it does not find all of the files, the SDK
	utility does not think it has found the Windows directory.
	
	STATUS
	======
	
	This behavior is by design. No work around is necessary. The SDK files install
	normally when you press ENTER to ignore the error message and continue the
	installation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
