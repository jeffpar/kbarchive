---
layout: page
title: "Q83820: Using CD-ROM Extensions with Windows Permanent Swap Files"
permalink: kb/083/Q83820/
---

## Q83820: Using CD-ROM Extensions with Windows Permanent Swap Files

	Article: Q83820
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft CD-ROM Extensions (MSCDEX.EXE) allows MS-DOS to communicate with a
	CD-ROM drive. If MSCDEX.EXE is loaded and a permanent swap file is created in
	the extended partition, Windows version 3.0 Setup may report it as temporary.
	Actually, the permanent swap file has indeed been created, and is in use by
	Windows.
	
	NOTE: The information in this article does NOT apply to Windows versions later
	than 3.0a.
	
	Definitions of Primary and Extended Partitions
	----------------------------------------------
	
	The following are definitions of primary and extended partitions:
	
	- The primary partition is the area on a hard drive that is set up, using the
	  MS-DOS FDISK utility or some other partitioning software, and assigned drive
	  letter C.
	
	- The extended partition is the area on a hard drive that is set up, using the
	  MS-DOS FDISK utility or some other partitioning software, as an additional
	  logical drive.
	
	  For example, with a 40 MB hard drive, you can create a primary partition of 20
	  MB, which can be assigned to drive C, and an extended partition of 20 MB,
	  which can be assigned a logical drive D. Drive D is the extended partition
	  and, if specified, will be 20 MB. Using the same example, if you want three
	  logical drives, then drive D can be allocated 10 MB, and drive E can be
	  allocated the remaining 10 MB of the extended partition. The extended
	  partition now has two logical drives within it: drives D and E.
	
	MORE INFORMATION
	================
	
	Determining if Swap File Is in Use
	----------------------------------
	
	The following steps can be performed to see if the permanent swap file is
	actually in use.
	
	Important: If a permanent swap file already resides in the extended partition, do
	not perform step 3. Make no changes other than what is described below.
	
	1. Add the setting Paging=no to the [386enh] section of the SYSTEM.INI file.
	
	2. Start Windows in 386 enhanced mode and determine the amount of free memory.
	
	  To determine this information, from the Help menu, choose About Program
	  Manager. This information is referred to as "free RAM."
	
	3. Restart Windows in real mode, and create a permanent swap file in the
	  extended partition.
	
	  Make sure you note the size of the swap file.
	
	4. Remove the setting Paging=no from the SYSTEM.INI file.
	
	5. Restart Windows in 386 enhanced mode and note the amount of free memory. This
	  should be very close to the amount of "free RAM" plus the size of the
	  permanent swap file.
	
	6. Create a new, permanent swap file of a different size, and restart Windows in
	  386 enhanced mode.
	
	  Note the amount of free memory. This should reflect the change in size that
	  was made to the permanent swap file.
	
	If the permanent swap file is created in the primary partition, the Windows Setup
	program will accurately report this information even if MSCDEX is loaded. If
	MSCDEX is NOT loaded, Setup will accurately report the status of the permanent
	swap file regardless of where it resides. This is not, however, a problem with
	MSCDEX or the swap file program. Rather, it is the way in which Setup handles
	the detection of the swap file.
	
	This information applies to MSCDEX.EXE versions 2.0 and later. Users running 386
	enhanced mode Windows should not be running MSCDEX.EXE versions earlier than
	2.0. You can obtain the latest update through your CD-ROM drive manufacturer.
	
	For more information about swap files, see Chapter 13, "Optimizing Windows,"
	starting on page 520 of the version 3.0 "Microsoft Windows User's Guide."
	
	Additional query words: 3.00 3.0 3.0a 3.00a extensions
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
