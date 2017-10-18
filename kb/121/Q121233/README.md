---
layout: page
title: "Q121233: Printer Form May Not Print to Correct Paper Path"
permalink: kb/121/Q121233/
---

## Q121233: Printer Form May Not Print to Correct Paper Path

	Article: Q121233
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbprint kbbug3.50
	
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
	
	When a form is assigned to more than one paper path, Print Manager locates the
	first path that has that form assigned to it and prints to it. Print Manager
	scans from the list of paper paths from the top down. If the form is assigned to
	the lower paper tray while the upper tray was previously assigned to the same
	form, Print Manager will always print to the upper paper tray.
	
	
	WORKAROUND
	==========
	
	Manually remove references of undesired paper paths to the same form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
