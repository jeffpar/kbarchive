---
layout: page
title: "Q85890: SiteLock Incorrectly Assumes More People Accessing Program"
permalink: /kb/085/Q85890/
---

## Q85890: SiteLock Incorrectly Assumes More People Accessing Program

	Article: Q85890
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows version 3.1 on a Novell network running Brightworks'
	SiteLock version 3.2 or earlier, if you view the properties (by choosing
	Properties from the File menu in Program Manager) of a SiteLock-monitored
	program, then SiteLock thinks the program is being run. This causes SiteLock to
	incorrectly assume more people are accessing the program then really are.
	
	WORKAROUND
	==========
	
	After setting up the icon for the program, exit Windows and restart the
	computer. In the future, avoid checking or changing program item properties
	without restarting the computer afterwards.
	
	
	Brightworks Development is currently researching this problem.
	
	MORE INFORMATION
	================
	
	SiteLock is a Novell NetWare network terminate-and-stay-resident (TSR) program
	used to regulate the number of users of a monitored program so that license
	agreements for the monitored program are not violated.
	
	For example, if you have a 20-user license for version 4.0 of Excel for Windows,
	you would configure SiteLock to only allow 20 users to access it at any given
	time. When you select Properties from Program Manager's File menu for EXCEL.EXE,
	and then choose OK, SiteLock registers this action as running the program, and
	will assume the program is running.
	
	The SiteLock and Novell products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.1 swatcher sitlock login script sight site lock net ware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1,95
	
	=============================================================================
	
