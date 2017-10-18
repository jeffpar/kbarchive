---
layout: page
title: "Q158675: How to Cancel CHKDSK After It Has Been Scheduled"
permalink: kb/158/Q158675/
---

## Q158675: How to Cancel CHKDSK After It Has Been Scheduled

	Article: Q158675
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the command CHKDSK /F /R from the command line, Windows NT asks if
	you want to schedule CHKDSK to run the next time the system is restarted. This
	article describes how, in the event you choose YES, you can subsequently prevent
	CHKDSK from running the next time you start the server.
	
	RESOLUTION
	==========
	
	To stop the execution of CHKDSK /F /R, you must edit the registry using Registry
	Editor.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To stop the execution of CHKDSK /F /R, take the following steps:
	
	1. Run the Registry Editor(Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM\CurrentControlSet\Control\Session Manager
	
	3. Change the BootExecute entry from:
	
	  autocheck autochk * /r\DosDevice\C:
	
	  To:
	
	  autocheck autochk *
	
	If you have scheduled CHKDSK for multiple volumes, there will be an autocheck
	entry for each volume. Delete the string from the BootExecute registry value for
	each volume you do not want checked.
	
	This procedure will reset the default string, and CHKDSK /F /R will not run on
	reset.
	
	Additional query words: CHKDSK /F /R AUTOCHECK
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
