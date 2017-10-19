---
layout: page
title: "Q80496: When Not to Use MS-DOS 5.0 CHKDSK and UNDELETE Commands"
permalink: /kb/080/Q80496/
---

## Q80496: When Not to Use MS-DOS 5.0 CHKDSK and UNDELETE Commands

	Article: Q80496
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS CHKDSK and UNDELETE commands dated 04/09/91, which are
	included in the Microsoft MS-DOS 5 Upgrade, do not work correctly on logical
	drives that require 256 sectors to store each copy of the file allocation table
	(FAT). If any of the partitions on your hard disk drive are within the ranges
	listed in the following section and you do not have version 5.0a of the
	Microsoft MS-DOS 5 Upgrade, which includes CHKDSK.EXE and UNDELETE.EXE files
	dated 11/11/91, obtain the new CHKDSK and UNDELETE file.
	
	  127 MB - 129 MB
	  254 MB - 258 MB
	  508 MB - 516 MB
	  1018 MB - 1030 MB
	  2035 MB - 2061 MB
	
	If your FAT occupies 256 sectors, using the CHKDSK.EXE file dated 04/09/91 with
	the /f parameter ("chkdsk /f" [without the quotation marks]) can result in data
	loss. Using the UNDELETE.EXE file dated 04/09/91 can lead to unpredictable
	results.
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0. This problem
	was corrected in MS-DOS version 5.0a.
	
	MORE INFORMATION
	================
	
	Drives that require a 256-sector FAT occur when the disk is close to 128 MB, 256
	MB, 512 MB, or 1024 MB. The closeness to these limits increases as the drive
	size increases. For example, "close to 128 MB" is within 0.25 MB of 128 MB and
	"close to 256 MB" is within 0.74 MB of 256 MB.
	
	Determining If You Need to Install the Updated Files
	----------------------------------------------------
	
	Drives require a 256-sector FAT if they have partitions within the size ranges
	listed below. Because the potential problems are serious, these ranges include a
	margin of safety.
	
	  127 MB - 129 MB
	  254 MB - 258 MB
	  508 MB - 516 MB
	  1018 MB - 1030 MB
	  2035 MB - 2061 MB
	
	You can use the Fdisk program to determine if you have a 256-sector FAT with the
	following procedure:
	
	1. At the MS-DOS command prompt, type the following and press the ENTER key:
	
	  " fdisk " (without the quotation marks)
	
	2. Press 4 on the keyboard to select the Display Partition Information option
	  and press ENTER.
	
	3. The primary partition size is listed under the Mbytes heading. If the size
	  falls within any of the ranges specified above, obtain the updated CHKDSK.EXE
	  and UNDELETE.EXE files.
	
	4. If you have an extended partition, press the ENTER key to view those
	  partition sizes. If any of the extended partition sizes listed under the
	  Mbytes heading fall within the ranges specified above, obtain the CHKDSK.EXE
	  and UNDELETE.EXE files.
	
	5. Press the ESC key twice to exit to the MS-DOS command prompt.
	
	
	Reference(s):
	
	"MS-DOS Functions Quick Reference," Ray Duncan, Microsoft Press, Microsoft
	Corporation
	
	"QUE DOS Programmer's Reference," Terry Dettman, QUE Corporation
	
	"MS-DOS 5.0 Programmer's Reference," Microsoft Press, Microsoft Corporation, page
	315
	
	
	Additional query words: appnote 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
