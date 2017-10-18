---
layout: page
title: "Q158591: Err Msg: Spoolss.exe - Entry Point Not Found"
permalink: kb/158/Q158591/
---

## Q158591: Err Msg: Spoolss.exe - Entry Point Not Found

	Article: Q158591
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart a Windows NT Server, the system may report the following
	errors:
	
	  process: Spoolss.exe - Entry Point Not Found
	
	  The procedure entry point SplDriverEvent could not be located in the dynamic
	  link library Localspl.dll.
	
	
	CAUSE
	=====
	
	The Localspl.dll file is missing or corrupt.
	
	RESOLUTION
	==========
	
	Replace the localspl.dll file, located in %SystemRoot%\System32 directory, with
	a copy of that file from the Windows NT 4.0 Server or Windows NT 4.0 Workstation
	CD-ROM.
	
	Additional query words: tshoot
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
