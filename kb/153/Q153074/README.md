---
layout: page
title: "Q153074: Administrators Can't Remove All Users from Built-in Groups"
permalink: /kb/153/Q153074/
---

## Q153074: Administrators Can't Remove All Users from Built-in Groups

	Article: Q153074
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.50,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are an administrator for Windows NT 3.50 or a 3.51 Workstation or
	standalone Server, and you try to delete all the users from built-in groups such
	as Administrators, you will get an error message that says the action can't be
	performed on built-in groups.
	
	On domain controllers, however, the administrator can delete everybody from every
	group. The built-in groups and accounts can't be deleted, but all the users can
	be removed from the group.
	
	RESOLUTION
	==========
	
	There is no workaround for this problem in Windows NT 3.50 or Windows NT 3.51.
	
	STATUS
	======
	
	This problem is resolved in Windows NT 4.0.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.50,3.51
	Issue type        : kbbug
	
	=============================================================================
	
