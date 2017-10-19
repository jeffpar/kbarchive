---
layout: page
title: "Q158358: Error Level 2 Returned on DELETE Command When No Files Found"
permalink: /kb/158/Q158358/
---

## Q158358: Error Level 2 Returned on DELETE Command When No Files Found

	Article: Q158358
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DELETE command returns an error level of 0 for a successful operation.
	However, beginning with Windows NT 4.0, DELETE returns an error level of 2 if it
	finds no files to delete.
	
	MORE INFORMATION
	================
	
	This change was made so that batch file designers can detect whether or not
	files are actually deleted. Batch files that expect 0 to be returned if no files
	are found to be deleted must be modified for the new return value.
	
	All versions of MS-DOS, Windows 95, and earlier versions of Windows NT return 0
	in this circumstance.
	
	Additional query words: prodnt errorlevel
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
