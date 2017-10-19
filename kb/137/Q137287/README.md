---
layout: page
title: "Q137287: Windows NT Backup Causes Access Violation When Started"
permalink: /kb/137/Q137287/
---

## Q137287: Windows NT Backup Causes Access Violation When Started

	Article: Q137287
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Windows NT Backup (NTBACKUP.EXE) a Dr Watson Access Violation
	error appears.
	
	CAUSE
	=====
	
	This error can be caused by corrupt log files in your %Systemroot%\system32
	subdirectory. Catalog files are used by Windows NT Backup to sort the cache
	information from the tape.
	
	RESOLUTION
	==========
	
	To correct this problem, locate a file with the .Uxx extension (where xx is the
	number of the backup tape used during a backup session) in the
	%SystemRoot%\SYSTEM32 directory. Rename or delete the file and re-catalog the
	tape.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
