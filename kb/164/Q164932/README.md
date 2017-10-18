---
layout: page
title: "Q164932: WordPad Crashes with Wrong Version of MFC42U.DLL"
permalink: kb/164/Q164932/
---

## Q164932: WordPad Crashes with Wrong Version of MFC42U.DLL

	Article: Q164932
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install certain products on a Windows NT 4.0 platform, you may receive
	the following access violation error when you run WordPad:
	
	  Unhandled exception in Wordpad.exe RICHED32.DLL: 0XC0000005: Access
	  Violation.
	
	An excerpt from an example of the Dr. Watson log (DRWTSN32.LOG) generated is
	below:
	
	  Microsoft (R) Windows NT (TM) Version 4.00 DrWtsn32
	  Copyright (C) 1985-1996 Microsoft Corp. All rights reserved.Application
	  exception occurred:
	     App: exe\wordpad.dbg (pid=308)
	     When: 1/27/1997 @ 8:57:34.118
	     Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This problem has been seen on Windows NT 4.0 systems using applications such as
	Microsoft Visual C++ 4.2 Enterprise version or third-party applications which
	supply their own version of the file Mfc42u.dll.
	
	RESOLUTION
	==========
	
	To correct this problem, expand the file MFC42U.DL_ from the original Windows NT
	4.0 CD-ROM into the <WinNT>\System32 directory as Mfc42u.dll.
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
