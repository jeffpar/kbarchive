---
layout: page
title: "Q105927: MS-DOS 6.x Backup Err Msg: &quot;...Catalog File Is Corrupt&quot;"
permalink: kb/105/Q105927/
---

## Q105927: MS-DOS 6.x Backup Err Msg: &quot;...Catalog File Is Corrupt&quot;

	Article: Q105927
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select and back up 1,023 or 2,047 files (not including the catalog
	file), you receive the following error message from Microsoft Backup:
	
	  Critical Error
	  The catalog file is corrupt
	
	
	This problem does not occur in Microsoft Backup for Windows.
	
	WORKAROUND
	==========
	
	To avoid this problem, select more or fewer than 1,023 or 2,047 files (not
	including the catalog file)--the problem occurs only when you have exactly 1,023
	or 2047 files selected.
	
	NOTE: After you select the files to back up and choose OK, the status screen at
	the main backup menu states how many files were selected for backup. This number
	includes the catalog file. Therefore, in the situation described above, it would
	state that 1,024 or 2,048 files were selected for backup.
	
	If you select and back up 1,024 or 2,048 files (not including the catalog file),
	you receive the following error message when you try and restore them:
	
	  Critical Error
	  The catalog file is corrupt
	  Rebuild the catalog for this
	  backup set, then retry the restore
	
	
	To work around this problem, restore 1,023 or 2,047 files and then restore the
	additional file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Backup for MS-DOS
	versions 6.0 and 6.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.20 msbackup.exe 1023 2047 1024 2048
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
