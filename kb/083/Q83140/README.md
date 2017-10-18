---
layout: page
title: "Q83140: How to Fix Cross-linked Files"
permalink: kb/083/Q83140/
---

## Q83140: How to Fix Cross-linked Files

	Article: Q83140
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When two (or more) files are cross-linked on the same cluster, do the
	following:
	
	NOTE: If you are running MS-DOS 6.2 or later, run ScanDisk, instead of using the
	following procedure.
	
	1. Verify the error is accurate.
	
	  Not all versions and dialects of MS-DOS access disks in the same manner. If
	  you booted from a floppy, the problem may be that the MS-DOS on the floppy
	  isn't understanding the disk layout properly.
	
	  If Windows and another multitasker is active, all disk updates may not be
	  complete. Exit from all other programs and from Windows before running
	  CHKDSK.
	
	2. Make copies of the cross-linked files on another drive or subdirectory.
	
	3. Delete all crosslinked files. This is what actually fixes the File Allocation
	  Table (FAT).
	
	  NOTE: If you are using Undelete and the Delete Sentry method of protection,
	  remove the memory-resident portion of Undelete by typing "UNDELETE /UNLOAD"
	  (without the quotation marks) at any MS-DOS command prompt before you delete
	  any cross-linked files.
	
	4. Run CHKDSK to verify all is now well.
	
	5. Manage the copies of the cross-linked files. If two files are cross-linked on
	  the same cluster, one of them is good and the other is damaged. This can
	  usually be determined in some way.
	
	  -or-
	
	  Reinstall or restore backups of the files that were cross-linked.
	
	MORE INFORMATION
	================
	
	What Are Cross-linked Files?
	----------------------------
	
	MS-DOS organizes the disk's data area into sections called clusters or allocation
	units. Each file has its own directory entry, which includes the file name,
	size, attribute information, date, time, and the cluster where the start of the
	file is stored.
	
	The file allocation table (FAT) includes an entry for each cluster. Each
	cluster's entry includes either a code specifying that it is the last cluster in
	the file, or the number of the next cluster used by the file. Clusters can also
	be marked unusable, which CHKDSK reports as bad sectors.
	
	Cross-linked files occur when two or more files are both marked as "owning" the
	same cluster. Usually, the last file updated is correct; the other is correct
	except for the cluster's worth that is part of the other file.
	
	For example, suppose you have two files, each 512 bytes in size. Each file
	requires one cluster. If both files are marked as being located in cluster 5,
	then cluster 5 probably contains the file with the later date. You can confirm
	this by looking at it (if it's a data file) or running it (if it's a program).
	
	How Are Cross-linked Files Fixed?
	---------------------------------
	
	The only way to fix the FAT in this case is to delete BOTH files. When you delete
	the file, each cluster assigned to that file is marked "free to be used." If
	only one file is deleted, the cluster on which the cross-link occurred is marked
	unused, but the file system still shows that cluster as belonging to the "good"
	file. This causes another error (for example, CHKDSK may report a file
	allocation error, size adjusted or file allocation error, or file truncated).
	You also lose access to the file from the part that was stored in the beginning
	of the cross-linked cluster to the end of the file.
	
	MS-DOS should be able to make a copy of both files (although one will probably be
	corrupt). If you don't want to delete both files, copy them to a floppy disk or
	another subdirectory before deleting them.
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.3a 3.30 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
