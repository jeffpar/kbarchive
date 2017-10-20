---
layout: page
title: "Q104868: Backup Err Msg: Invalid Volume Information Block Detected"
permalink: /kb/104/Q104868/
---

## Q104868: Backup Err Msg: Invalid Volume Information Block Detected

{% raw %}

	Article: Q104868
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when rebuilding a catalog using
	Microsoft Backup for Windows (MWBACKUP.EXE) if you are using the last disk of
	the backup set to rebuild the catalog.
	
	  Invalid Volume Information Block Detected. The component cannot be used.
	
	CAUSE
	=====
	
	This error message may occur if the backup set was created using the BACKUP
	command from a version of MS-DOS earlier than 6.0.
	
	WORKAROUND
	==========
	
	To correctly restore the backup set, you must use the RESTORE.EXE command from
	MS-DOS versions 6.0 and later. For information on using RESTORE, type "help
	restore" (without the quotation marks) at an MS-DOS command prompt.
	
	MORE INFORMATION
	================
	
	This error is not generated when using MS-DOS versions 6.0 and later Microsoft
	Backup for MS-DOS (MSBACKUP.EXE) to rebuild the catalog. Backup for MS-DOS
	correctly determines that the backup set was created using the previous MS-DOS
	BACKUP command and displays the appropriate error message. Also, if any disk
	other than the last disk is used to rebuild the catalog in Backup for Windows,
	then it too correctly determines that the backup set was created using a
	previous MS-DOS BACKUP command and displays the appropriate error message.
	
	Additional query words: 6.00, 6.20, 6.21, 6.22 BACKUP.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
