---
layout: page
title: "Q130418: Write Caching on Boot Floppy Drive Causes WINNT.EXE to Fail"
permalink: kb/130/Q130418/
---

## Q130418: Write Caching on Boot Floppy Drive Causes WINNT.EXE to Fail

	Article: Q130418
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
	
	If you run WINNT.EXE and SMARTDrive (SMARTDRV.EXE) is loaded to cache reads and
	writes to drive A, and you follow the Setup prompts, the first floppy disk is
	removed before MS-DOS has finished writing to the floppy disk. This results in
	various problems and the wrong files being written to the setup disks.
	
	CAUSE
	=====
	
	The cached data is not flushed to the floppy disk before you are prompted to
	change floppy disks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
