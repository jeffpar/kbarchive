---
layout: page
title: "Q130927: Error Attempting to Format a Striped Drive: Device Is Busy"
permalink: /kb/130/Q130927/
---

## Q130927: Error Attempting to Format a Striped Drive: Device Is Busy

	Article: Q130927
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Disk Administrator and attempt to create a striped set with parity,
	you receive the following error message:
	
	  DEVICE IS BUSY
	
	RESOLUTION
	==========
	
	When you run Disk Administrator and attempt to create a striped set with parity,
	be sure to allow enough time for the striped set to initialize. If a format of
	the striped set is attempted before the striped set is initialized, the error
	"DEVICE IS BUSY" is displayed and the format attempt is aborted.
	
	NOTE: On a DEC Alpha with three 2 gigabyte drives, the striped set with parity
	took approximately 80 minutes to initialize.
	
	Additional query words: prodnt 3.10 formatting
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	Issue type        : kbprb
	
	=============================================================================
	
