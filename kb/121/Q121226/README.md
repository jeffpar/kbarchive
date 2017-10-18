---
layout: page
title: "Q121226: Network Install Needs DRVLIB and Platform Directories Shared"
permalink: kb/121/Q121226/
---

## Q121226: Network Install Needs DRVLIB and Platform Directories Shared

	Article: Q121226
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kbsetup
	
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
	
	On a client computer where you have installed Windows NT over the network, if
	you attempt to "Add A Net Adapter", you receive a non-critical error that a file
	could not be copied.
	
	CAUSE
	=====
	
	The shared directory for the over the network Windows NT installation does not
	have the DRVLIB directory included.
	
	RESOLUTION
	==========
	
	Share the entire CD-ROM or the complete directory tree of the preferred platform
	(i386, MIPS, or Alpha) AND the DRVLIB directory tree (use XCOPY to copy the
	directory trees).
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
