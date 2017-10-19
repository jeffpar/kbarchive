---
layout: page
title: "Q127828: Cannot Connect to Share With Single User Access"
permalink: /kb/127/Q127828/
---

## Q127828: Cannot Connect to Share With Single User Access

	Article: Q127828
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	If you create a share and set the user limit to one, and then a user connects to
	the share and runs a program or batch file, other users cannot connect until the
	first user shuts down Windows NT or a time-out occurs. After the first user runs
	a program or batch file and disconnects from the share, Server Manager shows
	that no one is connected or using that resource. Other users who attempt to
	connect to the share receive a message stating that the maximum number of users
	are connected to the share.
	
	
	If a user connects to the share but does not run a program, the problem does not
	occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt shutdown period
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
