---
layout: page
title: "Q118493: Long Filenames Cause Problems with Earlier Versions of MS-DOS"
permalink: kb/118/Q118493/
---

## Q118493: Long Filenames Cause Problems with Earlier Versions of MS-DOS

	Article: Q118493
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or more of the following symptoms occur while you are running MS-DOS 6.22 or
	earlier:
	
	- In a directory listing, the volume label is reported incorrectly.
	
	- When you try to remove a partition, Fdisk reports the following error:
	
	  Volume label does not match
	
	- The Label command reports the following error when changing the volume
	  label:
	
	  Cannot make directory entry
	
	- Symantec Norton Disk Doctor reports files with names such as AA, AB, and AT
	  are too long or too short. Nothing is corrected when Norton Disk Doctor tries
	  to fix the files.
	
	  NOTE: The SCANDISK command in Windows 95 reports no errors.
	
	CAUSE
	=====
	
	By design, Windows 95 stores long filename information in directory entries
	adjacent to the file being stored. These directory entries have the Read- Only,
	Hidden, System, and Volume Label attributes set. Earlier versions of MS-DOS
	recognize these entries as the volume label. As long as you continue to run
	Windows 95 and use long filenames, the volume label is unchangeable.
	
	RESOLUTION
	==========
	
	If you have removed Windows 95 from your system and want to correct the volume
	label, use one of the following procedures:
	
	Windows 95 Startup Disk Method
	------------------------------
	
	1. Obtain a Windows 95 Startup Disk that contains the LABEL.EXE command line
	  utility for Windows 95.
	
	2. Boot with the Startup Disk and type the following command:
	
	  " label <drive>: " (without the quotation marks)
	
	  where <drive> is the drive with the unusual volume label.
	
	3. When prompted, enter a new volume label.
	
	NOTE: If this procedure does not work, then the MS-DOS 6.x method below must be
	used.
	
	MS-DOS 6.x Method
	-----------------
	
	1. Back up your hard disk.
	
	2. Reformat the disk. For example, type the following at the MS-DOS command
	  prompt and then press ENTER
	
	  " format <drive>: /s /v:<label name> " (without the quotation
	  marks)
	
	  where <drive> is the drive with the unusual volume label and <label
	  name> is the new volume name you want to use.
	
	3. Restore your files.
	
	MORE INFORMATION
	================
	
	Most disk utilities need to be updated to function properly with long
	filenames.
	
	Norton Disk Doctor is manufactured by Symantec, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty ndd
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
