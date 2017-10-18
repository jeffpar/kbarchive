---
layout: page
title: "Q192732: PC-cillin on Win95 Causes Srv Event 2000"
permalink: kb/192/Q192732/
---

## Q192732: PC-cillin on Win95 Causes Srv Event 2000

	Article: Q192732
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a computer running Windows 95 with PC-cillin loaded, copying EXE or DOC files
	to a Microsoft Windows NT server causes the following event log on the server:
	
	  SOURCE: Srv
	  EVENT ID 2000
	
	  The server's call to a system service failed unexpectedly.
	
	  Data:
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c000000d 00000000 00000000
	  0020: 00000000 00000000 028e0bc5
	
	
	Removing PC-cillin resolves the problem.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
