---
layout: page
title: "Q142011: How to Close a Remote Process by Using the Scheduler Service"
permalink: kb/142/Q142011/
---

## Q142011: How to Close a Remote Process by Using the Scheduler Service

	Article: Q142011
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can stop a remote process by using the Scheduler service.
	
	MORE INFORMATION
	================
	
	1. Start Scheduler Service on the computer running the process you want to kill.
	
	2. Copy Kill.exe from the Windows NT 3.5x Resource Kit to the target computer's
	  System32 directory, typically C:\Winnt35\System32.
	
	3. From a command prompt on the remote computer, type:
	
	  "AT \\TARGET_MACHINE execute_time "kill process_name"" (without the quotation
	  marks)
	
	  For Example, type:
	
	  "AT \\NTSERVER1 13:00 "kill clock"" (without the quotation marks)
	
	NOTE: If the process name is not the same as the executable name, you can get the
	process name by using Pviewer.exe, also from the Resource Kit. Also, the remote
	user must have proper access to the target machine.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
