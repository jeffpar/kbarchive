---
layout: page
title: "Q106373: Troubleshooting Event Log Error Messages 11 and 12"
permalink: kb/106/Q106373/
---

## Q106373: Troubleshooting Event Log Error Messages 11 and 12

	Article: Q106373
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbhw kbprint kbPrinting kbHardware
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the number of mouse or keyboard events buffered internally by the driver in
	nonpaged pool memory is too low, one of the following error messages gets logged
	in the Event Viewer:
	
	  
	
	  Source      Category      Event      User
	  -----------------------------------------
	  Mouclass    None          11         N/A
	
	  -or-
	
	  Source      Category      Event      User
	  -----------------------------------------
	  i8042prt    None          12         N/A
	
	Both of the above error messages have the following description:
	
	  The ring buffer that stores incoming mouse data has overflowed (buffer
	  size is configurable through the Registry).
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use the Registry Editor (REGEDT32.EXE) to edit the following entry:
	
	HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/i8042prt/Parameters
	
	Make the value for KeyboardDataQueueSize and/or MouseDataQueueSize larger.
	
	NOTE: The default value for both of these is 64.
	
	The above service (i8042prt) name may vary, depending the type of mouse you are
	using.
	
	Note: If changing the registry does not solve the behavior, disable the NetFlex
	adapter driver from the devices. With some of the NetFlex adapters, if the card
	is not disabled, the events can occur and the computer may stop responding.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbprint kbPrinting kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
