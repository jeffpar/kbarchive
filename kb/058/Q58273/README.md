---
layout: page
title: "Q58273: Not Enough Space to Save File in Write"
permalink: /kb/058/Q58273/
---

## Q58273: Not Enough Space to Save File in Write

	Article: Q58273
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Microsoft Windows Write and you open a file on drive A, edit
	the file, and then save the file, one of the following error messages is
	displayed if there is not enough free space on the disk to open the size of the
	file you are modifying.
	
	Windows 3.0, 3.0a
	-----------------
	
	  Insufficient disk space; delete one or more files to increase available disk
	  space, or save to a different disk.
	
	Windows 3.1, 3.11
	-----------------
	
	  Not enough disk space to complete this operation. Delete one or more files to
	  increase available disk space and the try again.
	
	MORE INFORMATION
	================
	
	To create its temporary file, Write requires at least an amount of free space on
	the disk equal to the size of the file, not counting the space occupied by the
	current version. This requirement is due to the way that Write (and all of the
	Microsoft word processing products) saves the file and makes a backup.
	
	When you save new changes to an existing file (for example, A:\FILE.WRI), Write
	creates a temporary file on the same drive, and creates a new document with your
	changes (for example, A:\XXX.TMP). If that operation is successful, Write checks
	your Make Backup setting and, if appropriate, renames the original file to be
	the backup (for example, A:\FILE.WRI is renamed to A:\FILE.BKP) or deletes it.
	Finally, Write can rename the new temporary file to be your real document (for
	example, A:\XXX.TMP is renamed to A:\FILE.WRI).
	
	This step takes advantage of the speed in renaming a file, rather than making a
	copy, so the TEMP environment variable is not used.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
