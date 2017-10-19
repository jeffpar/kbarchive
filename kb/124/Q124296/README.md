---
layout: page
title: "Q124296: Admin Scheduled Batch Job Net Use Commands Are Viewable to Users"
permalink: /kb/124/Q124296/
---

## Q124296: Admin Scheduled Batch Job Net Use Commands Are Viewable to Users

	Article: Q124296
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are logged on to a machine and the system account has run a scheduled
	batch job consisting of NET USE commands, you can see the network drive icons in
	File Manager. If you attempt to access the drive icons, the following error
	message appears:
	
	  Login Failure: The user has not been granted the requested logon type at this
	  computer.
	
	For example, an administrator may use the system or other administrative account
	to schedule the following batch file to run when another user has logged on to
	the workstation:
	
	  atnetuse.cmd
	  net use x: \\server\share /user:domain\administrator password
	
	NOTE: You cannot see the drives using NET USE at a command prompt.
	
	CAUSE
	=====
	
	Because the administrator has more rights than a typical user, it appears that
	the scheduled job should not appear in any form to the user. Although this
	appears to be a bug, the situation occurs by design. Since drive letters are
	MS-DOS devices, they are global to the system.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
