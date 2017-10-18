---
layout: page
title: "Q158825: System and User Account Difference with AT Command"
permalink: kb/158/Q158825/
---

## Q158825: System and User Account Difference with AT Command

	Article: Q158825
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Not all processes, applications, and .bat files can be started with the AT
	command.
	
	MORE INFORMATION
	================
	
	
	In order to run an interactive application by using the AT command, the
	application needs to be started with the local system account, and the "Allow
	service to interact with desktop" check box must be checked. If the Schedule
	service is set to log on as the local system, scheduled jobs cannot be validated
	on the network. If you start the schedule service with a user account, jobs can
	be validated on the network, but they cannot have any user interface, because
	only the local system has sufficient privileges to allow a service to start a
	program on the interactive desktop. Unless 16-bit applications have access to
	the interactive desktop, they most likely not start as they run under Ntvdm.
	Therefore, you can have network access or interactivity with the system (needed
	by Ntvdm), but not both.
	
	
	
	NOTE: This is by design, for security purposes. You do not want a regular user to
	be able to schedule a job that would run when the administrator is logged on,
	and use the administrator's credentials.
	
	Additional query words: scheduler schedule
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
