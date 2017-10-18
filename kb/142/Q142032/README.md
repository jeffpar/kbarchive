---
layout: page
title: "Q142032: PRB: Event Log Does Not Resize Without Clearing"
permalink: kb/142/Q142032/
---

## Q142032: PRB: Event Log Does Not Resize Without Clearing

	Article: Q142032
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to change the system log file size, the change may not seem to
	take effect.
	
	For instance, with overwrites turned off, if the log filled up at the default
	size of 512K and the maximum size is changed to 1024K, messages will still
	appear, warning that the log is full. Alternatively, if the maximum log size
	setting is decreased, the real log size does not change.
	
	CAUSE
	=====
	
	Increasing or decreasing the maximum log size doesn't take effect until the log
	is cleared.
	
	RESOLUTION
	==========
	
	Archive the log if you want to keep the log details. Then clear the log to allow
	the new size to take effect.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
