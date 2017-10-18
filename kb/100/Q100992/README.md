---
layout: page
title: "Q100992: Incorrect Message Displayed When Retrieving Catalog Files"
permalink: kb/100/Q100992/
---

## Q100992: Incorrect Message Displayed When Retrieving Catalog Files

	Article: Q100992
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you retrieve a catalog file in Microsoft Backup for MS-DOS, you are
	prompted to insert the last disk of the backup set. If the catalog file is very
	large, it may reside on multiple disks and the following message may be
	displayed:
	
	  Disk #b is currently in drive x. The catalog <catalog filename> starts
	  on disk #a. Insert disk #a of the backup set to start catalog retrieval.
	
	NOTE: "a" is the starting catalog disk and "b" is the next catalog disk.
	
	Once you insert the starting catalog disk in the disk drive, Microsoft Backup
	indicates that it is retrieving the catalog. After reading the disk, it displays
	the following message:
	
	  Disk #a is now in drive x. Insert the next disk to continue the retrieve.
	
	After you insert the next disk, Microsoft Backup incorrectly indicates that it is
	retrieving the catalog from the previous disk, even though the next disk is
	actually in the disk drive. However, Microsoft Backup does successfully retrieve
	the complete catalog file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Backup for MS-DOS,
	which ships with MS-DOS 6.0, 6.2, and 6.22. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 6.00 6.20 msbackup restore diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
