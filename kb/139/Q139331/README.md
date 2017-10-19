---
layout: page
title: "Q139331: Errors when Using LPR.EXE Command to Print a Zero Byte File"
permalink: /kb/139/Q139331/
---

## Q139331: Errors when Using LPR.EXE Command to Print a Zero Byte File

	Article: Q139331
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the LPR command from a computer running Windows NT you may receive
	one of the following errors:
	
	Windows NT 4.0
	--------------
	
	  Error: print server did not accept request. Job aborted.
	
	Windows NT 3.51
	---------------
	
	  Error: data may have been lost. Could not abort job.
	
	CAUSE
	=====
	
	These errors occur if you try to send a file to the printer with the LPR command
	even though the file is empty (is zero bytes in size).
	
	RESOLUTION
	==========
	
	To avoid these errors, only use the LPR command on files that contain data.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
