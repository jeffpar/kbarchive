---
layout: page
title: "Q157238: How to Activate Security Event Logging in Windows NT 4.0"
permalink: /kb/157/Q157238/
---

## Q157238: How to Activate Security Event Logging in Windows NT 4.0

	Article: Q157238
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to activate security event logging in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To activate security event logging, follow these steps:
	
	1. Log on as the administrator of the local workstation.
	
	2. Click the Start button, point to Programs, point to Administrative Tools, and
	  then click User Manager.
	
	3. On the Policies menu, click Audit.
	
	4. Click the Audit These Events option.
	
	5. Enable the options you want to use. The following options are available:
	
	   - Logon/Logoff: Logs both local and remote resource logins.
	
	   - File And Object Access: File, directory, and printer access.
	
	     Note: Files and folders must reside on an NTFS partition for security
	     logging to be enabled. Once the auditing of file and object access has
	     been enabled, use Windows NT Explorer to select auditing for individual
	     files and folders.
	
	   - Use Of User Rights: Access to anything requiring user rights.
	
	   - User And Group Management: Any user accounts or groups created, changed,
	     or deleted. Any user accounts that are renamed, disabled, or enabled. Any
	     passwords set or changed.
	
	   - Security Policy Changes: Any changes to user rights or audit policies.
	
	   - Restart, Shutdown, And System: Logs shutdowns and restarts for the local
	     workstation.
	
	   - Process Tracking: Tracks program activation, handle duplication, indirect
	     object access, and process exit.
	
	6. Click the Success check box to enable logging for successful operations, and
	  the Failure check box to enable logging for unsuccessful operations.
	
	7. Click OK.
	
	Additional query words: registry
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
