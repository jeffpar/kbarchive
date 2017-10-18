---
layout: page
title: "Q186145: Server Performance Degraded by CPQDBG"
permalink: kb/186/Q186145/
---

## Q186145: Server Performance Degraded by CPQDBG

	Article: Q186145
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Your server's performance begins to degrade and it may even stop responding
	(hang). If you check Task Manager on the Process tab, you find that 10 to 100
	instances of Cpqdbg.exe are running.
	
	CAUSE
	=====
	
	The Compaq cpqdebugger is installed by Compaq's SSD 2.04 and may start multiple
	instances of Cpqdbg.exe.
	
	RESOLUTION
	==========
	
	Change the default debugger from the Compaq debugger to Dr. Watson.
	
	There are 2 methods for accomplishing this:
	
	Method 1
	--------
	
	1. Click Start, settings, Control Panel.
	
	2. Double-click Insight Agents.
	
	3. Click the SNMP settings tab.
	
	4. Clear the box marked "Enable the Application Exception Trap."
	
	-Or-
	
	Method 2
	--------
	
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
	
	Edit the following registry key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT
	\CurentVersion\AeDebug\debugger
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	If the string value is "cpqdbg -p%Id -e %Id -g", change the string to "drwtsn32"
	and leave options the same.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
