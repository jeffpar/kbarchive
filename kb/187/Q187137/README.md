---
layout: page
title: "Q187137: Add User Wizard Does Not Allow Setting of Home Directory"
permalink: kb/187/Q187137/
---

## Q187137: Add User Wizard Does Not Allow Setting of Home Directory

	Article: Q187137
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create users with the Add user account, you cannot modify the home
	directory to a different folder on the local computer. You can, however, create
	a path on another computer.
	
	CAUSE
	=====
	
	This is by design.
	
	MORE INFORMATION
	================
	
	When you select Start/Programs/Administrative Tools/Administrative Wizards/Add
	User Account, the Add User Account wizard is launched. Choose Home Directory and
	click NEXT. The only choice on the local computer is:
	
	  \default home directory on the user's computer
	
	There is no choice to let the Administrator give a path to any other local
	folders.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
