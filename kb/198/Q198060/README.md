---
layout: page
title: "Q198060: Program Runs Slowly on Terminal Server"
permalink: /kb/198/Q198060/
---

## Q198060: Program Runs Slowly on Terminal Server

	Article: Q198060
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if a problem occurs. For information on how to do this, view the "Restoring the Registry" online Help topic in Regedit.exe or the "Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You have installed a program that runs very fast on Microsoft Windows NT 4.0
	but, when you installed it on Windows Terminal Server, it runs very slowly. When
	you view the performance of the program by using Task Manager or with
	Performance Monitor, you see that the CPU usage of the program is low, much
	lower that the CPU usage of the program on Windows NT.
	
	CAUSE
	=====
	
	The runtime characteristics of the program appear to be "bad" or unsuitable for
	Windows Terminal Server. It has built-in logic to detect this behavior.
	Sometimes, in cases of CPU-bound programs, this behavior is incorrectly
	detected.
	
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
	
	1. Create a key entry for each program that shows this behavior by using the
	  name that appears in Task Manager:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Terminal Server\Compatibility\Applications\<YOUR APP in capitals>
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add the following values:
	
	Value Name: Flags
	Data Type:  REG_DWORD
	Value:      0xc
	
	Value Name: FirstCountMsgQPeeksSleepBadApp
	Data Type:  REG_DWORD
	Value:      0xff
	
	Value Name: MsgQBadAppSleepTimeInMillisec
	Data Type:  REG_DWORD
	Value:      0x0
	
	Value Name: NthCountMsgQPeeksSleepBadApp
	Data Type:  REG_DWORD
	Value:      0xff
	
	You do not need to restart your computer; just start a new instance of the
	program. The CPU usage will be much higher, similar to what was seen on the
	Windows NT Server computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
