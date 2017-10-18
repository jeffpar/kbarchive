---
layout: page
title: "Q131152: PC WRmt: Running Mail Remote Under Windows NT"
permalink: kb/131/Q131152/
---

## Q131152: PC WRmt: Running Mail Remote Under Windows NT

	Article: Q131152
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	- the operating system: Microsoft Windows NT 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details the steps required to run version 3.2 of Microsoft Mail
	Remote for Windows on a Microsoft Windows NT version 3.5 Workstation.
	
	MORE INFORMATION
	================
	
	In addition to requiring Remote Client for Windows, the basic configuration
	requires the following:
	
	1. Windows NT Version 3.5 or later.
	
	2. Windows Remote client configured to run in a separate memory space.
	
	3. Only the 16-bit LAN client can utilize the system selector.
	
	Windows NT Version 3.5 or later
	-------------------------------
	
	Windows NT Server 3.5 (or later) or Windows NT Workstation 3.5 (or later) is
	required to run the Windows Remote client on Windows NT. Windows NT version 3.1
	does not have the option to run applications in Separate Memory Space. As a
	result, it is not supported for running the Windows Remote client.
	
	Separate Memory Space
	---------------------
	
	For additional information, please see the Windows NT Server "System Guide,"
	chapter 3.
	
	To have a Windows 3.1 application run in a separate memory space, select the Run
	in Separate Memory Space checkbox.
	
	NOTE: This checkbox is enabled when you type the path of a Windows 3.1
	application in the Command Line box.
	
	If you select this box, it causes the Windows 3.1 application to run in a
	separate memory space from other Windows 3.1 applications. As a result, it
	protects other Windows 3.1 applications if this application crashes or hangs,
	and it can provide better responsiveness because it allows true preemptive
	multitasking. However, more system resources will be used in this
	configuration.
	
	System Selector on Windows NT
	-----------------------------
	
	The System Selector will only change drivers between Windows Remote and the
	16-bit Windows LAN client. Due to its design of making changes via INI files, it
	will not work with the Windows NT 32-bit Windows Mail LAN client.
	
	Additional query words: 3.20 workgroups
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbMailSearch kbZNotKeyword3 kbMailPCN350 kbMailGateFax320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
