---
layout: page
title: "Q101885: Backup Err Msg: Cannot Read Volume Information from Diskette"
permalink: /kb/101/Q101885/
---

## Q101885: Backup Err Msg: Cannot Read Volume Information from Diskette

{% raw %}

	Article: Q101885
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Backup for MS-DOS (MSBACKUP.EXE) fails to restore files to a different
	machine than the one you originally used for backup. Attempting to restore using
	MSBACKUP.EXE may result in one of the following error messages:
	
	- Cannot read volume information from diskette.
	
	-or-
	
	- Cannot determine diskette type.
	
	NOTE: These errors can also occur if you run Microsoft Backup from a third- party
	menu program. To work around this problem, exit Microsoft Backup and the menu
	program and then run Microsoft Backup from an MS-DOS command prompt.
	
	WORKAROUND
	==========
	
	To work around this problem, rebuild the catalog file before you proceed with
	the restore operation. The steps to rebuild a catalog file from floppy disks are
	as follows:
	
	1. Run MSBACKUP.EXE and choose the Restore button.
	
	2. From the Catalog menu, choose Rebuild.
	
	3. Select the correct drive letter from which to rebuild and then choose OK.
	
	4. After rebuilding, choose the Load button to load the new file, then continue
	  with Restore.
	
	Additional query words: 6.00 hang hangs errmsg 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
