---
layout: page
title: "Q178555: How to Move a Scheduled Job to Another NT Server"
permalink: kb/178/Q178555/
---

## Q178555: How to Move a Scheduled Job to Another NT Server

	Article: Q178555
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how a Windows NT Administrator can move scheduled jobs
	from one Windows NT 4.0 server to another. For example, a server with several
	different batch jobs scheduled to run at various times throughout the week needs
	to be taken offline, so the jobs need to be moved to another server.
	
	NOTE: The purpose of this article is to instruct you how to move the schedule
	from one server to another. All batch files, applications, or services called
	upon by these scheduled jobs still have to be installed locally on the computer
	you are moving the scheduled jobs to.
	
	MORE INFORMATION
	================
	
	Follow the steps below to move all scheduled jobs from Server1 to Server2:
	
	Server1
	-------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Stop the Schedule service.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	  Delete Information in the Registry" and "Edit Registry Data" online Help
	  topics in Regedt32.exe. Note that you should back up the registry before you
	  edit it.
	
	3. Run Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Schedule
	
	4. On the Registry menu, click Save Key.
	
	5. Navigate to a network share accessible by both servers, then name the file
	  Schedule.reg.
	
	Server2
	-------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Stop the Schedule service, if it is running.
	
	3. Run Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Schedule
	
	4. On the Registry menu, click Restore, select the saved file on the network
	  share mentioned in Step 5 under Server1, and then click Open.
	
	  You will be prompted with a warning that Registry Editor will restore a key on
	  top of the currently selected Key. If there were jobs previously scheduled on
	  Server 2, they will be replaced.
	
	  Click OK to continue.
	
	5. Close Registry Editor.
	
	6. Click Start, point to Setting, click Control Panel, and then double-click
	  Services.
	
	7. Start the Schedule service.
	
	The entire job schedule is now transferred to the new server without having to
	manually recreate them using the AT command or WinAT.
	
	Additional query words: winat.exe scheduler
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbhowto
	
	=============================================================================
	
