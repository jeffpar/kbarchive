---
layout: page
title: "Q60713: Common RESTORE Problems, Including &quot;No Files Found to Restore&quot;"
permalink: /kb/060/Q60713/
---

## Q60713: Common RESTORE Problems, Including &quot;No Files Found to Restore&quot;

	Article: Q60713
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS RESTORE command expects a full target file specification, including
	the exact filename or wildcard. If the target file(s) to be RESTOREd are not
	fully specified, RESTORE reads all of the BACKUP disks and display the following
	message:
	
	  Warning! No files found to restore.
	
	For example, to RESTORE all files backed up from the C:\TEST directory, use the
	following command:
	
	  restore a: c:\test\*.*
	
	To RESTORE all files that are backed up, use the following command:
	
	  restore a: c:\*.* /s
	
	The RESTORE command places the files in the same directory that they were backed
	up from, creating directories as needed.
	
	MORE INFORMATION
	================
	
	Listed below are a few points you should keep in mind when using the BACKUP and
	RESTORE commands:
	
	- You must RESTORE to the same path that you specified (either implicitly or
	  explicitly) when you used BACKUP. You can RESTORE to a different drive.
	
	- The files created by the version of BACKUP that comes with MS-DOS versions
	  3.3 and later are different from those created by earlier versions of BACKUP.
	  You can determine which version of BACKUP was used by looking at the output
	  of a DIR command on your BACKUP disk. Versions of BACKUP earlier than version
	  3.3 produce files similar to the following:
	
	     BACKUPID.@@@
	     TEST1.BAR
	     TEST2.BAR
	     ...
	     TESTn.BAR
	
	  The version of BACKUP that comes with MS-DOS versions 3.3 and later produces
	  the following files only (where x signifies the disk number in the backup
	  sequence):
	
	     BACKUP.00x
	     CONTROL.00x
	
	- The version of RESTORE that comes with MS-DOS version 3.3 RESTOREs backup
	  files created with earlier versions of BACKUP, except for backup files
	  created with MS-DOS version 3.2. (Backup files created with IBM PC-DOS 3.2
	  are different from those created with MS-DOS 3.2, and can be restored with
	  MS-DOS versions 3.3 and later). Backup files created with MS-DOS 3.2 must:
	
	  Be RESTOREd with MS-DOS 3.2, MS-DOS 3.21, or MS-DOS 5.0.
	
	- The version of RESTORE included with MS-DOS 6.0 and 6.2 restores backup files
	  created with MS-DOS 2.0 through 5.x. To restore backup files created with
	  MS-DOS 6.0 and 6.2, use the MSBACKUP program.
	
	- RESTORE expects a full file specification in all cases. The command:
	
	     restore a: c:\test
	
	  causes RESTORE to search the backup disks for a file backed up from the root
	  directory called TEST, ignoring any files that were backed up from the \TEST
	  subdirectory. BACKUP, however, is different. The command
	
	     backup c:\test a:
	
	  causes BACKUP to attempt to back up the file C:\TEST; but if that file does
	  not exist, BACKUP attempts to back up C:\TEST\*.*.
	
	  Thus, the command
	
	     backup c:\test a:
	
	  backs up the contents of the directory C:\TEST to a floppy; but the command:
	
	     restore a: c:\test
	
	  does not restore that directory; instead, the following message is displayed:
	
	  Warning! No files found to restore
	
	  To RESTORE a directory called TEST, the file(s) to be restored must be
	  included as well, as in the following:
	
	     restore a: c:\test\*.*
	
	NOTE: For MS-DOS versions 3.1-3.21, when RESTOREing a subdirectory that was
	previously backed up, you do not need to specify a filename with the path IF the
	intended directory is already present on the target drive. If the subdirectory
	you intend to RESTORE does not exist, RESTORE always fails with the "No files
	found to restore" message. Again, you need to specify a full filename.
	
	Additional query words: appnote 3.10 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 6.00 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
