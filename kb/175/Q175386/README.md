---
layout: page
title: "Q175386: How to Move the Event Logs to Another Location"
permalink: /kb/175/Q175386/
---

## Q175386: How to Move the Event Logs to Another Location

	Article: Q175386
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to move the Event Logs to another partition.
	
	MORE INFORMATION
	================
	
	If you are auditing a lot of information, you may need to move the Event Log
	files from the system partition to another partition. By default, they are
	stored in the %SystemRoot%\System32\Config folder.
	
	The location and also the name of the log files are stored in the registry. By
	altering this information, you can change the location of the log files.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKLM\System\CurrentControlSet\Services\EventLog
	
	2. Select the log file you want to change. To change the location of the Audit
	  Log, select Security.
	
	3. Under the key of the log file you wish to change, double-click the value File
	  (type REG_EXPAND).
	
	4. Edit the path in the String Editor to point to the new location.
	
	  NOTE: The path must exist and you must include the file name.
	
	  The default names are:
	
	                  Security:    Secevent.evt
	                  Application: Appevent.evt
	                  System:      Sysevent.evt
	
	5. Quit Registry Editor and restart your computer.
	
	
	Additional query words: eventvwr appevent secevent sysevent evt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
