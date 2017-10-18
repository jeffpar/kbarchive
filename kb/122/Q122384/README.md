---
layout: page
title: "Q122384: Can't Pause Shared Printer Between Windows NT 3.1 and 3.5"
permalink: kb/122/Q122384/
---

## Q122384: Can't Pause Shared Printer Between Windows NT 3.1 and 3.5

	Article: Q122384
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create and share a printer in Print Manager on a computer running Windows NT
	version 3.1. You connect to the printer in Print Manager on a computer running
	Windows NT version 3.5. Then, if you try to pause the printer the following
	error message appears:
	
	  Could not pause printer. The printer command is invalid.
	
	This problem also occurs when you connect from a computer running Windows NT 3.1
	to a printer on a computer running Windows NT 3.5. It does not occur if both
	computers are running the same version of Windows NT. Setting the shared
	printer's permissions for Everyone to have full control does not correct the
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT version 3.5. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: prodnt 3.10 Print Manager Pause
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
