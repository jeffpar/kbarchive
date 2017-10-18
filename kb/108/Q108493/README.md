---
layout: page
title: "Q108493: ScanDisk and Files Marked with Directory Attributes"
permalink: kb/108/Q108493/
---

## Q108493: ScanDisk and Files Marked with Directory Attributes

	Article: Q108493
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a program or utility corrupts the MS-DOS file system in such a way that a
	file's entry in the file allocation table (FAT) takes on the attributes of a
	directory, Microsoft ScanDisk (which ships with MS-DOS 6.2) may attempt to
	salvage the entry, potentially resulting in loss of the original file and its
	contents.
	
	RESOLUTION
	==========
	
	Use CHKDSK instead of ScanDisk to recover files that have become marked as
	directories. If ScanDisk has already been run, you may still be able to salvage
	the file by using the information in the MORE INFORMATION section below.
	
	NOTE: This is an unusual and specific scenario in which CHKDSK is the recommended
	method of recovery. Microsoft ScanDisk is considered the preferred method of
	disk and file system maintenance in most circumstances.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ScanDisk program that ships
	with MS-DOS version 6.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If a file's entry in the FAT takes on the attributes of a directory, Microsoft
	ScanDisk tries to preserve that entry. Under most circumstances, MS-DOS CHKDSK
	offers the option to convert the invalid directory entry to a file, potentially
	allowing the recovery of that file and its contents.
	
	If you have already run ScanDisk, created an Undo disk, and made NO OTHER CHANGES
	to the file system and partition table, you can use the ScanDisk Undo feature to
	remove the changes. You can then run CHKDSK to recover the file. If you did not
	create an Undo disk, the file should be considered lost and the bad directory
	entry and its contents, if any, may be removed using the DELTREE command.
	
	For more information on the command-line syntax and use of ScanDisk and CHKDSK,
	type "help scandisk" (without the quotation marks) or "help chkdsk" (without the
	quotation marks) at the MS-DOS command prompt.
	
	Additional query words: 6.20 garbage dir corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
