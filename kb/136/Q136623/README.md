---
layout: page
title: "Q136623: Windows NT Runs Out of Memory Accessing Many OLE Servers"
permalink: /kb/136/Q136623/
---

## Q136623: Windows NT Runs Out of Memory Accessing Many OLE Servers

	Article: Q136623
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your application, running on Windows NT, uses many in-proc OLE servers,
	Windows NT runs out of resources (memory).
	
	CAUSE
	=====
	
	The Win32 OLE API, CoFreeUnusedLibraries, does not functioning properly.
	
	
	Additional query words: prodnt control library
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
