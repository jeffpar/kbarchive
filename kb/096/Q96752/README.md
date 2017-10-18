---
layout: page
title: "Q96752: Installing DoubleSpace When Norton Erase Protect Is Loaded"
permalink: kb/096/Q96752/
---

## Q96752: Installing DoubleSpace When Norton Erase Protect Is Loaded

	Article: Q96752
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	DoubleSpace may be unable to use all the space available on your drive if you
	are using Symantec Norton Utilities Erase Protect (EP.EXE) or Norton Desktop for
	Windows (NDW) SmartErase. If so, DoubleSpace exits and displays the following
	message:
	
	  Dlspace is finished compressing this drive. Some files were not compressed
	  you will have to back up these files, resize the dblspace drive, then restore
	  the backup.
	
	WORKAROUND
	==========
	
	To work around this problem, empty your Erase Protect TRASHCAN directory and
	disable Erase Protect before you install DoubleSpace.
	
	MORE INFORMATION
	================
	
	If you have already installed DoubleSpace, do the following:
	
	1. Empty your TRASHCAN directory.
	
	2. Increase the size of your DoubleSpace drive. To do this, type the following
	  at the MS-DOS command prompt and then press ENTER
	
	  " dblspace /size /reserve=2 <drive> " (without the quotation marks)
	
	  where <drive> is the drive letter of your compressed drive.
	
	3. Move the remaining files from your uncompressed host drive to your compressed
	  drive.
	
	4. After you move all the files from your uncompressed host drive, increase the
	  size of your DoubleSpace drive by choosing Size from the Drive menu in Setup.
	
	How Erase Protect Works
	-----------------------
	
	If you have Erase Protect or NDW SmartErase loaded, when you delete files from
	your hard disk, they are moved into a hidden directory (TRASHCAN) instead of
	being deleted.
	
	When you type DIR or run Windows File Manager to determine the free disk space,
	Erase Protect and SmartErase intervene and cause MS-DOS to report the disk space
	available as if the TRASHCAN directory were empty.
	
	To determine the actual free disk space, run CHKDSK.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
