---
layout: page
title: "Q81643: Exchanging a Disk Between DR-DOS 6.0 and MS-DOS"
permalink: kb/081/Q81643/
---

## Q81643: Exchanging a Disk Between DR-DOS 6.0 and MS-DOS

	Article: Q81643
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 1.x, 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the DR-DOS 6.0 DELWATCH delete-tracking utility on a floppy disk, you
	should also use the DELPURGE utility on that disk before using it on an MS-DOS
	systems.
	
	If you haven't used DELWATCH on a floppy disk, exchanging it between DR-DOS 6.0
	and MS-DOS is accomplished much as you would change a disk from MS-DOS 5.0 and
	later to another version of MS-DOS.
	
	MORE INFORMATION
	================
	
	The DR-DOS 6.0 DELWATCH utility changes how DR-DOS implements deletions.
	Normally under MS-DOS (and non-DELWATCH) DR-DOS, a file is deleted by marking
	the first character of a file with an "E5" character and marking the area of the
	disk where the file was stored as "unused" in the file allocation table (FAT).
	DELWATCH marks the file as "pending delete" by changing the first character of
	the file to an "05" character. These files are not actually deleted until the
	DELPURGE utility is used.
	
	"Pending delete" files can cause confusion to MS-DOS and its utilities (such as
	CHKDSK and UNDELETE) as well as third-party disk utility programs. You can
	determine if you have "pending delete" files using the DR-DOS 6.0 CHKDSK
	utility.
	
	If "pending delete" files exist, use DELPURGE to delete them from your floppy
	disk before using it on an MS-DOS systems.
	
	DR-DOS is manufactured by Novell, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide" for version 6.0, page 187.
	
	Additional query words: 6.22 1.x 2.x 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.0 4.00 4.01 4.01a 5.0 5.00 5.0a 5.00a 6.00 6.20 3rdparty dr dos
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS1xSearch kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:1.x,2.x,3.x,4.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
