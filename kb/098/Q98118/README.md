---
layout: page
title: "Q98118: Can't Back Up .BAK,.LOG,.LST,.PRO,.RST,.SAV,.SLT, &amp; .TMP Files"
permalink: /kb/098/Q98118/
---

## Q98118: Can't Back Up .BAK,.LOG,.LST,.PRO,.RST,.SAV,.SLT, &amp; .TMP Files

	Article: Q98118
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Backup does not back up, compare, or restore files ending with the
	following extensions if they reside in the same directory from which Backup was
	started:
	
	  .BAK   .RST
	  .LOG   .SAV
	  .LST   .SLT
	  .PRO   .TMP
	
	If you move the MSBACKUP.EXE file to another directory, Backup can work with
	files with these extensions; however, it still does not back up the MSBACKUP.TMP
	file.
	
	With Backup in a new directory, it does not compare or restore the following
	filenames:
	
	  DEFAULT.SET
	  DEFAULT.SLT
	  MSBACKUP.INI
	  MSBACKUP.RST
	  RESTORE.TMP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.22. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 msbackup MSAV msavirus.lst
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.0
	
	=============================================================================
	
