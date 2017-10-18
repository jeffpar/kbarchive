---
layout: page
title: "Q124123: File Open (16-Bit) Displays File List Very Slowly"
permalink: kb/124/Q124123/
---

## Q124123: File Open (16-Bit) Displays File List Very Slowly

	Article: Q124123
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the File Open dialog box from a 16-bit Windows-based application,
	the system becomes busy for an unreasonable length of time before it displays a
	list of files.
	
	CAUSE
	=====
	
	The 16-bit File Open common dialog box has a much longer access time if the
	directory being viewed has more than 1000 files. The increase in the amount of
	time before the file list appears is not proportional to the increase in the
	number of files.
	
	WORKAROUND
	==========
	
	Reorganize the directory into smaller groups and move the files into
	subdirectories.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
