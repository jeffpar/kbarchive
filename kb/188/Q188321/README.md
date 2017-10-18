---
layout: page
title: "Q188321: FindFirstChangeNotification May Not Notify All Processes"
permalink: kb/188/Q188321/
---

## Q188321: FindFirstChangeNotification May Not Notify All Processes

	Article: Q188321
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FindFirstChangeNotification call may not notify all processes that have sent
	a notify request on the same directory. This may occur if the directory is on a
	remote computer.
	
	CAUSE
	=====
	
	This problem occurs because of an optimization in the redirector if multiple
	processes open the same directory across the network. What the redirector may do
	is only open one handle to the remote directory. This causes the notify request
	to behave as though the notify requests were all sent to the same handle. By
	design, only one request will be notified per directory change per handle.
	
	RESOLUTION
	==========
	
	To receive multiple notify requests across the network, the user who runs the
	program must have the "backup file and directories" user right. Then the program
	must set the privilege using the AdjustTokenPrivileges call. This is because the
	FindFirstChangeNotification API sets the FILE_OPEN_FOR_BACKUP_INTENT in its
	create packet. This is to prevent the optimization mentioned above from
	occurring. However, the "backup file and directories" privilege must be turned
	on for it to work.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
