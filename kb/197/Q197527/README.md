---
layout: page
title: "Q197527: How to Automate Chkdsk"
permalink: kb/197/Q197527/
---

## Q197527: How to Automate Chkdsk

	Article: Q197527
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chkdsk is a native Windows NT tool that can determine the extent of file and
	file system corruption. If Chkdsk is to run in write-mode to attempt to remedy
	corruption, in most cases, there will be locked files and it requires restarting
	to have exclusive access to the partition or partitions. This process can be
	automated and requires no user intervention. Usually, a user needs to press "y"
	to schedule Chkdsk to run in write-mode on the next restart; however, this
	process can be automated as follows:
	
	Create a batch file and then disseminate it to the preferred system or systems:
	
	     @echo off
	     echo y|chkdsk [target drive, i.e. D:] /f/r
	     rem sleep 3600
	     rem c:\utils\shutdown.exe /l /r /y /t:6
	
	The last two lines are optional. Sleep.exe and Shutdown.exe are from the
	Microsoft Windows NT Server 4.0 Resource Kit. "Sleep 3600" causes the system to
	wait for 60 minutes before proceeding to the next line in the batch file.
	Shutdown.exe is then called to shut down and restart the target system. If
	Shutdown.exe is not called, and the drive could not be locked for exclusive use,
	Chkdsk runs the next time you manually restart the target system.
	
	In those cases where you would like Chkdsk, or the above batch file, to be
	scheduled to run on specific days or times, AT Scheduler (command-line
	interface) or WinAT Scheduler (GUI-based interface that has added functionality)
	can be used. You can find WinAT in the Microsoft Windows NT Server 4.0 Resource
	Kit.
	
	MORE INFORMATION
	================
	
	For additional information about Shutdown.exe, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q158388 Useful Resource Kit Utilities for Domain Administrators
	
	Additional query words: chkdsk automate script nt 4.0 batchfile at task scheduler
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
