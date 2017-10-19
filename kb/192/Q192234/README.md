---
layout: page
title: "Q192234: Winstone 97 Running on Console Freezes System"
permalink: /kb/192/Q192234/
---

## Q192234: Winstone 97 Running on Console Freezes System

	Article: Q192234
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	With Winstone 97 running on the console, Terminal Server stops responding and
	freezes the system. You may be able to press CTRL+ALT+DELETE to gain control of
	the system, but the test cannot proceed.
	
	CAUSE
	=====
	
	This problem is caused by a Winstone 97 application incompatibility under
	Terminal Server.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve the problem, add the following compatibility flags to allow Winstone
	97 to run under Terminal Server:
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: mtrun
	     Flags = REG_DWORD 0x408
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: adhelp
	     Flags = REG_DWORD 0x408
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: wsbp97
	     Flags = REG_DWORD 0x408
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: wshe97
	     Flags = REG_DWORD 0x408
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: pm6
	     Flags = REG_DWORD 0x408
	
	- 
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	     \Terminal Server\Compatibility\Applications
	     Add Value: zdbui
	     Flags = REG_DWORD 0x40c
	
	NOTE: The above registry keys are one path; they have been wrapped for
	readability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Terminal Server Edition, version
	4.0. We are researching this problem and will post additional information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: terminalsrv winstone
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
