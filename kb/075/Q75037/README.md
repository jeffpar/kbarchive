---
layout: page
title: "Q75037: Using the RESTORE Command to View Backup Files"
permalink: /kb/075/Q75037/
---

## Q75037: Using the RESTORE Command to View Backup Files

{% raw %}

	Article: Q75037
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS version 5.0 RESTORE command allows you to view files that
	have been backed up with the MS-DOS version 5.0 BACKUP command.
	
	NOTE: If the command reports that no files are found, add the /s parameter to
	include subdirectories.
	
	MORE INFORMATION
	================
	
	When a directory listing command is issued on a backup floppy disk, the only
	information reported is as follows:
	
	   Volume in drive X is BACKUP XXX
	  Volume Serial Number is XXXX-XXXX
	  Directory of X:\ 
	
	  Backup 001     <filesize> <date> <time>
	  Control 001    <filesize> <date> <time>
	          2 file(s)  <total> bytes
	                     <total> bytes free
	
	To view the individual files on a backup floppy disk, use the following command
	and syntax:
	
	  " restore a: c: /d " (without the quotation marks)
	
	NOTE: This is the correct syntax for the command. On page 144 of the "Microsoft
	MS-DOS User's Guide and Reference" for version 5.0, the command syntax is
	incorrectly stated as: "restore c: a: /d."
	
	The RESTORE command displays only the files found on the backup disk's root
	directory. If no files are found in the root directory of the backup disk, the
	message "ERROR! No files were found to restore" is displayed.
	
	To view all the files on a backup disk, you should add the /s parameter to the
	restore command to view files (for example, RESTORE A: C: /D /S). This also
	lists all the files in the root and subdirectories on the backup disk.
	
	For more information, see page 144 of the version 5.0 "Microsoft MS-DOS User's
	Guide and Reference."
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
