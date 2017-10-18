---
layout: page
title: "Q142432: Problems Running Batch Files Through Scheduler Service"
permalink: kb/142/Q142432/
---

## Q142432: Problems Running Batch Files Through Scheduler Service

	Article: Q142432
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run batch files through the Windows NT scheduler service, the following
	symptoms occur:
	
	  - Missing system and user environment variables.
	
	  - CALL statements not returning properly.
	
	  - Testing of ERRORLEVELS not working as expected.
	
	  - Other batch file statements not working as expected.
	
	These problems do not occur if you manually run the batch files.
	
	RESOLUTION
	==========
	
	To correct this problem in Windows NT 3.5x, use the following syntax to run the
	batch files:
	
	  AT <time> /interactive "cmd.exe /c <path and batch file name>"
	
	To correct this problem in Windows NT 4.0, use the following syntax to run the
	batch files:
	
	  AT <time> /interactive cmd.exe /c "<path and batch file name>"
	
	Additional query words: prodnt schedule command
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
