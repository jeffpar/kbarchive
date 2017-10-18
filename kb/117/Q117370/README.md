---
layout: page
title: "Q117370: NCC Err Msg: IPX Initialize Failure"
permalink: kb/117/Q117370/
---

## Q117370: NCC Err Msg: IPX Initialize Failure

	Article: Q117370
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the NetWare utility RCONSOLE from Windows NT using the
	NCC (NetWare Compatible Client for Windows NT) software, the following error
	message may appear:
	
	  IPX Initialize Failure
	
	WORKAROUND
	==========
	
	Check for the following entries in the AUTOEXEC.NT file:
	
	  lh %SystemRoot%\system32\nw16
	  lh %SystemRoot%\system32\vwipxspx
	
	If the entries are present, check to see if the following associated files
	actually exist:
	
	  %SystemRoot%\system32\nw16.exe
	  %SystemRoot%\system32\vwipxspx.exe
	  %SystemRoot%\system32\vwipxspx.dll
	
	If these associated files do not exist, remove the NCC software and reinstall it
	to correctly copy these files to their appropriate locations.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
